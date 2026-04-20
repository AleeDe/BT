import Link from 'next/link';
import { footerLegalLinks } from '@/components/footer/footerData';

type FooterBottomBarProps = {
  currentYear: number;
};

export function FooterBottomBar({ currentYear }: FooterBottomBarProps) {
  return (
    <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-slate-500">
      <p>&copy; {currentYear} BabulTech. All rights reserved.</p>
      <div className="flex space-x-6">
        {footerLegalLinks.map((link) => (
          <Link key={link.label} href={link.href} className="hover:text-slate-300 transition-colors">
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
