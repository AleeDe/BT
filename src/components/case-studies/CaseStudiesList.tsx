"use client";

import { AnimatePresence, motion } from "framer-motion";
import { type CaseStudy } from "@/data/caseStudies";
import { CaseStudyCard } from "./CaseStudyCard";

type CaseStudiesListProps = {
  studies: CaseStudy[];
};

export function CaseStudiesList({ studies }: CaseStudiesListProps) {
  return (
    <div className="space-y-12">
      <AnimatePresence mode="popLayout">
        {studies.map((study, index) => (
          <motion.div
            key={study.id}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
            transition={{ duration: 0.5 }}
          >
            <CaseStudyCard study={study} index={index} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
