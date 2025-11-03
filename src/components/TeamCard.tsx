"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { TeamMember } from "@/data/team";

type TeamCardProps = TeamMember & {
  showTags?: boolean; // control from sections
  maxTags?: number;   // how many tags to display
};

export default function TeamCard({
  name,
  role,
  image,
  tags,
  showTags = false,
  maxTags = 1,
}: TeamCardProps) {
  const visibleTags = (tags ?? []).slice(0, maxTags);

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.03 }}
      className="flex flex-col items-center bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-2 w-72"
    >
      {/* Image */}
      <div className="w-64 h-80 bg-gradient-to-br from-amber-50 to-orange-100 rounded-lg overflow-hidden mb-2">
        <Image
          src={image}
          alt={name}
          width={256}
          height={320}
          className="object-cover object-[center_30%] w-full h-full"
          priority
        />
      </div>

      {/* Name, role, optional tags */}
      <motion.div className="px-4 py-2 w-full text-center rounded-b-2xl transition-colors">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-700">{role}</p>

        {showTags && visibleTags.length > 0 && (
          <div className="mt-2 flex flex-wrap justify-center gap-2">
            {visibleTags.map((t, i) => (
              <span
                key={i}
                className="text-xs px-2 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200"
              >
                {t}
              </span>
            ))}
            {tags && tags.length > maxTags && (
              <span className="text-xs px-2 py-1 rounded-full bg-orange-50 text-orange-700 border border-orange-200">
                +{tags.length - maxTags}
              </span>
            )}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
