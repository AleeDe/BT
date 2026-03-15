const fs = require("fs");
let code = fs.readFileSync("src/components/Navigation.tsx", "utf8");

// Change "Our Divisions" label
code = code.replace(/Our Divisions/g, "Services");

// Add an item to the Desktop Dropdown
const desktopReplaceRegex = /<div className="mt-2 rounded-2xl bg-\[#020617\] border border-white\/10 shadow-2xl overflow-hidden flex flex-col p-2">\s*<a href="#apex"/;
const newDesktopItems = `<div className="mt-2 rounded-2xl bg-[#020617] border border-white/10 shadow-2xl overflow-hidden flex flex-col p-2">
                  <a href="#services" className="group/item flex items-center gap-3 rounded-xl px-3 py-3 hover:bg-white/5 transition mb-1">
                    <div className="h-9 w-9 rounded-xl bg-white/5 border border-white/10 grid place-items-center">
                      <span className="h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.6)]" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-semibold text-gray-100">View Our Services</span>
                      </div>
                      <p className="text-xs text-gray-400 line-clamp-2 mt-0.5">Solving bottlenecks via powerful Full-Stack & CRM solutions</p>
                    </div>
                  </a>
                  <a href="https://apex-accelerator.com" target="_blank" rel="noopener noreferrer"`;

code = code.replace(desktopReplaceRegex, newDesktopItems);
code = code.replace(/<a href="#shiftdeploy"/g, `<a href="https://shiftdeploy.com" target="_blank" rel="noopener noreferrer"`);

// For the Mobile dropdown
const mobileReplaceRegex = /<div className="pl-3 space-y-1 border-l-2 border-white\/10">\s*<a href="#apex"/;
const newMobileItems = `<div className="pl-3 space-y-1 border-l-2 border-white/10">
                     <a href="#services" className="flex items-center gap-2 text-gray-300 py-3 min-h-[44px] hover:text-purple-400 transition-colors rounded-lg hover:bg-white/5 px-2">
                       View Our Services
                     </a>
                     <a href="https://apex-accelerator.com" target="_blank" rel="noopener noreferrer"`;

code = code.replace(mobileReplaceRegex, newMobileItems);

fs.writeFileSync("src/components/Navigation.tsx", code);

