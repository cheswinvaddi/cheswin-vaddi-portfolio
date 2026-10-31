export type EducationEntry = {
  institution: string;
  program: string;
  period?: string;
  location?: string;
};

export const education: EducationEntry[] = [
  {
    institution: "Jawaharlal Nehru Technological University Hyderabad",
    program: "Computer Science undergraduate",
    location: "Hyderabad, India",
  },
];
