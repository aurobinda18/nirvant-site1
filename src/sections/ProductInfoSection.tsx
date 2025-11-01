"use client";

import { useRouter } from "next/navigation";
import { heroData } from "@/data/neetCourse";
import { motion } from "framer-motion";

export default function ProductInfoSection() {
  const router = useRouter();

  const jumpTo = (id: string) => {
    // navigate to /neet with fragment then smooth-scroll if element present
    router.push(`/neet#${id}`);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
  };

  const container = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const item = {
    hidden: { opacity: 0, y: 8 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.06 * i, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
      className="py-20 px-6 sm:px-10 lg:px-0 bg-gradient-to-br from-sky-50 via-white to-teal-50"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          className="relative rounded-3xl p-10 md:p-12 bg-white/80 backdrop-blur-sm border border-white/40 shadow-lg overflow-hidden flex flex-col md:flex-row gap-8 items-center"
        >
          {/* soft decorative glow */}
          <div className="pointer-events-none absolute -left-10 -top-10 w-56 h-56 bg-gradient-to-tr from-sky-200 via-teal-100 to-white opacity-40 rounded-full blur-3xl"></div>

          {/* Text block */}
          <motion.div variants={item} custom={0} className="flex-1">
            <h2 className="text-3xl md:text-4xl font-extrabold text-teal-900 mb-4">
              {heroData.title}
            </h2>

            <p className="text-gray-700 mb-6 max-w-xl">{heroData.subtitle}</p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-teal-600">•</span>
                1-on-1 mentorship
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-teal-600">•</span>
                Week-wise study plans
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-teal-600">•</span>
                Live doctor sessions
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-teal-600">•</span>
                Mock tests & reports
              </li>
            </ul>

            <motion.div variants={item} custom={1} className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => jumpTo("pricing")}
                className="inline-block bg-gradient-to-r from-teal-600 to-sky-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:shadow-lg transition"
              >
                Enroll Now
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => jumpTo("benefits")}
                className="inline-block border-2 border-teal-600 text-teal-700 px-5 py-3 rounded-full font-medium hover:bg-teal-50 transition"
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Compact feature card (no image) */}
          <motion.div variants={item} custom={2} className="w-full md:w-96">
            <div className="rounded-2xl p-6 bg-gradient-to-br from-sky-50 to-white border border-white/30 shadow-inner">
              <h3 className="text-lg font-semibold text-teal-800 mb-3">What this includes</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Personal mentorship & weekly plans</li>
                <li>Live expert sessions</li>
                <li>Timed mock tests & analytics</li>
                <li>Post-NEET counselling</li>
              </ol>

              <div className="mt-6 text-sm text-gray-600">
                <em>Quick overview — open the course page to explore full details.</em>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}