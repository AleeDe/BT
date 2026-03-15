const fs = require("fs");
let code = fs.readFileSync("src/components/HeroSection.tsx", "utf8");

// Regex to capture the first motion.div block which is key="crm"
const oldCrmRegex = /<motion\.div\s+key="crm"[\s\S]*?<\/motion\.div>/;

const newCrm = `<motion.div 
                    key="crm"
                    initial={{ opacity: 0, x: -20, filter: "blur(8px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, x: 20, filter: "blur(8px)" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute inset-0 flex flex-col h-full"
                 >
                    <div className="flex items-center gap-3 mb-4 sm:mb-5">
                       <div className="p-2 bg-indigo-500/20 rounded-xl border border-indigo-500/30">
                          <Users className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400" />
                       </div>
                       <div>
                          <h3 className="text-white font-bold text-sm sm:text-base">CRM Intelligence</h3>
                          <p className="text-indigo-300/70 text-[10px] sm:text-xs">Automating Connections into Revenue</p>
                       </div>
                    </div>

                    <div className="flex-1 flex flex-col gap-3 sm:gap-4 relative h-full">
                        {/* The Ecosystem Dashboard */}
                        <div className="flex items-center justify-between bg-slate-900/80 rounded-xl p-3 sm:p-5 border border-slate-700/50 relative overflow-hidden group">
                           <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-indigo-500/5 opacity-50" />
                           
                           {/* Source */}
                           <div className="flex flex-col items-center gap-1.5 z-10 w-1/3">
                              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center relative shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                                 <Database className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400 relative z-10" />
                                 <div className="absolute inset-0 bg-blue-400/20 blur-[10px] rounded-full animate-pulse" />
                              </div>
                              <span className="text-[9px] sm:text-[10px] text-slate-400 font-medium text-center leading-tight">Data<br/>Ingestion</span>
                           </div>

                           {/* The Processor */}
                           <div className="flex flex-col items-center justify-center w-1/3 relative z-10 pt-2">
                              <div className="h-0.5 w-[140%] bg-slate-700/50 absolute top-3 sm:top-4 left-1/2 -translate-x-1/2 -z-10 rounded-full overflow-hidden">
                                 <motion.div animate={{ x: ["-100%", "200%"] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="w-1/2 h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                              </div>
                              
                              <motion.div 
                                animate={{ rotate: [0, 360] }} 
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center backdrop-blur-md shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                              >
                                 <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                              </motion.div>
                              <span className="text-[8px] sm:text-[9px] text-cyan-300 font-bold mt-1.5 text-center px-2 py-0.5 bg-cyan-500/10 rounded-full border border-cyan-500/20 tracking-wider uppercase">Auto-Nurture</span>
                           </div>

                           {/* Result */}
                           <div className="flex flex-col items-center gap-1.5 z-10 w-1/3">
                              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.3)] relative">
                                 <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} className="absolute inset-0 bg-indigo-400/20 blur-[10px] rounded-full" />
                                 <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-400 relative z-10" />
                              </div>
                              <span className="text-[9px] sm:text-[10px] text-indigo-300 font-bold text-center leading-tight">Loyal<br/>Clients</span>
                           </div>
                        </div>

                        {/* Impact Metrics */}
                        <div className="grid grid-cols-2 gap-3 sm:gap-4 flex-1">
                           <div className="bg-slate-900/60 rounded-xl p-3 sm:p-4 border border-cyan-500/20 flex flex-col justify-center relative overflow-hidden group hover:bg-slate-800/80 transition-colors">
                              <div className="absolute -right-4 -top-4 w-16 h-16 bg-cyan-500/10 blur-[15px] rounded-full group-hover:bg-cyan-500/20 transition-all pointer-events-none" />
                              <Target className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 mb-2 relative z-10" />
                              <div className="text-white font-black text-xl sm:text-2xl tracking-tight relative z-10">3x</div>
                              <div className="text-[10px] sm:text-xs text-slate-400 font-medium relative z-10 mt-0.5">Faster Conversions</div>
                           </div>
                           <div className="bg-slate-900/60 rounded-xl p-3 sm:p-4 border border-indigo-500/20 flex flex-col justify-center relative overflow-hidden group hover:bg-slate-800/80 transition-colors">
                              <div className="absolute -right-4 -top-4 w-16 h-16 bg-indigo-500/10 blur-[15px] rounded-full group-hover:bg-indigo-500/20 transition-all pointer-events-none" />
                              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400 mb-2 relative z-10" />
                              <div className="text-white font-black text-xl sm:text-2xl tracking-tight relative z-10">+300%</div>
                              <div className="text-[10px] sm:text-xs text-slate-400 font-medium relative z-10 mt-0.5">Revenue Growth</div>
                           </div>
                        </div>
                    </div>
                 </motion.div>`;

if(oldCrmRegex.test(code)) {
    code = code.replace(oldCrmRegex, newCrm);
                   
    // Also inject Heart if not present
    const importLineRegex = /import \{\s*([^}]+)\s*\} from "lucide-react";/;
    const match = code.match(importLineRegex);
    if(match && !match[1].includes("Heart")) {
        const imports = match[1].split(",").map(i => i.trim());
        const uniqueImports = [...new Set([...imports, "Heart"])];
        code = code.replace(importLineRegex, `import { ${uniqueImports.join(", ")} } from "lucide-react";`);
    }

    fs.writeFileSync("src/components/HeroSection.tsx", code);
    console.log("Successfully overhauled the CRM card and added Heart icon");
} else {
    console.log("Failed to match Regex");
}

