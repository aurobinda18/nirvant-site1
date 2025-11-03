"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { hero } from "@/data/content";

// Variant 3: Device/mockup-style frame (phone-like)
export default function HeroSection3() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden text-center px-6 md:px-16 bg-gradient-to-br from-yellow-50 via-yellow-100 to-orange-100">
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/50 via-amber-100/40 to-orange-100/40 pointer-events-none" />

      <motion.h1
        className="relative text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 drop-shadow-sm mb-6 leading-tight"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {hero.tagline}
      </motion.h1>

      <motion.p
        className="relative text-lg md:text-2xl text-gray-800/95 max-w-2xl mb-8 leading-relaxed"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        {hero.subtext}
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.6 }}
      >
        <button className="px-8 py-4 bg-orange-600 text-white text-lg font-semibold rounded-full shadow-md hover:bg-orange-700 hover:shadow-xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-200">
          {hero.cta}
        </button>
        <button className="px-8 py-4 bg-white text-orange-700 border border-orange-300 text-lg font-semibold rounded-full hover:bg-orange-50 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-100">
          Explore Nirvant
        </button>
      </motion.div>

      {/* Centered device frame below CTAs */}
      <div className="mt-12 relative">
        {/* glow */}
        <div className="absolute -inset-10 bg-[radial-gradient(circle_at_center,rgba(253,230,138,0.45),transparent_70%)] blur-2xl" />
        {/* outer frame */}
        <div className="relative mx-auto w-[280px] sm:w-[320px] rounded-[2rem] border-8 border-gray-900/80 bg-gray-900/90 shadow-2xl">
          <div className="rounded-[1.4rem] overflow-hidden bg-white">
            <Image
              src="/neet-hero.png"
              alt="App preview"
              width={320}
              height={200}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Orbs */}
      <motion.div aria-hidden animate={{ y: [0, -15, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-24 right-16 w-40 h-40 bg-orange-200/50 rounded-full blur-3xl mix-blend-screen" />
      <motion.div aria-hidden animate={{ y: [0, 15, 0] }} transition={{ duration: 8, repeat: Infinity }} className="absolute bottom-24 left-16 w-48 h-48 bg-yellow-200/50 rounded-full blur-3xl mix-blend-screen" />
    </section>
  );
}
