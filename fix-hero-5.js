const fs = require("fs");
const code = `import React, { useState, useEffect } from "react";
import { motion, animate } from "framer-motion";
import { ArrowRight, Zap, Target, Cpu, AlertTriangle, ShieldCheck, BarChart3, Lock, RefreshCw, CheckCircle2 } from "lucide-react";

function HeroAnimatedVisual() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const controls = animate(0, 300, {
      duration: 3,
      ease: "easeOut",
      onUpdate: (value) => setCount(Math.round(value)),
      delay: 0.5
    });
    return () => controls.stop();
  }, []);

  return (
    <div className="relative w-full aspect-square sm:aspect-video lg:aspect-[4/3] max-w-[600px] flex items-center justify-center mt-12 lg:mt-0 perspective-[1000px]">
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-[#2962FF]/20 to-[#00E5FF]/20 blur-[80px] rounded-full mix-blend-screen animate-pulse pointer-events-none" />
      <motion.div
         animate={{ y: [-10, 10, -10], rotateX: [1, -1, 1], rotateY: [-1, 1, -1] }}
         transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
         className="relative w-full h-full max-h-[480px] rounded-3xl bg-[#0F172A]/60 border border-white/10 backdrop-blur-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] p-4 sm:p-7 flex flex-col overflow-hidden"
      >
         <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent opacity-50" />
         <div className="flex justify-center mb-5 sm:mb-6 z-10 w-full">
           <motion.div 
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             className="inline-flex items-center gap-3 px-4 sm:px-5 py-2.5 rounded-full bg-slate-900/80 border border-white/10 backdrop-blur-md shadow-[0_0_30px_rgba(0,229,255,0.15)] overflow-hidden relative group"
           >
             <div className="absolute inset-0 bg-gradient-to-r from-[#2962FF]/20 to-[#00E5FF]/20 opacity-0 group-hover:opacity-100 transition-opacity" />
             <Target className="w-4 h-4 sm:w-5 sm:h-5 text-[#00E5FF]" />
             <span className="text-[13px] sm:text-sm font-bold text-slate-200 tracking-wide">
               Time to Value: <span className="text-[#00E5FF]">3–6 Weeks</span>
             </span>
           </motion.div>
         </div>
         <div className="flex-1 flex flex-col sm:flex-row items-stretch gap-4 relative z-10 h-full">
            <div className="flex-1 rounded-2xl bg-black/40 border border-red-500/20 p-4 sm:p-5 flex flex-col relative overflow-hidden group">
               <div className="flex items-center gap-2 mb-4 sm:mb-5 relative z-10">
                  <AlertTriangle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-500" />
                  <span className="text-[10px] sm:text-[11px] font-bold text-red-400 uppercase tracking-widest whitespace-nowrap">Legacy Data</span>
               </div>
               <ul className="space-y-3 sm:space-y-4 relative z-10 flex-1">
                  {[ 
                    { t: "Slow Workflows", w: "w-[85%]" }, 
                    { t: "Security Risks", w: "w-[65%]" }, 
                    { t: "Manual Tasks", w: "w-[90%]" } 
                  ].map((item, i) => (
                     <li key={i} className="flex flex-col gap-1.5 sm:gap-2">
                       <div className="flex items-center gap-2 text-[10px] sm:text-xs font-medium text-slate-400">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500/50 animate-ping" />
                          {item.t}
                       </div>
                       <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                          <div className={\`h-full bg-red-500/30 \${item.w}\`} />
                       </div>
                     </li>
                  ))}
               </ul>
            </div>
            <div className="flex-1 rounded-2xl bg-[#0A1128]/80 border border-[#00E5FF]/30 p-4 sm:p-5 flex flex-col relative overflow-hidden shadow-[0_0_30px_rgba(0,229,255,0.15)] group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-[#00E5FF]/10 blur-[40px] rounded-full pointer-events-none group-hover:bg-[#00E5FF]/20 transition-all duration-700" />
               <div className="flex items-center gap-2 mb-4 sm:mb-5 relative z-10">
                  <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00E5FF]" />
                  <span className="text-[10px] sm:text-[11px] font-bold text-[#00E5FF] uppercase tracking-widest whitespace-nowrap">Optimized AI</span>
               </div>
               <ul className="space-y-3 sm:space-y-4 relative z-10 flex-1">
                  {[ 
                    { t: "Lightning Fast", w: "100%" }, 
                    { t: "Zero-Trust Sec", w: "95%" }, 
                    { t: "Automated API", w: "90%" } 
                  ].map((item, i) => (
                     <li key={i} className="flex flex-col gap-1.5 sm:gap-2">
                       <div className="flex items-center gap-2 text-[10px] sm:text-xs font-medium text-slate-200">
                          <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#00E5FF]" />
                          {item.t}
                       </div>
                       <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                          <motion.div
                             initial={{ width: "0%" }}
                             animate={{ width: item.w }}
                             transition={{ duration: 1.5, delay: i * 0.2 + 0.5, ease: "easeOut" }}
                             className="h-full bg-gradient-to-r from-[#2962FF] to-[#00E5FF] shadow-[0_0_10px_rgba(0,229,255,0.8)]"
                          />
                       </div>
                     </li>
                  ))}
               </ul>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-900 border border-slate-700 shadow-2xl flex items-center justify-center z-20">
               <div className="absolute inset-0 bg-gradient-to-r from-[#2962FF] to-[#00E5FF] opacity-20 rounded-full" />
               <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5 text-white animate-[spin_4s_linear_infinite]" />
            </div>
         </div>
         <div className="mt-4 sm:mt-5 flex justify-between items-center px-1 relative z-10">
            <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] text-slate-400 font-medium">
              <Lock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400" /> ISO 27001 Core
            </div>
            <div className="text-[10px] sm:text-[11px] font-bold text-white bg-white/5 px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-pulse" />
              Efficiency: +{count}%
            </div>
         </div>
      </motion.div>
      <motion.div
         animate={{ y: [-15, 10, -15], rotateZ: [0, 2, 0] }}
         transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
         className="absolute -right-2 top-8 sm:-right-8 sm:top-14 z-0 p-2 sm:p-3 px-3 sm:px-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl hidden md:block"
      >
         <div className="flex items-center gap-3 sm:gap-4">
           <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#00E5FF]/20 flex items-center justify-center border border-[#00E5FF]/30">
             <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-[#00E5FF]" />
           </div>
           <div className="flex flex-col">
             <span className="text-[9px] sm:text-[10px] text-slate-400 uppercase font-bold tracking-wider">Uptime SLA</span>
             <span className="text-sm sm:text-base font-black text-white">99.999%</span>
           </div>
         </div>
      </motion.div>
      <motion.div
         animate={{ y: [10, -10, 10], rotateZ: [0, -2, 0] }}
         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
         className="absolute -left-2 bottom-8 sm:-left-8 sm:bottom-16 z-20 p-2 sm:p-3 px-3 sm:px-4 rounded-xl sm:rounded-2xl bg-[#0A1128]/80 border border-emerald-500/20 backdrop-blur-xl shadow-2xl hidden md:block"
      >
         <div className="flex items-center gap-3 sm:gap-4">
           <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
             <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
           </div>
           <div className="flex flex-col">
             <span className="text-[9px] sm:text-[10px] text-slate-400 uppercase font-bold tracking-wider">Security</span>
             <span className="text-sm sm:text-base font-black text-white">Zero Trust</span>
           </div>
         </div>
      </motion.div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[#020617] -z-20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#020617] to-[#020617] -z-10" />
      <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-8"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 w-fit">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
              <span className="text-sm font-medium tracking-wide">AI-Powered Next-Gen Systems</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                Scale Beyond
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-400 to-blue-500">
                  Limitations.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed">
                We engineer scalable SaaS platforms and autonomous AI agents that transform raw data into precise, actionable intelligence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                className="group relative px-8 py-4 sm:min-h-[48px] bg-white text-slate-900 rounded-full font-bold text-base overflow-hidden transition-transform hover:scale-105"
                onClick={() => window.location.href = "/contact"}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-teal-100 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative flex items-center justify-center gap-2">
                  Build Your System <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button 
                className="px-8 py-4 sm:min-h-[48px] rounded-full border border-slate-700 text-white font-medium hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 text-base"
                onClick={() => window.location.href = "/services"}
              >
                <Zap className="w-5 h-5 text-teal-400" /> View Capabilities
              </button>
            </div>

            <div className="flex items-center gap-6 pt-4 text-sm text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-blue-400" /> Guaranteed ROI
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-teal-400" /> Deep Tech Focus
              </div>
            </div>
          </motion.div>

          {/* Visual Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex justify-center lg:justify-end py-12 lg:py-0"
          >
             <HeroAnimatedVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
`;
fs.writeFileSync("src/components/HeroSection.tsx", code);

