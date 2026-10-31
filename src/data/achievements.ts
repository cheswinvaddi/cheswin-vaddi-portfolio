export type Credential = {
  name: string;
  issuer: string;
  issued: string;
  credentialId: string;
  type: "Workshop" | "Course certificate";
};

export const credentials: Credential[] = [
  {
    name: "CyberDevX Workshop",
    issuer: "DEVXAI Technologies",
    issued: "March 2025",
    credentialId: "921dfd1a-948c-48fd-9fbd-ed9e685eebc7",
    type: "Workshop",
  },
  {
    name: "The Complete Full Stack Web Development",
    issuer: "Udemy",
    issued: "October 2026",
    credentialId: "UC-05a3ac5d-ac89-45e0-8054-70938d736f4e",
    type: "Course certificate",
  },
];

export const achievements: string[] = [];
