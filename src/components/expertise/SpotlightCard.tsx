import { type ReactNode } from 'react';

type SpotlightCardProps = {
  children: ReactNode;
  colSpan?: 1 | 2 | 3;
};

const colSpanClass: Record<1 | 2 | 3, string> = {
  1: '',
  2: 'md:col-span-2',
  3: 'md:col-span-3',
};

export function SpotlightCard({ children, colSpan = 1 }: SpotlightCardProps) {
  return (
    <div
      className={`relative group rounded-3xl border border-white/10 bg-background overflow-hidden ${colSpanClass[colSpan]}`}
    >
      <div className="pointer-events-none absolute -inset-px rounded-3xl bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.14),transparent_55%)] opacity-0 transition duration-500 group-hover:opacity-100 z-0" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.14),transparent_60%)] opacity-0 transition duration-500 group-hover:opacity-100 z-0" />

      <div className="relative z-10 h-full p-5 sm:p-8 flex flex-col">{children}</div>
    </div>
  );
}
