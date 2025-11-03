"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSuccess("Your message has been sent successfully!");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setSuccess("Failed to send message. Please try again.");
      }
    } catch (err) {
      setSuccess("Something went wrong. Please try later.");
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-100 min-h-screen">
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-12 drop-shadow-md">
          Get in Touch
        </h2>

        <p className="text-center text-gray-700 mb-12 px-4 md:px-0">
          Have questions or want to collaborate? Fill out the form below and we’ll get back to you promptly.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 flex flex-col gap-6 relative"
        >
          {/* Decorative background shapes */}
          <div className="absolute -top-16 -left-16 w-40 h-40 rounded-full bg-amber-200 opacity-30 blur-3xl"></div>
          <div className="absolute -bottom-16 -right-16 w-52 h-52 rounded-full bg-orange-200 opacity-30 blur-3xl"></div>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            value={form.name}
            onChange={handleChange}
            className="border border-gray-300 p-4 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={form.email}
            onChange={handleChange}
            className="border border-gray-300 p-4 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            value={form.phone}
            onChange={handleChange}
            className="border border-gray-300 p-4 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition"
          />
          <textarea
            name="message"
            placeholder="Message (Optional)"
            rows={5}
            value={form.message}
            onChange={handleChange}
            className="border border-gray-300 p-4 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition resize-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-xl transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-1"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="text-center text-orange-700 font-medium mt-4">{success}</p>
          )}
        </form>
      </div>
    </section>
  );
}
