import { Code2, Factory, Landmark, ShieldCheck, ShoppingCart } from "lucide-react";

export type IndustryPageItem = {
  key: string;
  category: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  accent: string;
  description: string;
  details: string;
  bullets: string[];
  resultLabel: string;
  resultText: string;
};

export const industriesPageData: IndustryPageItem[] = [
  {
    key: "banking",
    category: "Finance",
    title: "Banking & Financial Services",
    icon: Landmark,
    accent: "from-primary to-primary",
    description: "Secure, compliant revenue workflows and automated systems for regulated environments.",
    details:
      "The financial sector requires zero tolerance for errors and maximum compliance. Our architectures are built from the ground up prioritizing data governance, immediate disaster recovery, and role-based zero-trust environments. We help institutions migrate from legacy mainframes to scalable cloud solutions without operational downtime.",
    bullets: [
      "Role-based access & audit controls",
      "Data governance & API integrations",
      "Operational reporting & real-time monitoring",
      "Fraud detection & AI-driven analytics",
    ],
    resultLabel: "Key Result",
    resultText: "Reduced onboarding time for regulated environments by up to 30%",
  },
  {
    key: "retail",
    category: "Commerce",
    title: "Retail & eCommerce",
    icon: ShoppingCart,
    accent: "from-primary to-primary",
    description: "Conversion-focused systems designed to scale with growth, demand, and operations.",
    details:
      "In retail, latency kills conversions. We build headless commerce architectures and high-throughput inventory systems that ensure your storefront remains lightning fast during Black Friday spikes while your back-office operations sync flawlessly in real-time.",
    bullets: [
      "Order + customer lifecycle automation",
      "Faster campaign & headless storefront launches",
      "Analytics-ready architecture & data warehousing",
      "Omnichannel inventory synchronization",
    ],
    resultLabel: "Key Result",
    resultText: "Improved conversion rates with faster pages and cleaner funnels by 15–25%",
  },
  {
    key: "manufacturing",
    category: "Logistics",
    title: "Manufacturing & Logistics",
    icon: Factory,
    accent: "from-primary to-primary",
    description:
      "Systems that connect sales, ops, and fulfillment without bottlenecks or manual reporting.",
    details:
      "We eliminate the silos between the factory floor, the warehouse, and the sales team. By implementing unified ERP/CRM integrations and custom logistics dashboards, we replace spreadsheet chaos with predictable, automated operational workflows.",
    bullets: [
      "Integrated quoting + operations pipelines",
      "Partner / dealer automated portals",
      "Scalable process design & resource tracking",
      "Predictive maintenance & IoT integrations",
    ],
    resultLabel: "Key Result",
    resultText: "Faster quote-to-cash cycles and fewer manual errors by 20–35%",
  },
  {
    key: "health",
    category: "Healthcare",
    title: "Healthcare Solutions",
    icon: Landmark,
    accent: "from-primary to-primary",
    description:
      "HIPAA-compliant data workflows, intelligent patient portals, and secure health integrations.",
    details:
      "Healthcare requires ironclad security without sacrificing patient experience. We implement systems that handle sensitive medical data with absolute compliance, while streamlining the booking and telehealth workflows.",
    bullets: [
      "HIPAA-compliant cloud storage setups",
      "Telehealth & patient portal integrations",
      "Smart scheduling and notification systems",
      "Automated billing and insurance mapping",
    ],
    resultLabel: "Key Result",
    resultText: "Reduced administrative overhead by up to 40% and improved patient satisfaction.",
  },
  {
    key: "ngo",
    category: "Non-Profit",
    title: "NGOs & Non-Profits",
    icon: ShieldCheck,
    accent: "from-primary to-primary",
    description:
      "Transparent, scalable platforms that maximize donor impact and streamline global operations.",
    details:
      "We empower organizations with optimized CRM mappings (like Salesforce NPSP) to track donors easily, handle grant workflows, and execute vast marketing campaigns without relying on manual entry.",
    bullets: [
      "Donor lifecycle & retention automation",
      "Grant and fund tracking databases",
      "Volunteer coordination portals",
      "Cost-effective scaling on cloud platforms",
    ],
    resultLabel: "Key Result",
    resultText: "Increased donor retention by 20% through automated engagement loops.",
  },
  {
    key: "it-software",
    category: "Technology",
    title: "IT & Software Industry",
    icon: Code2,
    accent: "from-primary to-primary",
    description:
      "Scalable software architecture, secure delivery pipelines, and intelligent automation for modern product teams.",
    details:
      "We help IT and software organizations move faster without sacrificing reliability. From platform engineering and CI/CD optimization to cloud-native architecture and observability, we build systems that support rapid releases and resilient operations.",
    bullets: [
      "Cloud-native architecture and modernization",
      "CI/CD automation and release acceleration",
      "SRE observability and incident response workflows",
      "Secure API integrations and platform scalability",
    ],
    resultLabel: "Key Result",
    resultText: "Reduced deployment cycle time while improving platform stability across production environments.",
  },
];

export const industryCategories = [
  "All",
  ...Array.from(new Set(industriesPageData.map((item) => item.category))),
];
