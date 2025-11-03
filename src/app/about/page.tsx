"use client";


import FullTeamSection from "@/sections/FullTeamSection";

export default function AboutPage() {
  return (
    <main className="bg-gradient-to-b from-yellow-50 via-amber-50 to-orange-100">
      {/* Hero Section */}
      <section className="py-24 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
          About Nirvant
        </h1>
        <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
          Nirvant is a dynamic hub where visionary leaders, ambitious students, and forward-thinking investors come together to drive meaningful change. We combine cutting-edge mental health solutions, advanced technology, and educational excellence to deliver transformative content and personalized mentorship tailored to your unique journey.
        </p>
      </section>

      {/* Philosophy / Mission Section */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl p-10 shadow-md hover:shadow-lg transition">
          <h2 className="text-4xl font-bold mb-8 text-gray-900 text-center">
            Our Mission & Vision
          </h2>
          <p className="text-gray-800 text-justify leading-relaxed mb-6">
            Our mission is to empower individuals and organizations to unlock their full potential by providing actionable insights, innovative strategies, and unwavering support. Through our diverse channels—Nirvant Wellness, Nirvant Tech, and Nirvant Edge—we offer a wide range of resources that nurture emotional clarity, mental resilience, and professional growth.
          </p>
          <p className="text-gray-800 text-justify leading-relaxed mb-6">
            Personalized mentorship ensures that every learner receives guidance aligned with their goals, fostering confidence and sustained success in an ever-evolving world. At Nirvant, we believe that true growth happens at the convergence of knowledge, support, and innovation.
          </p>
          <p className="text-gray-800 text-justify leading-relaxed">
            Whether you are a student seeking clarity, a professional aiming to elevate your career, or an investor looking to partner with a purpose-driven enterprise, Nirvant is your trusted ally on the path to a healthier, more impactful future. Join us and be part of a community committed to shaping success with intention and heart.
          </p>
        </div>
      </section>

      {/* Get to Know Our Team Section */}
      <FullTeamSection />
    </main>
  );
}
