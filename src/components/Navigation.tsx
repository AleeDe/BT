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
        className="w-full bg-[#0F172A]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.5)]"
      >
        <div className="mx-auto w-full max-w-7xl relative flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center group relative p-1 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-[#2962FF] to-[#00E5FF] [mask-image:url('/logo.png')] [mask-size:contain] [mask-repeat:no-repeat] [mask-position:left_center] drop-shadow-[0_0_12px_rgba(41,98,255,0.7)] group-hover:from-[#00E5FF] group-hover:to-[#2962FF] transition-all duration-500 z-10" />
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
          <Link href="/about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200">
            About Us
          </Link>
          
          <div className="relative group">
            <button className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 py-6 focus:outline-none flex items-center gap-1.5">
              Services
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:rotate-180 transition-transform duration-200"><path d="m6 9 6 6 6-6"/></svg>
            </button>
            <div className="absolute top-[80%] left-0 w-72 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div className="mt-2 rounded-2xl bg-[#020617] border border-white/10 shadow-2xl overflow-hidden flex flex-col p-2">
                    <a href="/services" className="group/item flex items-center gap-3 rounded-xl px-3 py-3 hover:bg-white/5 transition mb-1">
                    <div className="h-9 w-9 rounded-xl bg-white/5 border border-white/10 grid place-items-center">
                      <span className="h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.6)]" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-semibold text-gray-100">View Our Services</span>
                      </div>
                      <p className="text-xs text-gray-400 line-clamp-2 mt-0.5">Solving bottlenecks via powerful Full-Stack & CRM solutions</p>
                    </div>
                  </a>
                  <a href="https://apex-accelerator.com" target="_blank" rel="noopener noreferrer" className="group/item flex items-center gap-3 rounded-xl px-3 py-3 hover:bg-white/5 transition">
                  <div className="h-9 w-9 rounded-xl bg-white/5 border border-white/10 grid place-items-center">
                    <span className="h-2 w-2 rounded-full bg-[#00E5FF] shadow-[0_0_10px_rgba(0,229,255,0.6)]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-semibold text-gray-100">Apex-Accelerator</span>
                      <ExternalLink size={12} className="text-gray-500 group-hover/item:text-[#00E5FF] transition-colors" />
                    </div>
                    <p className="text-xs text-gray-400 line-clamp-1">Enterprise CRM Solutions</p>
                  </div>
                </a>
                <a href="https://shiftdeploy.com" target="_blank" rel="noopener noreferrer" className="group/item flex items-center gap-3 rounded-xl px-3 py-3 hover:bg-white/5 transition mt-1">
                   <div className="h-9 w-9 rounded-xl bg-white/5 border border-white/10 grid place-items-center">
                    <span className="h-2 w-2 rounded-full bg-[#2962FF] shadow-[0_0_10px_rgba(41,98,255,0.6)]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-semibold text-gray-100">ShiftDeploy</span>
                      <ExternalLink size={12} className="text-gray-500 group-hover/item:text-[#2962FF] transition-colors" />
                    </div>
                    <p className="text-xs text-gray-400 line-clamp-1">Full-Stack App Dev</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <Link href="/case-studies" className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200">
            Case Studies
          </Link>
        </div>

        {/* Right Buttons / CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/contact" className="inline-flex items-center justify-center rounded-xl bg-[#2962FF] px-5 py-2 text-sm font-semibold text-white shadow-[0_0_20px_rgba(41,98,255,0.3)] hover:shadow-[0_0_30px_rgba(41,98,255,0.5)] hover:bg-blue-600 transition focus:outline-none">
            Consult an Expert
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 min-h-[44px] min-w-[44px] px-3 py-2 text-sm font-semibold text-white hover:bg-white/10 transition focus:outline-none">
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
            className="md:hidden absolute w-[calc(100%-2rem)] left-4 top-[calc(100%+0.5rem)] rounded-2xl bg-[#0F172A] border border-white/10 shadow-2xl overflow-hidden"
          >
            <div className="p-3 flex flex-col gap-1">
              <Link href="/about" className="px-3 py-3 min-h-[44px] flex items-center rounded-xl hover:bg-white/5 text-gray-200 font-semibold transition-colors">
                About Us
              </Link>
              
              <div className="px-3 py-2">
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-2 font-semibold">Services</p>
                <div className="pl-3 space-y-1 border-l-2 border-white/10">
                    <a href="/services" className="flex items-center gap-2 text-gray-300 py-3 min-h-[44px] hover:text-purple-400 transition-colors rounded-lg hover:bg-white/5 px-2">
                       View Our Services
                     </a>
                     <a href="https://apex-accelerator.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 py-3 min-h-[44px] hover:text-[#00E5FF] transition-colors rounded-lg hover:bg-white/5 px-2">
                     Apex-Accelerator <ExternalLink size={14}/>
                   </a>
                   <a href="https://shiftdeploy.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 py-3 min-h-[44px] hover:text-[#2962FF] transition-colors rounded-lg hover:bg-white/5 px-2">
                     ShiftDeploy <ExternalLink size={14}/>
                   </a>
                </div>
              </div>
              
              <Link href="/case-studies" className="px-3 py-3 min-h-[44px] flex items-center rounded-xl hover:bg-white/5 text-gray-200 font-semibold transition-colors">
                Case Studies
              </Link>

              <div className="h-px bg-white/10 my-2" />
              
              <Link href="/contact" className="px-3 py-3.5 min-h-[48px] rounded-xl bg-[#2962FF] text-white font-semibold text-center hover:bg-blue-600 transition flex items-center justify-center">
                Consult an Expert
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}