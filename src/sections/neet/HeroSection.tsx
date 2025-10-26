"use client";

import React from "react";
import { heroData } from "@/data/neetCourse";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-sky-100 to-green-50 py-20 px-6 sm:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        
        {/* Left Text Content */}
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-4xl sm:text-5xl font-playfair font-bold text-blue-900">
            {heroData.title}
          </h1>
          <p className="text-lg sm:text-xl text-gray-700">
            {heroData.subtitle}
          </p>
          <div className="flex gap-4 flex-wrap">
           <Button variant="primary">{heroData.primaryCTA}</Button>
            <Button variant="secondary">{heroData.secondaryCTA}</Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img 
            src={heroData.image} 
            alt="NEET mentorship illustration" 
            className="w-full max-w-md rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Decorative Shapes */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
    </section>
  );
}
