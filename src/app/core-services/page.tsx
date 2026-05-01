import type { Metadata } from "next";
import { CoreServicesExperience } from "@/components/core-services/CoreServicesExperience";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, canonical, serviceJsonLd } from "@/lib/seo";

const CORE_SERVICES_DESCRIPTION =
  "From custom web platforms to enterprise-grade applications and mobile experiences, BabulTech architects, designs, and builds software that scales with your ambition.";

export const metadata: Metadata = {
  title: "Core Services that Power Your Vision | BabulTech",
  description: CORE_SERVICES_DESCRIPTION,
  alternates: { canonical: canonical("/core-services") },
  openGraph: {
    url: canonical("/core-services"),
    title: "Core Services that Power Your Vision | BabulTech",
    description: CORE_SERVICES_DESCRIPTION,
  },
  twitter: {
    title: "Core Services that Power Your Vision | BabulTech",
    description: CORE_SERVICES_DESCRIPTION,
  },
};

export default function CoreServicesPage() {
  return (
    <>
      <JsonLd
        id="ld-core-services-breadcrumbs"
        data={breadcrumbJsonLd([
          { name: "Home", url: "/" },
          { name: "Core Services", url: "/core-services" },
        ])}
      />
      <JsonLd
        id="ld-core-services"
        data={[
          serviceJsonLd({
            name: "Web Development",
            description:
              "Scalable web platforms built with React, Next.js, TypeScript, and production-ready delivery practices.",
            url: "/core-services#services",
            serviceType: "Web Development",
          }),
          serviceJsonLd({
            name: "Enterprise Applications",
            description:
              "Secure, workflow-driven enterprise applications, admin portals, integrations, and internal tools.",
            url: "/core-services#services",
            serviceType: "Enterprise Software",
          }),
          serviceJsonLd({
            name: "Mobile Applications",
            description:
              "iOS and Android product experiences designed for performance, reliability, and long-term iteration.",
            url: "/core-services#services",
            serviceType: "Mobile Application Development",
          }),
        ]}
      />
      <CoreServicesExperience />
    </>
  );
}
