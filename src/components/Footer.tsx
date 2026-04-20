import { FooterBrand } from '@/components/footer/FooterBrand';
import { FooterExpertiseLinks } from '@/components/footer/FooterExpertiseLinks';
import { FooterCompanyLinks } from '@/components/footer/FooterCompanyLinks';
import { FooterContact } from '@/components/footer/FooterContact';
import { FooterBottomBar } from '@/components/footer/FooterBottomBar';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          <FooterBrand />
          <FooterExpertiseLinks />
          <FooterCompanyLinks />
          <FooterContact />
        </div>
        <FooterBottomBar currentYear={currentYear} />
      </div>
    </footer>
  );
}
