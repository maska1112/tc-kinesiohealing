import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { NINJA as D } from "@/content/pages";
import { PRODUCTS } from "@/content/site";
import { Section, H2, Reveal, Kicker, CheckList } from "@/components/site/Primitives";
import { ProductCard } from "@/components/site/Products";

export default function NinjaPage() {
  const product = PRODUCTS.find((p) => p.id === "the-ninja");
  return (
    <div data-testid="ninja-page">
      <section className="bg-brand-deep pb-20 pt-12 text-white sm:pt-16 lg:pb-28 lg:pt-20">
        <div className="container-site grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <Kicker light>{D.kicker}</Kicker>
            <h1 className="mt-6 text-5xl leading-[1.02] sm:text-6xl lg:text-7xl" data-testid="page-title">{D.title}</h1>
            <p className="mt-8 font-serif text-2xl leading-snug text-white/95">{D.lede}</p>
            <p className="mt-6 text-[15px] leading-[1.8] text-white/80 sm:text-[17px]">{D.question}</p>
          </Reveal>
          <Reveal className="lg:col-span-7" delay={0.1}>
            <img src={D.image} alt="The Ninja Movement Experience" className="aspect-[3/2] w-full rounded-[1.75rem] object-cover" />
          </Reveal>
        </div>
      </section>

      <Section tone="paper" testId="ninja-about">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <H2>{D.notJust}</H2>
          </Reveal>
          <Reveal className="lg:col-span-7" delay={0.08}>
            <div className="prose-site max-w-2xl">{D.paragraphs.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}</div>
            <p className="mt-8 font-serif text-4xl italic text-brand-deep sm:text-5xl">{D.aha}</p>
          </Reveal>
        </div>
      </Section>

      <Section tone="white" testId="ninja-lists">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal className="rounded-[1.5rem] border border-ink/10 bg-paper p-7 sm:p-10">
            <h3 className="text-2xl text-ink">{D.forYouLabel}</h3>
            <CheckList items={D.forYou} className="mt-7" />
            <p className="mt-8 border-t border-ink/10 pt-6 font-serif text-xl text-ink">{D.notNinja}</p>
          </Reveal>
          <Reveal delay={0.08} className="rounded-[1.5rem] bg-mist p-7 sm:p-10">
            <h3 className="text-2xl text-ink">{D.minutesLabel}</h3>
            <ul className="mt-7 space-y-3">
              {D.minutes.map((m, i) => (
                <li key={m} className="flex gap-4 text-[15px] text-ink/85 sm:text-base"><span className="text-xs font-semibold tracking-[0.2em] text-brand-deep pt-1">0{i + 1}</span>{m}</li>
              ))}
            </ul>
            <div className="mt-8 border-t border-ink/10 pt-6 font-serif text-xl leading-snug text-ink">
              {D.mottos.map((m) => <p key={m}>{m}</p>)}
            </div>
          </Reveal>
        </div>
        <Reveal className="mt-6 rounded-[1.5rem] border border-ink/10 p-7 sm:p-10">
          <h3 className="text-2xl text-ink">{D.notForYouLabel}</h3>
          <ul className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-8">
            {D.notForYou.map((n) => (
              <li key={n} className="flex items-center gap-3 text-ink/85"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink/5"><X className="h-3.5 w-3.5" /></span>{n}</li>
            ))}
          </ul>
          <p className="mt-6 text-[15px] text-ink/75">
            (V temu primeru glej rubriko{" "}
            <Link to="/bolecina" className="font-semibold text-brand-deep underline underline-offset-4" data-testid="ninja-bolecina-link">Bolečina</Link> ali{" "}
            <Link to="/napredek" className="font-semibold text-brand-deep underline underline-offset-4" data-testid="ninja-napredek-link">Napredek</Link>)
          </p>
        </Reveal>
      </Section>

      <Section tone="paper" testId="ninja-product">
        <div className="mx-auto max-w-sm"><ProductCard p={product} i={0} /></div>
      </Section>
    </div>
  );
}
