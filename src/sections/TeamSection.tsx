// ...existing code...
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
    <section className="py-28 px-6 bg-gradient-to-br from-sky-300 via-blue-200 to-teal-400 relative overflow-hidden">
      {/* Soft background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-sky-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-teal-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-300 rounded-full blur-3xl"></div>
      </div>

      {/* Content container */}
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold text-center bg-gradient-to-r from-blue-600 via-sky-600 to-teal-600 bg-clip-text text-transparent mb-24 drop-shadow-lg"
        >
          Meet Our Team
        </motion.h1>

        {/* Render Super Mentors only (no category titles) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8"
        >
          {teamDataMap.medicoTeam?.map((member, idx) => (
            <motion.div key={idx} variants={cardVariants} className="w-72">
              <TeamCard {...member} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
// ...existing code...