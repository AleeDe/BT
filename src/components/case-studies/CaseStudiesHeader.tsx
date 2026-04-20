"use client";

import { motion } from "framer-motion";

export function CaseStudiesHeader() {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-primary font-semibold tracking-wide uppercase mb-3 text-sm">Proven Impact</h2>
        <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
          Transformations Driven by <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary">Expertise</span>
        </h3>
        <p className="text-slate-400 text-lg leading-relaxed">
          Explore how we have engineered scalable, secure, and rapid solutions for enterprises confronting their toughest technical hurdles.
        </p>
      </motion.div>
    </div>
  );
}
