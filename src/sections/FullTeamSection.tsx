"use client";

import Image from "next/image";
import { teamPage } from "@/data/content";

export default function FullTeamSection() {
  const teamGroups = [
    {
      title: "Founders",
      members: teamPage.founders,
  bg: "bg-gradient-to-br from-yellow-50 via-yellow-100 to-orange-100",
    },
    {
      title: "Super Mentors",
      members: teamPage.medicoTeam,
  bg: "bg-gradient-to-br from-yellow-50 via-yellow-100 to-orange-100",
    },
    {
      title: "Tech Team",
      members: teamPage.techTeam,
  bg: "bg-gradient-to-br from-yellow-50 via-yellow-100 to-orange-100",
    },
    {
      title: "Design Team",
      members: teamPage.designTeam,
  bg: "bg-gradient-to-br from-yellow-50 via-yellow-100 to-orange-100",
    },
  ];

  return (
  <section className="py-24 px-6 bg-gradient-to-br from-yellow-50 via-yellow-100 to-orange-100">
  <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-900">
        Get to Know Our Team
      </h2>

      <div className="flex flex-col gap-20 max-w-7xl mx-auto">
        {teamGroups.map((group, idx) => (
          <div
            key={idx}
            className={`p-8 rounded-3xl ${group.bg} transition-all`}
          >
            <h3 className="text-3xl md:text-4xl font-semibold mb-12 text-gray-800 text-center">
              {group.title}
            </h3>

            <div className="flex flex-col gap-12">
              {group.members.map((member, i) => (
                <div
                  key={i}
                  className="relative flex flex-col md:flex-row items-center gap-6 bg-white p-6 rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >
                  {/* Accent blur shape */}
                  <div className="absolute -left-10 -top-6 w-40 h-40 rounded-full bg-yellow-200 opacity-20 blur-3xl hidden md:block"></div>

                  {/* Left: Photo + Name */}
                  <div className="flex-shrink-0 flex flex-col items-center gap-3 md:items-start w-full md:w-36">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={144}
                      height={144}
                      className="rounded-full border-4 border-white shadow-lg object-cover"
                    />
                    <h4 className="text-xl md:text-2xl font-semibold text-gray-900 whitespace-nowrap text-center md:text-left">
                      {member.name}
                    </h4>
                  </div>

                  {/* Right: Description */}
                  <div className="flex-1 relative z-10 flex items-center">
                    <p className="bg-yellow-50 p-4 rounded-xl text-gray-700 text-base md:text-lg italic text-justify leading-relaxed w-full">
                      {member.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
