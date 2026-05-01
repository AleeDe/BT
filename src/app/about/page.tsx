import type { Metadata } from "next";
import { AboutHeroSection } from "@/components/about/AboutHeroSection";
import { AboutCertificationsSection } from "@/components/about/AboutCertificationsSection";
import { AboutStatsSection } from "@/components/about/AboutStatsSection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, canonical } from "@/lib/seo";

const ABOUT_DESCRIPTION =
  "Meet BabulTech — certified Salesforce, AWS, Azure, Google Cloud, and Boomi experts pioneering enterprise IT transformation with rapid resolution and 15+ years of delivery experience.";

export const metadata: Metadata = {
  title: "About BabulTech — Certified Enterprise IT & CRM Experts",
  description: ABOUT_DESCRIPTION,
  alternates: { canonical: canonical("/about") },
  openGraph: {
    url: canonical("/about"),
    title: "About BabulTech — Certified Enterprise IT & CRM Experts",
    description: ABOUT_DESCRIPTION,
  },
  twitter: {
    title: "About BabulTech — Certified Enterprise IT & CRM Experts",
    description: ABOUT_DESCRIPTION,
  },
};

export default function AboutPage() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-300">
      <JsonLd
        id="ld-about-breadcrumbs"
        data={breadcrumbJsonLd([
          { name: "Home", url: "/" },
          { name: "About", url: "/about" },
        ])}
      />
      <AboutHeroSection />
      <AboutCertificationsSection />
      <AboutStatsSection />
      {/* <AboutLeadershipSection /> */}
    </div>
  );
}
