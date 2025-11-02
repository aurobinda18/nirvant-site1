// src/sections/neet/BenefitsSection.tsx
"use client";

import React from "react";
import { courseBenefits } from "@/data/neetCourse";
import BenefitCard from "@/components/neet/BenefitCard";

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 px-6 sm:px-10 lg:px-20 bg-green-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-blue-900 text-center mb-12">
          What You’ll Get
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {courseBenefits.map((benefit) => (
            <BenefitCard
              key={benefit.id}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}