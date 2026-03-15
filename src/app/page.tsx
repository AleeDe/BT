import dynamic from "next/dynamic";
import { HeroSection } from "@/components/HeroSection";

const ExpertiseShowcase = dynamic(() =>
  import("@/components/ExpertiseShowcase").then((mod) => mod.ExpertiseShowcase)
);
const IndustriesSection = dynamic(() =>
  import("@/components/IndustriesSection").then((mod) => mod.IndustriesSection)
);
const TestimonialsSection = dynamic(() =>
  import("@/components/TestimonialsSection").then((mod) => mod.TestimonialsSection)
);
const SubsidiaryEcosystem = dynamic(() =>
  import("@/components/SubsidiaryEcosystem").then((mod) => mod.SubsidiaryEcosystem)
);

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A1128] text-white selection:bg-[#2962FF] selection:text-white pb-32">
      <HeroSection />
      <ExpertiseShowcase />
      <IndustriesSection />
      <TestimonialsSection />
      <SubsidiaryEcosystem />
    </main>
  );
}
