import type { IndustryItem } from '@/components/industries/industriesData';

type IndustriesTabsProps = {
  items: IndustryItem[];
  active: string;
  onTab: (key: string) => void;
};

export function IndustriesTabs({ items, active, onTab }: IndustriesTabsProps) {
  return (
    <div className="flex items-center justify-start md:justify-center gap-2 sm:gap-3 overflow-x-auto pb-3 sm:pb-4 scrollbar-hide">
      {items.map((item) => {
        const TabIcon = item.icon;
        const isActive = item.key === active;

        return (
          <button
            key={item.key}
            onClick={() => onTab(item.key)}
            className={[
              'relative flex items-center gap-2 sm:gap-3 rounded-2xl px-3 sm:px-5 py-3 sm:py-3.5 min-h-[44px]',
              'transition-all duration-300 border whitespace-nowrap text-left',
              isActive
                ? 'bg-slate-800 border-primary/50 shadow-[0_0_15px_rgba(16,185,129,0.25)] text-foreground'
                : 'bg-slate-800/30 border-slate-700/50 text-slate-400 hover:bg-slate-800/60 hover:text-slate-200',
            ].join(' ')}
          >
            <span
              className={[
                'h-8 w-8 sm:h-10 sm:w-10 rounded-xl sm:rounded-2xl border grid place-items-center shrink-0 transition-colors',
                isActive ? 'bg-primary/20 border-primary/30' : 'bg-slate-900 border-slate-700',
              ].join(' ')}
            >
              <TabIcon className={['h-5 w-5', isActive ? 'text-primary' : 'text-slate-500'].join(' ')} />
            </span>

            <span className="text-[12px] sm:text-[14px] font-bold leading-tight">{item.tabLabel}</span>
          </button>
        );
      })}
    </div>
  );
}
