"use client";
import { motion } from "framer-motion";
import { mission } from "@/data/content";

export default function MissionSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 md:px-16 py-28 overflow-hidden bg-gradient-to-br from-indigo-100 via-sky-200 to-cyan-100">
      
      {/* Ambient back glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25),transparent_70%)] blur-3xl"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.5),transparent_70%)] blur-3xl"></div>

      {/* Mission title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-sky-700 to-cyan-600 drop-shadow-lg mb-6"
      >
        {mission.title}
      </motion.h2>

      {/* Accent underline */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1 }}
        className="w-28 h-1.5 bg-gradient-to-r from-sky-600 to-cyan-400 rounded-full mb-10"
      ></motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative max-w-3xl text-lg md:text-2xl text-blue-900/80 leading-relaxed font-medium"
      >
        {mission.description}
      </motion.p>

      {/* Floating aura */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-16 w-48 h-48 bg-cyan-300/40 rounded-full blur-3xl"
      ></motion.div>
    </section>
  );
}
