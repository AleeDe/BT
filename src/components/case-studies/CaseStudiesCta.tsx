"use client";

import { motion } from "framer-motion";

export function CaseStudiesCta() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-16 text-center"
    >
      <a
        href="/contact"
        className="inline-flex items-center justify-center px-8 py-4 text-foreground bg-primary hover:bg-primary rounded-xl transition-all duration-300 font-medium shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
      >
        Start Your Transformation
      </a>
    </motion.div>
  );
}
