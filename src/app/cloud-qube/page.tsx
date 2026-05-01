import type { Metadata } from "next";
import { CloudQubeExperience } from "@/components/cloud-qube/CloudQubeExperience";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, canonical, serviceJsonLd } from "@/lib/seo";

const CLOUD_QUBE_DESCRIPTION =
  "CloudQube is BabulTech's next-generation Salesforce consulting experience, helping teams move from problem to solution in minutes.";

export const metadata: Metadata = {
  title: "CloudQube | BabulTech",
  description: CLOUD_QUBE_DESCRIPTION,
  alternates: { canonical: canonical("/cloud-qube") },
  openGraph: {
    url: canonical("/cloud-qube"),
    title: "CloudQube | BabulTech",
    description: CLOUD_QUBE_DESCRIPTION,
  },
  twitter: {
    title: "CloudQube | BabulTech",
    description: CLOUD_QUBE_DESCRIPTION,
  },
};

export default function CloudQubePage() {
  return (
    <>
      <JsonLd
        id="ld-cloud-qube-breadcrumbs"
        data={breadcrumbJsonLd([
          { name: "Home", url: "/" },
          { name: "CloudQube", url: "/cloud-qube" },
        ])}
      />
      <JsonLd
        id="ld-cloud-qube-service"
        data={serviceJsonLd({
          name: "CloudQube Salesforce Consulting",
          description: CLOUD_QUBE_DESCRIPTION,
          url: "/cloud-qube",
          serviceType: "Salesforce Consulting",
        })}
      />
      <CloudQubeExperience />
    </>
  );
}
