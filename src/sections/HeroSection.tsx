"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { hero } from "@/data/content";

// Variant 2: Responsive split (text left, image right)
export default function HeroSection2() {
  const router = useRouter();
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-yellow-50 via-yellow-100 to-orange-100 px-6 md:px-16 py-20 md:py-28">
      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/50 via-amber-100/40 to-orange-100/40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 items-center gap-12">
        {/* Left: Copy */}
        <div className="text-center md:text-left md:col-span-6">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 drop-shadow-sm mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {hero.tagline}
          </motion.h1>

          <motion.p
            className="text-lg md:text-2xl text-gray-800/95 max-w-xl md:max-w-2xl md:pr-4 mb-8 leading-relaxed mx-auto md:mx-0"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            {hero.subtext}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.6 }}
          >
            <button
              onClick={() => router.push("/neet#benefits")}
              className="px-8 py-4 bg-orange-600 text-white text-lg font-semibold rounded-full shadow-md hover:bg-orange-700 hover:shadow-xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-200"
            >
              {hero.cta}
            </button>
            <button
              onClick={() => {
                const el = document.getElementById("what-we-offer");
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="px-8 py-4 bg-white text-orange-700 border border-orange-300 text-lg font-semibold rounded-full hover:bg-orange-50 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-100"
            >
              Explore Nirvant
            </button>
          </motion.div>
        </div>

        {/* Right: Image card */}
        <div className="relative md:col-span-6">
          {/* soft ambient glows to blend into background */}
          <div className="absolute -top-16 -right-10 w-96 h-96 bg-orange-200/40 rounded-full blur-3xl" />
          <div className="absolute -bottom-16 -left-10 w-[28rem] h-[28rem] bg-yellow-200/40 rounded-full blur-3xl" />

          {/* blended "glass" card to avoid heavy contrast */}
          <div className="relative mx-auto md:mx-0 w-full rounded-3xl bg-white/30 backdrop-blur-sm border border-white/40 shadow-md p-3">
            <Image
              src="/neet-hero.png"
              alt="Nirvant hero visual"
              width={768}
              height={480}
              sizes="(min-width: 1024px) 540px, (min-width: 768px) 50vw, 90vw"
              className="rounded-2xl object-contain w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
