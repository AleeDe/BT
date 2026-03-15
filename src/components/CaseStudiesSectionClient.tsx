"use client";

import dynamic from "next/dynamic";


const CaseStudiesSection = dynamic(() => import("@/components/CaseStudiesSection").then(mod => mod.CaseStudiesSection), { ssr: false });
import { motion } from "framer-motion";

export default function CaseStudiesSectionClient() {
  return (
    <div className="min-h-screen bg-[#0A1128] pt-16">
      <CaseStudiesSection />
    </div>
  );
}
