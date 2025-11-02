// src/components/ui/button.tsx
"use client";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export const Button = ({ children, variant = "primary", className = "", ...props }: ButtonProps) => {
  const baseStyles =
    "px-6 py-3 rounded-full font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-1";
  
  const variantStyles = {
    primary: "bg-orange-600 text-white shadow-md hover:bg-orange-700 hover:shadow-lg focus:ring-orange-400",
    secondary: "bg-white border border-orange-300 text-orange-700 hover:bg-orange-50 focus:ring-orange-300",
  };

  return (
    <button className={`${baseStyles} ${variantStyles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
