"use client";

import { motion } from "framer-motion";
import { LayoutGrid } from "lucide-react";

export function IndustriesPageHeader() {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
          <LayoutGrid className="w-4 h-4 text-primary" />
          <span className="text-xs font-bold tracking-widest text-slate-300 uppercase">Sectors We Empower</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6 leading-tight">
          Transforming <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary">Industries</span>
        </h1>
        <p className="text-lg text-slate-400 leading-relaxed">
          Discover how our specialized technological architectures solve unique challenges across highly regulated, complex, and specialized enterprise sectors.
        </p>
      </motion.div>
    </div>
  );
}
