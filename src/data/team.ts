export interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
  tags?: string[]; // optional tags, e.g., ["AIIMS Bhubaneswar"]
}

export const founders: TeamMember[] = [
  {
    name: "Aurobinda Nayak",
    role: "Founder & CEO",
    description: "Visionary leader at Nirvant, guiding the company’s mission to empower individuals through wellness, education, and technology. Passionate about holistic growth and creating a meaningful impact in the community.",
    image: "/team/auro.png",
  },
  {
    name: "Prateekshya Mohapatra",
    role: "Co-Founder and COO",
    description: "Growth Mentor Coach at Nirvant, driving operational excellence and helping students and professionals achieve clarity, confidence, and success through structured guidance and mentorship.",
    image: "/team/prat.png",
  },
];

export const techTeam: TeamMember[] = [
  
  
  {
    name: "Prahallad Nayak",
    role: "Chief Techical Officer",
    description: "Leading technical projects at Nirvant, bridging the gap between innovative solutions and user-centric design. Focused on delivering high-quality applications and AI-driven growth tools.",
    image: "/team/prah.png",
  },
  
  
  {
    name: "Jeebanjyoti Biswal",
    role: "Technical Director",
    description: "Technology Consultant, ensuring smooth integration of tech tools that enhance learning and mental wellness. Skilled in building reliable and scalable solutions that support Nirvant’s mission.",
    image: "/team/jeeba.png",
  },
  
  {
    name: "Subham Khuntia",
    role: "Technical Director",
    description: "Assists in developing and maintaining Nirvant’s digital platforms. Focused on optimizing performance, ensuring reliability, and supporting innovative tech-driven learning solutions.",
    image: "/team/subh.png",
  },

];

export const medicoTeam: TeamMember[] = [
  

{
  name: "Sandipta Sahoo",
  role: "Medico",
  description:
    "Secured NEET Rank 561 with 662 marks and now pursuing MBBS at VIMSAR. Passionate about simplifying complex medical concepts and motivating aspirants to approach learning with clarity and confidence.",
  image: "/team/sand.png",
  tags: ["VEER SURENDRA SAI INSTITUTE OF MEDICAL SCIENCE AND RESEARCH
    "],
},
{
  name: "Prachurya Das",
  role: "Medico",
  description:
    "Achieved NEET Rank 6181 with 682 marks and studies at SCB Medical College & Hospital. A mentor who believes in consistent effort, self-belief, and helping students prepare smarter — not harder — for their goals.",
  image: "/team/prac.png",
  tags: ["SCB Medical College & Hospital"],
},
{
  name: "Smaranika Priyadarshini",
  role: "Medico",
  description:
    "Scored 628 marks in NEET with Rank 14666, now part of VIMSAR. Dedicated to guiding students beyond rote learning, blending emotional balance with disciplined study strategies to bring out their best potential.",
  image: "/team/smar.png",
  tags: ["VEER SURENDRA SAI INSTITUTE OF MEDICAL SCIENCE AND RESEARCH"],
},
{
  name: "Jeeban Nayak",
  role: "Medico",
  description:
    "Secured NEET AIR 9382 with 675 marks and continues his medical journey at MKCG Medical College & Hospital. Committed to mentoring aspirants through structured preparation, focus, and self-motivation.",
  image: "/team/jeeb.png",
  tags: ["MKCG Medical College & Hospital"],
},
{
  name: "Satyabrata Mahakud",
  role: "Academic Expert Controller",
  description:
    "Academic Controller at Nirvant, managing educational programs and mentorship frameworks. Focused on integrating academic excellence with mental wellness to create a transformative learning ecosystem.",
  image: "/team/saty.png",
  tags: ["Nirvant Team"],
},

  {
    name: "Priyanshu Pahi",
    role: "Mentor",
    description: "Academic Controller and Manager at Nirvant, overseeing educational programs and mentoring initiatives while ensuring the highest quality support for learners.",
    image: "/team/priy.png",
  },


];

export const medicoTeamFiltered = medicoTeam.filter(
  (member) => member.name !== "Priyanshu Pahi"
);



export const designTeam: TeamMember[] = [
  {
    name: "Aryasruti Barik",
    role: "Chief Digital Officer and Social Media Marketing Controller",
    description: "Social Media Marketing Controller at Nirvant, creating engaging visual content and managing campaigns to amplify Nirvant’s mission across digital platforms.",
    image: "/team/ar.png",
  },

  {
  name: "Shikha Naik",
  role: "Digital Media Strategist",
  description: "Supporting Nirvant’s digital vision alongside Aryasruti, Shikha focuses on content strategy, campaign analytics, and optimizing audience engagement across platforms.",
  image: "/team/shik.png",
}



];
