import type { Metadata } from "next";
import { CloudQubeExperience } from "@/components/cloud-qube/CloudQubeExperience";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, canonical, serviceJsonLd } from "@/lib/seo";

const CLOUD_QUBE_DESCRIPTION =
  "Customer Portal is BabulTech's next-generation Salesforce consulting experience, helping teams move from problem to solution in minutes.";

export const metadata: Metadata = {
  title: "Customer Portal | BabulTech",
  description: CLOUD_QUBE_DESCRIPTION,
  alternates: { canonical: canonical("/customer-portal") },
  openGraph: {
    url: canonical("/customer-portal"),
    title: "Customer Portal | BabulTech",
    description: CLOUD_QUBE_DESCRIPTION,
  },
  twitter: {
    title: "Customer Portal | BabulTech",
    description: CLOUD_QUBE_DESCRIPTION,
  },
};

export default function CustomerPortalPage() {
  return (
    <>
      <JsonLd
        id="ld-cloud-qube-breadcrumbs"
        data={breadcrumbJsonLd([
          { name: "Home", url: "/" },
          { name: "Customer Portal", url: "/customer-portal" },
        ])}
      />
      <JsonLd
        id="ld-cloud-qube-service"
        data={serviceJsonLd({
          name: "Customer Portal Salesforce Consulting",
          description: CLOUD_QUBE_DESCRIPTION,
          url: "/customer-portal",
          serviceType: "Salesforce Consulting",
        })}
      />
      <CloudQubeExperience />
    </>
  );
}
