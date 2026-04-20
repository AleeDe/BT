"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function AboutHeroSection() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
              Pioneering the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary">Enterprise IT</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
              At BabulTech, we specialize in transforming complex technical challenges into streamlined, scalable solutions. From CRM
              implementations to serving as your comprehensive technical partner, we are your certified guides in digital transformation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <div className="flex items-center space-x-2 text-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>Certified Experts</span>
              </div>
              <div className="flex items-center space-x-2 text-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>Rapid Resolution</span>
              </div>
              <div className="flex items-center space-x-2 text-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>24/7 Support</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl shadow-blue-900/20 bg-slate-900 aspect-video flex items-center justify-center group"
          >
            <img
              src="/about-animation.svg"
              alt="BabulTech Operations Animation"
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
