// src/sections/neet/PricingSection.tsx
"use client";

import React from "react";
import { pricePlans } from "@/data/neetCourse";
import PricingCard from "@/components/neet/PricingCard";
import { useRouter } from "next/navigation";

export default function PricingSection() {
  const router = useRouter();

  const handleSelect = (duration: string, currentPrice: number) => {
    // Redirect to payment page with query params
    router.push(`/neet/payment?duration=${duration}&price=${currentPrice}`);
  };

  return (
    <section id="pricing" className="py-20 px-6 sm:px-10 lg:px-20 bg-sky-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-blue-900 text-center mb-12">
          Pricing Plans
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricePlans.map((plan) => (
            <PricingCard
              key={plan.id}
              duration={plan.duration}
              currentPrice={plan.currentPrice}
              originalPrice={plan.originalPrice}
              discount={plan.discount}
              label={plan.label}
              onSelect={() => handleSelect(plan.duration, plan.currentPrice)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
