const fs = require("fs");
let code = fs.readFileSync("src/components/HeroSection.tsx", "utf8");

const importLineRegex = /import \{\s*([^}]+)\s*\} from "lucide-react";/;
if (importLineRegex.test(code)) {
    code = code.replace(importLineRegex, `import { $1, AlertTriangle, Cpu, Trophy, CheckCircle2 } from "lucide-react";`);
    fs.writeFileSync("src/components/HeroSection.tsx", code);
    console.log("Added missing lucide-react imports");
}

