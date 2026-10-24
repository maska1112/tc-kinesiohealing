import { BOLECINA as D } from "@/content/pillars";
import { PageHero } from "@/components/site/PageHero";
import { SplitText, Highlight, Audience, ProcessSteps, PriceCard, Conditions, Faq, FirstStep } from "@/components/site/Blocks";
import { Section, H2, Reveal } from "@/components/site/Primitives";

export default function BolecinaPage() {
  return (
    <div data-testid="bolecina-page">
      <PageHero kicker={D.kicker} title={D.title} intro={D.intro} image={D.image} testId="bolecina-hero" />
      <SplitText title={D.service.title} paragraphs={D.service.paragraphs} testId="bolecina-service" />
      <Highlight title={D.highlight.title} paragraphs={D.highlight.paragraphs} image={D.image2} imageClass="aspect-[4/3] lg:aspect-[4/5]" testId="bolecina-highlight" />
      <Audience data={D.audience} testId="bolecina-audience" />
      <ProcessSteps title={D.process.title} steps={D.process.steps} testId="bolecina-process" />
      <Section tone="white" testId="bolecina-pricing">
        <Reveal><H2>{D.pricing.title}</H2></Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3 lg:gap-8">
          {D.pricing.plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.06}><PriceCard plan={p} testId={`bolecina-plan-${i}`} /></Reveal>
          ))}
        </div>
      </Section>
      <FirstStep testId="bolecina-first-step" />
      <Conditions data={D.conditions} testId="bolecina-conditions" />
      <Faq items={D.faq} testId="bolecina-faq" />
    </div>
  );
}
