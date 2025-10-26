// src/components/neet/PricingCard.tsx
"use client";

import React from "react";
import { Button } from "@/components/ui/button";
interface PricingCardProps {
  duration: string;
  currentPrice: number;
  originalPrice: number;
  discount: number;
  label?: string;
  onSelect: () => void;
}

export default function PricingCard({
  duration,
  currentPrice,
  originalPrice,
  discount,
  label,
  onSelect,
}: PricingCardProps) {
  return (
    <div className="flex flex-col justify-between p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
      {label && (
        <span className="text-sm text-green-600 font-semibold mb-2">{label}</span>
      )}
      <h3 className="text-xl font-bold text-blue-900 mb-2">{duration}</h3>
      <p className="text-gray-700 mb-4">
        <span className="text-lg font-semibold">₹{currentPrice}</span>{" "}
        {originalPrice > currentPrice && (
          <span className="line-through text-gray-400 ml-2">₹{originalPrice}</span>
        )}
        {discount > 0 && (
          <span className="text-green-600 font-semibold ml-2">({discount}% off)</span>
        )}
      </p>
      <Button variant="primary" onClick={onSelect}>
  Enroll Now
</Button>
    </div>
  );
}
