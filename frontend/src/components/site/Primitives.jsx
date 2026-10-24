import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export const Reveal = ({ children, delay = 0, className, as = "div" }) => {
  const reduce = useReducedMotion();
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      initial={reduce ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </Comp>
  );
};

export const Kicker = ({ children, className, light }) => (
  <p className={cn("kicker", light && "text-white/80 before:bg-white/60", className)}>{children}</p>
);

export const H2 = ({ children, className, light }) => (
  <h2 className={cn("text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.12]", light ? "text-white" : "text-ink", className)}>
    {children}
  </h2>
);

export const Paragraphs = ({ items, className, light }) => (
  <div className={cn("prose-site", light && "[&_p]:text-white/85", className)}>
    {items.map((p) => (
      <p key={p.slice(0, 40)}>{p}</p>
    ))}
  </div>
);

const btnBase =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[13px] font-semibold uppercase tracking-[0.14em] transition-[background-color,color,transform,box-shadow] duration-300 hover:-translate-y-0.5 min-h-[48px]";
const variants = {
  primary: "bg-brand-deep text-white hover:bg-ink shadow-[0_10px_30px_-12px_hsl(var(--brand-deep)/0.7)]",
  outline: "border border-ink/20 text-ink hover:border-brand-deep hover:text-brand-deep bg-white/60",
  light: "bg-white text-brand-deep hover:bg-mist",
  ghostLight: "border border-white/40 text-white hover:bg-white/10",
};

export const ButtonLink = ({ to, href, children, variant = "primary", className, external, testId, ...rest }) => {
  const cls = cn(btnBase, variants[variant], className);
  if (href) {
    return (
      <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className={cls} data-testid={testId} {...rest}>
        {children}
        {external && <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />}
      </a>
    );
  }
  return (
    <Link to={to} className={cls} data-testid={testId} {...rest}>
      {children}
    </Link>
  );
};

export const CheckList = ({ items, className, light }) => (
  <ul className={cn("space-y-3.5", className)}>
    {items.map((it) => (
      <li key={it} className="flex items-start gap-3.5">
        <span className={cn("mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full", light ? "bg-white/15 text-white" : "bg-brand/15 text-brand-deep")}>
          <Check className="h-3 w-3" strokeWidth={2.5} />
        </span>
        <span className={cn("text-[15px] sm:text-base leading-relaxed", light ? "text-white/90" : "text-ink/85")}>{it}</span>
      </li>
    ))}
  </ul>
);

export const Section = ({ children, className, id, testId, tone = "paper" }) => {
  const tones = { paper: "bg-paper", white: "bg-white", mist: "bg-mist", deep: "bg-brand-deep text-white" };
  return (
    <section id={id} data-testid={testId} className={cn("py-20 sm:py-24 lg:py-32", tones[tone], className)}>
      <div className="container-site">{children}</div>
    </section>
  );
};
