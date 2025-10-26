"use client";

import HeroSection from '@/sections/neet/HeroSection';


import BenefitsSection from '@/sections/neet/BenefitsSection';
import PricingSection from '@/sections/neet/PricingSection';
import FAQSection from '@/sections/neet/FAQSection';
// import UTRSection from '@/sections/neet/UTRSection';

export default function NEETPage() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <PricingSection />
      <FAQSection />
      {/* <UTRSection /> */}
    </>
  );
}
