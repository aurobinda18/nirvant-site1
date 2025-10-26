// src/sections/neet/FAQSection.tsx
"use client";

import React, { useState } from "react";
import { faqItems } from "@/data/neetCourse";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 px-6 sm:px-10 lg:px-20 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-blue-900 text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqItems.map((item) => (
            <div key={item.id} className="border border-gray-200 rounded-2xl overflow-hidden">
              <button
                onClick={() => toggle(item.id)}
                className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none bg-gray-50 hover:bg-gray-100 transition"
              >
                <span className="text-lg font-semibold text-blue-900">{item.question}</span>
                {openId === item.id ? (
                  <ChevronUp className="w-5 h-5 text-blue-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-600" />
                )}
              </button>

              {openId === item.id && (
                <div className="px-6 py-4 bg-white text-gray-700">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
