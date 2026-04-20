'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { NavigationLogo } from '@/components/navigation/NavigationLogo';
import { DesktopNav } from '@/components/navigation/DesktopNav';
import { DesktopCta } from '@/components/navigation/DesktopCta';
import { MobileMenu, MobileMenuButton } from '@/components/navigation/MobileNav';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="w-full bg-background/80 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.5)]"
      >
        <div className="mx-auto w-full max-w-7xl relative flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <NavigationLogo />
          <DesktopNav />
          <DesktopCta />
          <MobileMenuButton isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />

      </div>
      </motion.nav>
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
}