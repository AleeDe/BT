import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, canonical, serviceJsonLd } from "@/lib/seo";

const INDUSTRIES_DESCRIPTION =
  "BabulTech delivers compliance-first IT, CRM, and cloud solutions across banking, retail and eCommerce, manufacturing and logistics, healthcare, non-profits, and the IT and software industry.";

export const metadata: Metadata = {
  title: "Industries We Serve — Banking, Retail, Healthcare & More",
  description: INDUSTRIES_DESCRIPTION,
  alternates: { canonical: canonical("/industries") },
  openGraph: {
    url: canonical("/industries"),
    title: "Industries We Serve — Banking, Retail, Healthcare & More",
    description: INDUSTRIES_DESCRIPTION,
  },
  twitter: {
    title: "Industries We Serve — Banking, Retail, Healthcare & More",
    description: INDUSTRIES_DESCRIPTION,
  },
};

const industries = [
  {
    name: "Banking & Financial Services",
    description:
      "Secure, compliant revenue workflows and automated systems for regulated environments.",
  },
  {
    name: "Retail & eCommerce",
    description:
      "Conversion-focused, headless commerce architectures designed to scale during peak demand.",
  },
  {
    name: "Manufacturing & Logistics",
    description:
      "Unified ERP/CRM integrations and logistics dashboards that replace spreadsheets with automation.",
  },
  {
    name: "Healthcare Solutions",
    description:
      "HIPAA-compliant data workflows, patient portals, and secure telehealth integrations.",
  },
  {
    name: "NGOs & Non-Profits",
    description:
      "Salesforce NPSP, donor lifecycle automation, and volunteer coordination at global scale.",
  },
  {
    name: "IT & Software Industry",
    description:
      "Cloud-native architecture, CI/CD acceleration, SRE observability, and platform scalability.",
  },
];

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        id="ld-industries-breadcrumbs"
        data={breadcrumbJsonLd([
          { name: "Home", url: "/" },
          { name: "Industries", url: "/industries" },
        ])}
      />
      <JsonLd
        id="ld-industries-services"
        data={industries.map((ind) =>
          serviceJsonLd({
            name: `${ind.name} IT Solutions`,
            description: ind.description,
            url: "/industries",
            serviceType: ind.name,
          }),
        )}
      />
      {children}
    </>
  );
}
