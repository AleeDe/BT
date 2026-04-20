import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { IndustryItem } from '@/components/industries/industriesData';

type IndustriesContentCardProps = {
  activeKey: string;
  current: IndustryItem;
  items: IndustryItem[];
  reduceMotion: boolean;
  onTab: (key: string) => void;
};

export function IndustriesContentCard({
  activeKey,
  current,
  items,
  reduceMotion,
  onTab,
}: IndustriesContentCardProps) {
  const ActiveIcon = current.icon;

  return (
    <motion.div
      key={activeKey}
      initial={reduceMotion ? false : { opacity: 0, y: 15 }}
      animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="mt-6 rounded-3xl bg-slate-800/40 border border-slate-700/50 shadow-2xl p-6 sm:p-8 relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none transition-opacity duration-700 opacity-50 group-hover:opacity-100"></div>

      <div className="flex items-start gap-4 relative z-10">
        <div className="h-14 w-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
          <ActiveIcon className="h-7 w-7 text-primary" />
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-foreground">{current.title}</h3>
          <p className="mt-2 text-base text-slate-400 leading-relaxed max-w-xl">{current.description}</p>
        </div>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
        <Link
          href="/industries"
          className="group relative inline-flex items-center justify-center gap-2 rounded-2xl bg-primary text-foreground px-7 py-3.5 font-bold overflow-hidden transition-all hover:-translate-y-0.5 shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] w-full sm:w-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <span className="relative z-10">Explore {current.title} Details</span>
          <ArrowRight className="h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform" />
        </Link>

        <div className="flex gap-2.5 bg-slate-950/60 border border-slate-800 px-4 py-3 rounded-full flex-shrink-0 shadow-inner">
          {items.map((item) => (
            <button
              key={item.key}
              onClick={() => onTab(item.key)}
              aria-label={`Go to ${item.title}`}
              className={[
                'h-2.5 w-2.5 rounded-full transition-all duration-300',
                item.key === activeKey
                  ? 'bg-primary scale-125 shadow-[0_0_8px_rgba(16,185,129,0.6)]'
                  : 'bg-slate-700 hover:bg-background0',
              ].join(' ')}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
