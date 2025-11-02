"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

export default function NewsletterSection() {
  const [state, handleSubmit] = useForm("mqaggavb");

  const easeOutQuart: [number, number, number, number] = [0.22, 1, 0.36, 1];

  const container: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOutQuart } },
  };

  const child: Variants = {
    hidden: { opacity: 0, y: 8 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.06 * i, duration: 0.6, ease: easeOutQuart },
    }),
  };

  const stack: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06 } },
  };

  if (state.succeeded) {
    return (
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
        className="py-20 px-6 sm:px-10 lg:px-0 bg-primary-subtle"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div variants={child} className="rounded-3xl p-10 bg-white/85 backdrop-blur-sm border border-white/30 shadow-lg">
            <h2 className="text-3xl font-extrabold text-primary-heading mb-4">Thanks for subscribing</h2>
            <p className="text-gray-700">You’re in — expect weekly reflections, growth notes, and practical tools from Nirvant.</p>
          </motion.div>
        </div>
      </motion.section>
    );
  }

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={container}
      className="py-20 px-6 sm:px-10 lg:px-0 bg-primary-subtle"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div variants={stack} className="rounded-3xl p-10 bg-white/90 backdrop-blur-sm border border-white/30 shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div variants={child} className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary-heading mb-2">Join the Nirvant Circle</h2>
              <p className="text-gray-700 mb-6">Weekly reflections, clarity prompts, and growth insights — straight to your inbox.</p>

              <motion.form onSubmit={handleSubmit} variants={child} className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="flex-grow border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-brand-orange-300"
                />
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} type="submit" disabled={state.submitting} className="btn-success">
                  Subscribe
                </motion.button>
              </motion.form>

              <ValidationError prefix="Email" field="email" errors={state.errors} />
              <p className="text-sm text-gray-500 mt-4">We respect your privacy. Unsubscribe anytime.</p>
            </motion.div>

            <motion.div variants={child} className="w-full md:w-80">
              <div className="rounded-xl p-6 bg-gradient-to-br from-white to-white/80 border border-white/30 shadow-inner text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What you’ll get</h3>
                <ul className="text-gray-700 text-left list-disc list-inside space-y-1">
                  <li>Short clarity prompts</li>
                  <li>Weekly practice & reflection</li>
                  <li>Tools for focus & growth</li>
                </ul>
                <div className="mt-4">
                  <a href="/neet#benefits" className="inline-block text-sm text-brand-orange-700 underline">See course benefits</a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}