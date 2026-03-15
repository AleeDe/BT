"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Landmark,
  ShoppingCart,
  Factory,
  HeartPulse,
  Globe,
  ArrowRight,
} from "lucide-react";
import Link from "next/link"; // ✅ Fixed: Next.js Link instead of react-router-dom

const industries = [
  {
    key: "banking",
    title: "Banking & Financial Services",
    tabLabel: "Banking & Finance",
    icon: Landmark,
    description:
      "Secure, compliant revenue workflows and automated systems for regulated environments.",
  },
  {
    key: "retail",
    title: "Retail & eCommerce",
    tabLabel: "Retail & eCommerce",
    icon: ShoppingCart,
    description:
      "Conversion-focused systems designed to scale with growth, demand, and operations.",
  },
  {
    key: "manufacturing",
    title: "Manufacturing",
    tabLabel: "Manufacturing",
    icon: Factory,
    description:
      "Systems that connect sales, ops, and fulfillment without bottlenecks or manual reporting.",
  }
];

// ✅ Auto order like Banner
const ORDER = ["banking", "retail", "manufacturing"];

export function IndustriesSection() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState("banking");
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const current = useMemo(
    () => industries.find((x) => x.key === active) || industries[0],
    [active]
  );
  const Icon = current.icon;

  // ✅ Auto rotate (Banner jaisa)
  const startAuto = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setActive((prev) => {
        const idx = ORDER.indexOf(prev);
        return ORDER[(idx + 1) % ORDER.length];
      });
    }, 4200); // ✅ slow/professional timing (4.2s)
  };

  useEffect(() => {
    startAuto();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ✅ user click = change + restart auto
  const onTab = (key: string) => {
    setActive(key);
    startAuto();
  };

  return (
    <section className="w-full relative bg-[#0A1128] py-14 sm:py-24 px-4 sm:px-6 overflow-hidden">
      {/* Decorative Gradients for Dark Theme */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#2962FF]/30 to-transparent"></div>
      <div className="absolute -left-1/4 top-1/4 w-[500px] h-[500px] bg-[#2962FF]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center">
          <p className="text-[11px] font-extrabold tracking-[0.28em] text-[#00E5FF] uppercase">
            Industries We Serve
          </p>

          <h2 className="mt-3 text-3xl sm:text-5xl font-black text-white">
            Find the Right{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#2962FF]">
              Solution
            </span>{" "}
            for Your Industry
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
            Tailored architectures for regulated, complex, and growth-focused sectors ensuring scale and security.
          </p>
        </div>

        {/* Widget shell */}
        <div className="mt-12 rounded-[32px] bg-slate-900/40 backdrop-blur-xl border border-slate-800/80 shadow-[0_24px_80px_-20px_rgba(0,229,255,0.1)] p-4 sm:p-8">
          {/* Tabs */}
          <div className="flex items-center justify-start md:justify-center gap-2 sm:gap-3 overflow-x-auto pb-3 sm:pb-4 scrollbar-hide">
            {industries.map((t) => {
              const TIcon = t.icon;
              const isActive = t.key === active;

              return (
                <button
                  key={t.key}
                  onClick={() => onTab(t.key)}
                  className={[
                    "relative flex items-center gap-2 sm:gap-3 rounded-2xl px-3 sm:px-5 py-3 sm:py-3.5 min-h-[44px]",
                    "transition-all duration-300 border whitespace-nowrap text-left",
                    isActive ? "bg-slate-800 border-[#2962FF]/50 shadow-[0_0_15px_rgba(41,98,255,0.25)] text-white"
                      : "bg-slate-800/30 border-slate-700/50 text-slate-400 hover:bg-slate-800/60 hover:text-slate-200",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "h-8 w-8 sm:h-10 sm:w-10 rounded-xl sm:rounded-2xl border grid place-items-center shrink-0 transition-colors",
                      isActive
                        ? "bg-[#2962FF]/20 border-[#2962FF]/30"
                        : "bg-slate-900 border-slate-700",
                    ].join(" ")}
                  >
                    <TIcon
                      className={[
                        "h-5 w-5",
                        isActive ? "text-[#00E5FF]" : "text-slate-500",
                      ].join(" ")}
                    />
                  </span>

                  <span className="text-[12px] sm:text-[14px] font-bold leading-tight">
                    {t.tabLabel}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Content Card */}
          <motion.div
            key={active}
            initial={reduce ? false : { opacity: 0, y: 15 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="mt-6 rounded-3xl bg-slate-800/40 border border-slate-700/50 shadow-2xl p-6 sm:p-8 relative overflow-hidden group"
          >
            {/* Subtle glow inside the card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#2962FF]/5 rounded-full blur-[80px] pointer-events-none transition-opacity duration-700 opacity-50 group-hover:opacity-100"></div>

            <div className="flex items-start gap-4 relative z-10">
              <div className="h-14 w-14 rounded-2xl bg-[#2962FF]/10 border border-[#2962FF]/20 flex items-center justify-center shrink-0">
                <Icon className="h-7 w-7 text-[#00E5FF]" />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {current.title}
                </h3>
                <p className="mt-2 text-base text-slate-400 leading-relaxed max-w-xl">
                  {current.description}
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
              <Link
                href={`/industries`}
                className="group relative inline-flex items-center justify-center gap-2 rounded-2xl bg-[#2962FF] text-white px-7 py-3.5 font-bold overflow-hidden transition-all hover:-translate-y-0.5 shadow-[0_0_20px_rgba(41,98,255,0.4)] hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#2962FF] to-[#00E5FF] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10">Explore {current.title} Details</span>
                <ArrowRight className="h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* ✅ Dots */}
              <div className="flex gap-2.5 bg-slate-950/60 border border-slate-800 px-4 py-3 rounded-full flex-shrink-0 shadow-inner">
                {industries.map((d) => (
                  <button
                    key={d.key}
                    onClick={() => onTab(d.key)}
                    aria-label={`Go to ${d.title}`}
                    className={[
                      "h-2.5 w-2.5 rounded-full transition-all duration-300",
                      d.key === active
                        ? "bg-[#00E5FF] scale-125 shadow-[0_0_8px_rgba(0,229,255,0.6)]"
                        : "bg-slate-700 hover:bg-[#0A1128]0",
                    ].join(" ")}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* View All Industries Link */}
          <div className="mt-8 flex justify-center relative z-10">
            <Link
              href="/industries"
              className="group inline-flex items-center gap-2 rounded-full border border-slate-700/50 bg-slate-800/30 px-6 py-2.5 text-sm font-semibold text-slate-300 hover:bg-slate-800 hover:text-white transition-all duration-300 hover:border-slate-600"
            >
              View All Industries
              <ArrowRight className="h-4 w-4 text-slate-500 group-hover:text-[#00E5FF] group-hover:translate-x-1 transition-all" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
