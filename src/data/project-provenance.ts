export type ProjectProvenance = {
  owner: string;
  repository: string;
  fork: boolean;
  contribution: string;
  evidenceChecked: string[];
  provenance: "github-author-and-committer" | "user-confirmed";
};

export const projectProvenance: Record<string, ProjectProvenance> = {
  "recall-ops": {
    owner: "cheswinvaddi",
    repository: "RECALL-OPS",
    fork: false,
    contribution:
      "GitHub API showed recent commits authored by and committed by cheswinvaddi; README describes the working prototype.",
    evidenceChecked: ["README", "backend source tree", "frontend/package.json", "commit author and committer"],
    provenance: "github-author-and-committer",
  },
  "cineai-movie-recommender": {
    owner: "cheswinvaddi",
    repository: "cineai-movie-recommender",
    fork: false,
    contribution:
      "GitHub API showed the initial project commit authored and committed by Cheswin Vaddi.",
    evidenceChecked: ["README", "backend/requirements.txt", "frontend/package.json", "docker-compose.yml", "commit author and committer"],
    provenance: "github-author-and-committer",
  },
  urbanly: {
    owner: "cheswinvaddi",
    repository: "URBANLY",
    fork: false,
    contribution:
      "GitHub API showed commits authored and committed by cheswinvaddi; README and source tree describe the civic reporting application.",
    evidenceChecked: ["README", "package.json", "Next.js app and API source tree", "commit author and committer"],
    provenance: "github-author-and-committer",
  },
  "all-india-villages-api": {
    owner: "cheswinvaddi",
    repository: "all-india-villages-api",
    fork: false,
    contribution:
      "GitHub API showed capstone commits authored and committed by Cheswin Vaddi.",
    evidenceChecked: ["README", "apps/api/package.json", "apps/web/package.json", "etl/requirements.txt", "live demo HTTP 200", "commit author and committer"],
    provenance: "github-author-and-committer",
  },
  speak2learn: {
    owner: "cheswinvaddi",
    repository: "Speak2Learn",
    fork: false,
    contribution:
      "GitHub API showed commits for speech recognition and Swedish/voice support authored and committed by cheswinvaddi.",
    evidenceChecked: ["readme.md", "backend/requirements.txt", "frontend/package.json", "conversation route and service", "commit author and committer"],
    provenance: "github-author-and-committer",
  },
  minidb: {
    owner: "cheswinvaddi",
    repository: "MiniDB",
    fork: false,
    contribution:
      "GitHub API showed the initial commit authored and committed by cheswinvaddi; technical claims were limited to the source tree and CMake configuration.",
    evidenceChecked: ["CMakeLists.txt", "storage/cache source tree", "unit-test and benchmark targets", "commit author and committer"],
    provenance: "github-author-and-committer",
  },
  "cybercrime-complaint-portal": {
    owner: "cheswinvaddi",
    repository: "cybercrime-portal",
    fork: false,
    contribution:
      "GitHub API showed commits authored and committed by Cheswin Vaddi; README identifies the application as an educational prototype.",
    evidenceChecked: ["README", "frontend/package.json", "backend/package.json", "live demo HTTP 200", "commit author and committer"],
    provenance: "github-author-and-committer",
  },
  "bluestock-mutual-fund-analytics": {
    owner: "cheswinvaddi",
    repository: "bluestock_mf_capstone",
    fork: false,
    contribution:
      "User confirmed this is their work. The initial Git commit uses a local-machine author email, so GitHub author identity alone does not establish attribution.",
    evidenceChecked: ["README", "requirements.txt", "notebooks/scripts/SQL/data tree", "user confirmation"],
    provenance: "user-confirmed",
  },
};

export const experienceProvenance = {
  globusIT: {
    source: "User-supplied experience",
    repositoryOwner: "tauseefmohammad",
    repository: "gaar.pro",
    fork: false,
    contribution:
      "No commits attributed to cheswinvaddi were found in the repository. Public project details are not used to claim individual implementation work.",
  },
  bluestockFintech: {
    source: "User-supplied experience and responsibilities",
  },
  cnluWebsite: {
    source: "User-supplied contribution; the public repository history includes commits authored by cheswinvaddi.",
    repositoryOwner: "amarendar0003",
    repository: "website",
    fork: false,
  },
} as const;
