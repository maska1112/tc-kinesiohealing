import { TESTIMONIALS, TESTIMONIALS_TITLE } from "@/content/site";
import { Reveal, Kicker } from "@/components/site/Primitives";

export const Testimonials = () => (
  <section className="bg-white py-20 sm:py-24 lg:py-32" data-testid="testimonials-section">
    <div className="container-site">
      <Reveal className="max-w-2xl">
        <Kicker>Kinesiohealing</Kicker>
        <h2 className="mt-5 text-3xl leading-[1.12] text-ink sm:text-4xl lg:text-5xl">{TESTIMONIALS_TITLE}</h2>
      </Reveal>
      <div className="mt-14 columns-1 gap-6 md:columns-2 lg:columns-3 [&>*]:mb-6">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.text.slice(0, 20)} delay={(i % 3) * 0.06} className="break-inside-avoid">
            <figure className="rounded-[1.5rem] border border-ink/10 bg-paper p-7 sm:p-8" data-testid={`testimonial-card-${i}`}>
              <span className="block font-serif text-6xl leading-[0.6] text-brand" aria-hidden>“</span>
              <blockquote className="mt-4 text-[15px] leading-[1.8] text-ink/85">{t.text}</blockquote>
              <figcaption className="mt-7 flex items-center gap-3 border-t border-ink/10 pt-5">
                <img src={t.image} alt="" className="h-11 w-11 rounded-full object-cover" loading="lazy" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-deep">{t.tag}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
