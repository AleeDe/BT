import { TrustTicker } from '@/components/expertise/TrustTicker';
import { ExpertiseIntro } from '@/components/expertise/ExpertiseIntro';
import { ExpertiseBentoGrid } from '@/components/expertise/ExpertiseBentoGrid';

export function ExpertiseShowcase() {
  return (
    <section className="py-14 sm:py-24 bg-[#050814] relative overflow-hidden">
      <TrustTicker />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ExpertiseIntro />
        <ExpertiseBentoGrid />
      </div>
    </section>
  );
}