import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function IndustriesFooterLink() {
  return (
    <div className="mt-8 flex justify-center relative z-10">
      <Link
        href="/industries"
        className="group inline-flex items-center gap-2 rounded-full border border-slate-700/50 bg-slate-800/30 px-6 py-2.5 text-sm font-semibold text-slate-300 hover:bg-slate-800 hover:text-foreground transition-all duration-300 hover:border-slate-600"
      >
        View All Industries
        <ArrowRight className="h-4 w-4 text-slate-500 group-hover:text-primary group-hover:translate-x-1 transition-all" />
      </Link>
    </div>
  );
}
