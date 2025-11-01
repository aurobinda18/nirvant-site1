"use client";

import { useRouter } from "next/navigation";
import { heroData } from "@/data/neetCourse";

export default function ProductInfoSection() {
  const router = useRouter();

  const jumpTo = (id: string) => {
    // navigate to /neet with fragment then smooth-scroll if element present
    router.push(`/neet#${id}`);
    // timeout allows navigation to complete (works for SPA route)
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
  };

  return (
    <section className="py-20 px-6 sm:px-10 lg:px-20 bg-gradient-to-br from-sky-50 via-teal-50 to-indigo-50">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-3xl p-8 md:p-12 bg-gradient-to-r from-white/60 via-white/40 to-white/30 shadow-lg backdrop-blur-sm border border-white/30 overflow-hidden flex flex-col md:flex-row gap-8 items-center">
          {/* Decorative left: product text */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-extrabold text-teal-900 mb-4">
              {heroData.title}
            </h2>

            <p className="text-gray-700 mb-6 max-w-xl">
              {heroData.subtitle}
            </p>

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

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => jumpTo("pricing")}
                className="inline-block bg-gradient-to-r from-teal-600 to-sky-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:shadow-lg transition"
              >
                Enroll Now
              </button>

              <button
                onClick={() => jumpTo("benefits")}
                className="inline-block border-2 border-teal-600 text-teal-700 px-5 py-3 rounded-full font-medium hover:bg-teal-50 transition"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Decorative right: concise product card (image removed) */}
          <div className="w-full md:w-96">
            <div className="rounded-2xl p-6 bg-gradient-to-br from-sky-50 to-teal-50 border border-white/40 shadow-inner">
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
          </div>
        </div>
      </div>
    </section>
  );
}