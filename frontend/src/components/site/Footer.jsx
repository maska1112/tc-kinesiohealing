import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { NAV, CONTACT, TAGLINE } from "@/content/site";

export const Footer = () => (
  <footer className="bg-ink text-white" data-testid="site-footer">
    <div className="container-site py-16 lg:py-20">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <img src="/assets/logo-icon.png" alt="Kinesiohealing" className="h-20 w-20 rounded-full bg-white p-1.5" />
          <p className="mt-6 max-w-sm font-serif text-2xl leading-snug text-white/95" data-testid="footer-tagline">{TAGLINE}</p>
          <div className="mt-8 flex gap-3">
            <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" data-testid="footer-facebook-link" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-brand hover:text-brand">
              <Facebook className="h-4 w-4" />
            </a>
            <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" data-testid="footer-instagram-link" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-brand hover:text-brand">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
        <nav className="lg:col-span-3" aria-label="Noga – meni">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3 lg:grid-cols-1">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="ink-link text-sm text-white/70 hover:text-white" data-testid={`footer-nav-${n.to.replace(/\W/g, "") || "home"}-link`}>{n.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <ul className="space-y-4 text-sm text-white/75 lg:col-span-4">
          <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 flex-none text-brand" />{CONTACT.address}</li>
          <li className="flex items-start gap-3"><Mail className="mt-0.5 h-4 w-4 flex-none text-brand" /><a href={`mailto:${CONTACT.email}`} className="ink-link hover:text-white" data-testid="footer-email-link">{CONTACT.email}</a></li>
          <li className="flex items-start gap-3"><Phone className="mt-0.5 h-4 w-4 flex-none text-brand" /><a href={CONTACT.phoneHref} className="ink-link hover:text-white" data-testid="footer-phone-link">{CONTACT.phone}</a></li>
        </ul>
      </div>
      <div className="mt-14 border-t border-white/10 pt-6 text-xs text-white/45">© {new Date().getFullYear()} TC Kinesiohealing</div>
    </div>
  </footer>
);
