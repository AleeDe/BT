const fs = require("fs");
let code = fs.readFileSync("src/components/Navigation.tsx", "utf8");

// Fix the closing div issue first by removing it if it exists
code = code.replace(/<\/div>\n\s*<\/motion\.nav>/g, "</motion.nav>");

// Now let us replace the whole start
const regex = /<header className="[\s\S]*?<Link href="\/" className=/;
const cleanStart = `<header className="fixed top-0 left-0 w-full z-50">\n      <motion.nav\n        initial={{ opacity: 0, y: -10 }}\n        animate={{ opacity: 1, y: 0 }}\n        transition={{ duration: 0.25, ease: "easeOut" }}\n        className="w-full bg-[#0F172A]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.5)]"\n      >\n        <div className="mx-auto w-full max-w-7xl relative flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4">\n\n        {/* Logo */}\n        <Link href="/" className=`;

code = code.replace(regex, cleanStart);

// Since we added a <div> over the children of motion.nav, we need to close it before </motion.nav>
code = code.replace(/<\/motion\.nav>/, "</div>\n      </motion.nav>");

fs.writeFileSync("src/components/Navigation.tsx", code);
console.log("Full fix applied");

