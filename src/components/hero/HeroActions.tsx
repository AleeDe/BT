import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

type HeroActionsProps = {
  primaryLabel: string;
  secondaryLabel: string;
  secondaryHref: string;
};

// Hero CTA group with contact primary button and services secondary button.
export function HeroActions({ primaryLabel, secondaryLabel, secondaryHref }: HeroActionsProps) {
  const isExternalSecondary = secondaryHref.startsWith("http");
  const secondaryClassName =
    "group inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700/50 bg-slate-800/30 px-8 py-4 sm:min-h-[56px] text-base font-semibold text-slate-300 hover:bg-slate-800 hover:text-foreground transition-all duration-300 hover:border-slate-600 hover:-translate-y-1 w-full sm:w-auto";

  return (
    <div className="flex flex-col sm:flex-row gap-4 pt-4">
      {/* Primary action: internal contact route. */}
      <Link
        href="/contact"
        className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 sm:min-h-[56px] text-base font-semibold text-foreground shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all hover:-translate-y-1 focus:outline-none w-full sm:w-auto overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <span className="relative z-10 flex items-center justify-center gap-2">
          {primaryLabel} <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
        </span>
      </Link>

      {isExternalSecondary ? (
        <a
          href={secondaryHref}
          target="_blank"
          rel="noopener noreferrer"
          className={secondaryClassName}
        >
          <Zap className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" /> {secondaryLabel}
        </a>
      ) : (
        <Link href={secondaryHref} className={secondaryClassName}>
          <Zap className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" /> {secondaryLabel}
        </Link>
      )}
    </div>
  );
}
