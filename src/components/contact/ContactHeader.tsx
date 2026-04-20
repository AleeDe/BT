"use client";

import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

export function ContactHeader() {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-primary mb-6"
      >
        <MessageSquare className="w-4 h-4" />
        <span>Contact Us</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
      >
        Let&apos;s Connect With Experts Who Deliver Results
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg text-slate-400"
      >
        Whether you have a question about features, trials, pricing, or anything else, our team is ready to answer all your questions.
      </motion.p>
    </div>
  );
}
