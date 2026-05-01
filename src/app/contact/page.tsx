import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactHeader } from "@/components/contact/ContactHeader";
import { ContactMethods } from "@/components/contact/ContactMethods";
import { JsonLd } from "@/components/JsonLd";
import {
  ORG_EMAIL,
  ORG_PHONE,
  SITE_URL,
  breadcrumbJsonLd,
  canonical,
} from "@/lib/seo";

const CONTACT_DESCRIPTION =
  "Talk to BabulTech about Salesforce, Boomi, AWS, Azure, or Google Cloud projects. Email contact@babultech.com, call +92 310 2700403, or send a brief. We reply within one business day.";

export const metadata: Metadata = {
  title: "Contact BabulTech - Schedule a Consultation",
  description: CONTACT_DESCRIPTION,
  alternates: { canonical: canonical("/contact") },
  openGraph: {
    url: canonical("/contact"),
    title: "Contact BabulTech - Schedule a Consultation",
    description: CONTACT_DESCRIPTION,
  },
  twitter: {
    title: "Contact BabulTech - Schedule a Consultation",
    description: CONTACT_DESCRIPTION,
  },
};

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: canonical("/contact"),
  name: "Contact BabulTech",
  description: CONTACT_DESCRIPTION,
  mainEntity: {
    "@id": `${SITE_URL}#organization`,
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: ORG_EMAIL,
      telephone: ORG_PHONE,
      areaServed: "Worldwide",
      availableLanguage: ["English"],
    },
  ],
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-foreground pt-28 pb-20 relative overflow-hidden">
      <JsonLd
        id="ld-contact-breadcrumbs"
        data={breadcrumbJsonLd([
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ])}
      />
      <JsonLd id="ld-contact-page" data={contactPageJsonLd} />

      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ContactHeader />

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-start">
          <ContactMethods />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
