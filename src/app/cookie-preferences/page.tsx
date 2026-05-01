import type { Metadata } from 'next';
import { canonical } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Cookie Preferences',
  description:
    'Understand and manage how cookies and related technologies are used on BabulTech websites.',
  alternates: { canonical: canonical('/cookie-preferences') },
  robots: { index: false, follow: true },
};

const cookieTypes = [
  {
    title: 'Essential Cookies',
    purpose:
      'Required for basic website functionality, security, and page navigation. These cookies cannot be disabled through this page.',
  },
  {
    title: 'Analytics Cookies',
    purpose:
      'Help us understand how visitors use the website so we can improve content, performance, and user experience.',
  },
  {
    title: 'Functional Cookies',
    purpose:
      'Remember preferences such as region, language, and display settings to deliver a more personalized experience.',
  },
  {
    title: 'Marketing Cookies',
    purpose:
      'May be used to measure campaign effectiveness and provide relevant outreach across marketing channels.',
  },
];

export default function CookiePreferencesPage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <p className="text-xs uppercase tracking-[0.2em] text-sky-300 font-semibold">Legal</p>
        <h1 className="mt-3 text-3xl md:text-5xl font-bold text-white">Cookie Preferences</h1>
        <p className="mt-4 text-slate-300 leading-relaxed">
          Effective date: April 21, 2026. This page explains our use of cookies and similar technologies.
        </p>

        <section className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 md:p-8">
          <h2 className="text-xl font-semibold text-white">How We Use Cookies</h2>
          <p className="mt-3 text-slate-300 leading-relaxed">
            Cookies are small text files stored in your browser. We use them to operate the site, improve performance,
            understand usage patterns, and support communication and marketing activities.
          </p>
        </section>

        <div className="mt-8 grid gap-6">
          {cookieTypes.map((type) => (
            <section key={type.title} className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 md:p-8">
              <h3 className="text-lg font-semibold text-white">{type.title}</h3>
              <p className="mt-2 text-slate-300 leading-relaxed">{type.purpose}</p>
            </section>
          ))}
        </div>

        <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 md:p-8">
          <h2 className="text-xl font-semibold text-white">Managing Cookies</h2>
          <p className="mt-3 text-slate-300 leading-relaxed">
            You can manage cookie settings in your browser at any time, including blocking or deleting existing cookies.
            Disabling some categories may affect site functionality and user experience.
          </p>
        </section>
      </div>
    </main>
  );
}
