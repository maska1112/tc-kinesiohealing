import { ArrowUpRight } from "lucide-react";
import { PRODUCTS } from "@/content/site";
import { Reveal } from "@/components/site/Primitives";

export const ProductCard = ({ p, i }) => (
  <Reveal delay={i * 0.06} className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-ink/10 bg-white transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_hsl(var(--ink)/0.45)]">
    <a href={p.url} target="_blank" rel="noopener noreferrer" className="block overflow-hidden bg-mist" data-testid={`product-${p.id}-image-link`}>
      <img src={p.image} alt={p.name} className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" loading="lazy" />
    </a>
    <div className="flex flex-1 flex-col p-6 sm:p-7" data-testid={`product-${p.id}-card`}>
      {p.category ? (
        <a href={p.categoryUrl} target="_blank" rel="noopener noreferrer" className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-deep hover:text-ink" data-testid={`product-${p.id}-category-link`}>{p.category}</a>
      ) : <span className="h-4" />}
      <a href={p.url} target="_blank" rel="noopener noreferrer" data-testid={`product-${p.id}-title-link`}>
        <h3 className="mt-3 text-2xl leading-snug text-ink transition-colors hover:text-brand-deep">{p.name}</h3>
      </a>
      {p.excerpt && <p className="mt-3 text-sm leading-relaxed text-ink/70">{p.excerpt}</p>}
      <div className="mt-auto flex items-end justify-between gap-4 pt-7">
        <span className="font-serif text-2xl text-ink" data-testid={`product-${p.id}-price`}>{p.price || ""}</span>
        <a href={p.action.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center gap-1.5 rounded-full bg-brand-deep px-5 text-[12px] font-semibold uppercase tracking-[0.12em] text-white transition-[background-color] duration-300 hover:bg-ink" data-testid={`product-${p.id}-action-button`}>
          {p.action.label} <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  </Reveal>
);

export const ProductGrid = () => (
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8" data-testid="product-grid">
    {PRODUCTS.map((p, i) => <ProductCard key={p.id} p={p} i={i} />)}
  </div>
);
