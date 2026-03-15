const fs = require("fs");
let page = fs.readFileSync("src/app/page.tsx", "utf8");
page = page.replace("bg-white text-slate-900", "bg-[#0A1128] text-white");
fs.writeFileSync("src/app/page.tsx", page);
console.log("Restored page.tsx");

