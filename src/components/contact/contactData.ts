import { CONTACT_EMAIL, CONTACT_HOURS, CONTACT_PHONE, OFFICE_LOCATIONS } from "@/lib/contact";

export type ContactMethod = {
  title: string;
  description: string;
  value: string;
  href?: string;
  icon: "phone" | "mail" | "map-pin";
  color: string;
};

export const contactMethods: ContactMethod[] = [
  {
    icon: "phone",
    title: "Call Us",
    description: CONTACT_HOURS,
    value: CONTACT_PHONE,
    color: "from-primary to-primary",
  },
  {
    icon: "mail",
    title: "Email Us",
    description: "Use your business email for project inquiries.",
    value: CONTACT_EMAIL,
    color: "from-primary to-primary",
  },
  {
    icon: "map-pin",
    title: "Visit Us",
    description: "IDC office and head office map links.",
    value: OFFICE_LOCATIONS.map((office) => `${office.label}: ${office.address}`).join(" | "),
    color: "from-primary to-primary",
  },
];
