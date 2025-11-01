export interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
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
    description: "Mental Therapist providing personalized mental health guidance to students and professionals, helping them navigate stress, anxiety, and performance pressure effectively.",
    image: "/team/sand.png",
  },
  {
    name: "Prachurya Das",
    role: "Medico",
    description: "Educational Mentor specializing in guiding students through medical exam preparation with emotional and psychological support, ensuring holistic growth and resilience.",
    image: "/team/prac.png",
  },

    {
    name: "Smaranika Priyadarshini",
    role: "Medico",
    description: "Educational Mentor focused on holistic student development, combining mental wellness techniques with structured academic support for optimal performance.",
    image: "/team/smar.png",
  },

  {
    name: "Jeeban Nayak",
    role: "Medico",
    description: "Educational Mentor dedicated to empowering students with clear strategies for learning and exam success while nurturing their emotional well-being.",
    image: "/team/jeeb.png",
  },
  
  {
    name: "Satyabrata Mahakud",
    role: "Academic Expert Controller ",
    description: "Academic Controller and Manager at Nirvant, overseeing educational programs and mentoring initiatives while ensuring the highest quality support for learners.",
    image: "/team/saty.png",
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
    image: "/team/arya.png",
  },
];
