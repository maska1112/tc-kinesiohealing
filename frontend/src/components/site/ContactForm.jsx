import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Loader2, Send, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;
const EMPTY = { name: "", email: "", phone: "", message: "" };
const field = "h-12 rounded-xl border-ink/15 bg-white px-4 text-[15px] focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-0";

export const ContactForm = () => {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState("idle");
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await axios.post(`${API}/contact`, { ...form, phone: form.phone || null });
      setStatus("sent");
      setForm(EMPTY);
      toast.success("Hvala! Sporočilo je bilo poslano.");
    } catch (err) {
      setStatus("idle");
      const code = err?.response?.status;
      toast.error(code === 422 ? "Preveri vnesene podatke (ime, e-pošta, sporočilo)." : "Sporočila ni bilo mogoče poslati. Poskusi znova ali piši na tckinesiohealing@gmail.com.");
    }
  };

  if (status === "sent") {
    return (
      <div className="flex flex-col items-start rounded-2xl bg-mist p-8" data-testid="contact-form-success">
        <CheckCircle2 className="h-8 w-8 text-brand-deep" />
        <p className="mt-4 font-serif text-2xl text-ink">Hvala! Sporočilo je bilo poslano.</p>
        <button onClick={() => setStatus("idle")} className="mt-6 text-sm font-semibold text-brand-deep underline underline-offset-4" data-testid="contact-form-new-message-button">Novo sporočilo</button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-5" data-testid="contact-form">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="cf-name" className="text-xs font-semibold uppercase tracking-[0.16em] text-ink/70">Ime in priimek *</Label>
          <Input id="cf-name" required maxLength={120} value={form.name} onChange={set("name")} className={field} data-testid="contact-form-name-input" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="cf-email" className="text-xs font-semibold uppercase tracking-[0.16em] text-ink/70">Email *</Label>
          <Input id="cf-email" type="email" required value={form.email} onChange={set("email")} className={field} data-testid="contact-form-email-input" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="cf-phone" className="text-xs font-semibold uppercase tracking-[0.16em] text-ink/70">Phone</Label>
        <Input id="cf-phone" type="tel" maxLength={40} value={form.phone} onChange={set("phone")} className={field} data-testid="contact-form-phone-input" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="cf-message" className="text-xs font-semibold uppercase tracking-[0.16em] text-ink/70">Sporočilo *</Label>
        <Textarea id="cf-message" required rows={6} maxLength={5000} value={form.message} onChange={set("message")} className="rounded-xl border-ink/15 bg-white px-4 py-3 text-[15px] focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-0" data-testid="contact-form-message-input" />
      </div>
      <button type="submit" disabled={status === "sending"} className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-brand-deep px-8 text-[13px] font-semibold uppercase tracking-[0.14em] text-white transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-ink disabled:opacity-60 sm:w-auto" data-testid="contact-form-submit-button">
        {status === "sending" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        Pošlji
      </button>
    </form>
  );
};
