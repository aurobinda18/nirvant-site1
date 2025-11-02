"use client";

import { motion } from "framer-motion";
import TeamCard from "@/components/TeamCard";
import { teamPage } from "@/data/content";

const teamDataMap: Record<string, typeof teamPage.founders> = {
  medicoTeam: teamPage.medicoTeamFiltered,
};

export default function TeamSection() {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-28 px-6 bg-gradient-to-br from-yellow-50 via-yellow-100 to-orange-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="glow-primary-1"></div>
        <div className="glow-primary-2"></div>
      </div>

      {/* Content container */}
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold text-center text-gray-900 mb-12 drop-shadow-sm"
        >
          Meet Our Team
        </motion.h1>

        {/* Sub-title for the filtered medico team */}
        <motion.h3
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold mb-8 text-center text-gray-800"
        >
          Super Mentors
        </motion.h3>

        {/* Render Super Mentors only (no other category titles) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8"
        >
          {teamDataMap.medicoTeam?.map((member, idx) => (
            <motion.div key={idx} variants={cardVariants} className="w-72">
              <TeamCard {...member} showTags maxTags={1} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}