import { enterpriseLogos } from '@/components/expertise/enterpriseLogos';

export function TrustTicker() {
  return (
    <div className="w-full overflow-hidden flex flex-col items-center mb-14 sm:mb-24 lg:mb-32">
      <p className="text-body uppercase tracking-widest text-sm font-semibold mb-8">
        Trusted by Innovative Enterprises
      </p>
      <div className="enterprise-marquee relative w-full max-w-7xl flex overflow-hidden mask-gradient-edges">
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[#050814] via-transparent to-[#050814] w-full" />

        <div className="enterprise-marquee-track flex whitespace-nowrap gap-16 item-center pl-16 opacity-50 hover:opacity-100 transition-opacity duration-500">
          {[...enterpriseLogos, ...enterpriseLogos, ...enterpriseLogos].map((company, idx) => (
            <a
              key={`${company.name}-${idx}`}
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-body hover:text-foreground hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center justify-center">{company.svg}</div>
              <span className="text-xl font-bold tracking-tight">{company.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
