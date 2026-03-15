const fs = require("fs");
let code = fs.readFileSync("src/components/HeroSection.tsx", "utf8");

code = code.replace(/<div className="container mx-auto px-4 md:px-6 relative z-10">/, `<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">`);

fs.writeFileSync("src/components/HeroSection.tsx", code);
console.log("Fixed Hero Padding");

