import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, ShoppingBag, X, ArrowUpRight } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from "@/components/ui/sheet";
import { NAV, BOOKING_URL, CART_URL, CONTACT } from "@/content/site";
import { cn } from "@/lib/utils";

const slug = (s) => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-");

const DesktopNav = () => (
  <nav className="hidden lg:flex items-center gap-1" aria-label="Glavni meni">
    {NAV.map((n) => (
      <NavLink
        key={n.to}
        to={n.to}
        end={n.to === "/"}
        data-testid={`nav-${slug(n.label)}-link`}
        className={({ isActive }) =>
          cn(
            "relative px-3 py-2 text-[13px] font-medium tracking-wide transition-colors duration-300",
            isActive ? "text-brand-deep" : "text-ink/70 hover:text-ink",
            "after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-px after:origin-left after:bg-brand after:transition-transform after:duration-300",
            isActive ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"
          )
        }
      >
        {n.label}
      </NavLink>
    ))}
  </nav>
);

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  return (
  <Sheet open={open} onOpenChange={setOpen}>
    <SheetTrigger asChild>
      <button className="lg:hidden flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 text-ink" aria-label="Odpri meni" data-testid="mobile-menu-open-button">
        <Menu className="h-5 w-5" strokeWidth={1.75} />
      </button>
    </SheetTrigger>
    <SheetContent side="right" className="w-full sm:max-w-sm bg-paper p-0 [&>button]:hidden" data-testid="mobile-menu">
      <SheetTitle className="sr-only">Meni</SheetTitle>
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between px-6 py-5 border-b border-ink/10">
          <img src="/assets/logo.png" alt="Kinesiohealing" className="h-9 w-auto" />
          <SheetClose asChild>
            <button className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/10" aria-label="Zapri meni" data-testid="mobile-menu-close-button">
              <X className="h-5 w-5" strokeWidth={1.75} />
            </button>
          </SheetClose>
        </div>
        <nav className="flex-1 overflow-y-auto px-6 py-6" aria-label="Mobilni meni">
          {NAV.map((n, i) => (
              <NavLink
                key={n.to}
                onClick={() => setOpen(false)}
                to={n.to}
                end={n.to === "/"}
                data-testid={`mobile-nav-${slug(n.label)}-link`}
                className={({ isActive }) => cn("flex items-baseline gap-4 border-b border-ink/5 py-4 font-serif text-[1.65rem] transition-colors", isActive ? "text-brand-deep" : "text-ink")}
              >
                <span className="font-sans text-[11px] tracking-[0.2em] text-ink/40">0{i + 1}</span>
                {n.label}
              </NavLink>
          ))}
        </nav>
        <div className="space-y-3 border-t border-ink/10 px-6 py-6">
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-brand-deep text-[13px] font-semibold uppercase tracking-[0.14em] text-white" data-testid="mobile-menu-booking-button">
            Rezerviraj termin <ArrowUpRight className="h-4 w-4" />
          </a>
          <a href={`mailto:${CONTACT.email}`} className="block text-center text-sm text-ink/60" data-testid="mobile-menu-email-link">{CONTACT.email}</a>
        </div>
      </div>
    </SheetContent>
  </Sheet>
  );
};

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return (
    <header
      data-testid="site-header"
      className={cn("sticky top-0 z-50 bg-white transition-[box-shadow,border-color] duration-300 border-b", scrolled ? "border-ink/10 shadow-[0_8px_30px_-20px_hsl(var(--ink)/0.35)]" : "border-transparent")}
    >
      <div className="container-site flex h-[72px] lg:h-[84px] items-center justify-between gap-6">
        <Link to="/" className="flex-none" data-testid="header-logo-link" aria-label="Kinesiohealing – domov">
          <img src="/assets/logo.png" alt="Kinesiohealing" className="h-10 lg:h-12 w-auto" />
        </Link>
        <DesktopNav />
        <div className="flex items-center gap-2">
          <a href={CART_URL} target="_blank" rel="noopener noreferrer" aria-label="Košarica" data-testid="header-cart-link" className="flex h-11 w-11 items-center justify-center rounded-full text-ink/70 transition-colors hover:bg-mist hover:text-brand-deep">
            <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={1.75} />
          </a>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" data-testid="header-booking-button" className="hidden sm:inline-flex min-h-[44px] items-center gap-2 rounded-full bg-brand-deep px-5 text-[12px] font-semibold uppercase tracking-[0.14em] text-white transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-ink">
            Rezerviraj termin
          </a>
          <MobileNav />
        </div>
      </div>
    </header>
  );
};
