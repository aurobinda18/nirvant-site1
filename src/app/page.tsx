"use client";

import HeroSection from "@/sections/HeroSection";
import MissionSection from "@/sections/MissionSection";
import WhatWeOfferSection from "@/sections/WhatWeOfferSection";
import WhyChooseUsSection from "@/sections/WhyChooseUsSection";
import ProductInfoSection from "@/sections/ProductInfoSection";
import TeamSection from "@/sections/TeamSection";
import NewsletterSection from "@/sections/NewsletterSection";



export default function Home() {
  return (
    <>
      <HeroSection/>
      <MissionSection />
      <WhatWeOfferSection />
      <WhyChooseUsSection />
      <TeamSection />
        <ProductInfoSection />
        <NewsletterSection />
          
    </>
  );
}
