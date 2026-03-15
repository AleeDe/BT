const fs = require("fs");
let code = fs.readFileSync("src/components/IndustriesSection.tsx", "utf8");

// Section background is probably bg-white, but previous classes left dark artifacts:
// Tabs active
code = code.replace(/isActive\s*\?\s*"bg-slate-800 border-\[#2962FF\]\/50\s*shadow-\[0_0_15px_rgba\(41,98,255,0\.25\)\] text-slate-900"/g, 
    `isActive ? "bg-white border-[#2962FF]/50 shadow-md text-[#2962FF]"` );

// Tabs inactive
code = code.replace(/"bg-slate-800\/30 border-slate-700\/50 text-slate-400\s*hover:bg-slate-800\/60 hover:text-slate-200"/g, 
    `"bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900"`);

// Text colors
code = code.replace(/text-slate-400/g, "text-slate-600");
code = code.replace(/text-slate-300/g, "text-slate-700");

// Emerald icons 
code = code.replace(/text-emerald-400/g, "text-emerald-500");
code = code.replace(/bg-emerald-500\/10/g, "bg-emerald-50");

// The CTA Button which I wrongly made text-slate-900 but is blue:
code = code.replace(/bg-\[#2962FF\] text-slate-900/g, "bg-[#2962FF] text-white");
// Explore link which was dark:
code = code.replace(/border-slate-700\/50 bg-slate-800\/30 px-6 py-2\.5 text-sm font-semibold\s*text-slate-300 hover:bg-slate-800 hover:text-slate-900 transition-all\s*duration-300 hover:border-slate-600/g,
    `border-slate-200 bg-white px-6 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-all duration-300`);

code = code.replace(/bg-slate-800\/80 border-slate-700\/50/g, "bg-slate-50 border-slate-200 shadow-sm");
code = code.replace(/bg-slate-800\/50 border border-slate-700/g, "bg-white border border-slate-200 shadow-sm");
code = code.replace(/bg-slate-900\/50/g, "bg-white");
// If there is any glass-panel or such
code = code.replace(/bg-\[#0A1128\]/g, "bg-slate-50");
code = code.replace(/bg-\[#2962FF\]\/10 rounded-full blur-\[120px\]/g, "bg-[#2962FF]/10 rounded-full blur-[100px]");

fs.writeFileSync("src/components/IndustriesSection.tsx", code);
console.log("Fixed Industries");

