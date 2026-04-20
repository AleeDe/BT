import { AboutHeroSection } from "@/components/about/AboutHeroSection";
import { AboutCertificationsSection } from "@/components/about/AboutCertificationsSection";
import { AboutStatsSection } from "@/components/about/AboutStatsSection";
import { AboutLeadershipSection } from "@/components/about/AboutLeadershipSection";

export default function AboutPage() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-300">
      <AboutHeroSection />
      <AboutCertificationsSection />
      <AboutStatsSection />
      {/* <AboutLeadershipSection /> */}
    </div>
  );
}
