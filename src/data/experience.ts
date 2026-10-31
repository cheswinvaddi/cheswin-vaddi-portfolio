export type ExperienceEntry = {
  organization: string;
  position: string;
  period?: string;
  kind: "Internship" | "Website contribution";
  description: string;
  project?: string;
  technologies: string[];
  current?: boolean;
  externalUrl?: string;
};

export const experience: ExperienceEntry[] = [
  {
    organization: "GlobusIT",
    position: "Software Developer Intern",
    period: "October 2026 — Present",
    kind: "Internship",
    description:
      "Contributing as an intern to GAAR, an auditing and accounts project, as part of the GlobusIT team.",
    project: "GAAR — Auditing and Accounts",
    technologies: [],
    current: true,
    externalUrl: "https://github.com/tauseefmohammad/gaar.pro",
  },
  {
    organization: "Bluestock Fintech",
    position: "Data Analyst Intern",
    period: "22 April 2026 — 22 June 2026",
    kind: "Internship",
    description:
      "Worked on financial data analysis, data cleaning and preprocessing, exploratory analysis, and reports and dashboards.",
    technologies: ["Python", "Pandas", "Excel"],
  },
  {
    organization: "CNLU CS-DPCRU",
    position: "Website Development Contributor",
    kind: "Website contribution",
    description:
      "Contributed to the CNLU CS-DPCRU institutional website built with HTML, CSS, and JavaScript.",
    project: "CNLU CS-DPCRU Institutional Website",
    technologies: ["HTML", "CSS", "JavaScript"],
    externalUrl: "https://github.com/amarendar0003/website",
  },
];
