import Image from 'next/image';
import Link from 'next/link';

export function NavigationLogo() {
  return (
    <Link href="/" className="flex items-center group relative p-1 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary [mask-image:url('/logo.png')] [mask-size:contain] [mask-repeat:no-repeat] [mask-position:left_center] drop-shadow-[0_0_12px_rgba(16,185,129,0.7)] group-hover:from-primary group-hover:to-primary transition-all duration-500 z-10" />
      <Image
        src="/logo.png"
        alt="BabulTech Logo"
        width={192}
        height={48}
        priority
        className="h-10 sm:h-12 w-auto object-contain opacity-0 z-0"
      />
    </Link>
  );
}
