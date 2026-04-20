export type FooterSimpleLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type FooterSocialLink = {
  label: string;
  href: string;
};

export const footerSocialLinks: FooterSocialLink[] = [
  { label: 'Facebook', href: 'https://facebook.com' },
  { label: 'Twitter', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'GitHub', href: '#' },
];

export const footerExpertiseLinks: FooterSimpleLink[] = [
  { label: 'Enterprise IT Solutions', href: 'https://core-services-kappa.vercel.app/', external: true },
  { label: 'CRM Implementation', href: 'https://core-services-kappa.vercel.app/', external: true },
  { label: 'Technical Partnership', href: 'https://core-services-kappa.vercel.app/', external: true },
  { label: 'Cloud Infrastructure', href: 'https://core-services-kappa.vercel.app/', external: true },
];

export const footerCompanyLinks: FooterSimpleLink[] = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Case Studies', href: '/case-studies' },
  { label: 'Our Core Services', href: 'https://core-services-kappa.vercel.app/', external: true },
  { label: 'Industries', href: '/industries' },
];

export const footerLegalLinks: FooterSimpleLink[] = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms-of-service' },
  { label: 'Cookie Preferences', href: '/cookie-preferences' },
];
