"use client";

import { motion } from "framer-motion";

type CaseStudiesCategoryFilterProps = {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
};

export function CaseStudiesCategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: CaseStudiesCategoryFilterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-wrap justify-center gap-3 mb-16"
    >
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onCategoryChange(cat)}
          className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
            activeCategory === cat
              ? "bg-primary text-foreground border-primary shadow-[0_0_15px_rgba(37,99,235,0.4)]"
              : "bg-slate-900/50 text-slate-400 border-slate-800 hover:border-slate-600 hover:text-slate-200"
          }`}
        >
          {cat}
        </button>
      ))}
    </motion.div>
  );
}
