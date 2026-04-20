import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { primaryNavLinks, serviceItems } from '@/components/navigation/navigationData';

function DesktopServicesDropdown() {
  return (
    <div className="relative group">
      <button className="text-sm font-medium text-body hover:text-foreground transition-colors duration-200 py-6 focus:outline-none flex items-center gap-1.5">
        Our Services
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="group-hover:rotate-180 transition-transform duration-200"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      <div className="absolute top-[80%] left-0 w-72 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
        <div className="mt-2 rounded-2xl bg-[#020617] border border-white/10 shadow-2xl overflow-hidden flex flex-col p-2">
          {serviceItems.map((item, idx) => {
            const commonClasses =
              'group/item flex items-center gap-3 rounded-xl px-3 py-3 transition min-w-0';

            if (item.comingSoon) {
              return (
                <div
                  key={item.label}
                  className={`${commonClasses} mt-1 border border-white/10 bg-white/[0.03]`}
                >
                  <div className="h-9 w-9 rounded-xl bg-white/5 border border-white/10 grid place-items-center">
                    <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_rgba(16,185,129,0.6)]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-semibold text-gray-100">{item.label}</span>
                      <span className="text-[10px] uppercase tracking-wider text-primary font-bold">Coming Soon</span>
                    </div>
                    <p className="text-xs text-body line-clamp-1">{item.description}</p>
                  </div>
                </div>
              );
            }

            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${commonClasses} hover:bg-white/5 ${idx === 0 ? 'mb-1' : ''}`}
              >
                <div className="h-9 w-9 rounded-xl bg-white/5 border border-white/10 grid place-items-center">
                  <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_rgba(16,185,129,0.6)]" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-semibold text-gray-100">{item.label}</span>
                    <ExternalLink size={12} className="text-body group-hover/item:text-primary transition-colors" />
                  </div>
                  <p className={`text-xs text-body mt-0.5 ${idx === 0 ? 'line-clamp-2' : 'line-clamp-1'}`}>
                    {item.description}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function DesktopNav() {
  return (
    <div className="hidden md:flex items-center space-x-8">
      <Link href={primaryNavLinks[0].href} className="text-sm font-medium text-body hover:text-foreground transition-colors duration-200">
        {primaryNavLinks[0].label}
      </Link>

      <DesktopServicesDropdown />

      <Link href={primaryNavLinks[1].href} className="text-sm font-medium text-body hover:text-foreground transition-colors duration-200">
        {primaryNavLinks[1].label}
      </Link>
    </div>
  );
}
