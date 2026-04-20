export type NavLinkItem = {
  label: string;
  href: string;
};

export type ServiceItem = {
  label: string;
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
    label: 'Our Core Services',
    href: 'https://core-services-kappa.vercel.app/',
    description: 'Solving bottlenecks via powerful strategic Technical Partnerships',
    external: true,
  },
  {
    label: 'CloudQube',
    href: 'https://cloud-qube.vercel.app/',
    description: 'Enterprise CRM Solutions',
    external: true,
  },
  {
    label: 'AI & Data Science',
    description: 'Advanced AI solutions and analytics services',
    comingSoon: true,
  },
];
