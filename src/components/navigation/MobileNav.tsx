import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, Menu, X } from 'lucide-react';
import { primaryNavLinks, serviceItems } from '@/components/navigation/navigationData';

type MobileMenuButtonProps = {
  isOpen: boolean;
  onToggle: () => void;
};

export function MobileMenuButton({ isOpen, onToggle }: MobileMenuButtonProps) {
  return (
    <div className="md:hidden flex items-center">
      <button
        onClick={onToggle}
        className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 min-h-[44px] min-w-[44px] px-3 py-2 text-sm font-semibold text-foreground hover:bg-white/10 transition focus:outline-none"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
    </div>
  );
}

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.18 }}
          className="md:hidden absolute w-[calc(100%-2rem)] left-4 top-[calc(100%+0.5rem)] rounded-2xl bg-background border border-white/10 shadow-2xl overflow-hidden"
        >
          <div className="p-3 flex flex-col gap-1">
            <Link
              href={primaryNavLinks[0].href}
              onClick={onClose}
              className="px-3 py-3 min-h-[44px] flex items-center rounded-xl hover:bg-white/5 text-gray-200 font-semibold transition-colors"
            >
              {primaryNavLinks[0].label}
            </Link>

            <div className="px-3 py-2">
              <p className="text-body text-xs uppercase tracking-wider mb-2 font-semibold">Services</p>
              <div className="pl-3 space-y-1 border-l-2 border-white/10">
                {serviceItems.map((item) => {
                  if (item.comingSoon) {
                    return (
                      <div
                        key={item.label}
                        className="flex items-center justify-between gap-2 text-body py-3 min-h-[44px] rounded-lg bg-white/[0.03] border border-white/10 px-2"
                      >
                        <span>{item.label}</span>
                        <span className="text-[10px] uppercase tracking-wider text-primary font-bold">Coming Soon</span>
                      </div>
                    );
                  }

                  if (!item.external && item.href) {
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={onClose}
                        className="flex items-center gap-2 text-body py-3 min-h-[44px] hover:text-primary transition-colors rounded-lg hover:bg-white/5 px-2"
                      >
                        {item.label}
                      </Link>
                    );
                  }

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-body py-3 min-h-[44px] hover:text-primary transition-colors rounded-lg hover:bg-white/5 px-2"
                    >
                      {item.label}
                      <ExternalLink size={14} />
                    </a>
                  );
                })}
              </div>
            </div>

            <Link
              href={primaryNavLinks[1].href}
              onClick={onClose}
              className="px-3 py-3 min-h-[44px] flex items-center rounded-xl hover:bg-white/5 text-gray-200 font-semibold transition-colors"
            >
              {primaryNavLinks[1].label}
            </Link>

            <div className="h-px bg-white/10 my-2" />

            <Link
              href="/contact"
              onClick={onClose}
              className="px-3 py-3.5 min-h-[48px] rounded-xl bg-primary text-foreground font-semibold text-center hover:bg-primary transition flex items-center justify-center"
            >
              Consult an Expert
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
