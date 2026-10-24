import { NAPREDEK as D } from "@/content/pillars";
import { PageHero } from "@/components/site/PageHero";
import { SplitText, Highlight, Audience, PriceCard, Conditions, FirstStep } from "@/components/site/Blocks";
import { Section, H2, Reveal, CheckList, Paragraphs } from "@/components/site/Primitives";
import { LoyaltyClub } from "@/components/site/LoyaltyClub";

const PriceTable = ({ t }) => (
  <div className="overflow-hidden rounded-[1.25rem] border border-ink/10" data-testid="napredek-price-table">
    <div className="grid grid-cols-[1.3fr_1fr_1fr] bg-ink px-4 py-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-white sm:px-6">
      <span>{t.title}</span>
      {t.cols.map((c) => <span key={c} className="text-right">{c}</span>)}
    </div>
    {t.rows.map((r) => (
      <div key={r.label} className="grid grid-cols-[1.3fr_1fr_1fr] items-center border-t border-ink/10 bg-white px-4 py-4 text-sm sm:px-6">
        <span className="pr-2 font-medium text-ink">{r.label}</span>
        {r.values.map((v) => <span key={v} className="text-right text-ink/80">{v}</span>)}
      </div>
    ))}
  </div>
);

const ChooseTraining = () => {
  const c = D.choose;
  return (
    <Section tone="white" testId="napredek-choose">
      <Reveal className="max-w-3xl">
        <H2>{c.title}</H2>
        <p className="mt-6 text-[15px] leading-[1.8] text-ink/75 sm:text-[17px]">{c.intro}</p>
      </Reveal>
      <div className="mt-12 grid gap-6 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-5"><PriceCard plan={c.individual} testId="napredek-individual" /></Reveal>
        <Reveal className="lg:col-span-7" delay={0.08}>
          <div className="h-full rounded-[1.5rem] border border-ink/10 bg-mist p-7 sm:p-9" data-testid="napredek-semi">
            <h3 className="text-2xl text-ink">{c.semi.name}</h3>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-ink/70">{c.semi.sub}</p>
            <CheckList items={c.semi.features} className="mt-7" />
            <div className="mt-8"><PriceTable t={c.table} /></div>
            <p className="mt-5 text-sm leading-relaxed text-ink/70">{c.table.note}</p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
};

export default function NapredekPage() {
  return (
    <div data-testid="napredek-page">
      <PageHero kicker={D.kicker} title={D.title} intro={D.intro} image={D.image} imageClass="object-[50%_30%]" testId="napredek-hero" />
      <SplitText title={D.service.title} paragraphs={D.service.paragraphs} testId="napredek-service" />
      <Highlight title={D.highlight.title} paragraphs={D.highlight.paragraphs} image={D.image2} imageClass="max-w-[300px] mx-auto aspect-[2/3]" testId="napredek-highlight" />
      <Audience data={D.audience} testId="napredek-audience" />
      <ChooseTraining />
      <Section tone="paper" testId="napredek-longterm">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal><H2>{D.longterm.title}</H2></Reveal>
          <Reveal delay={0.08}><Paragraphs items={D.longterm.paragraphs} className="mt-8" /></Reveal>
        </div>
      </Section>
      <LoyaltyClub testId="napredek-loyalty" />
      <FirstStep testId="napredek-first-step" />
      <Conditions data={D.conditions} testId="napredek-conditions" />
    </div>
  );
}
