import Link from 'next/link';
import { footerCompanyLinks } from '@/components/footer/footerData';

export function FooterCompanyLinks() {
  return (
    <div>
      <h3 className="text-foreground font-semibold mb-6">Company</h3>
      <ul className="space-y-4">
        {footerCompanyLinks.map((link) => (
          <li key={link.label}>
            {link.external ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-400 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <Link href={link.href} className="text-sm text-slate-400 hover:text-primary transition-colors">
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
