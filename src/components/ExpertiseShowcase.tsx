'use client';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { MouseEvent } from 'react';
import { 
  Server, Shield, Smartphone, Workflow, 
  Layers, LineChart, Cpu, Fingerprint 
} from 'lucide-react';

// Advanced UI Component: Mouse-tracking glowing border card (Spotlight Card)
function SpotlightCard({ 
  children, colSpan = 1 
}: { 
  children: React.ReactNode; 
  colSpan?: number 
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`relative group rounded-3xl border border-white/10 bg-[#0A1128] overflow-hidden ${
        colSpan === 2 ? 'md:col-span-2' : ''
      }`}
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic Hover Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(0, 229, 255, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      {/* Secondary inner glow for extra depth */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              rgba(41, 98, 255, 0.1),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Content wrapper */}
      <div className="relative z-10 h-full p-5 sm:p-8 flex flex-col">
        {children}
      </div>
    </motion.div>
  );
}


export function ExpertiseShowcase() {
  // Trust Ticker Data
  const enterpriseLogos = [
    { name: "Microsoft", url: "https://www.microsoft.com", svg: <svg viewBox="0 0 23 23" className="w-6 h-6 fill-current"><path d="M10.5 0h-10.5v10.5h10.5v-10.5zm12.5 0h-10.5v10.5h10.5v-10.5zm-12.5 12.5h-10.5v10.5h10.5v-10.5zm12.5 0h-10.5v10.5h10.5v-10.5z"/></svg> },
    { name: "Google Cloud", url: "https://cloud.google.com", svg: <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current"><path d="M12.24 9.07l-3.35 5.8 2.37 4.1h7.72l3.35-5.8-2.37-4.1zm-4.48 7.74l-2.37-4.1-3.35 5.8 2.37 4.1h6.68l2.36-4.1zm-2.12-4.1l2.37-4.1h7.72l-2.37-4.1H4.62l-3.35 5.8z"/></svg> },
    { name: "Amazon AWS", url: "https://aws.amazon.com", svg: <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current"><path d="M14.66 12.57c-1.4 1.15-3.31 1.83-5.32 1.83-2 0-3.92-.68-5.32-1.83l-1.07 1.51c1.72 1.48 4.02 2.32 6.39 2.32s4.67-.84 6.39-2.32l-1.07-1.51zm8.34-8.15l-4.7 9.87 3.39-3.39-.99-.81c-1.46-1.18-3.41-1.85-5.45-1.85-2.04 0-3.99.66-5.45 1.85l-.99.81 3.39 3.39-4.7-9.87h15.5zM22.06 17.5a12.78 12.78 0 0 1-10.06 3.97 12.78 12.78 0 0 1-10.06-3.97l-.61-1 4.5 4.5-2.22 1.95A15.34 15.34 0 0 0 12 24a15.34 15.34 0 0 0 8.35-2.45l-2.22-1.95 4.5-4.5-.57 1z"/></svg> },
    { name: "Vercel", url: "https://vercel.com", svg: <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M24 22.525H0l12-21.05 12 21.05z"/></svg> },
    { name: "Stripe", url: "https://stripe.com", svg: <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current"><path d="M22.518 10.158c-1.879-1.229-4.438-1.579-6.417-.981-2.924.877-4.632 2.766-4.632 5.093 0 2.215 1.625 3.97 4.293 3.97 2.128 0 4.195-1.026 5.629-2.695v1.444c0 1.259-1.002 2.279-2.239 2.279h-10c-1.241 0-2.246-1.023-2.246-2.285v-10h-6V5h6V1h4.5v4h7v2.001h-7v6.002c0 .941.761 1.706 1.696 1.706.746 0 1.458-.456 1.78-.971l.665-1.066c1.1-1.741 3.255-2.73 5.421-2.73 2.193 0 4.414 1.018 5.541 2.827l.009.014v4.375z"/></svg> },
    { name: "Spotify", url: "https://spotify.com", svg: <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.54.659.301 1.02zm1.44-3.3c-.301.42-.84.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.84.241 1.2zM20.16 9.6C16.44 7.379 9.54 7.14 5.58 8.341c-.6.179-1.2-.181-1.38-.781-.179-.599.18-1.199.78-1.38 4.621-1.379 12.18-1.08 16.5 1.5.54.301.66.96.36 1.5-.24.541-.9.721-1.68.42z"/></svg> },
    { name: "Cisco", url: "https://www.cisco.com", svg: <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current"><path d="M12.9 2h2.2v20h-2.2zM8.9 4h2.2v16H8.9zM4.9 8h2.2v8H4.9zM.9 11h2.2v2H.9zm16 1h2.2v2h-2.2zm4-4h2.2v8h-2.2zM16.9 4h2.2v16h-2.2z"/></svg> }
  ];

  return (
    <section className="py-14 sm:py-24 bg-[#050814] relative overflow-hidden">
      
      {/* 1. Infinite Trust Ticker */}
      <div className="w-full overflow-hidden flex flex-col items-center mb-14 sm:mb-24 lg:mb-32">
        <p className="text-gray-500 uppercase tracking-widest text-sm font-semibold mb-8">
          Trusted by Innovative Enterprises
        </p>
        <div className="relative w-full max-w-7xl flex overflow-hidden mask-gradient-edges">
           {/* Masking fading edges using CSS */}
           <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[#050814] via-transparent to-[#050814] w-full" />
           
           <motion.div 
              className="flex whitespace-nowrap gap-16 item-center pl-16 opacity-50 hover:opacity-100 transition-opacity duration-500"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 40, ease: "linear", repeat: Infinity }}
            >
              {/* Double array to create seamless loop */}
              {[...enterpriseLogos, ...enterpriseLogos, ...enterpriseLogos].map((c, idx) => (
                <a 
                  key={idx} 
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center justify-center">
                    {c.svg}
                  </div>
                  <span className="text-xl font-bold tracking-tight">{c.name}</span>
                </a>
              ))}
           </motion.div>
        </div>
      </div>

      {/* 2. The Bento Box Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">
            Empowering Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#2962FF]">Business Growth.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            We deliver intelligent, tailor-made solutions—from seamless CRM integrations on a flexible pay-as-you-go model to scalable full-stack architectures. Our agenda is simple: eliminate your bottlenecks and accelerate your success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Large Card: Full Stack */}
          <SpotlightCard colSpan={2}>
            <div className="flex justify-between items-start mb-6">
               <div className="p-4 rounded-2xl bg-[#2962FF]/20 text-[#2962FF] border border-[#2962FF]/30">
                  <Server size={32} />
               </div>
               <div className="px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wider text-gray-300">
                  SHIFTDEPLOY
               </div>
            </div>
            <div className="mt-auto z-10 relative">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-[#2962FF] transition-colors">Your Problems, Our Solutions</h3>
              <p className="text-gray-400 text-base sm:text-lg max-w-lg mb-5 sm:mb-8">
                We tackle your most complex operational roadblocks with intelligent, tailor-made architectures. Tell us your bottleneck, and we will engineer the precise system to eliminate it.
              </p>
              {/* Inserted Beautiful Coded Graphic */}
              <div className="w-full h-36 sm:h-48 bg-[#03050D] border border-white/5 rounded-xl overflow-hidden relative group-hover:border-white/20 transition-colors duration-500">
                 <img src="/fullstack-bento.svg" alt="Code deployment animation" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </SpotlightCard>

          {/* Medium Card: Security */}
          <SpotlightCard>
            <div className="p-4 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 w-max mb-8">
              <Fingerprint size={28} />
            </div>
            <div className="mt-auto">
               <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#2962FF] transition-colors">Zero-Trust Security</h3>
               <p className="text-gray-400">Bank-grade encryption protocols baked directly into the application layer for complete corporate data privacy.</p>
            </div>
          </SpotlightCard>

          {/* Medium Card: CRM Integration */}
          <SpotlightCard>
            <div className="p-4 rounded-2xl bg-purple-500/20 text-purple-400 border border-purple-500/30 w-max mb-8 flex items-center justify-between">
              <Workflow size={28} />
            </div>
            <div className="mt-auto">
               <div className="mb-4 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wider text-gray-300 w-max">
                  APEX-ACCELERATOR
               </div>
               <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#2962FF] transition-colors">CRM Workflows</h3>
               <p className="text-gray-400">Automating complex customer touchpoints to completely eliminate manual data entry and bottlenecking.</p>
            </div>
          </SpotlightCard>

          {/* Large-ish Card: Data Analytics */}
          <SpotlightCard colSpan={2}>
            <div className="absolute inset-0 opacity-40 pointer-events-none group-hover:opacity-100 transition-opacity duration-500 overflow-hidden mix-blend-screen rounded-3xl">
              <img src="/data-bento.svg" alt="Data flow chart" className="w-full h-full object-cover translate-y-12" />
            </div>
            <div className="p-4 rounded-2xl bg-[#00E5FF]/20 text-[#00E5FF] border border-[#00E5FF]/30 w-max mb-8 relative z-10">
              <Layers size={28} />
            </div>
            <div className="mt-auto z-10 relative bg-gradient-to-t from-[#0A1128] via-[#0A1128] to-transparent pt-12 -mx-8 -mb-8 px-8 pb-8">
               <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-[#2962FF] transition-colors">Real-time Data Intelligence</h3>
               <p className="text-gray-400 text-base sm:text-lg max-w-md">
                 Transforming unstructured business metrics into beautifully visualized, highly actionable intelligence boards. We make your data work for you.
               </p>
            </div>
          </SpotlightCard>

        </div>
      </div>
    </section>
  );
}