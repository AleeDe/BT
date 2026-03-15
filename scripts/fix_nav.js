const fs = require("fs");
let code = fs.readFileSync("src/components/Navigation.tsx", "utf8");

const oldNav = `<header className="fixed top-0 left-0 w-full z-50 px-4 pt-4">
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="mx-auto max-w-7xl relative flex items-center justify-between rounded-2xl bg-[#0F172A]/80 backdrop-blur-xl shadow-[0_10px_30px_-12px_rgba(0,0,0,0.5)] border border-white/10 px-4 sm:px-6 py-3 sm:py-4"
        >`;

const newNav = `<header className="fixed top-0 left-0 w-full z-50">
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="w-full bg-[#0F172A]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.5)]"
        >
          <div className="mx-auto max-w-7xl relative flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4">`;

if (code.includes(`<header className="fixed top-0 left-0 w-full z-50 px-4 pt-4">`)) {
    code = code.replace(oldNav, newNav);
    // Also we need to close the extra div before closing nav
    code = code.replace(/<\/motion\.nav>\s*{\/\* Mobile Menu Dropdown \*\//, `</div>\n        </motion.nav>\n\n        {/* Mobile Menu Dropdown */`);
    fs.writeFileSync("src/components/Navigation.tsx", code);
    console.log("Fixed Nav");
} else {
    console.log("Nav not found");
}

