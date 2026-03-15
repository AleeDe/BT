"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { caseStudies, type CaseStudy } from "@/data/caseStudies";

// Extract unique categories dynamically based on the dataset
const categories = ["All", ...Array.from(new Set(caseStudies.map((cs) => cs.category)))];

// ==========================================
// 2. REUSABLE COMPONENT DISPLAY
// ==========================================
function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative bg-slate-900/40 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl group"
    >
      <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-stretch`}>
        
        {/* Visual / GIF Section - 50% width */}
        <div className="w-full lg:w-1/2 relative min-h-[300px] lg:min-h-full bg-slate-950 overflow-hidden">
          <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none mix-blend-overlay"></div>
          <img 
            src={study.gifSrc} 
            alt={study.title}
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop";
            }}
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent z-10 ${isEven ? 'lg:bg-gradient-to-r' : 'lg:bg-gradient-to-l'}`}></div>
        </div>

        {/* Content Section - 50% width */}
        <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center relative z-20 bg-slate-900/90 backdrop-blur-sm lg:backdrop-blur-none lg:bg-slate-900/60 transition-colors duration-300">
          
          {/* Chunk 1: Metadata & Title */}
          <div className="mb-6 border-b border-slate-800/60 pb-6">
            <div className="flex items-center space-x-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider border border-blue-500/20">
                {study.category}
              </span>
              <span className="text-slate-400 text-sm font-medium">{study.clientName}</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
              {study.title}
            </h3>
          </div>

          {/* Chunk 2: The Narrative (Problem & Solution) */}
          <div className="space-y-5 mb-8">
            <div>
              <h4 className="text-slate-300 font-semibold mb-2 flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 mr-2"></span>
                The Challenge
              </h4>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                {study.problem}
              </p>
            </div>
            <div>
              <h4 className="text-slate-300 font-semibold mb-2 flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2"></span>
                Our Solution
              </h4>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                {study.solution}
              </p>
            </div>
          </div>

          {/* Chunk 3: The Results & CTA */}
          <div className="mt-auto pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex gap-6">
              {study.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="flex items-center space-x-2">
                    {stat.icon && typeof stat.icon === 'string' ? stat.icon : /* fallback icon */ ''}
                    <span className="text-2xl font-bold text-white">{stat.value}</span>
                  </div>
                  <span className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">{stat.label}</span>
                </div>
              ))}
            </div>

            <Link 
              href={`/case-studies/${study.id}`}
              className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3.5 rounded-xl font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] group/btn whitespace-nowrap min-w-[160px]"
            >
              <span>Read Study</span>
              <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </div>
    </motion.div>
  );
}

// ==========================================
// 3. MAIN SECTION WRAPPER
// ==========================================
export function CaseStudiesSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredStudies = caseStudies.filter(
    (study) => activeCategory === "All" || study.category === activeCategory
  );

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden" id="case-studies">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-blue-500 font-semibold tracking-wide uppercase mb-3 text-sm">Proven Impact</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Transformations Driven by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Expertise</span>
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed">
              Explore how we have engineered scalable, secure, and rapid solutions for enterprises confronting their toughest technical hurdles.
            </p>
          </motion.div>
        </div>

        {/* Categories / Filter Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
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

        {/* Listing */}
        <div className="space-y-12">
          <AnimatePresence mode="popLayout">
            {filteredStudies.map((study, index) => (
               <motion.div
                 key={study.id}
                 layout
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                 transition={{ duration: 0.5 }}
               >
                 <CaseStudyCard study={study} index={index} />
               </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Global CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all duration-300 font-medium shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]">
            Start Your Transformation
          </a>
        </motion.div>

      </div>
    </section>
  );
}
