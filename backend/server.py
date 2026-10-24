from fastapi import FastAPI, APIRouter, HTTPException, Request
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from html import escape
from typing import Optional, Annotated, Any
from datetime import datetime, timezone, timedelta
from bson import ObjectId
from pydantic import BaseModel, Field, EmailStr, ConfigDict, BeforeValidator

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

from email_service import send_email, EMAIL_FROM_NAME  # noqa: E402

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]
OWNER_EMAIL = os.environ['OWNER_EMAIL']

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

app = FastAPI()
api_router = APIRouter(prefix="/api")

PyObjectId = Annotated[str, BeforeValidator(lambda v: str(v) if isinstance(v, ObjectId) else v)]


class BaseDocument(BaseModel):
    model_config = ConfigDict(populate_by_name=True)
    id: Optional[PyObjectId] = Field(default=None, alias="_id")

    def to_mongo(self) -> dict[str, Any]:
        data = self.model_dump(by_alias=True, exclude_none=True)
        data.pop("_id", None)
        return data

    @classmethod
    def from_mongo(cls, doc: dict):
        return cls(**doc)


class ContactIn(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    email: EmailStr
    phone: Optional[str] = Field(default=None, max_length=40)
    message: str = Field(min_length=1, max_length=5000)


class ContactMessage(BaseDocument):
    name: str
    email: str
    phone: Optional[str] = None
    message: str
    ip: Optional[str] = None
    created_at: str
    email_id: Optional[str] = None


def _contact_email_html(m: ContactIn) -> str:
    phone = escape(m.phone) if m.phone else "/"
    msg = escape(m.message).replace("\n", "<br>")
    return (
        '<table role="presentation" width="100%" cellpadding="0" cellspacing="0">'
        '<tr><td style="padding:24px;font-family:Arial,sans-serif;color:#1f2937">'
        '<h2 style="margin:0 0 16px;color:#0b7896;font-size:20px">Novo sporočilo s spletne strani</h2>'
        f'<p style="margin:0 0 6px"><strong>Ime:</strong> {escape(m.name)}</p>'
        f'<p style="margin:0 0 6px"><strong>E-pošta:</strong> <a href="mailto:{escape(m.email)}">{escape(m.email)}</a></p>'
        f'<p style="margin:0 0 16px"><strong>Telefon:</strong> {phone}</p>'
        f'<div style="padding:16px;background:#f3fafb;border-left:3px solid #08c2db;line-height:1.6">{msg}</div>'
        f'<p style="font-size:12px;color:#888;margin-top:24px">Poslano prek kontaktnega obrazca {escape(EMAIL_FROM_NAME)}.</p>'
        '</td></tr></table>'
    )


@api_router.get("/")
async def root():
    return {"message": "Kinesiohealing API"}


@api_router.post("/contact")
async def submit_contact(payload: ContactIn, request: Request):
    ip = request.headers.get("x-forwarded-for", request.client.host if request.client else "").split(",")[0].strip()
    since = (datetime.now(timezone.utc) - timedelta(minutes=10)).isoformat()
    recent = await db.contact_messages.count_documents({"ip": ip, "created_at": {"$gte": since}})
    if recent >= 5:
        raise HTTPException(status_code=429, detail="Too many messages, try again later")

    doc = ContactMessage(
        name=payload.name.strip(), email=payload.email, phone=(payload.phone or "").strip() or None,
        message=payload.message.strip(), ip=ip, created_at=datetime.now(timezone.utc).isoformat(),
    )
    result = await db.contact_messages.insert_one(doc.to_mongo())

    email_id = await send_email(
        to=OWNER_EMAIL,
        subject=f"Novo sporočilo: {payload.name.strip()[:60]}",
        html=_contact_email_html(payload),
    )
    await db.contact_messages.update_one({"_id": result.inserted_id}, {"$set": {"email_id": email_id}})
    return {"status": "sent"}


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
