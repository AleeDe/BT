"use client";

import { useState } from "react";
import { caseStudies } from "@/data/caseStudies";
import { CaseStudiesHeader } from "@/components/case-studies/CaseStudiesHeader";
import { CaseStudiesCategoryFilter } from "@/components/case-studies/CaseStudiesCategoryFilter";
import { CaseStudiesList } from "@/components/case-studies/CaseStudiesList";
import { CaseStudiesCta } from "@/components/case-studies/CaseStudiesCta";

// Extract unique categories dynamically based on the dataset
const categories = ["All", ...Array.from(new Set(caseStudies.map((cs) => cs.category)))];

// ==========================================
// 3. MAIN SECTION WRAPPER
// ==========================================
export function CaseStudiesSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredStudies = caseStudies.filter(
    (study) => activeCategory === "All" || study.category === activeCategory
  );

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden" id="case-studies">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CaseStudiesHeader />
        <CaseStudiesCategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        <CaseStudiesList studies={filteredStudies} />
        <CaseStudiesCta />

      </div>
    </section>
  );
}
