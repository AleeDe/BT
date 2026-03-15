const fs = require("fs");
let code = fs.readFileSync("src/components/HeroSection.tsx", "utf8");

const heroAnimatedVisualRegex = /function HeroAnimatedVisual\(\) \{[\s\S]*?return \([\s\S]*?<\/div>\s+\);\s+\}/;

const newVisual = `function HeroAnimatedVisual() {
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
            <button onClick={() => setActiveCard(1)} className={\`h-1.5 rounded-full transition-all duration-300 \${activeCard === 1 ? "w-8 bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.8)]" : "w-4 bg-slate-700"}\`} aria-label="Show Problem Solving" />
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
                    key="problem"
                    initial={{ opacity: 0, x: -20, filter: "blur(8px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, x: 20, filter: "blur(8px)" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute inset-0 flex flex-col h-full"
                 >
                    <div className="flex items-center gap-3 mb-4 sm:mb-5">
                       <div className="p-2 bg-purple-500/20 rounded-xl border border-purple-500/30">
                          <Star className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                       </div>
                       <div>
                          <h3 className="text-white font-bold text-sm sm:text-base">Strategic Problem Solving</h3>
                          <p className="text-purple-300/70 text-[10px] sm:text-xs">Transforming Roadblocks into the Best Solution</p>
                       </div>
                    </div>

                    <div className="flex-1 flex flex-col gap-3 sm:gap-4 relative h-full">
                        {/* The Transformation Flow Dashboard */}
                        <div className="flex items-center justify-between bg-slate-900/80 rounded-xl p-3 sm:p-5 border border-slate-700/50 relative overflow-hidden group">
                           <div className="absolute inset-0 bg-gradient-to-r from-rose-500/5 via-transparent to-emerald-500/5 opacity-50" />
                           
                           {/* Client Problem */}
                           <div className="flex flex-col items-center gap-1.5 z-10 w-1/3">
                              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center relative shadow-[0_0_15px_rgba(244,63,94,0.15)]">
                                 <AlertTriangle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-400 relative z-10" />
                                 <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="absolute inset-0 rounded-full border border-rose-500/30 border-t-transparent border-l-transparent" />
                              </div>
                              <span className="text-[9px] sm:text-[10px] text-slate-400 font-medium text-center leading-tight">Client<br/>Challenge</span>
                           </div>

                           {/* The Processor / Solution Engine */}
                           <div className="flex flex-col items-center justify-center w-1/3 relative z-10 pt-2">
                              <div className="h-0.5 w-[140%] bg-slate-700/50 absolute top-3 sm:top-4 left-1/2 -translate-x-1/2 -z-10 rounded-full overflow-hidden">
                                 <motion.div animate={{ x: ["-100%", "200%"] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} className="w-1/2 h-full bg-gradient-to-r from-transparent via-purple-400 to-transparent shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
                              </div>
                              
                              <motion.div 
                                animate={{ scale: [0.95, 1.05, 0.95] }} 
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.2)]"
                              >
                                 <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                              </motion.div>
                              <span className="text-[8px] sm:text-[9px] text-purple-300 font-bold mt-1.5 text-center px-2 py-0.5 bg-purple-500/10 rounded-full border border-purple-500/20 tracking-wider uppercase">Our Strategy</span>
                           </div>

                           {/* The Best Solution */}
                           <div className="flex flex-col items-center gap-1.5 z-10 w-1/3">
                              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(52,211,153,0.3)] relative">
                                 <div className="absolute inset-0 bg-emerald-400/20 blur-[10px] rounded-full animate-pulse" />
                                 <Trophy className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 relative z-10" />
                              </div>
                              <span className="text-[9px] sm:text-[10px] text-emerald-300 font-bold text-center leading-tight">Best<br/>Solution</span>
                           </div>
                        </div>

                        {/* Impact Metrics */}
                        <div className="grid grid-cols-2 gap-3 sm:gap-4 flex-1">
                           <div className="bg-slate-900/60 rounded-xl p-3 sm:p-4 border border-emerald-500/20 flex flex-col justify-center relative overflow-hidden group hover:bg-slate-800/80 transition-colors">
                              <div className="absolute -right-4 -top-4 w-16 h-16 bg-emerald-500/10 blur-[15px] rounded-full group-hover:bg-emerald-500/20 transition-all pointer-events-none" />
                              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 mb-2 relative z-10" />
                              <div className="text-white font-black text-xl sm:text-2xl tracking-tight relative z-10">10x</div>
                              <div className="text-[10px] sm:text-xs text-slate-400 font-medium relative z-10 mt-0.5">Value ROI Delivered</div>
                           </div>
                           <div className="bg-slate-900/60 rounded-xl p-3 sm:p-4 border border-blue-500/20 flex flex-col justify-center relative overflow-hidden group hover:bg-slate-800/80 transition-colors">
                              <div className="absolute -right-4 -top-4 w-16 h-16 bg-blue-500/10 blur-[15px] rounded-full group-hover:bg-blue-500/20 transition-all pointer-events-none" />
                              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mb-2 relative z-10" />
                              <div className="text-white font-black text-xl sm:text-2xl tracking-tight relative z-10">100%</div>
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
}`;

if(heroAnimatedVisualRegex.test(code)) {
    code = code.replace(heroAnimatedVisualRegex, newVisual);
    fs.writeFileSync("src/components/HeroSection.tsx", code);
    console.log("Successfully replaced the Whole Visual Function");
} else {
    console.log("Failed to match Regex");
}

