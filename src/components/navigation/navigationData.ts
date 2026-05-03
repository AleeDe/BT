export type NavLinkItem = {
  label: string;
  href: string;
};

export type ServiceItem = {
  label: string;
  abbreviation: string;
  href?: string;
  description: string;
  external?: boolean;
  comingSoon?: boolean;
};

export const primaryNavLinks: NavLinkItem[] = [
  { label: 'About Us', href: '/about' },
  { label: 'Case Studies', href: '/case-studies' },
];

export const serviceItems: ServiceItem[] = [
  {
    label: 'Core Services',
    abbreviation: 'CS',
    href: '/core-services',
    description: 'Solving bottlenecks via powerful strategic Technical Partnerships',
  },
  {
    label: 'Customer Portal',
    abbreviation: 'CP',
    href: '/customer-portal',
    description: 'Enterprise CRM Solutions',
  },
  {
    label: 'AI & Data Science',
    abbreviation: 'AIDS',
    href: '/ai-data-science',
    description: 'LLMs, predictive analytics, AI agents, and MLOps',
  },
];
