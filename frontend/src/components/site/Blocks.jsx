import { ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Kicker, H2, Paragraphs, CheckList, Reveal, ButtonLink, Section } from "@/components/site/Primitives";
import { FIRST_STEP, BOOKING_URL } from "@/content/site";
import { cn } from "@/lib/utils";

/* Title on the left, long text on the right – keeps line length comfortable */
export const SplitText = ({ title, paragraphs, kicker, tone = "white", testId, aside }) => (
  <Section tone={tone} testId={testId}>
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
      <Reveal className="lg:col-span-5">
        {kicker && <Kicker className="mb-5">{kicker}</Kicker>}
        <H2>{title}</H2>
        {aside}
      </Reveal>
      <Reveal className="lg:col-span-7" delay={0.08}>
        <Paragraphs items={paragraphs} className="max-w-2xl" />
      </Reveal>
    </div>
  </Section>
);

/* A calm, emphasised statement block with image */
export const Highlight = ({ title, paragraphs, image, imageClass, testId, reverse }) => (
  <Section tone="mist" testId={testId}>
    <div className={cn("grid items-center gap-12 lg:grid-cols-12 lg:gap-20", reverse && "lg:[&>*:first-child]:order-2")}>
      <Reveal className="lg:col-span-5">
        <img src={image} alt="" className={cn("w-full rounded-[1.5rem] object-cover aspect-[4/5]", imageClass)} />
      </Reveal>
      <Reveal className="lg:col-span-7" delay={0.08}>
        <span className="block h-px w-16 bg-brand" aria-hidden />
        <h2 className="mt-8 text-3xl leading-[1.15] text-ink sm:text-4xl lg:text-5xl">{title}</h2>
        <Paragraphs items={paragraphs} className="mt-8 max-w-xl" />
      </Reveal>
    </div>
  </Section>
);

export const Audience = ({ data, testId }) => (
  <Section tone="white" testId={testId}>
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
      <Reveal className="lg:col-span-5">
        <H2>{data.title}</H2>
        <p className="mt-6 max-w-md text-[15px] leading-[1.8] text-ink/75 sm:text-[17px]">{data.intro}</p>
      </Reveal>
      <Reveal className="lg:col-span-7" delay={0.08}>
        <div className="rounded-[1.5rem] border border-ink/10 bg-paper p-7 sm:p-10">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-brand-deep">{data.listLabel}</p>
          <CheckList items={data.items} />
        </div>
      </Reveal>
    </div>
  </Section>
);

export const ProcessSteps = ({ title, steps, testId }) => (
  <Section tone="paper" testId={testId}>
    <Reveal><H2 className="max-w-xl">{title}</H2></Reveal>
    <ol className="mt-14 grid gap-px overflow-hidden rounded-[1.5rem] border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((s, i) => (
        <Reveal as="li" key={s} delay={i * 0.06} className="bg-white p-7 sm:p-8">
          <span className="font-serif text-4xl text-brand">0{i + 1}</span>
          <p className="mt-6 text-[15px] leading-relaxed text-ink/80">{s}</p>
        </Reveal>
      ))}
    </ol>
  </Section>
);

export const PriceCard = ({ plan, testId, booking = BOOKING_URL }) => (
  <div className="flex h-full flex-col rounded-[1.5rem] border border-ink/10 bg-white p-7 sm:p-9 transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_hsl(var(--ink)/0.45)]" data-testid={testId}>
    <h3 className="text-2xl text-ink">{plan.name}</h3>
    <p className="mt-2 text-sm leading-relaxed text-ink/60">{plan.sub}</p>
    <div className="my-7 h-px bg-ink/10" />
    <CheckList items={plan.features} className="flex-1" />
    {plan.price && <p className="mt-9 font-serif text-5xl text-brand-deep" data-testid={`${testId}-price`}>{plan.price}</p>}
    <a href={booking} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:text-brand-deep" data-testid={`${testId}-booking-link`}>
      Rezerviraj termin <ArrowRight className="h-4 w-4" />
    </a>
  </div>
);

export const Conditions = ({ data, testId }) => (
  <Section tone="white" testId={testId}>
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
      <Reveal className="lg:col-span-5">
        <H2>{data.title}</H2>
        {data.intro && <p className="mt-6 max-w-md text-[15px] leading-[1.8] text-ink/75 sm:text-[17px]">{data.intro}</p>}
      </Reveal>
      <Reveal className="lg:col-span-7" delay={0.08}>
        <ul className="divide-y divide-ink/10 border-y border-ink/10">
          {data.items.map((it, i) => (
            <li key={it} className="flex gap-6 py-5">
              <span className="pt-0.5 text-xs font-semibold tracking-[0.2em] text-brand-deep">0{i + 1}</span>
              <span className="text-[15px] leading-relaxed text-ink/85 sm:text-base">{it}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  </Section>
);

export const Faq = ({ items, testId }) => (
  <Section tone="paper" testId={testId}>
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
      <Reveal className="lg:col-span-5"><H2>Pogosta vprašanja</H2></Reveal>
      <Reveal className="lg:col-span-7" delay={0.08}>
        <Accordion type="single" collapsible className="border-t border-ink/10">
          {items.map((f, i) => (
            <AccordionItem key={f.q} value={`q${i}`} className="border-ink/10" data-testid={`faq-item-${i}`}>
              <AccordionTrigger className="py-6 text-left font-serif text-lg text-ink hover:no-underline sm:text-xl" data-testid={`faq-trigger-${i}`}>{f.q}</AccordionTrigger>
              <AccordionContent className="pb-6 text-[15px] leading-relaxed text-ink/75 sm:text-base">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </div>
  </Section>
);

export const FirstStep = ({ testId = "first-step-section" }) => (
  <section className="bg-paper py-20 sm:py-24" data-testid={testId}>
    <div className="container-site">
      <div className="grid overflow-hidden rounded-[2rem] lg:grid-cols-12">
        <Reveal className="bg-brand-deep p-9 sm:p-14 lg:col-span-7 lg:p-16">
          <h2 className="text-4xl leading-[1.08] text-white sm:text-5xl">{FIRST_STEP.title}</h2>
          <p className="mt-6 max-w-lg text-[15px] leading-[1.8] text-white/85 sm:text-[17px]">{FIRST_STEP.text}</p>
          <ButtonLink href={BOOKING_URL} external variant="light" className="mt-10" testId={`${testId}-booking-button`}>{FIRST_STEP.button}</ButtonLink>
        </Reveal>
        <Reveal className="flex flex-col justify-center bg-white p-9 sm:p-14 lg:col-span-5" delay={0.08}>
          <h3 className="text-2xl leading-snug text-ink">{FIRST_STEP.unsureTitle}</h3>
          <p className="mt-5 text-[15px] leading-[1.8] text-ink/75">{FIRST_STEP.unsureText}</p>
          <ButtonLink to="/kontakt" variant="outline" className="mt-8 self-start" testId={`${testId}-contact-button`}>Kontakt</ButtonLink>
        </Reveal>
      </div>
    </div>
  </section>
);
