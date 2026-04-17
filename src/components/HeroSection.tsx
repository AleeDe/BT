"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Zap, Target, Cpu, Users, Database, TrendingUp, CheckCircle2, RefreshCw, Star, Sparkles, Trophy, AlertTriangle, Heart } from "lucide-react";

const words = ["Scalable SaaS", "Smart CRMs", "Enterprise AI", "Web Platforms"];

function HeroAnimatedVisual({ reduceMotion }: { reduceMotion: boolean }) {
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
      if (reduceMotion) {
         return;
      }

    const interval = setInterval(() => {
      setActiveCard(p => (p === 0 ? 1 : 0));
    }, 5000);

    return () => clearInterval(interval);
   }, [reduceMotion]);

  return (
    <div className="relative w-full aspect-[4/5] sm:aspect-video lg:aspect-[4/3] max-w-[600px] flex items-center justify-center mt-8 sm:mt-12 lg:mt-0 perspective-[1000px] z-10">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-primary/20 to-primary/20 blur-[80px] rounded-full mix-blend-screen animate-pulse pointer-events-none" />
      
      <motion.div
         animate={reduceMotion ? { opacity: 1 } : { y: [-10, 10, -10], rotateX: [1, -1, 1], rotateY: [-1, 1, -1] }}
         transition={reduceMotion ? { duration: 0.2 } : { duration: 7, repeat: Infinity, ease: "easeInOut" }}
         className="relative w-full h-full max-h-[500px] sm:max-h-[480px] rounded-3xl bg-background/80 border border-white/10 backdrop-blur-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] p-5 sm:p-7 flex flex-col overflow-hidden"
      >
         {/* Top Glass reflection line */}
         <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
         
         {/* Carousel Indicators */}
         <div className="flex justify-center mb-5 sm:mb-6 z-20 w-full gap-2">
            <button onClick={() => setActiveCard(0)} className={`h-1.5 rounded-full transition-all duration-300 ${activeCard === 0 ? "w-8 bg-primary shadow-[0_0_10px_rgba(16,185,129,0.8)]" : "w-4 bg-slate-700"}`} aria-label="Show CRM" />
            <button onClick={() => setActiveCard(1)} className={`h-1.5 rounded-full transition-all duration-300 ${activeCard === 1 ? "w-8 bg-primary shadow-[0_0_10px_rgba(168,85,247,0.8)]" : "w-4 bg-slate-700"}`} aria-label="Show Problem Solving" />
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
                    className="absolute inset-0 flex flex-col h-full"
                 >
                    <div className="flex items-center gap-3 mb-4 sm:mb-5">
                       <div className="p-2 bg-primary/20 rounded-xl border border-primary/30">
                          <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                       </div>
                       <div>
                          <h3 className="text-foreground font-bold text-sm sm:text-base">CRM Intelligence</h3>
                          <p className="text-primary/70 text-[10px] sm:text-xs">Automating Connections into Revenue</p>
                       </div>
                    </div>

                    <div className="flex-1 flex flex-col gap-3 sm:gap-4 relative h-full">
                        {/* The Ecosystem Dashboard */}
                        <div className="flex items-center justify-between bg-slate-900/80 rounded-xl p-3 sm:p-5 border border-slate-700/50 relative overflow-hidden group">
                           <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-50" />
                           
                           {/* Source */}
                           <div className="flex flex-col items-center gap-1.5 z-10 w-1/3">
                              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center relative shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                                 <Database className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary relative z-10" />
                                 <div className="absolute inset-0 bg-primary/20 blur-[10px] rounded-full animate-pulse" />
                              </div>
                              <span className="text-[9px] sm:text-[10px] text-slate-400 font-medium text-center leading-tight">Data<br/>Ingestion</span>
                           </div>

                           {/* The Processor */}
                           <div className="flex flex-col items-center justify-center w-1/3 relative z-10 pt-2">
                              <div className="h-0.5 w-[140%] bg-slate-700/50 absolute top-3 sm:top-4 left-1/2 -translate-x-1/2 -z-10 rounded-full overflow-hidden">
                                                 <motion.div animate={reduceMotion ? { opacity: 0.9 } : { x: ["-100%", "200%"] }} transition={reduceMotion ? { duration: 0.2 } : { duration: 2, repeat: Infinity, ease: "linear" }} className="w-1/2 h-full bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                              </div>
                              
                              <motion.div 
                                                animate={reduceMotion ? { rotate: 0 } : { rotate: [0, 360] }} 
                                                transition={reduceMotion ? { duration: 0.2 } : { duration: 8, repeat: Infinity, ease: "linear" }}
                                className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center backdrop-blur-md shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                              >
                                 <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                              </motion.div>
                              <span className="text-[8px] sm:text-[9px] text-primary font-bold mt-1.5 text-center px-2 py-0.5 bg-primary/10 rounded-full border border-primary/20 tracking-wider uppercase">Auto-Nurture</span>
                           </div>

                           {/* Result */}
                           <div className="flex flex-col items-center gap-1.5 z-10 w-1/3">
                              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.3)] relative">
                                 <motion.div animate={reduceMotion ? { opacity: 0.75 } : { scale: [1, 1.2, 1] }} transition={reduceMotion ? { duration: 0.2 } : { duration: 2, repeat: Infinity }} className="absolute inset-0 bg-primary/20 blur-[10px] rounded-full" />
                                 <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary relative z-10" />
                              </div>
                              <span className="text-[9px] sm:text-[10px] text-primary font-bold text-center leading-tight">Loyal<br/>Clients</span>
                           </div>
                        </div>

                        {/* Impact Metrics */}
                        <div className="grid grid-cols-2 gap-3 sm:gap-4 flex-1">
                           <div className="bg-slate-900/60 rounded-xl p-3 sm:p-4 border border-primary/20 flex flex-col justify-center relative overflow-hidden group hover:bg-slate-800/80 transition-colors">
                              <div className="absolute -right-4 -top-4 w-16 h-16 bg-primary/10 blur-[15px] rounded-full group-hover:bg-primary/20 transition-all pointer-events-none" />
                              <Target className="w-4 h-4 sm:w-5 sm:h-5 text-primary mb-2 relative z-10" />
                              <div className="text-foreground font-black text-xl sm:text-2xl tracking-tight relative z-10">3x</div>
                              <div className="text-[10px] sm:text-xs text-slate-400 font-medium relative z-10 mt-0.5">Faster Conversions</div>
                           </div>
                           <div className="bg-slate-900/60 rounded-xl p-3 sm:p-4 border border-primary/20 flex flex-col justify-center relative overflow-hidden group hover:bg-slate-800/80 transition-colors">
                              <div className="absolute -right-4 -top-4 w-16 h-16 bg-primary/10 blur-[15px] rounded-full group-hover:bg-primary/20 transition-all pointer-events-none" />
                              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-primary mb-2 relative z-10" />
                              <div className="text-foreground font-black text-xl sm:text-2xl tracking-tight relative z-10">+300%</div>
                              <div className="text-[10px] sm:text-xs text-slate-400 font-medium relative z-10 mt-0.5">Revenue Growth</div>
                           </div>
                        </div>
                    </div>
                 </motion.div>
               ) : (
                 <motion.div 
                    key="problem"
                    initial={{ opacity: 0, x: -20, filter: "blur(8px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, x: 20, filter: "blur(8px)" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute inset-0 flex flex-col h-full"
                 >
                    <div className="flex items-center gap-3 mb-4 sm:mb-5">
                       <div className="p-2 bg-primary/20 rounded-xl border border-primary/30">
                          <Star className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                       </div>
                       <div>
                          <h3 className="text-foreground font-bold text-sm sm:text-base">Strategic Problem Solving</h3>
                          <p className="text-primary/70 text-[10px] sm:text-xs">Transforming Roadblocks into the Best Solution</p>
                       </div>
                    </div>

                    <div className="flex-1 flex flex-col gap-3 sm:gap-4 relative h-full">
                        {/* The Transformation Flow Dashboard */}
                        <div className="flex items-center justify-between bg-slate-900/80 rounded-xl p-3 sm:p-5 border border-slate-700/50 relative overflow-hidden group">
                           <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-50" />
                           
                           {/* Client Problem */}
                           <div className="flex flex-col items-center gap-1.5 z-10 w-1/3">
                              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center relative shadow-[0_0_15px_rgba(244,63,94,0.15)]">
                                 <AlertTriangle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary relative z-10" />
                                 <motion.div animate={reduceMotion ? { rotate: 0 } : { rotate: 360 }} transition={reduceMotion ? { duration: 0.2 } : { duration: 4, repeat: Infinity, ease: "linear" }} className="absolute inset-0 rounded-full border border-primary/30 border-t-transparent border-l-transparent" />
                              </div>
                              <span className="text-[9px] sm:text-[10px] text-slate-400 font-medium text-center leading-tight">Client<br/>Challenge</span>
                           </div>

                           {/* The Processor / Solution Engine */}
                           <div className="flex flex-col items-center justify-center w-1/3 relative z-10 pt-2">
                              <div className="h-0.5 w-[140%] bg-slate-700/50 absolute top-3 sm:top-4 left-1/2 -translate-x-1/2 -z-10 rounded-full overflow-hidden">
                                                 <motion.div animate={reduceMotion ? { opacity: 0.9 } : { x: ["-100%", "200%"] }} transition={reduceMotion ? { duration: 0.2 } : { duration: 1.5, repeat: Infinity, ease: "linear" }} className="w-1/2 h-full bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
                              </div>
                              
                              <motion.div 
                                                animate={reduceMotion ? { scale: 1 } : { scale: [0.95, 1.05, 0.95] }} 
                                                transition={reduceMotion ? { duration: 0.2 } : { duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.2)]"
                              >
                                 <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                              </motion.div>
                              <span className="text-[8px] sm:text-[9px] text-primary font-bold mt-1.5 text-center px-2 py-0.5 bg-primary/10 rounded-full border border-primary/20 tracking-wider uppercase">Our Strategy</span>
                           </div>

                           {/* The Best Solution */}
                           <div className="flex flex-col items-center gap-1.5 z-10 w-1/3">
                              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center shadow-[0_0_15px_rgba(52,211,153,0.3)] relative">
                                 <div className="absolute inset-0 bg-primary/20 blur-[10px] rounded-full animate-pulse" />
                                 <Trophy className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary relative z-10" />
                              </div>
                              <span className="text-[9px] sm:text-[10px] text-primary font-bold text-center leading-tight">Best<br/>Solution</span>
                           </div>
                        </div>

                        {/* Impact Metrics */}
                        <div className="grid grid-cols-2 gap-3 sm:gap-4 flex-1">
                           <div className="bg-slate-900/60 rounded-xl p-3 sm:p-4 border border-primary/20 flex flex-col justify-center relative overflow-hidden group hover:bg-slate-800/80 transition-colors">
                              <div className="absolute -right-4 -top-4 w-16 h-16 bg-primary/10 blur-[15px] rounded-full group-hover:bg-primary/20 transition-all pointer-events-none" />
                              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-primary mb-2 relative z-10" />
                              <div className="text-foreground font-black text-xl sm:text-2xl tracking-tight relative z-10">10x</div>
                              <div className="text-[10px] sm:text-xs text-slate-400 font-medium relative z-10 mt-0.5">Value ROI Delivered</div>
                           </div>
                           <div className="bg-slate-900/60 rounded-xl p-3 sm:p-4 border border-primary/20 flex flex-col justify-center relative overflow-hidden group hover:bg-slate-800/80 transition-colors">
                              <div className="absolute -right-4 -top-4 w-16 h-16 bg-primary/10 blur-[15px] rounded-full group-hover:bg-primary/20 transition-all pointer-events-none" />
                              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary mb-2 relative z-10" />
                              <div className="text-foreground font-black text-xl sm:text-2xl tracking-tight relative z-10">100%</div>
                              <div className="text-[10px] sm:text-xs text-slate-400 font-medium relative z-10 mt-0.5">Goal Achievement</div>
                           </div>
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
   const reduceMotion = useReducedMotion() ?? false;
  const [wordIndex, setWordIndex] = useState(0);
  
  useEffect(() => {
      if (reduceMotion) {
         return;
      }

    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
   }, [reduceMotion]);

  return (
    <section className="relative min-h-[100vh] lg:min-h-[92vh] flex items-center pt-28 sm:pt-32 lg:pt-40 pb-16 sm:pb-24 overflow-hidden bg-background">
      {/* Premium Animated Tech Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)] opacity-40 -z-20" />
      
      {/* Vibrant Glowing Orbs */}
      <div className="absolute top-0 -translate-y-1/2 left-1/3 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-primary/20 via-primary/10 to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 translate-y-1/3 right-0 w-[700px] h-[600px] bg-gradient-to-t from-primary/10 via-primary/5 to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-8 items-center">
          
          {/* Text Content - The Surprise Glow UP */}
          <motion.div 
                  initial={reduceMotion ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col space-y-7"
          >
            <motion.div 
                     initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2.5 rounded-full bg-slate-900/80 border border-slate-700/50 backdrop-blur-md w-fit shadow-[0_0_20px_rgba(16,185,129,0.1)] gap-2.5 group cursor-default"
            >
              <Sparkles className="w-4 h-4 text-primary group-hover:scale-110 group-hover:text-primary transition-all" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-slate-200">
                Beyond Standard Development
              </span>
            </motion.div>

            <div className="space-y-4">
              <h1 className="text-[2.75rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground sm:leading-[1.1]">
                <span className="block mb-1 sm:mb-2 text-slate-300 text-[2rem] leading-tight sm:text-4xl md:text-5xl lg:text-6xl">Architecting Your</span>
                <div className="h-[1.25em] relative overflow-hidden mt-1 pb-2">
                  <AnimatePresence mode="popLayout">
                    <motion.span
                      key={wordIndex}
                                 initial={reduceMotion ? false : { y: 60, opacity: 0, rotateX: -90 }}
                      animate={{ y: 0, opacity: 1, rotateX: 0 }}
                                 exit={reduceMotion ? { opacity: 0 } : { y: -60, opacity: 0, rotateX: 90 }}
                      transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                      className="absolute min-w-max origin-bottom text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-primary drop-shadow-sm"
                    >
                      {words[wordIndex]}.
                    </motion.span>
                  </AnimatePresence>
                </div>
              </h1>
              <p className="text-sm sm:text-base md:text-[1.1rem] text-slate-400 max-w-xl leading-relaxed font-medium mt-4 sm:mt-0">
                        We don&apos;t just write code—we solve complex business bottlenecks. From high-converting <strong className="text-slate-200 font-bold">CRM platforms</strong> to robust <strong className="text-slate-200 font-bold">Technical Partnerships</strong>, we turn raw ideas into your ultimate competitive advantage.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                     <Link
                        href="/contact"
                className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 sm:min-h-[56px] text-base font-semibold text-foreground shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all hover:-translate-y-1 focus:outline-none w-full sm:w-auto overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                   Start Your Transformation <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
                </span>
                     </Link>
              
                               <a
                                    href="https://core-services-kappa.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700/50 bg-slate-800/30 px-8 py-4 sm:min-h-[56px] text-base font-semibold text-slate-300 hover:bg-slate-800 hover:text-foreground transition-all duration-300 hover:border-slate-600 hover:-translate-y-1 w-full sm:w-auto"
              >
                        <Zap className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" /> Our Core Services
                               </a>
            </div>

            {/* Social Proof & Trust Badges */}
            <motion.div 
                     initial={reduceMotion ? false : { opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mt-6 pt-8 border-t border-slate-800/80"
            >
               <div className="flex -space-x-3">
                  {[
                    { l: "A", c: "bg-primary" },
                    { l: "K", c: "bg-primary" },
                    { l: "T", c: "bg-primary" },
                    { l: "M", c: "bg-primary" }
                  ].map((usr, i) => (
                     <div key={i} className={`w-10 h-10 rounded-full border-2 border-[#030712] flex items-center justify-center text-xs font-bold text-foreground shadow-inner ${usr.c}`}>
                        {usr.l}
                     </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-[#030712] bg-gradient-to-br from-primary to-primary flex items-center justify-center text-[10px] font-bold text-foreground shadow-[0_0_15px_rgba(16,185,129,0.4)] relative z-10">
                     50+
                  </div>
               </div>
               <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-1 text-primary mb-1">
                     {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-current drop-shadow-[0_0_2px_rgba(250,204,21,0.8)]" />)}
                  </div>
                  <span className="text-xs text-slate-400 font-medium">Empowering visionary brands worldwide</span>
               </div>
               <div className="hidden sm:block w-[1px] h-10 bg-slate-800 mx-2" />
               <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 bg-slate-900/60 px-3 py-1.5 rounded-full border border-slate-800">
                  <Trophy className="w-4 h-4 text-primary" /> Premium Quality
               </div>
            </motion.div>
          </motion.div>

          {/* Visual Content Area */}
          <motion.div 
            initial={reduceMotion ? false : { opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center lg:justify-end py-12 lg:py-0 relative"
          >
             <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/10 blur-[100px] rounded-full pointer-events-none" />
             <HeroAnimatedVisual reduceMotion={reduceMotion} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
