"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Landmark, ShoppingCart, Factory, ShieldCheck, ArrowRight, LayoutGrid } from "lucide-react";

const industriesPageData = [
  {
    key: "banking",
    category: "Finance",
    title: "Banking & Financial Services",
    icon: Landmark,
    accent: "from-blue-500 to-indigo-600",
    description: "Secure, compliant revenue workflows and automated systems for regulated environments.",
    details: "The financial sector requires zero tolerance for errors and maximum compliance. Our architectures are built from the ground up prioritizing data governance, immediate disaster recovery, and role-based zero-trust environments. We help institutions migrate from legacy mainframes to scalable cloud solutions without operational downtime.",
    bullets: [
      "Role-based access & audit controls",
      "Data governance & API integrations",
      "Operational reporting & real-time monitoring",
      "Fraud detection & AI-driven analytics"
    ],
    resultLabel: "Key Result",
    resultText: "Reduced onboarding time for regulated environments by up to 30%",
  },
  {
    key: "retail",
    category: "Commerce",
    title: "Retail & eCommerce",
    icon: ShoppingCart,
    accent: "from-[#00E5FF] to-[#2962FF]",
    description: "Conversion-focused systems designed to scale with growth, demand, and operations.",
    details: "In retail, latency kills conversions. We build headless commerce architectures and high-throughput inventory systems that ensure your storefront remains lightning fast during Black Friday spikes while your back-office operations sync flawlessly in real-time.",
    bullets: [
      "Order + customer lifecycle automation",
      "Faster campaign & headless storefront launches",
      "Analytics-ready architecture & data warehousing",
      "Omnichannel inventory synchronization"
    ],
    resultLabel: "Key Result",
    resultText: "Improved conversion rates with faster pages and cleaner funnels by 15–25%",
  },
  {
    key: "manufacturing",
    category: "Logistics",
    title: "Manufacturing & Logistics",
    icon: Factory,
    accent: "from-emerald-400 to-teal-600",
    description: "Systems that connect sales, ops, and fulfillment without bottlenecks or manual reporting.",
    details: "We eliminate the silos between the factory floor, the warehouse, and the sales team. By implementing unified ERP/CRM integrations and custom logistics dashboards, we replace spreadsheet chaos with predictable, automated operational workflows.",
    bullets: [
      "Integrated quoting + operations pipelines",
      "Partner / dealer automated portals",
      "Scalable process design & resource tracking",
      "Predictive maintenance & IoT integrations"
    ],
    resultLabel: "Key Result",
    resultText: "Faster quote-to-cash cycles and fewer manual errors by 20–35%",
  },
  {
    key: "health",
    category: "Healthcare",
    title: "Healthcare Solutions",
    icon: Landmark, // Re-using an available icon to avoid adding new imports just for this
    accent: "from-rose-400 to-red-600",
    description: "HIPAA-compliant data workflows, intelligent patient portals, and secure health integrations.",
    details: "Healthcare requires ironclad security without sacrificing patient experience. We implement systems that handle sensitive medical data with absolute compliance, while streamlining the booking and telehealth workflows.",
    bullets: [
      "HIPAA-compliant cloud storage setups",
      "Telehealth & patient portal integrations",
      "Smart scheduling and notification systems",
      "Automated billing and insurance mapping"
    ],
    resultLabel: "Key Result",
    resultText: "Reduced administrative overhead by up to 40% and improved patient satisfaction.",
  },
  {
    key: "ngo",
    category: "Non-Profit",
    title: "NGOs & Non-Profits",
    icon: ShieldCheck, // Re-using an available icon
    accent: "from-yellow-400 to-orange-500",
    description: "Transparent, scalable platforms that maximize donor impact and streamline global operations.",
    details: "We empower organizations with optimized CRM mappings (like Salesforce NPSP) to track donors easily, handle grant workflows, and execute vast marketing campaigns without relying on manual entry.",
    bullets: [
      "Donor lifecycle & retention automation",
      "Grant and fund tracking databases",
      "Volunteer coordination portals",
      "Cost-effective scaling on cloud platforms"
    ],
    resultLabel: "Key Result",
    resultText: "Increased donor retention by 20% through automated engagement loops.",
  }
];

const categories = ["All", ...Array.from(new Set(industriesPageData.map((d) => d.category)))];

export default function IndustriesPageContent() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredIndustries = industriesPageData.filter(
    (ind) => activeCategory === "All" || ind.category === activeCategory
  );

  return (
    <div className={"min-h-screen bg-[#0A1128] pt-32 pb-24 relative overflow-hidden"}>
      {/* Background elements */}
      <div className={"absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-transparent via-[#2962FF]/20 to-transparent"}></div>
      <div className={"absolute top-40 -left-64 w-[600px] h-[600px] bg-[#00E5FF]/5 rounded-full blur-[120px] pointer-events-none"}></div>

      <div className={"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"}>
        
        {/* Header */}
        <div className={"text-center max-w-3xl mx-auto mb-16"}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className={"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"}>
              <LayoutGrid className={"w-4 h-4 text-[#00E5FF]"} />
              <span className={"text-xs font-bold tracking-widest text-slate-300 uppercase"}>Sectors We Empower</span>
            </div>
            <h1 className={"text-4xl md:text-6xl font-black text-white mb-6 leading-tight"}>
              Transforming <span className={"text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#2962FF]"}>Industries</span>
            </h1>
            <p className={"text-lg text-slate-400 leading-relaxed"}>
              Discover how our specialized technological architectures solve unique challenges across highly regulated, complex, and specialized enterprise sectors.
            </p>
          </motion.div>
        </div>

        {/* Categories / Filter Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={"flex flex-wrap justify-center gap-3 mb-16"}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeCategory === cat 
                  ? 'bg-blue-600 text-white border-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.4)]' 
                  : 'bg-slate-900/50 text-slate-400 border-slate-800 hover:border-slate-600 hover:text-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Industries List */}
        <div className={"space-y-12"}>
          <AnimatePresence mode={"popLayout"}>
            {filteredIndustries.map((industry, index) => {
              const Icon = industry.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={industry.key}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 40 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.5 }}
                  className={`relative bg-slate-900/40 border border-slate-800 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-stretch group`}
                >
                  {/* Visual / Abstract Area - 40% */}
                  <div className={"w-full lg:w-2/5 p-12 flex flex-col justify-center items-center bg-slate-950 relative overflow-hidden"}>
                     <div className={`absolute inset-0 bg-gradient-to-br ${industry.accent} opacity-5 group-hover:opacity-10 transition-opacity duration-700`}></div>
                     <div className={`absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10 ${isEven ? 'lg:bg-gradient-to-r' : 'lg:bg-gradient-to-l'}`}></div>
                     
                     {/* Glowing Icon Element */}
                     <div className={"relative z-20 w-32 h-32 rounded-full border border-blue-500/30 bg-blue-600/10 flex items-center justify-center shadow-[0_0_40px_rgba(37,99,235,0.2)] group-hover:scale-110 transition-transform duration-700"}>
                        <div className={"absolute inset-0 rounded-full border border-blue-400/20 animate-[spin_10s_linear_infinite] border-t-blue-500"} />
                        <div className={"absolute inset-2 rounded-full border border-indigo-400/20 animate-[spin_15s_linear_infinite_reverse] border-b-indigo-500"} />
                        <Icon className={"w-12 h-12 text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]"} />
                     </div>

                     <span className={"relative z-20 mt-8 text-center text-sm font-bold text-slate-400 uppercase tracking-widest px-4 py-1.5 rounded-full border border-slate-800 bg-slate-900/80"}>
                       {industry.category}
                     </span>
                     
                     <div className={"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-500/20 rounded-full blur-[60px] pointer-events-none transition-opacity duration-700 opacity-50 group-hover:opacity-100"}></div>
                  </div>

                  {/* Content Area - 60% */}
                  <div className={"w-full lg:w-3/5 p-8 lg:p-12 relative z-20 bg-slate-900/60 transition-colors duration-300 flex flex-col justify-center"}>
                     
                     <div className={"mb-6"}>
                       <h2 className={"text-3xl font-bold text-white mb-4"}>{industry.title}</h2>
                       <p className={"text-lg text-[#00E5FF] font-medium mb-4"}>{industry.description}</p>
                       <p className={"text-slate-400 leading-relaxed text-base"}>
                         {industry.details}
                       </p>
                     </div>

                     {/* Features */}
                     <div className={"grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"}>
                       {industry.bullets.map((bullet, i) => (
                         <div key={i} className={"flex items-start gap-3"}>
                           <div className={"mt-1 h-5 w-5 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20"}>
                             <ShieldCheck className={"w-3 h-3 text-blue-400"} />
                           </div>
                           <span className={"text-sm font-medium text-slate-300"}>{bullet}</span>
                         </div>
                       ))}
                     </div>

                     {/* Key Result Banner */}
                     <div className={"bg-slate-950/60 border border-slate-800/80 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4"}>
                        <div className={"uppercase tracking-wider text-xs font-bold text-slate-500 bg-slate-900 px-3 py-1 rounded-lg border border-slate-800"}>
                          {industry.resultLabel}
                        </div>
                        <div className={"text-slate-200 font-medium"}>
                          {industry.resultText}
                        </div>
                     </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Global CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={"mt-20 text-center"}
        >
          <a href={"/contact"} className={"inline-flex items-center justify-center px-8 py-4 text-white bg-[#2962FF] hover:bg-[#00E5FF] rounded-xl transition-colors duration-500 font-medium shadow-[0_0_20px_rgba(41,98,255,0.3)] hover:text-slate-900"}>
            Consult With Our Architects <ArrowRight className={"ml-2 w-5 h-5"} />
          </a>
        </motion.div>

      </div>
    </div>
  );
}
