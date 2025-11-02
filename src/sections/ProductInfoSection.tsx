"use client";

import { useRouter } from "next/navigation";
import { heroData } from "@/data/neetCourse";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

export default function ProductInfoSection() {
  const router = useRouter();

  const jumpTo = (id: string) => {
    router.push(`/neet#${id}`);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
  };

  // Typed easing tuple (cubic-bezier)
  const easeOutQuart: [number, number, number, number] = [0.22, 1, 0.36, 1];

  const container: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeOutQuart },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 8 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.06 * i, duration: 0.6, ease: easeOutQuart },
    }),
  };

  const stack: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
      className="py-20 px-6 sm:px-10 lg:px-0 bg-primary-subtle"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={stack}
          className="relative rounded-3xl p-10 md:p-12 bg-white/80 backdrop-blur-sm border border-white/40 shadow-lg overflow-hidden flex flex-col md:flex-row gap-8 items-center"
        >
          <div className="glow-primary-1" />
          <div className="glow-primary-2" />

          {/* Text */}
          <motion.div variants={item} custom={0} className="flex-1">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-heading mb-4">
              {heroData.title}
            </h2>

            <p className="text-gray-700 mb-6 max-w-xl">{heroData.subtitle}</p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-brand-orange-600">•</span>
                1-on-1 mentorship
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-brand-orange-600">•</span>
                Week-wise study plans
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-brand-orange-600">•</span>
                Live doctor sessions
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-brand-orange-600">•</span>
                Mock tests & reports
              </li>
            </ul>

            <motion.div variants={item} custom={1} className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => jumpTo("pricing")}
                className="btn-success"
              >
                Enroll Now
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => jumpTo("benefits")}
                className="btn-outline-primary"
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Compact right card (no image) */}
          <motion.div variants={item} custom={2} className="w-full md:w-96">
            <div className="rounded-2xl p-6 bg-gradient-to-br from-white to-white/80 border border-white/30 shadow-inner">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What this includes</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Personal mentorship & weekly plans</li>
                <li>Live expert sessions</li>
                <li>Timed mock tests & analytics</li>
                <li>Post-NEET counselling</li>
              </ol>
              <div className="mt-6 text-sm text-gray-600">
                <em>Quick overview — view the course page for full details.</em>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}