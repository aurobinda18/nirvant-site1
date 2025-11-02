"use client";

import React from "react";
import { heroData } from "@/data/neetCourse";
import { Button } from "@/components/ui/button";
import Image from "next/image";


export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-yellow-50 via-yellow-100 to-orange-100 py-20 px-6 sm:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        
        {/* Left Text Content */}
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-4xl sm:text-5xl font-playfair font-bold text-gray-900">
            {heroData.title}
          </h1>
          <p className="text-lg sm:text-xl text-gray-700">
            {heroData.subtitle}
          </p>
          <div className="flex gap-4 flex-wrap">
           <Button
              variant="primary"
              onClick={() => {
                const el = document.getElementById("pricing");
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              {heroData.primaryCTA}
            </Button>
            <Button variant="secondary">{heroData.secondaryCTA}</Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-center">
                    <Image
            src="/neet-hero.png" // path relative to /public
            alt="NEET Hero"
            width={1200} // desired width
            height={600} // desired height
            className="rounded-xl"
            priority // optional, for LCP optimization
          />

        </div>
      </div>

      {/* Decorative Shapes */}
  <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-pulse"></div>
  <div className="absolute bottom-0 right-0 w-40 h-40 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
    </section>
  );
}
