"use client";
import { motion } from "framer-motion";
import { hero } from "@/data/content";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden text-center px-6 md:px-16 bg-primary-gradient">
      {/* Soft primary glows */}
      <div className="glow-primary-1"></div>
      <div className="glow-primary-2"></div>

      {/* Headline */}
      <motion.h1
        className="relative text-5xl md:text-7xl font-extrabold tracking-tight text-primary-heading drop-shadow-lg mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {hero.tagline}
      </motion.h1>

      {/* Subtext */}
      <motion.p
        className="relative text-lg md:text-2xl text-blue-900/90 max-w-2xl mb-8 leading-relaxed"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        {hero.subtext}
      </motion.p>

      {/* CTA buttons */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.6 }}
      >
        <button className="px-8 py-4 bg-gradient-to-r from-sky-600 to-blue-700 text-white text-lg font-semibold rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
          {hero.cta}
        </button>
        <button className="px-8 py-4 border border-sky-600 text-sky-700 text-lg font-semibold rounded-full hover:bg-sky-100 transition-all duration-300">
          Explore Nirvant
        </button>
      </motion.div>

      {/* Floating light orbs */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-24 right-16 w-40 h-40 bg-white/30 rounded-full blur-3xl"
      ></motion.div>
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-24 left-16 w-48 h-48 bg-blue-300/30 rounded-full blur-3xl"
      ></motion.div>
    </section>
  );
}
