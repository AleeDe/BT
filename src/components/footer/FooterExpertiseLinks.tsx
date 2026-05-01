import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { footerExpertiseLinks } from '@/components/footer/footerData';

export function FooterExpertiseLinks() {
  return (
    <div>
      <h3 className="text-foreground font-semibold mb-6">Expertise</h3>
      <ul className="space-y-4">
        {footerExpertiseLinks.map((link) => (
          <li key={link.label}>
            {link.external ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-400 hover:text-primary transition-colors flex items-center group"
              >
                <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                {link.label}
              </a>
            ) : (
              <Link
                href={link.href}
                className="text-sm text-slate-400 hover:text-primary transition-colors flex items-center group"
              >
                <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
