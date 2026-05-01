import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { SectionLoadingSpinner } from "@/components/LoadingSpinner";
import { JsonLd } from "@/components/JsonLd";
import { caseStudies } from "@/data/caseStudies";
import { breadcrumbJsonLd, canonical, absoluteUrl } from "@/lib/seo";

const CaseStudiesSectionClient = dynamic(
  () => import("@/components/CaseStudiesSectionClient"),
  {
    loading: () => <SectionLoadingSpinner />,
    ssr: true,
  },
);

const CASE_STUDIES_DESCRIPTION =
  "Explore BabulTech case studies — cloud migration for a Fortune 500 bank, zero-trust cybersecurity for 50+ hospitals, unified CRM for a national retailer, and real-time fleet analytics. See the stack, problem, and measurable outcomes.";

export const metadata: Metadata = {
  title: "Case Studies — Enterprise IT, CRM & Cloud Wins",
  description: CASE_STUDIES_DESCRIPTION,
  alternates: { canonical: canonical("/case-studies") },
  openGraph: {
    url: canonical("/case-studies"),
    title: "Case Studies — Enterprise IT, CRM & Cloud Wins",
    description: CASE_STUDIES_DESCRIPTION,
  },
  twitter: {
    title: "Case Studies — Enterprise IT, CRM & Cloud Wins",
    description: CASE_STUDIES_DESCRIPTION,
  },
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "BabulTech Case Studies",
  itemListElement: caseStudies.map((cs, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    url: absoluteUrl(`/case-studies/${cs.id}`),
    name: cs.title,
  })),
};

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd
        id="ld-case-studies-breadcrumbs"
        data={breadcrumbJsonLd([
          { name: "Home", url: "/" },
          { name: "Case Studies", url: "/case-studies" },
        ])}
      />
      <JsonLd id="ld-case-studies-list" data={itemListJsonLd} />
      <Suspense fallback={<SectionLoadingSpinner />}>
        <CaseStudiesSectionClient />
      </Suspense>
    </>
  );
}
