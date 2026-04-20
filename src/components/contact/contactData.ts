export type ContactMethod = {
  title: string;
  description: string;
  value: string;
  icon: "phone" | "mail" | "map-pin";
  color: string;
};

export const contactMethods: ContactMethod[] = [
  {
    icon: "phone",
    title: "Call Us",
    description: "Mon-Fri from 8am to 5pm.",
    value: "+92 310 2700403",
    color: "from-primary to-primary",
  },
  {
    icon: "mail",
    title: "Chat with us",
    description: "Our friendly team is here to help.",
    value: "contact@babultech.com",
    color: "from-primary to-primary",
  },
  {
    icon: "map-pin",
    title: "Visit us",
    description: "Come say hello at our HQ.",
    value: "Skardu, Pakistan",
    color: "from-primary to-primary",
  },
];
