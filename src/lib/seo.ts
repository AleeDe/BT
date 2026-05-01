// Single source of truth for SEO. Update SITE_URL when the production domain changes.

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://www.babultech.com";

export const SITE_NAME = "BabulTech";
export const SITE_TAGLINE = "Certified Expertise. Rapid Resolution.";
export const SITE_DESCRIPTION =
  "Enterprise IT, CRM, and cloud solutions from certified Salesforce, AWS, Azure, Google Cloud, and Boomi experts. Rapid resolution, delivered end to end.";

export const ORG_LEGAL_NAME = "BabulTech";
export const ORG_LOGO = `${SITE_URL}/logo.png`;
export const ORG_EMAIL = "contact@babultech.com";
export const ORG_PHONE = "+92 310 2700403";
export const ORG_ADDRESS = {
  addressLocality: "Skardu",
  addressCountry: "PK",
};
export const ORG_FOUNDING_YEAR = 2010;

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/company/babultech",
  twitter: "https://twitter.com/babultech",
  facebook: "https://facebook.com/babultech",
  github: "https://github.com/babultech",
};

export const TWITTER_HANDLE = "@babultech";

export const DEFAULT_KEYWORDS = [
  "Salesforce implementation partner",
  "Salesforce certified consultant",
  "Boomi integration",
  "CRM implementation",
  "enterprise IT solutions",
  "AWS solutions architect",
  "Azure solutions architect",
  "Google Cloud architect",
  "technical partnership",
  "cloud migration",
  "BabulTech",
  "custom CRM development",
  "enterprise AI",
  "system integration",
];

type AbsoluteUrlInput = string | undefined;

export function absoluteUrl(path: AbsoluteUrlInput = "/"): string {
  if (!path) return SITE_URL;
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function canonical(path: string = "/"): string {
  return absoluteUrl(path);
}

// Schema.org Organization — used in root layout
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}#organization`,
    name: SITE_NAME,
    legalName: ORG_LEGAL_NAME,
    url: SITE_URL,
    logo: ORG_LOGO,
    image: ORG_LOGO,
    description: SITE_DESCRIPTION,
    foundingDate: String(ORG_FOUNDING_YEAR),
    email: ORG_EMAIL,
    telephone: ORG_PHONE,
    address: {
      "@type": "PostalAddress",
      addressLocality: ORG_ADDRESS.addressLocality,
      addressCountry: ORG_ADDRESS.addressCountry,
    },
    sameAs: [
      SOCIAL_LINKS.linkedin,
      SOCIAL_LINKS.twitter,
      SOCIAL_LINKS.facebook,
      SOCIAL_LINKS.github,
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: ORG_PHONE,
        email: ORG_EMAIL,
        contactType: "customer support",
        areaServed: "Worldwide",
        availableLanguage: ["English"],
      },
    ],
    knowsAbout: [
      "Salesforce CRM",
      "Boomi Integration",
      "AWS Cloud Architecture",
      "Microsoft Azure",
      "Google Cloud Platform",
      "CRM Implementation",
      "Enterprise IT Strategy",
      "Cloud Migration",
      "Custom Software Development",
    ],
  };
}

// Schema.org WebSite — for sitelinks search box and brand entity
export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    publisher: { "@id": `${SITE_URL}#organization` },
    inLanguage: "en-US",
  };
}

export type BreadcrumbItem = { name: string; url: string };

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: absoluteUrl(item.url),
    })),
  };
}

export function serviceJsonLd(args: {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
  areaServed?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: args.name,
    description: args.description,
    url: absoluteUrl(args.url),
    serviceType: args.serviceType ?? args.name,
    areaServed: args.areaServed ?? "Worldwide",
    provider: { "@id": `${SITE_URL}#organization` },
  };
}

export function articleJsonLd(args: {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
}) {
  const published = args.datePublished ?? new Date().toISOString();
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: args.title,
    description: args.description,
    image: args.image.startsWith("http") ? args.image : absoluteUrl(args.image),
    datePublished: published,
    dateModified: args.dateModified ?? published,
    mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(args.url) },
    author: {
      "@type": "Organization",
      name: args.authorName ?? SITE_NAME,
      url: SITE_URL,
    },
    publisher: { "@id": `${SITE_URL}#organization` },
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
