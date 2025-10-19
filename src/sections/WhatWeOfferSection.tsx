"use client";
import { motion, Variants } from "framer-motion";
import { whatWeOffer } from "@/data/content";

export default function WhatWeOfferSection() {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.15, type: "spring", stiffness: 80 },
    }),
  };

  return (
    <section className="relative py-28 px-6 bg-gradient-to-br from-sky-100 via-blue-200 to-sky-300 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.6),transparent_70%)]"></div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative text-4xl md:text-5xl font-extrabold text-blue-900 text-center mb-16 drop-shadow-lg"
      >
        {whatWeOffer.title}
      </motion.h2>

      <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {whatWeOffer.items?.map((item, i) => (
          <motion.div
            key={item.title}
            custom={i}           // Pass index to variant function
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white/60 backdrop-blur-xl p-8 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 border border-sky-300 hover:border-blue-500"
          >
            <div className="text-6xl mb-4 text-blue-600 drop-shadow-md">{item.icon}</div>
            <h3 className="text-2xl font-semibold text-blue-900 mb-3">{item.title}</h3>
            <p className="text-blue-800 leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
