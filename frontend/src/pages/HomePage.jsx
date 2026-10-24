import { HomeHero, Pillars, RanchGirlFeature, NinjaFeature } from "@/components/site/HomeSections";
import { GymCarousel } from "@/components/site/GymCarousel";
import { ProductGrid } from "@/components/site/Products";
import { Testimonials } from "@/components/site/Testimonials";
import { LoyaltyClub } from "@/components/site/LoyaltyClub";
import { FirstStep } from "@/components/site/Blocks";
import { Reveal, ButtonLink } from "@/components/site/Primitives";

const ProgramsSection = () => (
  <section className="bg-paper py-20 sm:py-24 lg:py-32" data-testid="programs-section">
    <div className="container-site">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <Reveal>
          <h2 className=" text-3xl leading-[1.12] text-ink sm:text-4xl lg:text-5xl">Programi</h2>
        </Reveal>
        <ButtonLink to="/shop-2" variant="outline" testId="programs-all-button">Shop</ButtonLink>
      </div>
      <div className="mt-12"><ProductGrid /></div>
    </div>
  </section>
);

export default function HomePage() {
  return (
    <div data-testid="home-page">
      <HomeHero />
      <Pillars />
      <GymCarousel />
      <RanchGirlFeature />
      <NinjaFeature />
      <ProgramsSection />
      <Testimonials />
      <LoyaltyClub />
      <FirstStep testId="home-first-step" />
    </div>
  );
}
