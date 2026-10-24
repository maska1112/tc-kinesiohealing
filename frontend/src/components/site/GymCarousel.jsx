import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { GYM_SLIDES } from "@/content/site";
import { Reveal } from "@/components/site/Primitives";

export const GymCarousel = () => (
  <section className="overflow-hidden bg-paper py-20 sm:py-24 lg:py-28" data-testid="kinesio-gym-section">
    <div className="container-site">
      <Carousel opts={{ align: "start", loop: true }} className="w-full">
        <div className="flex items-end justify-between gap-6">
          <Reveal>
            <p className="kicker">Kinesio-Gym</p>
            <h2 className="mt-5 text-3xl leading-[1.12] text-ink sm:text-4xl lg:text-5xl">Kaj je Kinesio - Gym?</h2>
          </Reveal>
          <div className="flex gap-2">
            <CarouselPrevious className="static h-12 w-12 translate-y-0 border-ink/15 bg-white text-ink hover:bg-brand-deep hover:text-white" data-testid="gym-carousel-prev" />
            <CarouselNext className="static h-12 w-12 translate-y-0 border-ink/15 bg-white text-ink hover:bg-brand-deep hover:text-white" data-testid="gym-carousel-next" />
          </div>
        </div>
        <CarouselContent className="mt-12 -ml-4 lg:-ml-6">
          {GYM_SLIDES.map((s, i) => (
            <CarouselItem key={s.src} className="basis-[82%] pl-4 sm:basis-1/2 lg:basis-1/3 lg:pl-6" data-testid={`gym-slide-${i}`}>
              <img src={s.src} alt={s.alt} className="aspect-[4/5] w-full rounded-[1.5rem] object-cover" loading="lazy" />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  </section>
);
