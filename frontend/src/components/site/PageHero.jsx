import { Kicker, Reveal } from "@/components/site/Primitives";
import { cn } from "@/lib/utils";

export const PageHero = ({ kicker, title, intro, image, imageAlt, testId, imageClass }) => (
  <section className="bg-paper pt-10 pb-20 sm:pt-14 lg:pt-20 lg:pb-28" data-testid={testId}>
    <div className="container-site grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
      <Reveal className="lg:col-span-6">
        <Kicker>{kicker}</Kicker>
        <h1 className="mt-6 text-4xl leading-[1.08] text-ink sm:text-5xl lg:text-6xl" data-testid="page-title">{title}</h1>
        <div className="prose-site mt-8 max-w-xl">
          {intro.map((p) => <p key={p.slice(0, 30)}>{p}</p>)}
        </div>
      </Reveal>
      <Reveal className="lg:col-span-6" delay={0.1}>
        <div className="relative">
          <div className="absolute -bottom-4 -right-4 hidden h-full w-full rounded-[1.75rem] border border-brand/50 sm:block" aria-hidden />
          <img src={image} alt={imageAlt || kicker} className={cn("relative aspect-[4/3] w-full rounded-[1.75rem] object-cover", imageClass)} />
        </div>
      </Reveal>
    </div>
  </section>
);
