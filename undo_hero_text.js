const fs = require("fs");
let code = fs.readFileSync("src/components/HeroSection.tsx", "utf8");
code = code.replace(/<section className="relative min-h-\[92vh\] flex items-center pt-32 pb-24 overflow-hidden bg-\[#030712\] text-white">/, `<section className="relative min-h-[92vh] flex items-center pt-32 pb-24 overflow-hidden bg-[#030712]">`);
fs.writeFileSync("src/components/HeroSection.tsx", code);

