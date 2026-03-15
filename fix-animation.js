const fs = require("fs");
let code = fs.readFileSync("src/components/HeroSection.tsx", "utf8");

const oldBlockRegex = /<div className="flex-1 flex flex-col sm:flex-row gap-3 sm:gap-4">.*?(?=<div className="mt-4 sm:mt-5 bg-slate-900\/80 rounded-xl p-3 sm:p-4 border border-slate-700\/50 flex justify-between items-center">)/s;

const newBlock = `<div className="flex-1 flex flex-col sm:flex-row gap-3 sm:gap-4 relative">
                       {/* Seamless Connection Line (Animated Data Flow) */}
                       <div className="absolute top-1/2 left-[20%] right-[20%] h-[2px] bg-slate-700/50 -translate-y-1/2 hidden sm:block z-0 overflow-hidden rounded-full">
                          <motion.div animate={{ x: ["-100%", "400%"] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} className="w-1/4 h-full bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent shadow-[0_0_10px_rgba(0,229,255,0.8)]" />
                       </div>
                       <div className="absolute left-1/2 top-[20%] bottom-[20%] w-[2px] bg-slate-700/50 -translate-x-1/2 sm:hidden z-0 overflow-hidden rounded-full">
                          <motion.div animate={{ y: ["-100%", "400%"] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} className="h-1/4 w-full bg-gradient-to-b from-transparent via-[#00E5FF] to-transparent shadow-[0_0_10px_rgba(0,229,255,0.8)]" />
                       </div>

                       {/* Frontend Node - Reflected Value */}
                       <div className="flex-1 rounded-xl bg-slate-900/95 border border-blue-500/30 p-3 flex flex-col relative z-10 shadow-[0_0_15px_rgba(59,130,246,0.15)] group backdrop-blur-md hover:border-blue-500/50 transition-colors">
                          <div className="text-[10px] sm:text-[11px] font-bold text-blue-400 mb-2.5 flex items-center gap-1.5 uppercase tracking-wider">
                             <Globe className="w-3.5 h-3.5 text-blue-400" /> Engaging Frontend
                          </div>
                          <div className="flex-1 flex flex-col gap-2 justify-center px-1 mb-1">
                             <div className="w-full h-7 sm:h-8 bg-slate-800/80 rounded border border-slate-700/50 relative overflow-hidden flex items-center px-2">
                                <motion.div animate={{ x: ["-100%", "200%"] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12" />
                                <div className="h-2 w-1/3 bg-blue-500/40 rounded-full" />
                             </div>
                             <div className="flex gap-2">
                                <div className="h-7 sm:h-8 flex-1 bg-slate-800/80 rounded border border-slate-700/50 flex items-center justify-center">
                                   <div className="w-4 h-1.5 bg-slate-600 rounded-full" />
                                </div>
                                <div className="h-7 sm:h-8 w-10 bg-slate-800/80 rounded border border-slate-700/50 flex items-center justify-center">
                                   <div className="w-2 h-2 rounded-full bg-blue-400/50 group-hover:bg-blue-400 transition-colors" />
                                </div>
                             </div>
                          </div>
                          <div className="mt-2 text-[9px] sm:text-[10px] text-slate-300 flex justify-between items-center bg-blue-500/10 px-2 py-1.5 rounded border border-blue-500/20">
                             <span>LCP Load Time</span>
                             <span className="text-blue-300 font-bold flex items-center gap-1"><Zap className="w-2.5 h-2.5" /> &lt;0.6s</span>
                          </div>
                       </div>

                       {/* Backend Node - Reflected Value */}
                       <div className="flex-1 rounded-xl bg-slate-900/95 border border-emerald-500/30 p-3 flex flex-col relative z-10 shadow-[0_0_15px_rgba(52,211,153,0.1)] group backdrop-blur-md hover:border-emerald-500/50 transition-colors">
                          <div className="text-[10px] sm:text-[11px] font-bold text-emerald-400 mb-2.5 flex items-center gap-1.5 uppercase tracking-wider">
                             <Database className="w-3.5 h-3.5 text-emerald-400" /> Robust Backend
                          </div>
                          <div className="flex-1 flex gap-2 justify-center items-center mb-1 relative">
                             {[1,2,3].map((node, i) => (
                                <motion.div 
                                   key={i}
                                   animate={{ y: [0, -3, 0] }}
                                   transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
                                   className="flex-1 h-12 sm:h-14 bg-slate-800/80 rounded border border-emerald-500/20 flex flex-col items-center justify-between py-1.5 relative overflow-hidden"
                                >
                                   <div className="w-full h-1 bg-emerald-500/20 absolute top-0" />
                                   <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_5px_rgba(52,211,153,0.8)] animate-pulse" />
                                   <div className="w-3 h-0.5 bg-slate-600 rounded-full" />
                                   <div className="w-3 h-0.5 bg-slate-600 rounded-full" />
                                </motion.div>
                             ))}
                          </div>
                          <div className="mt-2 text-[9px] sm:text-[10px] text-slate-300 flex justify-between items-center bg-emerald-500/10 px-2 py-1.5 rounded border border-emerald-500/20">
                             <span>API Processing</span>
                             <span className="text-emerald-300 font-bold flex items-center gap-1"><Cpu className="w-2.5 h-2.5" /> 10k+/s</span>
                          </div>
                       </div>
                    </div>
                    `;

if(oldBlockRegex.test(code)) {
    code = code.replace(oldBlockRegex, newBlock);
    fs.writeFileSync("src/components/HeroSection.tsx", code);
    console.log("Replaced animation successfully!");
} else {
    console.log("Could not find the block to replace.");
}

