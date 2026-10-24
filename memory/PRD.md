# Kinesiohealing – website redesign (PRD)

## Original problem statement
Redesign & modernize https://tc-kinesiohealing.com/ (visual + structural only). Keep logo, turquoise/teal brand colours, all original photos and ALL original text (no rewriting/translation). Calm, minimal, premium wellness look. Nav (SL): Domov, Bolečina, Napredek, Samostojnost, Programi, O meni, Kontakt. Homepage: hero, intro, 3 pillars, programs, Ninja Movement Experience, testimonials, Loyalty Club, final CTA. Fully responsive, existing functionality preserved. Do not touch the live site.

## User choices (discovery)
- Buy/booking buttons → existing live pages (WooCommerce product/cart on tc-kinesiohealing.com, Setmore booking)
- Contact form → real email to owner (Emergent managed Resend → tckinesiohealing@gmail.com, address taken from the live site)
- Homepage + separate subpage per menu item

## Architecture
- React (CRA + Tailwind + shadcn) multi-page via react-router; original slugs kept (/bolecina, /napredek, /samostojnost, /shop-2, /omeni, /kontakt, /the-ninja-movement-experience, /ranchgirl-semi-privat-trening-skupnost)
- Copy lives verbatim in src/content/{site,pillars,pages}.js
- Original assets downloaded to frontend/public/assets (webp copies made for large PNGs; originals kept)
- FastAPI: POST /api/contact → stores in Mongo `contact_messages` + sends email (email_service.py, guardrail gate). Rate limit 5 / 10 min per IP
- Env: EMERGENT_EMAIL_KEY, EMAIL_FROM_NAME=Kinesiohealing, OWNER_EMAIL

## Implemented (2026-10-24)
- Header (logo, nav, cart link to live cart, Setmore CTA, mobile sheet menu), footer
- Home: hero, pillars, Kinesio-Gym carousel (10 photos), RanchGirl, Ninja, programs (3 products), testimonials (5), Loyalty Club, Naredi prvi korak CTA
- Subpages: Bolečina, Napredek (incl. monthly price table + Loyalty Club), Samostojnost, Shop, O meni, Kontakt (form + info + Setmore + map), Ninja, RanchGirl (Tally embed)
- Verified: contact email send (202), form via UI, no horizontal overflow at 390px on all pages, no broken images

## Backlog / to verify
- P1: Owner to confirm testimonials attribution ("Web Designer" theme placeholder omitted) and top-bar text "555, You're at the right place" (omitted)
- P1: Product pages/cart/wishlist remain on live WooCommerce site (external links)
- P2: SEO meta per page, sitemap; deploy to the real domain when authorised
