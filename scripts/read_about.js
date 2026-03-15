const fs = require("fs");
let code = fs.readFileSync("src/app/about/page.tsx", "utf8");
console.log(code);

