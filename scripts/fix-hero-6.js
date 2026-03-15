const fs = require("fs");
let code = fs.readFileSync("src/components/HeroSection.tsx", "utf8");
code = "\"use client\";\n" + code;
fs.writeFileSync("src/components/HeroSection.tsx", code);
console.log("Added use client");

