const fs = require("fs");

const newCode = `"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Zap, Target, Cpu, Users, Database, Globe, Server, Code, TrendingUp, ShieldCheck, Lock, CheckCircle2, MessageSquare, BarChart3, Activity, RefreshCw } from "lucide-react";

function HeroAnimatedVisual() {
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard(p => (p === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full aspect-square sm:aspect-video lg:aspect-[4/3] max-w-[600px] flex items-center justify-center mt-12 lg:mt-0 perspective-[1000px] z-10">
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-[#2962FF]/20 to-[#00E5FF]/20 blur-[80px] rounded-full mix-blend-screen animate-pulse pointer-events-none" />
      
      <motion.div
         animate={{ y: [-10, 10, -10], rotateX: [1, -1, 1], rotateY: [-1, 1, -1] }}
         transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
         className="relative w-full h-full max-h-[480px] rounded-3xl bg-[#0F172A]/80 border border-white/10 backdrop-blur-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] p-5 sm:p-7 flex flex-col overflow-hidden"
      >
         {/* Top Glass reflection line */}
         <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent opacity-50" />
         
         {/* Carousel Indicators */}
         <div className="flex justify-center mb-5 sm:mb-6 z-20 w-full gap-2">
            <button onClick={() => setActiveCard(0)} className={\`h-1.5 rounded-full transition-all duration-300 \${activeCard === 0 ? "w-8 bg-[#00E5FF] shadow-[0_0_10px_rgba(0,229,255,0.8)]" : "w-4 bg-slate-700"}\`} aria-label="Show CRM" />
            <button onClick={() => setActiveCard(1)} className={\`h-1.5 rounded-full transition-all duration-300 \${activeCard === 1 ? "w-8 bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" : "w-4 bg-slate-700"}\`} aria-label="Show Full Stack" />
         </div>

         {/* Content Area */}
         <div className="flex-1 relative z-10 h-full w-full">
            <AnimatePresence mode="wait">
               {activeCard === 0 ? (
                 <motion.div 
                    key="crm"
                    initial={{ opacity: 0, x: -20, filter: "blur(8px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, x: 20, filter: "blur(8px)" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute inset-0 flex flex-col"
                 >
                    <div className="flex items-center gap-3 mb-4 sm:mb-5">
                       <div className="p-2 bg-indigo-500/20 rounded-xl border border-indigo-500/30">
                          <Users className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400" />
                       </div>
                       <div>
                          <h3 className="text-white font-bold text-sm sm:text-base">CRM Intelligence</h3>
                          <p className="text-indigo-300/70 text-[10px] sm:text-xs">Solving Client Problems Seamlessly</p>
                       </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 mb-4 sm:mb-5">
                       <div className="bg-slate-900/80 rounded-xl p-3 sm:p-4 border border-slate-700/50 shadow-inner">
                          <div className="text-slate-400 text-[10px] sm:text-xs mb-1">Active Leads</div>
                          <div className="text-white font-bold text-lg sm:text-2xl flex items-center justify-between gap-2">
                             2,450 
                             <span className="text-emerald-400 text-[10px] bg-emerald-400/10 px-1.5 py-0.5 rounded flex items-center"><TrendingUp className="w-3 h-3 mr-1" />+12%</span>
                          </div>
                       </div>
                       <div className="bg-slate-900/80 rounded-xl p-3 sm:p-4 border border-slate-700/50 shadow-inner">
                          <div className="text-slate-400 text-[10px] sm:text-xs mb-1">Retention Rate</div>
                          <div className="text-white font-bold text-lg sm:text-2xl flex items-center justify-between gap-2">
                             94.2% 
                             <span className="text-emerald-400 text-[10px] bg-emerald-400/10 px-1.5 py-0.5 rounded flex items-center"><TrendingUp className="w-3 h-3 mr-1" />+5%</span>
                          </div>
                       </div>
                    </div>

                    <div className="flex-1 bg-[#0A1128]/80 rounded-xl p-3 sm:p-4 border border-[#00E5FF]/20 flex flex-col gap-2 sm:gap-3">
                       <div className="text-[10px] sm:text-xs font-bold text-[#00E5FF] mb-1 uppercase tracking-widest flex items-center gap-2">
                          <Target className="w-3.5 h-3.5" /> Client Pipeline Health
                       </div>
                       {[
                         { step: "Discovery Call", users: 142, w: "w-[85%]", c: "bg-indigo-500" },
                         { step: "Proposal Sent", users: 89, w: "w-[65%]", c: "bg-blue-500" },
                         { step: "Closing Stage", users: 34, w: "w-[45%]", c: "bg-teal-500" }
                       ].map((item, i) => (
                         <div key={i} className="flex flex-col gap-1.5">
                            <div className="flex justify-between text-[10px] sm:text-xs text-slate-300">
                               <span>{item.step}</span>
                               <span className="font-bold">{item.users}</span>
                            </div>
                            <div className="h-1.5 sm:h-2 w-full bg-slate-800/80 rounded-full overflow-hidden backdrop-blur-sm">
                               <motion.div initial={{ width: 0 }} animate={{ width: item.w }} transition={{ duration: 1, delay: i * 0.2 + 0.3 }} className={\`h-full \${item.c} shadow-[0_0_10px_rgba(0,229,255,0.5)]\`} />
                            </div>
                         </div>
                       ))}
                    </div>
                 </motion.div>
               ) : (
                 <motion.div 
                    key="fullstack"
                    initial={{ opacity: 0, x: -20, filter: "blur(8px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, x: 20, filter: "blur(8px)" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute inset-0 flex flex-col"
                 >
                    <div className="flex items-center gap-3 mb-4 sm:mb-5">
                       <div className="p-2 bg-emerald-500/20 rounded-xl border border-emerald-500/30">
                          <Code className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
                       </div>
                       <div>
                          <h3 className="text-white font-bold text-sm sm:text-base">Full Stack Engineering</h3>
                          <p className="text-emerald-300/70 text-[10px] sm:text-xs">End-to-End Scalable Architecture</p>
                       </div>
                    </div>

                    <div className="flex-1 flex flex-col sm:flex-row gap-3 sm:gap-4">
                       <div className="flex-1 rounded-xl bg-slate-900/80 border border-slate-700/50 p-4 flex flex-col items-center justify-center gap-3 relative overflow-hidden group">
                          <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors" />
                          <Globe className="w-7 h-7 sm:w-8 sm:h-8 text-blue-400 relative z-10" />
                          <div className="text-[10px] sm:text-xs text-blue-300 font-semibold bg-blue-500/10 px-3 py-1.5 rounded-full border border-blue-500/20 relative z-10">Optimized Frontend</div>
                          <div className="text-[9px] sm:text-[10px] text-slate-400 text-center relative z-10">React / Next.js / UX UI</div>
                       </div>
                       
                       <div className="flex flex-col items-center justify-center px-1">
                          <div className="h-4 sm:h-6 w-[1px] bg-slate-700" />
                          <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="my-1 rounded-full p-1 bg-slate-800 border border-slate-700">
                            <RefreshCw className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" />
                          </motion.div>
                          <div className="h-4 sm:h-6 w-[1px] bg-slate-700" />
                       </div>

                       <div className="flex-1 rounded-xl bg-[#0A1128]/80 border border-emerald-500/20 p-4 flex flex-col items-center justify-center gap-3 relative overflow-hidden group shadow-[0_0_20px_rgba(52,211,153,0.1)]">
                          <div className="absolute inset-0 bg-emerald-500/5 group-hover:bg-emerald-500/10 transition-colors" />
                          <Server className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-400 relative z-10" />
                          <div className="text-[10px] sm:text-xs text-emerald-400 font-semibold bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20 relative z-10">Scalable Backend</div>
                          <div className="flex gap-2 mt-1 relative z-10">
                             <div className="p-1.5 bg-slate-800/80 rounded border border-slate-700"><Database className="w-3 h-3 sm:w-4 sm:h-4 text-slate-300" /></div>
                             <div className="p-1.5 bg-slate-800/80 rounded border border-slate-700"><Cpu className="w-3 h-3 sm:w-4 sm:h-4 text-slate-300" /></div>
                          </div>
                       </div>
                    </div>
                    
                    <div className="mt-4 sm:mt-5 bg-slate-900/80 rounded-xl p-3 sm:p-4 border border-slate-700/50 flex justify-between items-center">
                       <div className="flex items-center gap-2">
                          <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-rose-400" />
                          <div className="flex flex-col">
                             <span className="text-[10px] sm:text-xs font-bold text-slate-200">System Load & APIs</span>
                             <span className="text-[8px] sm:text-[9px] text-slate-500">Processing live requests</span>
                          </div>
                       </div>
                       <div className="flex items-end gap-1 h-6">
                          {[1,2,3,4,5,6,7].map(i => (
                             <motion.div 
                                key={i}
                                animate={{ height: [(i%2===0?8:12), Math.random() * 14 + 10, (i%2===0?8:12)] }}
                                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
                                className="w-1.5 sm:w-2 bg-gradient-to-t from-rose-500 to-rose-400 rounded-t-sm"
                             />
                          ))}
                       </div>
                    </div>
                 </motion.div>
               )}
            </AnimatePresence>
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
fs.writeFileSync("src/components/HeroSection.tsx", newCode);
console.log("File saved!");

