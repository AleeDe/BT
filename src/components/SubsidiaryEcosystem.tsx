'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ExternalLink, Sparkles, Cloud, ArrowUpRight } from 'lucide-react';

const serviceCards = [
  {
    title: 'Our Core Services',
    description:
      'End-to-end execution across strategy, architecture, delivery, and optimization to remove business bottlenecks fast.',
    href: '/core-services',
    external: false,
    icon: Sparkles,
    accentClass: 'from-primary/45 via-primary/20 to-transparent',
    chip: 'Core',
  },
  {
    title: 'Customer Portal',
    description:
      'Enterprise systems designed for adoption, performance, and measurable outcomes across sales and operations.',
    href: '/customer-portal',
    external: false,
    icon: Cloud,
    accentClass: 'from-cyan-400/40 via-primary/20 to-transparent',
    chip: 'Customer Portal',
  },
];
const particles = [
  { left: '8%', top: '10%', size: 4, delay: 0, duration: 11, tone: 'bg-primary/45' },
  { left: '20%', top: '14%', size: 3, delay: 1.1, duration: 12.5, tone: 'bg-cyan-300/45' },
  { left: '34%', top: '11%', size: 4, delay: 1.8, duration: 10.8, tone: 'bg-primary/40' },
  { left: '48%', top: '9%', size: 5, delay: 0.7, duration: 13.2, tone: 'bg-emerald-300/40', mobileClass: 'hidden sm:block' },
  { left: '63%', top: '13%', size: 3, delay: 1.4, duration: 11.4, tone: 'bg-primary/45', mobileClass: 'hidden sm:block' },
  { left: '77%', top: '11%', size: 4, delay: 0.5, duration: 12.8, tone: 'bg-cyan-300/40', mobileClass: 'hidden sm:block' },
  { left: '91%', top: '16%', size: 4, delay: 2.1, duration: 13.6, tone: 'bg-primary/40' },
  { left: '4%', top: '56%', size: 3, delay: 0.9, duration: 12.9, tone: 'bg-primary/40', mobileClass: 'hidden sm:block' },
  { left: '96%', top: '60%', size: 3, delay: 1.6, duration: 12.2, tone: 'bg-cyan-300/35', mobileClass: 'hidden sm:block' },
];

export function SubsidiaryEcosystem() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="ecosystem" className="relative overflow-hidden py-16 sm:py-24 bg-background">
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_24%,black_64%)]">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-[100px]" />
        {particles.map((particle, index) => (
            <motion.span
              key={`${particle.left}-${particle.top}-${index}`}
              className={`absolute rounded-full ${particle.tone} ${particle.mobileClass ?? ''}`}
              style={{
                left: particle.left,
                top: particle.top,
                width: particle.size,
                height: particle.size,
              }}
              initial={{ opacity: 0.1 }}
              animate={
                reduceMotion
                  ? { opacity: 0.18 }
                  : {
                      y: [0, -6, 0],
                      opacity: [0.08, 0.26, 0.08],
                      scale: [1, 1.08, 1],
                    }
              }
              transition={
                reduceMotion
                  ? { duration: 0.2 }
                  : {
                      duration: particle.duration,
                      repeat: Infinity,
                      repeatType: 'mirror',
                      ease: 'easeInOut',
                      delay: particle.delay,
                    }
              }
            />
          ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary"
          >
            <Sparkles size={14} /> Service Portfolio
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-slate-200 to-slate-400 tracking-tight"
          >
            Two Strategic Service Tracks
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-4 text-base sm:text-lg text-body max-w-3xl mx-auto"
          >
            Choose your momentum lane. Each card opens a specialized service stream built to accelerate digital outcomes.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">
          {serviceCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.a
                key={card.title}
                href={card.href}
                target={card.external ? "_blank" : undefined}
                rel={card.external ? "noopener noreferrer" : undefined}
                title={`Open ${card.title}`}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, delay: 0.12 * index }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/95 to-slate-900/80 p-6 sm:p-7 lg:p-8 shadow-[0_25px_80px_-35px_rgba(2,6,23,0.95)]"
              >
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${card.accentClass} opacity-70`} />
                <div className="pointer-events-none absolute -top-20 -right-16 h-44 w-44 rounded-full bg-white/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-90" />

                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/15 bg-background/55 text-primary shadow-[0_0_0_1px_rgba(255,255,255,0.05)_inset]">
                        <Icon size={22} />
                      </div>
                      <span className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-200">
                        {card.chip}
                      </span>
                    </div>

                    {card.external ? <ExternalLink
                      size={18}
                      className="text-slate-400 transition-all duration-300 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    /> : <ArrowUpRight
                      size={18}
                      className="text-slate-400 transition-all duration-300 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />}
                  </div>

                  <h3 className="mt-7 text-2xl sm:text-[1.75rem] leading-tight font-bold text-foreground tracking-tight">
                    {card.title}
                  </h3>

                  <p className="mt-4 text-base leading-relaxed text-slate-300/85 flex-grow">
                    {card.description}
                  </p>

                  <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Explore Service
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
