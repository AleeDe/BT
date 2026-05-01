'use client';

import { HeroSection } from '@/components/cloud-qube/sections/HeroSection';
import { FeaturesSection } from '@/components/cloud-qube/sections/FeaturesSection';
import { ProcessSection } from '@/components/cloud-qube/sections/ProcessSection';
import { CTASection } from '@/components/cloud-qube/sections/CTASection';

export function CloudQubeExperience() {
  return (
    <div className="cloud-qube-page relative overflow-hidden bg-dark-900 text-dark-50">
      <HeroSection />
      <FeaturesSection />
      <ProcessSection />
      <CTASection />
    </div>
  );
}
