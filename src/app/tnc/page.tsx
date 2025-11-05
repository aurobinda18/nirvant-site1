"use client";
import { motion } from "framer-motion";
import { termsAndConditions } from "@/data/tnc";

export default function TermsPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 py-20 px-6 md:px-24 text-gray-800">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-10 text-center"
        >
          Terms and Conditions
        </motion.h1>

        {/* Description Intro */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg text-gray-700 text-center mb-16 leading-relaxed max-w-2xl mx-auto"
        >
          Please read these terms carefully before using Nirvant. By accessing or using our
          platform, you agree to the following terms, conditions, and policies.
        </motion.p>

        {/* Terms Sections */}
        <div className="space-y-12">
          {termsAndConditions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="relative bg-white/80 backdrop-blur-md border border-amber-100 rounded-2xl shadow-sm p-6 md:p-8 hover:shadow-md transition-all duration-300"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-amber-600 mb-4">
                {item.title}
              </h2>
              <p className="text-base md:text-lg leading-relaxed whitespace-pre-line text-gray-800">
                {item.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-20 text-sm text-gray-500">
          © {new Date().getFullYear()} Nirvant. All rights reserved.
        </div>
      </div>
    </section>
  );
}
