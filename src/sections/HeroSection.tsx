"use client";
import { motion } from "framer-motion";
import { hero } from "@/data/content";

export default function HeroSection() {
  return (
  <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden text-center px-6 md:px-16 bg-gradient-to-br from-yellow-50 via-amber-100 to-orange-200">
      {/* Soft warm glow overlays: yellow light + orange glow */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* subtle wash to keep things light */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/60 via-amber-100/45 to-orange-100/45" />
        {/* orange glow top-right */}
        <div className="absolute -top-20 -right-10 w-[36rem] h-[36rem] rounded-full opacity-60 blur-3xl bg-[radial-gradient(ellipse_at_center,theme(colors.orange.200),transparent_60%)]" />
        {/* yellow glow bottom-left */}
        <div className="absolute -bottom-24 -left-16 w-[40rem] h-[40rem] rounded-full opacity-70 blur-3xl bg-[radial-gradient(ellipse_at_center,theme(colors.yellow.200),transparent_65%)]" />
      </div>

      {/* Headline */}
      <motion.h1
        className="relative z-10 text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 drop-shadow-sm mb-6 leading-tight"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {hero.tagline}
      </motion.h1>

      {/* Subtext */}
      <motion.p
        className="relative z-10 text-lg md:text-2xl text-gray-800/95 max-w-2xl mb-8 leading-relaxed"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        {hero.subtext}
      </motion.p>

      {/* CTA buttons */}
      <motion.div
        className="relative z-10 flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.6 }}
      >
        {/* Primary CTA - solid orange (no gradient) */}
        <button
          aria-label="Get started"
          className="px-8 py-4 bg-orange-600 text-white text-lg font-semibold rounded-full shadow-md hover:bg-orange-700 hover:shadow-xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-200"
        >
          {hero.cta}
        </button>

        {/* Secondary CTA - clean white with orange accent (no green) */}
        <button
          aria-label="Explore Nirvant"
          className="px-8 py-4 bg-white text-orange-700 border border-orange-300 text-lg font-semibold rounded-full hover:bg-orange-50 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-100"
        >
          Explore Nirvant
        </button>
      </motion.div>

      {/* Floating warm orbs */}
      {/* Floating warm orbs (orange + yellow only) */}
      <motion.div
        aria-hidden
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute z-0 top-24 right-16 w-40 h-40 bg-orange-200/50 rounded-full blur-3xl"
      />

      <motion.div
        aria-hidden
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute z-0 bottom-24 left-16 w-48 h-48 bg-yellow-200/50 rounded-full blur-3xl"
      />

      {/* small red accent pulse */}
      <motion.div
        aria-hidden
        animate={{ scale: [0.95, 1.08, 0.95], opacity: [0.6, 0.95, 0.6] }}
        transition={{ duration: 3.5, repeat: Infinity }}
        className="absolute -bottom-8 right-10 w-6 h-6 bg-red-400 rounded-full blur-sm shadow-md"
      />

      {/* subtle green accent orb */}
      <motion.div
        aria-hidden
        animate={{ x: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute top-12 left-8 w-16 h-16 bg-green-200/40 rounded-full blur-2xl mix-blend-lighten"
      />
    </section>
  );
}
