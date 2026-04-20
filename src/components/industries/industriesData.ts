import { Landmark, ShoppingCart, Factory, Code2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type IndustryItem = {
  key: string;
  title: string;
  tabLabel: string;
  icon: LucideIcon;
  description: string;
};

export const industries: IndustryItem[] = [
  {
    key: 'banking',
    title: 'Banking & Financial Services',
    tabLabel: 'Banking & Finance',
    icon: Landmark,
    description:
      'Secure, compliant revenue workflows and automated systems for regulated environments.',
  },
  {
    key: 'retail',
    title: 'Retail & eCommerce',
    tabLabel: 'Retail & eCommerce',
    icon: ShoppingCart,
    description:
      'Conversion-focused systems designed to scale with growth, demand, and operations.',
  },
  {
    key: 'manufacturing',
    title: 'Manufacturing',
    tabLabel: 'Manufacturing',
    icon: Factory,
    description:
      'Systems that connect sales, ops, and fulfillment without bottlenecks or manual reporting.',
  },
  {
    key: 'it-software',
    title: 'IT & Software Industry',
    tabLabel: 'IT & Software',
    icon: Code2,
    description:
      'Scalable software architecture, automation, and secure delivery pipelines built for modern IT teams.',
  },
];

export const INDUSTRY_ORDER = ['banking', 'retail', 'manufacturing', 'it-software'];
