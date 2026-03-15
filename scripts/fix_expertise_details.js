const fs = require("fs");
let code = fs.readFileSync("src/components/ExpertiseShowcase.tsx", "utf8");

// Bad badges
code = code.replace(/bg-white\/5 border border-slate-200 text-xs font-semibold tracking-wider text-gray-300/g, "bg-blue-50 border border-blue-200 text-xs font-semibold tracking-wider text-blue-600");

// Icon colors to work better on white
code = code.replace(/text-emerald-400/g, "text-emerald-600");
code = code.replace(/bg-emerald-500\/20/g, "bg-emerald-100");
code = code.replace(/border-emerald-500\/30/g, "border-emerald-200");

code = code.replace(/text-purple-400/g, "text-purple-600");
code = code.replace(/bg-purple-500\/20/g, "bg-purple-100");
code = code.replace(/border-purple-500\/30/g, "border-purple-200");

// blue/indigo/cyan
code = code.replace(/bg-\[#2962FF\]\/20/g, "bg-[#2962FF]/10");
code = code.replace(/border-\[#2962FF\]\/30/g, "border-[#2962FF]/20");

code = code.replace(/bg-\[#00E5FF\]\/20/g, "bg-[#00E5FF]/10");
code = code.replace(/border-\[#00E5FF\]\/30/g, "border-[#00E5FF]/20");
code = code.replace(/text-\[#00E5FF\]/g, "text-[#00B0CC]"); // darker cyan for legibility

fs.writeFileSync("src/components/ExpertiseShowcase.tsx", code);
console.log("Fixed Expertise Details");

