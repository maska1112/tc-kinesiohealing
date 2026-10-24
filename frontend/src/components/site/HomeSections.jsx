import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight } from "lucide-react";
import { HERO, PILLARS, SITE_DESCRIPTION, TAGLINE, BOOKING_URL, RANCHGIRL, NINJA_HOME } from "@/content/site";
import { Reveal, Kicker, ButtonLink, H2, Paragraphs } from "@/components/site/Primitives";

export const HomeHero = () => (
  <section className="relative bg-paper pt-8 pb-20 sm:pt-12 lg:pt-16 lg:pb-28" data-testid="home-hero">
    <div className="container-site grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
      <Reveal className="order-2 lg:order-1 lg:col-span-6">
        <Kicker>{SITE_DESCRIPTION}</Kicker>
        <h1 className="mt-7 text-[2.6rem] leading-[1.04] text-ink sm:text-6xl lg:text-[4.4rem]" data-testid="home-hero-title">
          Vsaka bolečina <em className="font-light italic text-brand-deep">pripoveduje</em> zgodbo.
        </h1>
        <p className="mt-8 max-w-lg text-[15px] leading-[1.85] text-ink/75 sm:text-[17px]" data-testid="home-hero-text">{HERO.text}</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <ButtonLink href={BOOKING_URL} external testId="hero-booking-button">Rezerviraj termin</ButtonLink>
          <a href="#zgodba" className="group inline-flex min-h-[48px] items-center justify-center gap-3 px-2 text-sm font-medium text-ink/80 transition-colors hover:text-brand-deep" data-testid="hero-story-link">
            <span>Kje se začne <strong className="font-semibold">tvoja</strong> zgodba?</span>
            <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
          </a>
        </div>
      </Reveal>
      <Reveal className="order-1 lg:order-2 lg:col-span-6" delay={0.1}>
        <div className="relative mx-auto max-w-[560px]">
          <div className="absolute -left-4 -top-4 hidden h-full w-full rounded-[2rem] border border-brand/50 sm:block" aria-hidden />
          <img src={HERO.image} alt="Tea Černič – Kinesiohealing" className="relative aspect-square w-full rounded-[2rem] object-cover shadow-[0_40px_80px_-40px_hsl(var(--ink)/0.5)]" fetchPriority="high" />
          <div className="absolute -bottom-6 left-6 right-6 hidden items-center gap-4 rounded-2xl bg-white/95 p-4 shadow-[0_20px_40px_-24px_hsl(var(--ink)/0.45)] backdrop-blur-md sm:flex lg:-left-10 lg:right-auto lg:max-w-xs">
            <img src="/assets/logo-icon.png" alt="" className="h-11 w-11 flex-none" />
            <p className="text-[13px] leading-snug text-ink/80">{TAGLINE}</p>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export const Pillars = () => (
  <section id="zgodba" className="scroll-mt-24 bg-white py-20 sm:py-24 lg:py-32" data-testid="pillars-section">
    <div className="container-site">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">Kje se začne <strong className="font-medium text-brand-deep">tvoja</strong> zgodba?</h2>
      </Reveal>
      <div className="mt-14 grid gap-6 md:grid-cols-3 lg:gap-8">
        {PILLARS.map((p, i) => (
          <Reveal key={p.key} delay={i * 0.08}>
            <Link to={p.to} className="group block" data-testid={`pillar-${p.key}-card`}>
              <div className="overflow-hidden rounded-[1.5rem]">
                <img src={p.image} alt={p.title} className="aspect-[5/4] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04] md:aspect-square" loading="lazy" />
              </div>
              <div className="flex items-start justify-between gap-4 px-1 pt-6">
                <div>
                  <span className="text-xs font-semibold tracking-[0.2em] text-brand-deep">0{i + 1}</span>
                  <p className="mt-2 font-serif text-xl leading-snug text-ink sm:text-2xl">{p.line}</p>
                </div>
              </div>
              <span className="mt-4 inline-flex items-center gap-2 px-1 text-[13px] font-semibold uppercase tracking-[0.14em] text-ink transition-colors group-hover:text-brand-deep">
                Izvedi več <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export const RanchGirlFeature = () => (
  <section className="bg-white py-20 sm:py-24 lg:py-32" data-testid="ranchgirl-section">
    <div className="container-site grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
      <Reveal className="lg:col-span-7">
        <Kicker>{RANCHGIRL.kicker}</Kicker>
        <H2 className="mt-6">{RANCHGIRL.title}</H2>
        <Paragraphs items={RANCHGIRL.intro} className="mt-8 max-w-xl" />
        <div className="mt-10 rounded-[1.5rem] border border-ink/10 bg-paper p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-deep">{RANCHGIRL.ideaLabel}</p>
          <ul className="mt-5 grid grid-cols-2 gap-3">
            {RANCHGIRL.facts.map((f) => (
              <li key={f} className="flex items-center gap-3 rounded-xl bg-white px-4 py-3.5 text-sm font-medium leading-snug text-ink"><span className="h-1.5 w-1.5 flex-none rounded-full bg-brand" />{f}</li>
            ))}
          </ul>
          <p className="mt-4 flex gap-3 px-1 text-[15px] leading-relaxed text-ink/75"><span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-brand" />{RANCHGIRL.factLong}</p>
        </div>
        <Paragraphs items={RANCHGIRL.outro} className="mt-8 max-w-xl" />
        <div className="mt-8 border-l-2 border-brand pl-5">
          <p className="text-sm font-semibold text-ink">{RANCHGIRL.askLabel}</p>
          <p className="mt-2 text-[15px] text-ink/80 sm:text-base">
            {RANCHGIRL.ask}{" "}
            <Link to={RANCHGIRL.to} className="font-semibold text-brand-deep underline decoration-brand underline-offset-4 hover:text-ink" data-testid="ranchgirl-click-here-link">{RANCHGIRL.askLink}</Link>
          </p>
        </div>
      </Reveal>
      <Reveal className="lg:col-span-5" delay={0.1}>
        <Link to={RANCHGIRL.to} className="block overflow-hidden rounded-[1.5rem]" data-testid="ranchgirl-poster-link">
          <img src={RANCHGIRL.image} alt="RanchGirl semi-private trening skupnost" className="aspect-[2/3] w-full object-cover transition-transform duration-700 hover:scale-[1.03]" loading="lazy" />
        </Link>
      </Reveal>
    </div>
  </section>
);

export const NinjaFeature = () => (
  <section className="bg-brand-deep py-20 text-white sm:py-24 lg:py-32" data-testid="ninja-section">
    <div className="container-site grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
      <Reveal className="lg:col-span-7">
        <Link to={NINJA_HOME.to} className="block overflow-hidden rounded-[1.5rem]" data-testid="ninja-image-link">
          <img src={NINJA_HOME.image} alt="The Ninja Movement Experience" className="aspect-[3/2] w-full object-cover transition-transform duration-700 hover:scale-[1.03]" loading="lazy" />
        </Link>
      </Reveal>
      <Reveal className="lg:col-span-5" delay={0.1}>
        <Kicker light>Ninja Class</Kicker>
        <H2 light className="mt-6">{NINJA_HOME.title}</H2>
        <Paragraphs items={NINJA_HOME.paragraphs} light className="mt-8" />
        <p className="mt-10 text-sm text-white/80">{NINJA_HOME.more}</p>
        <ButtonLink to={NINJA_HOME.to} variant="light" className="mt-4" testId="ninja-click-here-button">{NINJA_HOME.moreLink}</ButtonLink>
      </Reveal>
    </div>
  </section>
);
