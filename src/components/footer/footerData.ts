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
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/babultech/about/?viewAsMember=true' },
  { label: 'YouTube', href: 'https://youtube.com' },
  { label: 'Instagram', href: 'https://instagram.com' },
];

export const footerExpertiseLinks: FooterSimpleLink[] = [
  { label: 'Enterprise IT Solutions', href: '/core-services#enterprise-it' },
  { label: 'Enterprise Implementation', href: '/core-services#crm-implementation' },
  { label: 'Technical Partnership', href: '/core-services#technical-partnership' },
  { label: 'Cloud Infrastructure', href: '/core-services#cloud-infrastructure' },
];

export const footerCompanyLinks: FooterSimpleLink[] = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Case Studies', href: '/case-studies' },
  { label: 'Our Core Services', href: '/core-services' },
  { label: 'Industries', href: '/industries' },
];

export const footerLegalLinks: FooterSimpleLink[] = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms-of-service' },
  { label: 'Cookie Preferences', href: '/cookie-preferences' },
];
