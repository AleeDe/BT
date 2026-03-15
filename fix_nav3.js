const fs = require("fs");
let code = fs.readFileSync("src/components/Navigation.tsx", "utf8");

// We know the broken part is around Mobile Menu Dropdown
// let us find all of AnimatePresence and above
const replaceRegex = /<\/div>\s*<\/motion\.nav>\s*\{\/\* Mobile Menu Dropdown .*\s*<AnimatePresence>/m;
if(replaceRegex.test(code)){
    code = code.replace(replaceRegex, `</div>\n        </motion.nav>\n\n        {/* Mobile Menu Dropdown */}\n        <AnimatePresence>`);
    fs.writeFileSync("src/components/Navigation.tsx", code);
    console.log("Fixed extra braces");
} else {
    console.log("Not found :(");
}

