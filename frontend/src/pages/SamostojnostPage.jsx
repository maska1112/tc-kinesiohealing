import { Link } from "react-router-dom";
import { SAMOSTOJNOST as D } from "@/content/pillars";
import { PageHero } from "@/components/site/PageHero";
import { SplitText, Audience, Conditions, Faq } from "@/components/site/Blocks";
import { Section, H2, Reveal, CheckList, Paragraphs, ButtonLink } from "@/components/site/Primitives";

const Options = () => (
  <Section tone="mist" testId="samostojnost-options">
    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
      <Reveal>
        <H2>{D.highlight.title}</H2>
        <Paragraphs items={D.highlight.paragraphs} className="mt-8 max-w-xl" />
      </Reveal>
      <Reveal delay={0.08}>
        <div className="rounded-[1.5rem] bg-white p-7 sm:p-10">
          <h3 className="text-2xl text-ink">{D.options.title}</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-ink/75">{D.options.intro}</p>
          <p className="mb-5 mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-brand-deep">{D.options.listLabel}</p>
          <CheckList items={D.options.items} />
        </div>
      </Reveal>
    </div>
  </Section>
);

const ContinueCta = () => (
  <section className="bg-paper py-20 sm:py-24" data-testid="samostojnost-continue">
    <div className="container-site grid gap-6 lg:grid-cols-2">
      <Reveal className="rounded-[2rem] bg-brand-deep p-9 text-white sm:p-14">
        <h2 className="text-4xl leading-tight sm:text-5xl">{D.continue.title}</h2>
        <p className="mt-6 max-w-md text-[15px] leading-[1.8] text-white/85 sm:text-[17px]">
          {D.continue.before}{" "}
          <Link to="/shop-2" className="font-semibold text-white underline decoration-brand underline-offset-4" data-testid="samostojnost-online-programs-link">{D.continue.link}</Link>{" "}
          {D.continue.after}
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink to="/shop-2" variant="light" testId="samostojnost-programs-button">Programi</ButtonLink>
          <ButtonLink to="/kontakt" variant="ghostLight" testId="samostojnost-contact-button">Kontakt</ButtonLink>
        </div>
      </Reveal>
      <Reveal delay={0.08} className="flex flex-col justify-center rounded-[2rem] border border-ink/10 bg-white p-9 sm:p-14">
        <h3 className="text-3xl leading-tight text-ink">{D.own.title}</h3>
        <p className="mt-5 max-w-md text-[15px] leading-[1.8] text-ink/75 sm:text-[17px]">{D.own.text}</p>
        <ButtonLink to="/kontakt" variant="outline" className="mt-8 self-start" testId="samostojnost-own-program-button">Kontaktiraj me</ButtonLink>
      </Reveal>
    </div>
  </section>
);

export default function SamostojnostPage() {
  return (
    <div data-testid="samostojnost-page">
      <PageHero kicker={D.kicker} title={D.title} intro={D.intro} image={D.image} testId="samostojnost-hero" />
      <SplitText title={D.service.title} paragraphs={D.service.paragraphs} testId="samostojnost-service" />
      <Options />
      <Audience data={D.audience} testId="samostojnost-audience" />
      <ContinueCta />
      <Conditions data={D.conditions} testId="samostojnost-conditions" />
      <Faq items={D.faq} testId="samostojnost-faq" />
    </div>
  );
}
