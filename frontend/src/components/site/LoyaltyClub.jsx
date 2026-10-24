import { Check, Heart } from "lucide-react";
import { LOYALTY } from "@/content/site";
import { Reveal } from "@/components/site/Primitives";

const Group = ({ label, children, testId }) => (
  <div className="rounded-[1.25rem] border border-ink/10 bg-white p-6 sm:p-8" data-testid={testId}>
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-deep">{label}</p>
    <div className="mt-5">{children}</div>
  </div>
);

export const LoyaltyClub = ({ testId = "loyalty-club-section" }) => (
  <section className="bg-mist py-20 sm:py-24 lg:py-32" data-testid={testId}>
    <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
      <Reveal className="lg:col-span-4">
        <div className="lg:sticky lg:top-28">
          <img src={LOYALTY.image} alt="Kinesiohealing Loyalty Club" className="mx-auto aspect-[3/4] w-full max-w-sm rounded-[1.5rem] object-cover object-center lg:max-w-none" />
        </div>
      </Reveal>
      <div className="lg:col-span-8">
        <Reveal>
          <Heart className="h-6 w-6 fill-brand text-brand" aria-hidden />
          <h2 className="mt-5 text-3xl leading-[1.12] text-ink sm:text-4xl lg:text-5xl">{LOYALTY.title}</h2>
        </Reveal>
        <Reveal delay={0.05} className="mt-10">
          <Group label={LOYALTY.respectLabel} testId="loyalty-values">
            <ul className="flex flex-wrap gap-2.5">
              {LOYALTY.values.map((v) => (
                <li key={v} className="rounded-full border border-brand/40 bg-mist px-4 py-2 text-sm text-ink">{v}</li>
              ))}
            </ul>
          </Group>
        </Reveal>
        <div className="mt-5 grid gap-5 md:grid-cols-5">
          <Reveal delay={0.08} className="md:col-span-2">
            <Group label={LOYALTY.enterLabel} testId="loyalty-enter">
              <p className="font-serif text-xl leading-snug text-ink">{LOYALTY.enterText}</p>
            </Group>
          </Reveal>
          <Reveal delay={0.12} className="md:col-span-3">
            <Group label={LOYALTY.benefitsLabel} testId="loyalty-benefits">
              <ul className="space-y-6">
                {LOYALTY.benefits.map((b) => (
                  <li key={b.title} className="flex gap-4">
                    <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-deep text-white"><Check className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
                    <div>
                      <p className="font-semibold text-ink">{b.title}</p>
                      {b.lines.map((l) => <p key={l} className="mt-1.5 text-[15px] leading-relaxed text-ink/75">{l}</p>)}
                    </div>
                  </li>
                ))}
              </ul>
            </Group>
          </Reveal>
        </div>
        <Reveal delay={0.1} className="mt-12 border-l-2 border-brand pl-6 sm:pl-8">
          <p className="text-[15px] leading-[1.8] text-ink/75 sm:text-[17px]">{LOYALTY.future}</p>
          <p className="mt-6 font-serif text-2xl leading-snug text-ink sm:text-3xl">
            {LOYALTY.quote[0]}<br />{LOYALTY.quote[1]}
          </p>
          <p className="mt-6 text-sm font-semibold tracking-wide text-brand-deep">{LOYALTY.welcome}</p>
        </Reveal>
      </div>
    </div>
  </section>
);
