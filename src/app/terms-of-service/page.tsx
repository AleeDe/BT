import type { Metadata } from 'next';
import { canonical } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Review the terms and conditions governing your use of BabulTech websites, products, and services.',
  alternates: { canonical: canonical('/terms-of-service') },
  robots: { index: true, follow: true },
};

const sections = [
  {
    title: 'Acceptance of Terms',
    content:
      'By accessing or using BabulTech websites, products, and services, you agree to these Terms of Service. If you do not agree, please discontinue use.',
  },
  {
    title: 'Services and Scope',
    content:
      'BabulTech provides digital consulting, implementation, and software-related services. Scope, timelines, and deliverables for client projects are defined separately in written agreements.',
  },
  {
    title: 'User Responsibilities',
    content:
      'You agree not to misuse our website or services, attempt unauthorized access, interfere with service availability, or submit unlawful content. You are responsible for information you provide.',
  },
  {
    title: 'Intellectual Property',
    content:
      'Unless otherwise agreed in writing, all platform content, branding, and site materials are owned by BabulTech or licensed appropriately. Unauthorized reproduction or distribution is prohibited.',
  },
  {
    title: 'Payment and Commercial Terms',
    content:
      'Commercial terms, invoicing schedules, and payment conditions are governed by individual client agreements. Late payments may result in service suspension where permitted by contract.',
  },
  {
    title: 'Limitation of Liability',
    content:
      'To the maximum extent permitted by law, BabulTech is not liable for indirect, incidental, or consequential damages arising from the use or inability to use our services.',
  },
  {
    title: 'Termination',
    content:
      'We may suspend or terminate access in case of material breach, unlawful use, or security risks. Clients may terminate service engagements according to their contract terms.',
  },
  {
    title: 'Changes to Terms',
    content:
      'We may revise these Terms periodically. Continued use after updates constitutes acceptance of the revised terms.',
  },
];

export default function TermsOfServicePage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <p className="text-xs uppercase tracking-[0.2em] text-sky-300 font-semibold">Legal</p>
        <h1 className="mt-3 text-3xl md:text-5xl font-bold text-white">Terms of Service</h1>
        <p className="mt-4 text-slate-300 leading-relaxed">
          Effective date: April 21, 2026. These terms govern your use of BabulTech websites and services.
        </p>

        <div className="mt-10 space-y-8">
          {sections.map((section) => (
            <section key={section.title} className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 md:p-8">
              <h2 className="text-xl font-semibold text-white">{section.title}</h2>
              <p className="mt-3 text-slate-300 leading-relaxed">{section.content}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
