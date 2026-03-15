const fs = require("fs");
let code = fs.readFileSync("src/components/HeroSection.tsx", "utf8");

if(!code.includes("Star,") && !code.includes("Sparkles,")) {
    code = code.replace(
        /import \{ (.*?) \} from "lucide-react";/,
        "import { $1, Star, Sparkles, Trophy } from \"lucide-react\";"
    );
}

const newHeroSection = `export function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const words = ["Scalable SaaS", "Smart CRMs", "Enterprise AI", "Web Platforms"];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center pt-32 pb-24 overflow-hidden bg-[#030712]">
      {/* Premium Animated Tech Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)] opacity-40 -z-20" />
      
      {/* Vibrant Glowing Orbs */}
      <div className="absolute top-0 -translate-y-1/2 left-1/3 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#2962FF]/20 via-[#00E5FF]/10 to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 translate-y-1/3 right-0 w-[700px] h-[600px] bg-gradient-to-t from-emerald-500/10 via-purple-500/5 to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Text Content - The Surprise Glow UP */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col space-y-7"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2.5 rounded-full bg-slate-900/80 border border-slate-700/50 backdrop-blur-md w-fit shadow-[0_0_20px_rgba(0,229,255,0.1)] gap-2.5 group cursor-default"
            >
              <Sparkles className="w-4 h-4 text-[#00E5FF] group-hover:scale-110 group-hover:text-purple-400 transition-all" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-slate-200">
                Beyond Standard Development
              </span>
            </motion.div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                <span className="block mb-2 text-slate-300 text-4xl md:text-5xl lg:text-6xl">Architecting Your</span>
                <div className="h-[1.25em] relative overflow-hidden mt-1 pb-2">
                  <AnimatePresence mode="popLayout">
                    <motion.span
                      key={wordIndex}
                      initial={{ y: 60, opacity: 0, rotateX: -90 }}
                      animate={{ y: 0, opacity: 1, rotateX: 0 }}
                      exit={{ y: -60, opacity: 0, rotateX: 90 }}
                      transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                      className="absolute origin-bottom text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-[#2962FF] to-purple-500 drop-shadow-sm"
                    >
                      {words[wordIndex]}.
                    </motion.span>
                  </AnimatePresence>
                </div>
              </h1>
              <p className="text-base md:text-[1.1rem] text-slate-400 max-w-xl leading-relaxed font-medium">
                We don't just write code—we solve complex business bottlenecks. From high-converting <strong className="text-slate-200 font-bold">CRM platforms</strong> to robust <strong className="text-slate-200 font-bold">Full-Stack infrastructures</strong>, we turn raw ideas into your ultimate competitive advantage.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                className="group relative px-8 py-4 sm:min-h-[56px] bg-white text-slate-950 rounded-full font-bold text-base overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] hover:-translate-y-1 transition-all duration-300"
                onClick={() => window.location.href = "/contact"}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#00E5FF]/10 to-[#2962FF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                   Start Your Transformation <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
                </span>
              </button>
              
              <button 
                className="group px-8 py-4 sm:min-h-[56px] rounded-full border border-slate-700 bg-slate-900/50 backdrop-blur-md text-white font-medium hover:bg-slate-800/80 hover:border-slate-500 transition-colors flex items-center justify-center gap-2 text-base"
                onClick={() => window.location.href = "/services"}
              >
                <Zap className="w-5 h-5 text-yellow-400 group-hover:scale-110 transition-transform" /> Explore Solutions
              </button>
            </div>

            {/* Social Proof & Trust Badges */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mt-6 pt-8 border-t border-slate-800/80"
            >
               <div className="flex -space-x-3">
                  {[
                    { l: "A", c: "bg-indigo-600" },
                    { l: "K", c: "bg-emerald-600" },
                    { l: "T", c: "bg-rose-600" },
                    { l: "M", c: "bg-blue-600" }
                  ].map((usr, i) => (
                     <div key={i} className={\`w-10 h-10 rounded-full border-2 border-[#030712] flex items-center justify-center text-xs font-bold text-white shadow-inner \${usr.c}\`}>
                        {usr.l}
                     </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-[#030712] bg-gradient-to-br from-[#2962FF] to-[#00E5FF] flex items-center justify-center text-[10px] font-bold text-white shadow-[0_0_15px_rgba(0,229,255,0.4)] relative z-10">
                     50+
                  </div>
               </div>
               <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-1 text-yellow-400 mb-1">
                     {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-current drop-shadow-[0_0_2px_rgba(250,204,21,0.8)]" />)}
                  </div>
                  <span className="text-xs text-slate-400 font-medium">Empowering visionary brands worldwide</span>
               </div>
               <div className="hidden sm:block w-[1px] h-10 bg-slate-800 mx-2" />
               <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 bg-slate-900/60 px-3 py-1.5 rounded-full border border-slate-800">
                  <Trophy className="w-4 h-4 text-emerald-400" /> Premium Quality
               </div>
            </motion.div>
          </motion.div>

          {/* Visual Content Area */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center lg:justify-end py-12 lg:py-0 relative"
          >
             <div className="absolute inset-0 bg-gradient-to-tr from-[#00E5FF]/20 to-purple-500/10 blur-[100px] rounded-full pointer-events-none" />
             <HeroAnimatedVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
`;

code = code.replace(/export function HeroSection\(\) \{[\s\S]+/, newHeroSection);
fs.writeFileSync("src/components/HeroSection.tsx", code);
console.log("Upgraded HeroSection successfully!");
