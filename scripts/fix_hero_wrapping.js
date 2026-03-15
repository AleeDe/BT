const fs = require("fs");
let code = fs.readFileSync("src/components/HeroSection.tsx", "utf8");

code = code.replace(/className="absolute origin-bottom text-transparent/g, 
  `className="absolute min-w-max origin-bottom text-transparent`);

fs.writeFileSync("src/components/HeroSection.tsx", code);

