import Image from 'next/image';
import { Workflow, Layers, Fingerprint, Gauge, Sparkles, Play, ArrowUpRight } from 'lucide-react';
import { SpotlightCard } from '@/components/expertise/SpotlightCard';

const valueHighlights = [
  {
    icon: Fingerprint,
    title: 'Zero-Trust Security',
    description: 'Bank-grade encryption baked into every layer.',
  },
  {
    icon: Gauge,
    title: 'Built for Scale',
    description: 'Architectures that flex from 10 to 10M users.',
  },
  {
    icon: Sparkles,
    title: 'Tailor-made Systems',
    description: 'No off-the-shelf templates — every line fits your workflow.',
  },
];

export function ExpertiseBentoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <SpotlightCard colSpan={3}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <a
            href="#"
            className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 bg-[#03050D] group/video"
          >
            <Image
              src="/fullstack-bento.svg"
              alt="ShiftDeploy architecture demo"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover opacity-80 group-hover/video:opacity-100 transition-opacity"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/90 text-background flex items-center justify-center group-hover/video:scale-110 transition-transform shadow-lg shadow-primary/30">
                <Play size={30} className="ml-1" fill="currentColor" />
              </div>
            </div>
            <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-background/80 backdrop-blur text-foreground text-xs font-semibold border border-white/10">
              Watch 90-sec demo
            </span>
          </a>

          <div>
            <a
              href="https://shiftdeploy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group/badge inline-flex items-center gap-2 mb-5 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold tracking-[0.18em] shadow-[0_0_24px_rgba(16,185,129,0.18)] hover:bg-primary/20 hover:border-primary/50 hover:shadow-[0_0_32px_rgba(16,185,129,0.35)] transition-all"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              POWERED BY SHIFTDEPLOY
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover/badge:translate-x-0.5 group-hover/badge:-translate-y-0.5"
              />
            </a>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              <span className="text-foreground">Your Problems,</span>{' '}
              <span className="bg-gradient-to-r from-primary via-emerald-400 to-primary bg-clip-text text-transparent">
                Our Solutions
              </span>
            </h3>
            <p className="text-body text-base sm:text-lg mb-3">
              We tackle your most complex operational roadblocks with intelligent, tailor-made architectures. Tell us
              your bottleneck — we engineer the precise system to eliminate it.
            </p>
            <p className="text-body text-sm sm:text-base mb-6">
              From discovery to deployment, our team ships production-ready systems in weeks, not quarters — backed by
              <span className="text-foreground font-semibold"> 24/7 support</span> and a
              <span className="text-foreground font-semibold"> 99.9% uptime SLA</span>.
            </p>

            <ul className="space-y-3 mb-7">
              {valueHighlights.map(({ icon: Icon, title, description }) => (
                <li key={title} className="flex gap-3 items-start group/item">
                  <span className="shrink-0 mt-0.5 p-2 rounded-xl bg-primary/15 text-primary border border-primary/30 transition-all group-hover/item:bg-primary/25 group-hover/item:border-primary/50 group-hover/item:shadow-[0_0_16px_rgba(16,185,129,0.35)]">
                    <Icon size={16} />
                  </span>
                  <div>
                    <h4 className="text-foreground font-semibold text-sm sm:text-base">{title}</h4>
                    <p className="text-body text-sm">{description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-background font-semibold hover:bg-primary/90 hover:shadow-[0_0_28px_rgba(16,185,129,0.45)] transition-all"
            >
              Discuss your architecture
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </SpotlightCard>

      <SpotlightCard>
        <div className="p-4 rounded-2xl bg-primary/20 text-primary border border-primary/30 w-max mb-8 flex items-center justify-between">
          <Workflow size={28} />
        </div>
        <div className="mt-auto">
          <a
            href="https://apex-accelerator-portal.vercel.app/auth"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-4 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wider text-body w-max inline-flex hover:text-primary hover:border-primary/40 transition-colors"
          >
            Connect
          </a>
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
            Customer Portal
          </h3>
          <p className="text-body">
            An AI-powered custom portal that empowers users to design and deploy software, AI, and enterprise solutions
            without upfront costs or long-term contracts.
          </p>
        </div>
      </SpotlightCard>

      <SpotlightCard colSpan={2}>
        <div className="absolute inset-0 opacity-40 pointer-events-none group-hover:opacity-100 transition-opacity duration-500 overflow-hidden mix-blend-screen rounded-3xl">
          <Image
            src="/data-bento.svg"
            alt="Data flow chart"
            fill
            sizes="(max-width: 768px) 100vw, 66vw"
            className="w-full h-full object-cover translate-y-12"
          />
        </div>
        <div className="p-4 rounded-2xl bg-primary/20 text-primary border border-primary/30 w-max mb-8 relative z-10">
          <Layers size={28} />
        </div>
        <div className="mt-auto z-10 relative bg-gradient-to-t from-background via-background to-transparent pt-12 -mx-8 -mb-8 px-8 pb-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
            Real-time Data Intelligence
          </h3>
          <p className="text-body text-base sm:text-lg max-w-md">
            Transforming unstructured business metrics into beautifully visualized, highly actionable intelligence boards.
            We make your data work for you.
          </p>
        </div>
      </SpotlightCard>
    </div>
  );
}
