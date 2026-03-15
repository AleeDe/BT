import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ExpertiseShowcase } from "@/components/ExpertiseShowcase";
import { IndustriesSection } from "@/components/IndustriesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { SubsidiaryEcosystem } from "@/components/SubsidiaryEcosystem";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A1128] text-white selection:bg-[#2962FF] selection:text-white pb-32">
      <Navigation />
      <HeroSection />
      <ExpertiseShowcase />
      <IndustriesSection />
      <TestimonialsSection />
      <SubsidiaryEcosystem />
    </main>
  );
}
