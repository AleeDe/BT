import Image from 'next/image';
import { Server, Workflow, Layers, Fingerprint } from 'lucide-react';
import { SpotlightCard } from '@/components/expertise/SpotlightCard';

export function ExpertiseBentoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <SpotlightCard colSpan={2}>
        <div className="flex justify-between items-start mb-6">
          <div className="p-4 rounded-2xl bg-primary/20 text-primary border border-primary/30">
            <Server size={32} />
          </div>
          <a
            href="https://shiftdeploy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wider text-body hover:text-primary hover:border-primary/40 transition-colors"
          >
            SHIFTDEPLOY
          </a>
        </div>
        <div className="mt-auto z-10 relative">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
            Your Problems, Our Solutions
          </h3>
          <p className="text-body text-base sm:text-lg max-w-lg mb-5 sm:mb-8">
            We tackle your most complex operational roadblocks with intelligent, tailor-made architectures. Tell us your
            bottleneck, and we will engineer the precise system to eliminate it.
          </p>
          <div className="w-full h-36 sm:h-48 bg-[#03050D] border border-white/5 rounded-xl overflow-hidden relative group-hover:border-white/20 transition-colors duration-500">
            <Image
              src="/fullstack-bento.svg"
              alt="Code deployment animation"
              fill
              sizes="(max-width: 768px) 100vw, 66vw"
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </SpotlightCard>

      <SpotlightCard>
        <div className="p-4 rounded-2xl bg-primary/20 text-primary border border-primary/30 w-max mb-8">
          <Fingerprint size={28} />
        </div>
        <div className="mt-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
            Zero-Trust Security
          </h3>
          <p className="text-body">
            Bank-grade encryption protocols baked directly into the application layer for complete corporate data privacy.
          </p>
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
            Customer-Connect
          </a>
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
            CRM Workflows
          </h3>
          <p className="text-body">
            Automating complex customer touchpoints to completely eliminate manual data entry and bottlenecking.
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
