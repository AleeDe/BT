"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { industries, INDUSTRY_ORDER } from "@/components/industries/industriesData";
import { IndustriesHeader } from "@/components/industries/IndustriesHeader";
import { IndustriesTabs } from "@/components/industries/IndustriesTabs";
import { IndustriesContentCard } from "@/components/industries/IndustriesContentCard";
import { IndustriesFooterLink } from "@/components/industries/IndustriesFooterLink";

export function IndustriesSection() {
  const reduce = useReducedMotion();
  const homepageOrder = INDUSTRY_ORDER.slice(0, 3);
  const homepageIndustries = industries.filter((item) => homepageOrder.includes(item.key));
  const featuredTechnologies = [
    { name: "Flutter", src: "/tech-logos/flutter.svg", url: "https://flutter.dev" },
    { name: "n8n", src: "/tech-logos/n8n.svg", url: "https://n8n.io" },
    { name: "Next.js", src: "/tech-logos/nextdotjs.svg", url: "https://nextjs.org" },
    { name: "TypeScript", src: "/tech-logos/typescript.svg", url: "https://www.typescriptlang.org" },
    { name: "Node.js", src: "/tech-logos/nodedotjs.svg", url: "https://nodejs.org" },
    { name: "Python", src: "/tech-logos/python.svg", url: "https://www.python.org" },
    { name: "PostgreSQL", src: "/tech-logos/postgresql.svg", url: "https://www.postgresql.org" },
    { name: "Docker", src: "/tech-logos/docker.svg", url: "https://www.docker.com" },
    { name: "Kubernetes", src: "/tech-logos/kubernetes.svg", url: "https://kubernetes.io" },
    { name: "AWS", src: "/tech-logos/aws.svg", url: "https://aws.amazon.com" },
    { name: "Google Cloud", src: "/tech-logos/googlecloud.svg", url: "https://cloud.google.com" },
    { name: "OpenAI", src: "/tech-logos/openai.svg", url: "https://openai.com" },
    { name: "LangChain", src: "/tech-logos/langchain.svg", url: "https://www.langchain.com" },
    { name: "Redis", src: "/tech-logos/redis.svg", url: "https://redis.io" },
  ];
  const [active, setActive] = useState(homepageOrder[0] ?? "banking");
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const current = useMemo(
    () => homepageIndustries.find((x) => x.key === active) || homepageIndustries[0],
    [active, homepageIndustries]
  );

  // ✅ Auto rotate (Banner jaisa)
  const startAuto = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setActive((prev) => {
        const idx = homepageOrder.indexOf(prev);
        return homepageOrder[(idx + 1) % homepageOrder.length];
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
    <section className="w-full relative bg-background py-14 sm:py-24 px-4 sm:px-6 overflow-hidden">
      {/* Decorative Gradients for Dark Theme */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      <div className="absolute -left-1/4 top-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <IndustriesHeader />

        {/* Widget shell */}
        <div className="mt-12 rounded-[32px] bg-slate-900/40 backdrop-blur-xl border border-slate-800/80 shadow-[0_24px_80px_-20px_rgba(16,185,129,0.1)] p-4 sm:p-8">
          <IndustriesTabs items={homepageIndustries} active={active} onTab={onTab} />
          <IndustriesContentCard
            activeKey={active}
            current={current}
            items={homepageIndustries}
            reduceMotion={!!reduce}
            onTab={onTab}
          />
          <IndustriesFooterLink />
        </div>
      </div>

      <div className="relative z-10 mt-8 left-1/2 w-screen -translate-x-1/2 px-4 sm:px-6 lg:px-0">
        <div className="rounded-[28px] lg:rounded-none bg-slate-900/35 backdrop-blur-xl border border-slate-800/80 lg:border-x-0 shadow-[0_20px_70px_-25px_rgba(16,185,129,0.18)] p-5 sm:p-7 overflow-hidden">
          <h3 className="text-lg sm:text-xl font-black text-foreground text-center mb-5 sm:mb-6">
            Powered by <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary">Industry-Leading Technologies</span>
          </h3>

          <div className="enterprise-marquee relative w-full overflow-hidden">
            <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-slate-900 via-transparent to-slate-900 w-full" />

            <div className="enterprise-marquee-track flex whitespace-nowrap gap-5 sm:gap-6 items-center pl-6 sm:pl-8 pr-6 sm:pr-8 opacity-100 transition-opacity duration-500">
              {[...featuredTechnologies, ...featuredTechnologies, ...featuredTechnologies].map((technology, idx) => (
                <a
                  key={`${technology.name}-${idx}`}
                  href={technology.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-950/80 px-3 py-1.5 text-xs sm:text-sm font-semibold text-slate-200 hover:text-foreground hover:border-primary/50 transition-colors"
                >
                  <Image
                    src={technology.src}
                    alt={`${technology.name} logo`}
                    width={20}
                    height={20}
                    className="h-4 w-4 object-contain brightness-0 invert"
                  />
                  {technology.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
