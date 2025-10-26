

import { LucideIcon, Video, Phone, Calendar, BookOpen, Brain, Target, User, Stethoscope } from "lucide-react";

// ----------------------------
// Hero Section Data
// ----------------------------
export const heroData = {
  title: "NEET 2026 Complete Mentorship Program",
  subtitle:
    "Personalized guidance, 1-on-1 mentorship, live doctor sessions, week-wise study plans, and complete NEET preparation — all in one course.",
  primaryCTA: "Enroll Now",
  secondaryCTA: "Learn More",
  // Optional: hero image path
  image: "/neet-hero.png",
};

// ----------------------------
// Course Benefits
// ----------------------------
export interface Benefit {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

export const courseBenefits: Benefit[] = [
  { id: 1, icon: Video, title: "1:1 Video Mentorship", description: "Weekly 3 days, including Sunday" },
  { id: 2, icon: Phone, title: "Calling Feature", description: "Daily check-ins and support" },
  { id: 3, icon: Calendar, title: "Week-wise Study Plans", description: "Structured preparation schedule" },
  { id: 4, icon: BookOpen, title: "Subject-wise Resource Guidance", description: "Detailed guidance for each subject" },
  { id: 5, icon: Brain, title: "Past Year Questions", description: "Feature Year Questions for practice" },
  { id: 6, icon: Target, title: "Error Analysis & Revision", description: "Techniques to identify & fix weak areas" },
  { id: 7, icon: User, title: "Personalized Mentorship", description: "Tailored sessions for your growth" },
  { id: 8, icon: Stethoscope, title: "Live Doctors Meet", description: "Direct interactions with medical experts" },
];

// ----------------------------
// Pricing Plans
// ----------------------------
export interface PricePlan {
  id: number;
  duration: string;
  currentPrice: number;
  originalPrice: number;
  discount: number; // in percentage
  label?: string;   // e.g., "Free Trial"
}

export const pricePlans: PricePlan[] = [
  { id: 1, duration: "3 days", currentPrice: 0, originalPrice: 0, discount: 0, label: "Free Trial" },
  { id: 2, duration: "7 days", currentPrice: 150, originalPrice: 200, discount: 25, label: "Paid Trial" },
  { id: 3, duration: "30 days", currentPrice: 600, originalPrice: 800, discount: 25 },
  { id: 4, duration: "45 days", currentPrice: 900, originalPrice: 1200, discount: 25 },
  { id: 5, duration: "90 days", currentPrice: 1800, originalPrice: 2400, discount: 25 },
  { id: 6, duration: "NEET 2026", currentPrice: 3500, originalPrice: 5000, discount: 30 },
];

// ----------------------------
// FAQ Items
// ----------------------------
export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "How do I schedule my 1:1 mentorship sessions?",
    answer: "You will receive a weekly schedule via email and our app to book your mentorship sessions."
  },
  {
    id: 2,
    question: "Can I switch my trial plan to a longer duration?",
    answer: "Yes, after your trial ends, you can upgrade to any available plan seamlessly."
  },
  {
    id: 3,
    question: "How do I submit my UTR after payment?",
    answer: "You will enter your 8-digit UTR code in the payment form. We verify it and confirm your enrollment."
  },
  {
    id: 4,
    question: "Are live doctor sessions recorded?",
    answer: "Yes, all live sessions are recorded and shared for later viewing."
  },
];

// ----------------------------
// Payment Section Data
// ----------------------------
export const paymentData = {
  upiId: "nirvant@upi",        // placeholder UPI ID
  qrImage: "/upi-qr.png",      // path to QR code image
  utrPlaceholder: "Enter your 8-digit UTR code",
  confirmButton: "Confirm Payment",
  successMessage: "Welcome aboard! Your NEET 2026 journey with Nirvant has begun. We’ll verify your payment and reach out shortly.",
};
