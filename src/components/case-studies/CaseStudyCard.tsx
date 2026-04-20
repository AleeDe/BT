"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { type CaseStudy } from "@/data/caseStudies";

type CaseStudyCardProps = {
  study: CaseStudy;
  index: number;
};

export function CaseStudyCard({ study, index }: CaseStudyCardProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative bg-slate-900/40 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl group"
    >
      <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-stretch`}>
        <div className="w-full lg:w-1/2 relative min-h-[300px] lg:min-h-full bg-slate-950 overflow-hidden">
          <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none mix-blend-overlay"></div>
          <Image
            src={study.gifSrc}
            alt={study.title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
          />
          <div
            className={`absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent z-10 ${
              isEven ? "lg:bg-gradient-to-r" : "lg:bg-gradient-to-l"
            }`}
          ></div>
        </div>

        <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center relative z-20 bg-slate-900/90 backdrop-blur-sm lg:backdrop-blur-none lg:bg-slate-900/60 transition-colors duration-300">
          <div className="mb-6 border-b border-slate-800/60 pb-6">
            <div className="flex items-center space-x-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider border border-primary/20">
                {study.category}
              </span>
              <span className="text-slate-400 text-sm font-medium">{study.clientName}</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">{study.title}</h3>
          </div>

          <div className="space-y-5 mb-8">
            <div>
              <h4 className="text-slate-300 font-semibold mb-2 flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                The Challenge
              </h4>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">{study.problem}</p>
            </div>
            <div>
              <h4 className="text-slate-300 font-semibold mb-2 flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                Our Solution
              </h4>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">{study.solution}</p>
            </div>
          </div>

          <div className="mt-auto pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex gap-6">
              {study.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="flex items-center space-x-2">
                    {stat.icon && typeof stat.icon === "string" ? stat.icon : ""}
                    <span className="text-2xl font-bold text-foreground">{stat.value}</span>
                  </div>
                  <span className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">{stat.label}</span>
                </div>
              ))}
            </div>

            <Link
              href={`/case-studies/${study.id}`}
              className="flex items-center justify-center space-x-2 bg-primary hover:bg-primary text-foreground px-6 py-3.5 rounded-xl font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] group/btn whitespace-nowrap min-w-[160px]"
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
