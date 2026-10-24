import { ProductGrid } from "@/components/site/Products";
import { Kicker, Reveal } from "@/components/site/Primitives";
import { LIVE, CART_URL } from "@/content/site";

export default function ProgramiPage() {
  return (
    <div data-testid="programi-page">
      <section className="bg-paper pb-24 pt-12 sm:pt-16 lg:pb-32 lg:pt-20">
        <div className="container-site">
          <Reveal className="flex flex-col justify-between gap-6 border-b border-ink/10 pb-10 sm:flex-row sm:items-end">
            <div>
              <Kicker>Programi</Kicker>
              <h1 className="mt-6 text-4xl leading-[1.05] text-ink sm:text-5xl lg:text-6xl" data-testid="page-title">Shop</h1>
            </div>
            <div className="flex gap-5 text-sm">
              <a href={`${LIVE}/shop-2/`} target="_blank" rel="noopener noreferrer" className="ink-link text-ink/70 hover:text-brand-deep" data-testid="programi-live-shop-link">Shop ↗</a>
              <a href={CART_URL} target="_blank" rel="noopener noreferrer" className="ink-link text-ink/70 hover:text-brand-deep" data-testid="programi-cart-link">Cart ↗</a>
            </div>
          </Reveal>
          <div className="mt-12"><ProductGrid /></div>
        </div>
      </section>
    </div>
  );
}
