import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';
import { footerSocialLinks } from '@/components/footer/footerData';

const socialIconMap = {
  Facebook,
  Twitter,
  LinkedIn: Linkedin,
  YouTube: Youtube,
  Instagram,
};

export function FooterBrand() {
  return (
    <div className="space-y-6">
      <Link href="/" className="inline-block group relative p-1 transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary [mask-image:url('/logo.png')] [mask-size:contain] [mask-repeat:no-repeat] [mask-position:left_center] drop-shadow-[0_0_12px_rgba(16,185,129,0.7)] group-hover:from-primary group-hover:to-primary transition-all duration-500 z-10" />
        <Image
          src="/logo.png"
          alt="BabulTech Logo"
          width={176}
          height={40}
          loading="lazy"
          className="h-9 sm:h-10 w-auto object-contain opacity-0 z-0"
        />
      </Link>

      <p className="text-slate-400 leading-relaxed text-sm">
        Delivering certified expertise and rapid resolution across enterprise IT, enterprise solutions implementation, and functioning as your
        strategic technical partner.
      </p>

      <div className="flex space-x-4">
        {footerSocialLinks.map((social) => {
          const Icon = socialIconMap[social.label as keyof typeof socialIconMap];
          return (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-foreground transition-all duration-300"
              aria-label={social.label}
            >
              <Icon className="w-5 h-5" />
            </a>
          );
        })}
      </div>
    </div>
  );
}
