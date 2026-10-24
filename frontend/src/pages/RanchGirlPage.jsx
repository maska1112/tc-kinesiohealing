import { useEffect } from "react";
import { RANCH_PAGE as D } from "@/content/pages";
import { Kicker, Reveal } from "@/components/site/Primitives";

const useTally = () => {
  useEffect(() => {
    const load = () => window.Tally && window.Tally.loadEmbeds();
    if (window.Tally) return load();
    const s = document.createElement("script");
    s.src = "https://tally.so/widgets/embed.js";
    s.async = true;
    s.onload = load;
    document.body.appendChild(s);
  }, []);
};

export default function RanchGirlPage() {
  useTally();
  return (
    <div data-testid="ranchgirl-page">
      <section className="bg-paper pb-20 pt-12 sm:pt-16 lg:pb-28 lg:pt-20">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <img src={D.image} alt="RanchGirl" className="aspect-[2/3] w-full rounded-[1.75rem] object-cover" />
            </div>
          </Reveal>
          <Reveal className="lg:col-span-7" delay={0.08}>
            <Kicker>{D.kicker}</Kicker>
            <h1 className="mt-6 text-5xl leading-[1.02] text-ink sm:text-6xl" data-testid="page-title">{D.title}</h1>
            <p className="mt-6 font-serif text-2xl leading-snug text-ink">{D.sub}</p>
            <p className="mt-6 inline-block rounded-xl bg-mist px-5 py-4 text-sm font-medium leading-relaxed text-ink">{D.facts}</p>
            <div className="prose-site mt-8 max-w-2xl">{D.paragraphs.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}</div>
            <p className="mt-6 font-serif text-xl text-brand-deep">{D.signoff}</p>
            <div className="mt-10 rounded-[1.5rem] border border-ink/10 bg-white p-5 sm:p-8" data-testid="ranchgirl-tally-form">
              <iframe data-tally-src={D.tally} src={D.tally} loading="lazy" width="100%" height="900" title="RanchGirl semi-privat trening skupnost" className="w-full border-0" />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
