const fs = require("fs");
let code = fs.readFileSync("src/components/ExpertiseShowcase.tsx", "utf8");

// Revert text colors
code = code.replace(/text-slate-900/g, "text-white");
code = code.replace(/text-slate-600/g, "text-gray-400");
code = code.replace(/text-slate-500/g, "text-gray-500");

// Revert borders
code = code.replace(/border-slate-200/g, "border-white/10");
code = code.replace(/border-slate-100/g, "border-white/5");

// Revert containers
code = code.replace(/bg-slate-50 relative overflow-hidden/g, "bg-[#050814] relative overflow-hidden");
code = code.replace(/bg-white overflow-hidden shadow-xl shadow-slate-200\/50/g, "bg-[#0A1128] overflow-hidden");

// Revert Badges
code = code.replace(/bg-blue-50 border border-blue-200 text-xs font-semibold tracking-wider text-blue-600/g, "bg-white/5 border border-white/10 text-xs font-semibold tracking-wider text-gray-300");

// Revert Icons
code = code.replace(/text-emerald-600/g, "text-emerald-400");
code = code.replace(/bg-emerald-100/g, "bg-emerald-500/20");
code = code.replace(/border-emerald-200/g, "border-emerald-500/30");

code = code.replace(/text-purple-600/g, "text-purple-400");
code = code.replace(/bg-purple-100/g, "bg-purple-500/20");
code = code.replace(/border-purple-200/g, "border-purple-500/30");

code = code.replace(/bg-\[#2962FF\]\/10/g, "bg-[#2962FF]/20");
code = code.replace(/border-\[#2962FF\]\/20/g, "border-[#2962FF]/30");
code = code.replace(/bg-blue-50 text-\[#2962FF\]/g, "bg-[#2962FF]/20 text-[#2962FF]");

code = code.replace(/bg-\[#00E5FF\]\/10/g, "bg-[#00E5FF]/20");
code = code.replace(/border-\[#00E5FF\]\/20/g, "border-[#00E5FF]/30");
code = code.replace(/text-\[#00B0CC\]/g, "text-[#00E5FF]");

// Glows
code = code.replace(/rgba\(0, 229, 255, 0\.25\)/g, "rgba(0, 229, 255, 0.15)");
code = code.replace(/rgba\(41, 98, 255, 0\.15\)/g, "rgba(41, 98, 255, 0.1)");

fs.writeFileSync("src/components/ExpertiseShowcase.tsx", code);
console.log("Restored ExpertiseShowcase.tsx");

