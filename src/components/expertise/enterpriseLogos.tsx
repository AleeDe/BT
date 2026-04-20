import { type ReactNode } from 'react';
import Image from 'next/image';

type EnterpriseLogo = {
  name: string;
  url: string;
  svg: ReactNode;
};

export const enterpriseLogos: EnterpriseLogo[] = [
  {
    name: 'Microsoft',
    url: 'https://www.microsoft.com',
    svg: (
      <Image
        src="/logos/microsoft.svg"
        alt="Microsoft logo"
        width={130}
        height={30}
        className="h-7 w-auto max-w-[7.5rem] object-contain"
      />
    ),
  },
  {
    name: 'Google Cloud',
    url: 'https://cloud.google.com',
    svg: (
      <Image
        src="/logos/google-cloud.svg"
        alt="Google Cloud logo"
        width={130}
        height={30}
        className="h-7 w-auto max-w-[7.5rem] object-contain"
      />
    ),
  },
  {
    name: 'Amazon AWS',
    url: 'https://aws.amazon.com',
    svg: (
      <Image
        src="/logos/aws.svg"
        alt="Amazon AWS logo"
        width={130}
        height={30}
        className="h-7 w-auto max-w-[7.5rem] object-contain"
      />
    ),
  },
  {
    name: 'Vercel',
    url: 'https://vercel.com',
    svg: (
      <Image
        src="/logos/vercel.svg"
        alt="Vercel logo"
        width={110}
        height={28}
        className="h-7 w-auto max-w-[7rem] object-contain brightness-0 invert"
      />
    ),
  },
  {
    name: 'Stripe',
    url: 'https://stripe.com',
    svg: (
      <Image
        src="/logos/stripe.svg"
        alt="Stripe logo"
        width={110}
        height={28}
        className="h-7 w-auto max-w-[7rem] object-contain brightness-0 invert"
      />
    ),
  },
];
