"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function IndustriesPageCta() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-20 text-center">
      <a
        href="/contact"
        className="inline-flex items-center justify-center px-8 py-4 text-foreground bg-primary hover:bg-primary rounded-xl transition-colors duration-500 font-medium shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:text-slate-900"
      >
        Consult With Our Architects <ArrowRight className="ml-2 w-5 h-5" />
      </a>
    </motion.div>
  );
}
