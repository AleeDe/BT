const fs = require("fs");
let code = fs.readFileSync("src/components/HeroSection.tsx", "utf8");

// 1. Fix Section padding
code = code.replace(/className="relative min-h-\[92vh\] flex items-center pt-32 pb-24 overflow-hidden bg-\[#030712\]"/, 
  `className="relative min-h-[100vh] lg:min-h-[92vh] flex items-center pt-28 sm:pt-32 lg:pt-40 pb-16 sm:pb-24 overflow-hidden bg-[#030712]"`);

// 2. Fix h1 font sizes and leading
code = code.replace(/<h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-\[1\.1\]">/,
  `<h1 className="text-[2.75rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white sm:leading-[1.1]">`);

// 3. Fix span inside h1
code = code.replace(/<span className="block mb-2 text-slate-300 text-4xl md:text-5xl lg:text-6xl">Architecting Your<\/span>/,
  `<span className="block mb-1 sm:mb-2 text-slate-300 text-[2rem] leading-tight sm:text-4xl md:text-5xl lg:text-6xl">Architecting Your</span>`);

// 4. Fix paragraph text size
code = code.replace(/<p className="text-base md:text-\[1\.1rem\] text-slate-400 max-w-xl leading-relaxed font-medium">/,
  `<p className="text-sm sm:text-base md:text-[1.1rem] text-slate-400 max-w-xl leading-relaxed font-medium mt-4 sm:mt-0">`);

// 5. Visual scaling 
code = code.replace(/className="relative w-full aspect-square sm:aspect-video lg:aspect-\[4\/3\] max-w-\[600px\] flex items-center justify-center mt-12 lg:mt-0 perspective-\[1000px\] z-10"/,
  `className="relative w-full aspect-[4/5] sm:aspect-video lg:aspect-[4/3] max-w-[600px] flex items-center justify-center mt-8 sm:mt-12 lg:mt-0 perspective-[1000px] z-10"`);

// 6. Grid gap between text and image on mobile
code = code.replace(/<div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">/,
  `<div className="grid lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-8 items-center">`);

// 7. Adjust button gap on mobile to make buttons full width beautifully
// Already flex-col sm:flex-row, w-full sm:w-auto on buttons. 
// Just check the visual card height
code = code.replace(/max-h-\[480px\]/, "max-h-[500px] sm:max-h-[480px]"); 

fs.writeFileSync("src/components/HeroSection.tsx", code);
console.log("Responsive styles fixed!");

