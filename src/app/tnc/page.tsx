"use client";
import { termsAndConditions, termsOfUse } from "@/data/tnc";

export default function TermsPage() {
  return (
    <section className="min-h-screen bg-[#fffef9] py-20 px-6 md:px-24 text-gray-800">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10 text-center">
          Terms & Policies
        </h1>

        <p className="text-lg text-gray-700 text-center mb-16 leading-relaxed max-w-2xl mx-auto">
          Please read these carefully before using Nirvant. By continuing, you agree to the
          Terms & Conditions and Terms of Use outlined below.
        </p>

        {/* Terms & Conditions Section */}
        <h2 className="text-3xl font-bold text-amber-700 mb-6 text-center">
          Terms and Conditions
        </h2>
        <div className="space-y-12 mb-16">
          {termsAndConditions.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-amber-100 rounded-xl shadow-sm p-8"
            >
              <h3 className="text-2xl font-semibold text-amber-800 mb-4">
                {item.title}
              </h3>
              <p className="text-base md:text-lg leading-relaxed whitespace-pre-line text-gray-800">
                {item.content}
              </p>
            </div>
          ))}
        </div>

        {/* Terms of Use Section */}
        <h2 className="text-3xl font-bold text-amber-700 mb-6 text-center">
          Terms of Use
        </h2>
        <div className="space-y-12">
          {termsOfUse.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-amber-100 rounded-xl shadow-sm p-8"
            >
              <h3 className="text-2xl font-semibold text-amber-800 mb-4">
                {item.title}
              </h3>
              <p className="text-base md:text-lg leading-relaxed whitespace-pre-line text-gray-800">
                {item.content}
              </p>
            </div>
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
