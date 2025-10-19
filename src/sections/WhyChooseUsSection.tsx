"use client";

import { motion, Variants } from "framer-motion";
import { whyChooseUs } from "@/data/content";

export default function WhyChooseUsSection() {
  // Container variant
  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  // Card variant - type-safe
  const cardVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { type: "tween" as const, duration: 0.6 } 
    },
  };

  return (
    <section className="relative py-28 px-6 bg-gradient-to-br from-teal-100 via-teal-200 to-indigo-200 overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.5),transparent_70%)]"></div>

      {/* Section title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative text-4xl md:text-5xl font-extrabold text-teal-900 text-center mb-16 drop-shadow-lg"
      >
        {whyChooseUs.title}
      </motion.h2>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
      >
        {whyChooseUs.items?.map((item) => (
          <motion.div
            key={item.title}
            variants={cardVariants}
            className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:rotate-1 hover:-translate-y-2 border border-teal-300 hover:border-indigo-400"
          >
            <div className="text-6xl mb-4 text-teal-600 drop-shadow-md">{item.icon}</div>
            <h3 className="text-2xl font-semibold text-teal-900 mb-3">{item.title}</h3>
            <p className="text-teal-800 leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
