const fs = require("fs");
let code = fs.readFileSync("src/components/SubsidiaryEcosystem.tsx", "utf8");

// Revert containers
code = code.replace(/bg-white/g, "bg-[#0A1128]");

// Revert text colors exactly as convert_to_light.js replaced them:
code = code.replace(/text-slate-900/g, "text-white");
code = code.replace(/text-slate-600/g, "text-gray-400");
code = code.replace(/text-slate-500/g, "text-gray-500");
code = code.replace(/border-slate-200/g, "border-white/10");
code = code.replace(/border-slate-100/g, "border-white/5");

fs.writeFileSync("src/components/SubsidiaryEcosystem.tsx", code);
console.log("Restored SubsidiaryEcosystem");

