import type { Metadata } from "next";
import Homepage from "./Homepage";
import { JsonLd } from "@/components/JsonLd";
import {
  SITE_NAME,
  SITE_TAGLINE,
  SITE_DESCRIPTION,
  SITE_URL,
  canonical,
  serviceJsonLd,
  faqJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: `${SITE_NAME} | ${SITE_TAGLINE}`,
  description: SITE_DESCRIPTION,
  alternates: { canonical: canonical("/") },
  openGraph: {
    url: SITE_URL,
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
  },
};

const homeFaqs = [
  {
    question: "What services does BabulTech provide?",
    answer:
      "BabulTech provides enterprise IT solutions, custom CRM implementation (Salesforce, Boomi), cloud architecture (AWS, Azure, Google Cloud), custom software development, and ongoing technical partnership for mid-market and enterprise clients.",
  },
  {
    question: "Which CRM platforms does BabulTech specialize in?",
    answer:
      "Our team holds Salesforce certifications spanning Administrator, Platform Developer, Sales Cloud, Service Cloud, Data Architect, Sharing & Visibility Architect, and Application Architect. We also implement and integrate Dell Boomi for enterprise integration.",
  },
  {
    question: "What industries does BabulTech serve?",
    answer:
      "We work across banking and financial services, retail and eCommerce, manufacturing and logistics, healthcare, non-profits, and the IT and software industry — anywhere compliance, integration, and scale matter.",
  },
  {
    question: "Where is BabulTech located?",
    answer:
      "BabulTech is headquartered in Skardu, Pakistan and serves clients worldwide. You can reach us at contact@babultech.com or +92 310 2700403.",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd
        id="ld-home-services"
        data={[
          serviceJsonLd({
            name: "Enterprise CRM Implementation",
            description:
              "End-to-end Salesforce and Boomi implementation, customization, and integration for enterprise teams.",
            url: "/",
            serviceType: "CRM Implementation",
          }),
          serviceJsonLd({
            name: "Cloud Architecture & Migration",
            description:
              "AWS, Azure, and Google Cloud architecture, modernization, and zero-downtime cloud migration for regulated industries.",
            url: "/",
            serviceType: "Cloud Migration",
          }),
          serviceJsonLd({
            name: "Technical Partnership",
            description:
              "Ongoing technical partnership covering platform engineering, observability, and rapid resolution for product and operations teams.",
            url: "/",
            serviceType: "Technical Consulting",
          }),
        ]}
      />
      <JsonLd id="ld-home-faq" data={faqJsonLd(homeFaqs)} />
      <Homepage />
    </>
  );
}
