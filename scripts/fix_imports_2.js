const fs = require("fs");
let code = fs.readFileSync("src/components/HeroSection.tsx", "utf8");

const importLineRegex = /import \{\s*([^}]+)\s*\} from "lucide-react";/;
const match = code.match(importLineRegex);

if (match) {
    const imports = match[1].split(",").map(i => i.trim());
    const uniqueImports = [...new Set([...imports, "AlertTriangle", "Cpu", "Trophy", "CheckCircle2"])];
    code = code.replace(importLineRegex, `import { ${uniqueImports.join(", ")} } from "lucide-react";`);
    fs.writeFileSync("src/components/HeroSection.tsx", code);
    console.log("Fixed imports to be unique");
}

