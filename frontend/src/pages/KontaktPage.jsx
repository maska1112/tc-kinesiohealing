import { Mail, MapPin, Phone, Clock, Facebook, Instagram } from "lucide-react";
import { KONTAKT as D } from "@/content/pages";
import { CONTACT, BOOKING_URL_CONTACT } from "@/content/site";
import { ContactForm } from "@/components/site/ContactForm";
import { Kicker, Reveal, ButtonLink } from "@/components/site/Primitives";

const rows = [
  { icon: MapPin, label: D.labels.address, value: CONTACT.address },
  { icon: Mail, label: D.labels.email, value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: Phone, label: D.labels.phone, value: CONTACT.phone, href: CONTACT.phoneHref },
  { icon: Clock, label: D.labels.hours, value: CONTACT.hours },
];

const InfoList = () => (
  <ul className="divide-y divide-ink/10 rounded-[1.5rem] border border-ink/10 bg-white" data-testid="contact-info">
    {rows.map(({ icon: Icon, label, value, href }) => (
      <li key={label} className="flex items-center gap-4 p-5 sm:p-6">
        <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-mist text-brand-deep"><Icon className="h-[18px] w-[18px]" strokeWidth={1.75} /></span>
        <div className="min-w-0">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/50">{label}</p>
          {href ? (
            <a href={href} className="mt-1 block break-words text-[15px] font-medium text-ink hover:text-brand-deep" data-testid={`contact-${label.toLowerCase().replace(/\s/g, "-")}-link`}>{value}</a>
          ) : <p className="mt-1 text-[15px] font-medium text-ink">{value}</p>}
        </div>
      </li>
    ))}
  </ul>
);

export default function KontaktPage() {
  return (
    <div data-testid="kontakt-page">
      <section className="bg-paper pb-20 pt-12 sm:pt-16 lg:pb-28 lg:pt-20">
        <div className="container-site">
          <Reveal className="max-w-2xl">
            <Kicker>{D.kicker}</Kicker>
            <h1 className="mt-6 text-4xl leading-[1.05] text-ink sm:text-5xl lg:text-6xl" data-testid="page-title">{D.title}</h1>
            <p className="mt-6 text-[15px] leading-[1.8] text-ink/75 sm:text-[17px]">{D.text}</p>
          </Reveal>
          <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:gap-10">
            <Reveal className="rounded-[1.75rem] border border-ink/10 bg-white p-7 sm:p-10 lg:col-span-7">
              <h2 className="mb-8 text-3xl text-ink">{D.formTitle}</h2>
              <ContactForm />
            </Reveal>
            <div className="space-y-6 lg:col-span-5">
              <Reveal delay={0.06}><InfoList /></Reveal>
              <Reveal delay={0.1} className="rounded-[1.5rem] bg-brand-deep p-7 text-white sm:p-9" >
                <h2 className="text-2xl">{D.booking.title}</h2>
                <p className="mt-3 text-[15px] leading-relaxed text-white/85">{D.booking.text}</p>
                <ButtonLink href={BOOKING_URL_CONTACT} external variant="light" className="mt-7" testId="kontakt-booking-button">{D.booking.button}</ButtonLink>
              </Reveal>
              <div className="flex gap-3">
                <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink hover:border-brand-deep hover:text-brand-deep" data-testid="kontakt-facebook-link"><Facebook className="h-4 w-4" /></a>
                <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink hover:border-brand-deep hover:text-brand-deep" data-testid="kontakt-instagram-link"><Instagram className="h-4 w-4" /></a>
              </div>
            </div>
          </div>
          <Reveal className="mt-10 overflow-hidden rounded-[1.75rem] border border-ink/10">
            <iframe src={CONTACT.mapSrc} title="Ljubljana, Slovenija" loading="lazy" className="h-[320px] w-full grayscale-[30%] lg:h-[380px]" data-testid="kontakt-map" />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
