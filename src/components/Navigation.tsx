'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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

        {/* Logo */}
        <Link href="/" className="flex items-center group relative p-1 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary [mask-image:url('/logo.png')] [mask-size:contain] [mask-repeat:no-repeat] [mask-position:left_center] drop-shadow-[0_0_12px_rgba(16,185,129,0.7)] group-hover:from-primary group-hover:to-primary transition-all duration-500 z-10" />
          <Image
            src="/logo.png"
            alt="BabulTech Logo"
            width={192}
            height={48}
            priority
            className="h-10 sm:h-12 w-auto object-contain opacity-0 z-0"
          />
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/about" className="text-sm font-medium text-body hover:text-foreground transition-colors duration-200">
            About Us
          </Link>
          
          <div className="relative group">
            <button className="text-sm font-medium text-body hover:text-foreground transition-colors duration-200 py-6 focus:outline-none flex items-center gap-1.5">
              Our Services
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:rotate-180 transition-transform duration-200"><path d="m6 9 6 6 6-6"/></svg>
            </button>
            <div className="absolute top-[80%] left-0 w-72 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div className="mt-2 rounded-2xl bg-[#020617] border border-white/10 shadow-2xl overflow-hidden flex flex-col p-2">
                    <a href="https://core-services-kappa.vercel.app/" target="_blank" rel="noopener noreferrer" className="group/item flex items-center gap-3 rounded-xl px-3 py-3 hover:bg-white/5 transition mb-1">
                    <div className="h-9 w-9 rounded-xl bg-white/5 border border-white/10 grid place-items-center">
                      <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_rgba(168,85,247,0.6)]" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-semibold text-gray-100">Our Core Services</span>
                        <ExternalLink size={12} className="text-body group-hover/item:text-primary transition-colors" />
                      </div>
                      <p className="text-xs text-body line-clamp-2 mt-0.5">Solving bottlenecks via powerful strategic Technical Partnerships</p>
                    </div>
                  </a>
                  <a href="https://cloud-qube.vercel.app/" target="_blank" rel="noopener noreferrer" className="group/item flex items-center gap-3 rounded-xl px-3 py-3 hover:bg-white/5 transition">
                  <div className="h-9 w-9 rounded-xl bg-white/5 border border-white/10 grid place-items-center">
                    <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_rgba(16,185,129,0.6)]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-semibold text-gray-100">CloudQube</span>
                      <ExternalLink size={12} className="text-body group-hover/item:text-primary transition-colors" />
                    </div>
                    <p className="text-xs text-body line-clamp-1">Enterprise CRM Solutions</p>
                  </div>
                </a>
                <div className="group/item flex items-center gap-3 rounded-xl px-3 py-3 mt-1 border border-white/10 bg-white/[0.03]">
                  <div className="h-9 w-9 rounded-xl bg-white/5 border border-white/10 grid place-items-center">
                    <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_rgba(16,185,129,0.6)]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-semibold text-gray-100">AI & Data Science</span>
                      <span className="text-[10px] uppercase tracking-wider text-primary font-bold">Coming Soon</span>
                    </div>
                    <p className="text-xs text-body line-clamp-1">Advanced AI solutions and analytics services</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link href="/case-studies" className="text-sm font-medium text-body hover:text-foreground transition-colors duration-200">
            Case Studies
          </Link>
        </div>

        {/* Right Buttons / CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/contact" className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2 text-sm font-semibold text-foreground shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:bg-primary transition focus:outline-none">
            Consult an Expert
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 min-h-[44px] min-w-[44px] px-3 py-2 text-sm font-semibold text-foreground hover:bg-white/10 transition focus:outline-none">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>
      </motion.nav>

        {/* Mobile Menu Dropdown */}
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
              <Link href="/about" className="px-3 py-3 min-h-[44px] flex items-center rounded-xl hover:bg-white/5 text-gray-200 font-semibold transition-colors">
                About Us
              </Link>
              
              <div className="px-3 py-2">
                <p className="text-body text-xs uppercase tracking-wider mb-2 font-semibold">Services</p>
                <div className="pl-3 space-y-1 border-l-2 border-white/10">
                      <a href="https://core-services-kappa.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-body py-3 min-h-[44px] hover:text-primary transition-colors rounded-lg hover:bg-white/5 px-2">
                        Our Core Services <ExternalLink size={14}/>
                     </a>
                     <a href="https://cloud-qube.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-body py-3 min-h-[44px] hover:text-primary transition-colors rounded-lg hover:bg-white/5 px-2">
                     CloudQube <ExternalLink size={14}/>
                   </a>
                   <div className="flex items-center justify-between gap-2 text-body py-3 min-h-[44px] rounded-lg bg-white/[0.03] border border-white/10 px-2">
                     <span>AI & Data Science</span>
                     <span className="text-[10px] uppercase tracking-wider text-primary font-bold">Coming Soon</span>
                   </div>
                </div>
              </div>
              
              <Link href="/case-studies" className="px-3 py-3 min-h-[44px] flex items-center rounded-xl hover:bg-white/5 text-gray-200 font-semibold transition-colors">
                Case Studies
              </Link>

              <div className="h-px bg-white/10 my-2" />
              
              <Link href="/contact" className="px-3 py-3.5 min-h-[48px] rounded-xl bg-primary text-foreground font-semibold text-center hover:bg-primary transition flex items-center justify-center">
                Consult an Expert
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}