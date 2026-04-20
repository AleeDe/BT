"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import type { IndustryPageItem } from "./industriesPageData";

type IndustriesPageListProps = {
  items: IndustryPageItem[];
};

export function IndustriesPageList({ items }: IndustriesPageListProps) {
  return (
    <div className="space-y-12">
      <AnimatePresence mode="popLayout">
        {items.map((industry, index) => {
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
              className={`relative bg-slate-900/40 border border-slate-800 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-stretch group`}
            >
              <div className="w-full lg:w-2/5 p-12 flex flex-col justify-center items-center bg-slate-950 relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.accent} opacity-5 group-hover:opacity-10 transition-opacity duration-700`} />
                <div className={`absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10 ${isEven ? "lg:bg-gradient-to-r" : "lg:bg-gradient-to-l"}`} />

                <div className="relative z-20 w-32 h-32 rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center shadow-[0_0_40px_rgba(37,99,235,0.2)] group-hover:scale-110 transition-transform duration-700">
                  <div className="absolute inset-0 rounded-full border border-primary/20 animate-[spin_10s_linear_infinite] border-t-blue-500" />
                  <div className="absolute inset-2 rounded-full border border-primary/20 animate-[spin_15s_linear_infinite_reverse] border-b-indigo-500" />
                  <Icon className="w-12 h-12 text-primary drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]" />
                </div>

                <span className="relative z-20 mt-8 text-center text-sm font-bold text-slate-400 uppercase tracking-widest px-4 py-1.5 rounded-full border border-slate-800 bg-slate-900/80">
                  {industry.category}
                </span>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/20 rounded-full blur-[60px] pointer-events-none transition-opacity duration-700 opacity-50 group-hover:opacity-100" />
              </div>

              <div className="w-full lg:w-3/5 p-8 lg:p-12 relative z-20 bg-slate-900/60 transition-colors duration-300 flex flex-col justify-center">
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-foreground mb-4">{industry.title}</h2>
                  <p className="text-lg text-primary font-medium mb-4">{industry.description}</p>
                  <p className="text-slate-400 leading-relaxed text-base">{industry.details}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {industry.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-start gap-3">
                      <div className="mt-1 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                        <ShieldCheck className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-slate-300">{bullet}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-slate-950/60 border border-slate-800/80 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="uppercase tracking-wider text-xs font-bold text-slate-500 bg-slate-900 px-3 py-1 rounded-lg border border-slate-800">
                    {industry.resultLabel}
                  </div>
                  <div className="text-slate-200 font-medium">{industry.resultText}</div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
