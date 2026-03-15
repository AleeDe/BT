const fs = require("fs");

function convertFile(filePath) {
    let code = fs.readFileSync(filePath, "utf8");

    // General background and text color changes
    code = code.replace(/bg-\[#0A1128\]/g, "bg-white");
    code = code.replace(/bg-\[#050814\]/g, "bg-white");
    
    // For cards that used #0A1128 but are inside white background
    // wait, if we replace all bg-[#0A1128] to bg-white, the cards will be white. To differentiate them:
    // let s use bg-slate-50 or bg-white with shadow
    code = code.replace(/className="([^"]*)bg-white([^"]*)"/g, (match, p1, p2) => {
        // Just leave as bg-white, but if it needs a border it will have it
        return match;
    });

    // Replace text-white to text-slate-900 (careful with hover:text-white)
    code = code.replace(/\btext-white\b/g, "text-slate-900");
    // Replace text-gray-400 to text-slate-600
    code = code.replace(/text-gray-400/g, "text-slate-600");
    // text-gray-500 to text-slate-500
    code = code.replace(/text-gray-500/g, "text-slate-500");
    // border-white/10 to border-slate-200
    code = code.replace(/border-white\/10/g, "border-slate-200");
    // border-white/5 to border-slate-100
    code = code.replace(/border-white\/5/g, "border-slate-100");
    // hover:text-white to hover:text-slate-900
    // actually, text-white was already replaced to text-slate-900 so hover:text-white became hover:text-slate-900

    fs.writeFileSync(filePath, code);
    console.log("Converted " + filePath);
}

convertFile("src/components/ExpertiseShowcase.tsx");
convertFile("src/components/IndustriesSection.tsx");
convertFile("src/components/SubsidiaryEcosystem.tsx");

// Fix App Page
let pageCode = fs.readFileSync("src/app/page.tsx", "utf8");
pageCode = pageCode.replace("bg-[#0A1128] text-white", "bg-white text-slate-900");
fs.writeFileSync("src/app/page.tsx", pageCode);
console.log("Converted page.tsx");

