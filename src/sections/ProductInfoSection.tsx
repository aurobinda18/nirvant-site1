"use client";

import Image from "next/image";
import { heroData } from "@/data/neetCourse";

export default function ProductInfoSection() {
  return (
    <section className="py-20 px-6 sm:px-10 lg:px-20 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-teal-900 mb-4">
            {heroData.title}
          </h2>

          <p className="text-gray-700 mb-6">
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

          <div className="flex gap-4">
            <a
              id="enroll"
              href="#"
              className="inline-block bg-teal-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:shadow-lg transition"
            >
              Enroll Now
            </a>
            <a
              id="learn"
              href="#"
              className="inline-block border border-teal-600 text-teal-600 px-5 py-3 rounded-full font-medium hover:bg-teal-50 transition"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-md bg-gradient-to-br from-sky-50 to-teal-50 p-6 rounded-2xl shadow-lg">
            <Image
              src={heroData.image}
              alt={heroData.title}
              width={600}
              height={360}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}