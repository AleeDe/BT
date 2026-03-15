const fs = require("fs");
let code = fs.readFileSync("src/components/ExpertiseShowcase.tsx", "utf8");

// Change container bg
code = code.replace(/bg-white relative overflow-hidden/g, "bg-slate-50 relative overflow-hidden");

// Change spotlight card
code = code.replace(/bg-white overflow-hidden/g, "bg-white overflow-hidden shadow-xl shadow-slate-200/50");

// Spotlight Card glow colors (the radial gradients)
// from rgba(0, 229, 255, 0.15) to rgba(0, 229, 255, 0.05) or something similar, cyan is fine, but maybe light blue? 
// Actually rgba(0, 229, 255, 0.15) is fine on white, it will be a faint cyan. Let us keep it, maybe bump opacity.
code = code.replace(/rgba\(0, 229, 255, 0\.15\)/g, "rgba(0, 229, 255, 0.25)");
code = code.replace(/rgba\(41, 98, 255, 0\.1\)/g, "rgba(41, 98, 255, 0.15)");

// Text color of the heading text-transparent bg-gradient-to-r from-[...]
// "from-[#00E5FF] to-[#2962FF]" is fine (Cyan to Indigo).

// Cards with absolute bg-gradient glows inside:
// from-[#2962FF]\/10 is fine on white

// "group-hover:opacity-100 bg-[#2962FF]/10 z-0" - fine.

// What about text inside the cards? 
code = code.replace(/bg-\[#2962FF\]\/10 text-\[#2962FF\]/g, "bg-blue-50 text-[#2962FF]");
code = code.replace(/text-slate-900 mb-3/g, "text-slate-900 mb-3 group-hover:text-[#2962FF] transition-colors"); 
// Let us leave the text-slate-900 alone unless it is broken

// The Trust Ticker mask-gradient-edges
// <div className="relative w-full max-w-7xl flex overflow-hidden mask-gradient-edges">

fs.writeFileSync("src/components/ExpertiseShowcase.tsx", code);
console.log("Fixed Expertise");

