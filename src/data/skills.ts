export type SkillGroup = {
  number: string;
  title: string;
  description: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    number: "01",
    title: "AI & data",
    description: "Learning through practical AI applications and data workflows.",
    skills: [
      "Python",
      "Machine Learning",
      "Data Analysis",
      "Pandas",
      "NumPy",
      "Gemini API",
      "FastAPI",
    ],
  },
  {
    number: "02",
    title: "Full stack",
    description: "Interfaces and services that work together.",
    skills: ["TypeScript", "JavaScript", "React", "Next.js", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    number: "03",
    title: "Backend & systems",
    description: "APIs, data stores, and systems fundamentals.",
    skills: ["Python", "FastAPI", "Node.js", "Express", "PostgreSQL", "MongoDB", "C++"],
  },
];
