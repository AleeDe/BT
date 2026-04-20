import dynamic from "next/dynamic";
import { Suspense } from "react";
import { HeroSection } from "@/components/HeroSection";
import { SectionLoadingSpinner } from "@/components/LoadingSpinner";

const ExpertiseShowcase = dynamic(() =>
  import("@/components/ExpertiseShowcase").then((mod) => mod.ExpertiseShowcase)
, {
  loading: () => <SectionLoadingSpinner />,
  ssr: true,
});

const IndustriesSection = dynamic(() =>
  import("@/components/IndustriesSection").then((mod) => mod.IndustriesSection)
, {
  loading: () => <SectionLoadingSpinner />,
  ssr: true,
});

const TestimonialsSection = dynamic(() =>
  import("@/components/TestimonialsSection").then((mod) => mod.TestimonialsSection)
, {
  loading: () => <SectionLoadingSpinner />,
  ssr: true,
});

const SubsidiaryEcosystem = dynamic(() =>
  import("@/components/SubsidiaryEcosystem").then((mod) => mod.SubsidiaryEcosystem)
, {
  loading: () => <SectionLoadingSpinner />,
  ssr: true,
});

export default function Homepage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-foreground pb-32">
      <HeroSection />
      <Suspense fallback={<SectionLoadingSpinner />}>
        <ExpertiseShowcase />
      </Suspense>
      <Suspense fallback={<SectionLoadingSpinner />}>
        <IndustriesSection />
      </Suspense>
      <Suspense fallback={<SectionLoadingSpinner />}>
        <TestimonialsSection />
      </Suspense>
      <Suspense fallback={<SectionLoadingSpinner />}>
        <SubsidiaryEcosystem />
      </Suspense>
    </main>
  );
}
