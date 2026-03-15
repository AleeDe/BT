const fs = require("fs");
let code = fs.readFileSync("src/components/Navigation.tsx", "utf8");
code = code.replace(/\{\/\* Mobile Menu Dropdown \*\//g, "{/* Mobile Menu Dropdown */}");
fs.writeFileSync("src/components/Navigation.tsx", code);
console.log("Fixed JSX Comment");

