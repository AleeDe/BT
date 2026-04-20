"use client";

import { useState } from "react";
import { IndustriesCategoryFilter } from "@/components/industries/IndustriesCategoryFilter";
import { IndustriesPageCta } from "@/components/industries/IndustriesPageCta";
import { IndustriesPageHeader } from "@/components/industries/IndustriesPageHeader";
import { IndustriesPageList } from "@/components/industries/IndustriesPageList";
import { industriesPageData, industryCategories } from "@/components/industries/industriesPageData";

export default function IndustriesPageContent() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredIndustries = industriesPageData.filter(
    (ind) => activeCategory === "All" || ind.category === activeCategory
  );

  return (
    <div className={"min-h-screen bg-background pt-32 pb-24 relative overflow-hidden"}>
      {/* Background elements */}
      <div className={"absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-transparent via-primary/20 to-transparent"}></div>
      <div className={"absolute top-40 -left-64 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"}></div>

      <div className={"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"}>
        <IndustriesPageHeader />

        <IndustriesCategoryFilter
          categories={industryCategories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <IndustriesPageList items={filteredIndustries} />

        <IndustriesPageCta />

      </div>
    </div>
  );
}
