"use client";

import { motion } from "framer-motion";

type IndustriesCategoryFilterProps = {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
};

export function IndustriesCategoryFilter({ categories, activeCategory, onCategoryChange }: IndustriesCategoryFilterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="flex flex-wrap justify-center gap-3 mb-16"
    >
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
            activeCategory === category
              ? "bg-primary text-foreground border-primary shadow-[0_0_15px_rgba(37,99,235,0.4)]"
              : "bg-slate-900/50 text-slate-400 border-slate-800 hover:border-slate-600 hover:text-slate-200"
          }`}
        >
          {category}
        </button>
      ))}
    </motion.div>
  );
}
