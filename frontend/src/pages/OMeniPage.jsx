import { OMENI as D } from "@/content/pages";
import { Section, H2, Reveal, Kicker, CheckList } from "@/components/site/Primitives";

const Story = () => (
  <section className="bg-paper pb-20 pt-10 sm:pt-14 lg:pb-32 lg:pt-20" data-testid="omeni-hero">
    <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-20">
      <Reveal className="lg:col-span-5">
        <div className="lg:sticky lg:top-28">
          <img src={D.image} alt="Tea Černič" className="aspect-[4/5] w-full rounded-[1.75rem] object-cover object-[50%_25%] lg:aspect-[2/3]" />
        </div>
      </Reveal>
      <Reveal className="lg:col-span-7" delay={0.08}>
        <Kicker>{D.kicker}</Kicker>
        <h1 className="mt-6 text-4xl leading-[1.08] text-ink sm:text-5xl lg:text-6xl" data-testid="page-title">{D.title}</h1>
        <p className="mt-10 text-[15px] leading-[1.8] text-ink/80 sm:text-[17px]">{D.opening}</p>
        <p className="mt-4 font-serif text-6xl italic text-brand-deep sm:text-7xl">{D.why}</p>
        <div className="prose-site mt-8 max-w-2xl">
          {D.story.map((p) => <p key={p.slice(0, 30)}>{p}</p>)}
        </div>
        <blockquote className="mt-12 border-l-2 border-brand pl-6 font-serif text-2xl leading-snug text-ink sm:text-3xl">{D.puzzle}</blockquote>
        <p className="mt-8 max-w-2xl text-[15px] leading-[1.8] text-ink/80 sm:text-[17px]">{D.puzzleAfter}</p>
      </Reveal>
    </div>
  </section>
);

const Name = () => (
  <Section tone="deep" testId="omeni-name">
    <Reveal className="max-w-2xl">
      <Kicker light>Kinesiohealing</Kicker>
      <H2 light className="mt-6">{D.name.title}</H2>
      <p className="mt-6 text-[15px] leading-[1.8] text-white/85 sm:text-[17px]">{D.name.intro}</p>
    </Reveal>
    <div className="mt-14 grid gap-px overflow-hidden rounded-[1.5rem] bg-white/15 md:grid-cols-2">
      {[["Kinesio", D.name.kinesio], ["Healing", D.name.healing]].map(([w, t], i) => (
        <Reveal key={w} delay={i * 0.08} className="bg-brand-deep p-8 sm:p-10">
          <p className="font-serif text-4xl italic text-white">{w}</p>
          <p className="mt-5 text-[15px] leading-[1.8] text-white/85">{t}</p>
        </Reveal>
      ))}
    </div>
    <Reveal className="mt-16 max-w-3xl">
      <p className="font-serif text-3xl leading-tight text-white sm:text-5xl">{D.name.statement[0]}<br /><em className="font-light">{D.name.statement[1]}</em></p>
      <p className="mt-8 max-w-xl text-[15px] leading-[1.8] text-white/85 sm:text-[17px]">{D.name.after}</p>
    </Reveal>
  </Section>
);

const ListBlock = ({ label, items, testId }) => (
  <div className="rounded-[1.25rem] border border-ink/10 bg-white p-7 sm:p-9" data-testid={testId}>
    <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-brand-deep">{label}</p>
    <CheckList items={items} />
  </div>
);

const Credentials = () => (
  <Section tone="paper" testId="omeni-credentials">
    <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
      <Reveal className="lg:col-span-5">
        <H2>{D.experience.title}</H2>
        <div className="mt-10"><CheckList items={D.experience.items} /></div>
        <img src={D.image2} alt="Tea Černič – Kinesiohealing" className="mt-12 hidden aspect-[4/5] w-full rounded-[1.5rem] object-cover lg:block" loading="lazy" />
      </Reveal>
      <div className="space-y-5 lg:col-span-7">
        <Reveal><H2>{D.education.title}</H2></Reveal>
        <Reveal delay={0.05}><ListBlock label={D.education.formalLabel} items={D.education.formal} testId="omeni-formal" /></Reveal>
        <Reveal delay={0.08}><ListBlock label={D.education.extraLabel} items={D.education.extra} testId="omeni-extra" /></Reveal>
        <Reveal delay={0.1}><ListBlock label={D.education.areasLabel} items={D.education.areas} testId="omeni-areas" /></Reveal>
        <img src={D.image2} alt="Tea Černič – Kinesiohealing" className="aspect-[4/5] w-full rounded-[1.5rem] object-cover lg:hidden" loading="lazy" />
      </div>
    </div>
  </Section>
);

export default function OMeniPage() {
  return (
    <div data-testid="omeni-page">
      <Story />
      <Name />
      <Credentials />
    </div>
  );
}
