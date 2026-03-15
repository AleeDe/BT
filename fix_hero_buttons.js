const fs = require("fs");
let code = fs.readFileSync("src/components/HeroSection.tsx", "utf8");

const oldClasses1 = `className="group relative px-8 py-4 sm:min-h-[56px] bg-white text-slate-950 rounded-full font-bold text-base overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] hover:-translate-y-1 transition-all duration-300"`;
const newClasses1 = `className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-[#2962FF] px-8 py-4 sm:min-h-[56px] text-base font-semibold text-white shadow-[0_0_20px_rgba(41,98,255,0.3)] hover:shadow-[0_0_30px_rgba(41,98,255,0.5)] transition-all hover:-translate-y-1 focus:outline-none w-full sm:w-auto overflow-hidden"`;

const oldDiv = `<div className="absolute inset-0 bg-gradient-to-r from-[#00E5FF]/10 to-[#2962FF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />`;
const newDiv = `<div className="absolute inset-0 bg-gradient-to-r from-[#2962FF] to-[#00E5FF] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />`;

const oldClasses2 = `className="group px-8 py-4 sm:min-h-[56px] rounded-full border border-slate-700 bg-slate-900/50 backdrop-blur-md text-white font-medium hover:bg-slate-800/80 hover:border-slate-500 transition-colors flex items-center justify-center gap-2 text-base"`;
const newClasses2 = `className="group inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700/50 bg-slate-800/30 px-8 py-4 sm:min-h-[56px] text-base font-semibold text-slate-300 hover:bg-slate-800 hover:text-white transition-all duration-300 hover:border-slate-600 hover:-translate-y-1 w-full sm:w-auto"`;

const oldZap = `<Zap className="w-5 h-5 text-yellow-400 group-hover:scale-110 transition-transform" />`;
const newZap = `<Zap className="w-5 h-5 text-[#00E5FF] group-hover:scale-110 transition-transform" />`;

if (code.includes(oldClasses1)) {
    code = code.replace(oldClasses1, newClasses1);
    code = code.replace(oldDiv, newDiv);
    code = code.replace(oldClasses2, newClasses2);
    code = code.replace(oldZap, newZap);
    fs.writeFileSync("src/components/HeroSection.tsx", code);
    console.log("Buttons fixed!");
} else {
    console.log("Cannot find exact match for Buttons. Did someone change something?");
}

