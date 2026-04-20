import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | BabulTech',
  description:
    'Learn how BabulTech collects, uses, stores, and protects personal information across our website and services.',
};

const sections = [
  {
    title: 'Information We Collect',
    content:
      'We may collect information you provide directly, including your name, email address, company details, and project requirements submitted through contact forms. We may also collect technical usage data such as browser type, device information, pages visited, and referral source.',
  },
  {
    title: 'How We Use Your Information',
    content:
      'We use your information to respond to inquiries, deliver services, improve user experience, communicate important updates, and maintain the security of our systems. We do not sell personal data to third parties.',
  },
  {
    title: 'Data Sharing',
    content:
      'We may share information with trusted service providers who support website hosting, analytics, communication, and operations, only to the extent necessary to provide our services. These providers are required to handle data securely.',
  },
  {
    title: 'Data Retention',
    content:
      'We retain personal data only as long as required for business, legal, or contractual purposes. When retention is no longer necessary, we delete or anonymize the information.',
  },
  {
    title: 'Your Rights',
    content:
      'Depending on your jurisdiction, you may have the right to access, correct, delete, or restrict processing of your personal data. To submit a request, contact us using the details provided on our Contact page.',
  },
  {
    title: 'Security',
    content:
      'We implement reasonable administrative, technical, and organizational safeguards to protect your information. No method of transmission or storage is completely secure, but we continuously improve our controls.',
  },
  {
    title: 'Policy Updates',
    content:
      'We may update this Privacy Policy from time to time. Any updates will be posted on this page with a revised effective date.',
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <p className="text-xs uppercase tracking-[0.2em] text-sky-300 font-semibold">Legal</p>
        <h1 className="mt-3 text-3xl md:text-5xl font-bold text-white">Privacy Policy</h1>
        <p className="mt-4 text-slate-300 leading-relaxed">
          Effective date: April 21, 2026. This page describes how BabulTech handles personal data collected through
          our website and service interactions.
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
