"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function NewsletterSection() {
  const [state, handleSubmit] = useForm("mqaggavb");

  if (state.succeeded) {
    return (
      <section className="py-20 px-6 sm:px-10 lg:px-20 bg-gradient-to-br from-sky-50 via-teal-50 to-indigo-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="rounded-3xl p-10 bg-white/70 backdrop-blur-sm border border-white/30 shadow-lg">
            <h2 className="text-3xl font-extrabold text-teal-800 mb-4">
              Thanks for subscribing
            </h2>
            <p className="text-gray-700">
              You’re in — expect weekly reflections, growth notes, and practical
              tools from Nirvant.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-6 sm:px-10 lg:px-20 bg-gradient-to-br from-sky-100 via-teal-50 to-indigo-100">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-3xl p-10 bg-white/80 backdrop-blur-sm border border-white/40 shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-extrabold text-teal-900 mb-2">
                Join the Nirvant Circle
              </h2>
              <p className="text-gray-700 mb-6">
                Weekly reflections, clarity prompts, and growth insights — straight to your inbox.
              </p>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start"
              >
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="flex-grow border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="bg-gradient-to-r from-teal-600 to-sky-600 text-white font-medium py-3 px-6 rounded-lg hover:shadow-lg transition"
                >
                  Subscribe
                </button>
              </form>

              <ValidationError prefix="Email" field="email" errors={state.errors} />

              <p className="text-sm text-gray-500 mt-4">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </div>

            <div className="w-full md:w-80">
              <div className="rounded-xl p-6 bg-gradient-to-br from-white to-white/80 border border-white/30 shadow-inner text-center">
                <h3 className="text-lg font-semibold text-teal-800 mb-2">What you’ll get</h3>
                <ul className="text-gray-700 text-left list-disc list-inside space-y-1">
                  <li>Short clarity prompts</li>
                  <li>Weekly practice & reflection</li>
                  <li>Tools for focus & growth</li>
                </ul>
                <div className="mt-4">
                  <a
                    href="/neet#benefits"
                    className="inline-block text-sm text-teal-700 underline"
                  >
                    See course benefits
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}