"use client";

import Image from "next/image";
import { TeamMember } from "@/data/team";
import { motion } from "framer-motion";

export default function TeamCard({ name, role, image }: TeamMember) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.03 }}
      className="flex flex-col items-center bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-2 w-72"
    >
      {/* Image container */}
      <div className="w-64 h-80 bg-gradient-to-br from-sky-50 to-indigo-100 rounded-lg overflow-hidden mb-2">
        <Image
          src={image}
          alt={name}
          width={256}
          height={320}
          className="object-cover object-[center_30%] w-full h-full"
          priority
        />
      </div>

      {/* Text container */}
      <motion.div
        className="px-4 py-2 w-full text-center rounded-b-2xl transition-colors cursor-pointer hover:bg-sky-400"
      >
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-700">{role}</p>
      </motion.div>
    </motion.div>
  );
}
