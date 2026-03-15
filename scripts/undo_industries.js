const fs = require("fs");
let code = fs.readFileSync("src/components/IndustriesSection.tsx", "utf8");

// Revert containers
code = code.replace(/bg-slate-50/g, "bg-[#0A1128]");
code = code.replace(/bg-white border-\[#2962FF\]\/50 shadow-md text-\[#2962FF\]/g, "bg-slate-800 border-[#2962FF]/50 shadow-[0_0_15px_rgba(41,98,255,0.25)] text-slate-900");
code = code.replace(/"bg-\[#0A1128\] border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900"/g, `"bg-slate-800/30 border-slate-700/50 text-slate-400 hover:bg-slate-800/60 hover:text-slate-200"`);
code = code.replace(/bg-\[#0A1128\] border-slate-200 shadow-sm/g, "bg-slate-800/80 border-slate-700/50");
code = code.replace(/bg-white border border-slate-200 shadow-sm/g, "bg-slate-800/50 border border-slate-700");

// Some cases of bg-white might still be there for the main background:
code = code.replace(/bg-white/g, "bg-[#0A1128]");

// Revert text
code = code.replace(/text-slate-600/g, "text-slate-400");
code = code.replace(/text-slate-700/g, "text-slate-300");
code = code.replace(/text-slate-900/g, "text-white");
// wait, the button was text-slate-900 (black on blue) previously, let us check.
// I replaced: `bg-[#2962FF] text-white` -> wait, earlier it was `bg-[#2962FF] text-slate-900`. 
code = code.replace(/bg-\[#2962FF\] text-white/g, "bg-[#2962FF] text-white"); // Actually we can just leave it text-white or white, let us see. The original code for the CTA: `bg-[#2962FF] text-slate-900`.
code = code.replace(/bg-\[#2962FF\] text-white/g, "bg-[#2962FF] text-white");

// Explore link revert
code = code.replace(/border-slate-200 bg-\[#0A1128\] px-6 py-2\.5 text-sm font-semibold text-slate-400 hover:bg-\[#0A1128\] hover:text-white transition-all duration-300/g, 
"border-slate-700/50 bg-slate-800/30 px-6 py-2.5 text-sm font-semibold text-slate-300 hover:bg-slate-800 hover:text-white transition-all duration-300 hover:border-slate-600");

// Revert Icons
code = code.replace(/text-emerald-500/g, "text-emerald-400");
code = code.replace(/bg-emerald-50/g, "bg-emerald-500/10");

// Revert blur
code = code.replace(/bg-\[#2962FF\]\/10 rounded-full blur-\[100px\]/g, "bg-[#2962FF]/10 rounded-full blur-[120px]");

fs.writeFileSync("src/components/IndustriesSection.tsx", code);
console.log("Restored Industries");

