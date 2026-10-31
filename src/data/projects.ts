export type ProjectCategory =
  | "AI & Machine Learning"
  | "Full Stack Development"
  | "Backend Engineering"
  | "Data Analytics"
  | "Web Development";

export type ProjectArtwork =
  | "memory"
  | "film"
  | "city"
  | "map"
  | "conversation"
  | "storage"
  | "chart"
  | "shield";

export type Project = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  category: ProjectCategory;
  technologies: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  thumbnail: {
    image: string;
    alt: string;
    kind: ProjectArtwork;
  };
  highlights: string[];
  featured: boolean;
  status?: string;
};

export const projectCategories: Array<"All" | ProjectCategory> = [
  "All",
  "AI & Machine Learning",
  "Full Stack Development",
  "Backend Engineering",
  "Data Analytics",
  "Web Development",
];

export const projects: Project[] = [
  {
    slug: "recall-ops",
    name: "RECALL-OPS",
    summary: "Incident investigation with a persistent memory of what teams have learned.",
    description:
      "An AI-assisted SRE incident investigation prototype. It accepts incident symptoms, retrieves related operational knowledge through Hindsight, and brings prior findings into an engineer's investigation workflow.",
    category: "AI & Machine Learning",
    technologies: ["Python", "FastAPI", "Hindsight", "Next.js", "TypeScript"],
    githubUrl: "https://github.com/cheswinvaddi/RECALL-OPS",
    thumbnail: {
      image: "/projects/recall-ops.svg",
      alt: "Illustration of the RECALL-OPS incident investigation dashboard",
      kind: "memory",
    },
    highlights: [
      "FastAPI endpoints for health checks and incident investigation.",
      "Hindsight integration for recalling related incident knowledge.",
      "Next.js interface connected to the investigation API.",
    ],
    featured: true,
    status: "Working prototype",
  },
  {
    slug: "cineai-movie-recommender",
    name: "CineAI",
    summary: "A movie discovery experience powered by recommendation models.",
    description:
      "A full-stack movie recommender that combines collaborative filtering, content similarity, and a trending score. The React interface connects to a FastAPI service for movie discovery, recommendations, search, and rating flows.",
    category: "AI & Machine Learning",
    technologies: ["Python", "NumPy", "Pandas", "FastAPI", "scikit-learn", "React", "Docker"],
    githubUrl: "https://github.com/cheswinvaddi/cineai-movie-recommender",
    thumbnail: {
      image: "/projects/cineai.svg",
      alt: "Illustration of the CineAI movie discovery and recommendation interface",
      kind: "film",
    },
    highlights: [
      "SVD-based collaborative filtering with a documented cold-start fallback.",
      "Cosine-similarity recommendations from movie features.",
      "FastAPI endpoints for recommendations, similarity, search, ratings, and browsing.",
      "React discovery interface with trending titles, genre browsing, and rating flows.",
    ],
    featured: true,
  },
  {
    slug: "urbanly",
    name: "Urbanly",
    summary: "A civic issue reporting and tracking platform built with Next.js.",
    description:
      "A full-stack civic reporting application organized around citizen reports, account flows, report submission, a community map, and dashboards. The repository includes server-side report and upload routes alongside the application interface.",
    category: "Full Stack Development",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Mongoose", "Auth.js", "Cloudinary", "MapLibre"],
    githubUrl: "https://github.com/cheswinvaddi/URBANLY",
    thumbnail: {
      image: "/projects/urbanly.svg",
      alt: "Illustration of the Urbanly civic issue dashboard and map",
      kind: "city",
    },
    highlights: [
      "Authentication and registration flows.",
      "Report submission, personal reports, and community map views.",
      "MongoDB models, validated request schemas, and image-upload routes.",
    ],
    featured: true,
  },
  {
    slug: "all-india-villages-api",
    name: "All India Villages API",
    summary: "A data-backed way to explore village and regional information.",
    description:
      "A full-stack capstone with a React interface, Express API using Prisma and PostgreSQL, and a Python ETL pipeline for preparing source data. The repository also provides a deployed demo.",
    category: "Backend Engineering",
    technologies: ["Node.js", "Express", "Prisma", "PostgreSQL", "React", "Python", "Pandas"],
    githubUrl: "https://github.com/cheswinvaddi/all-india-villages-api",
    liveDemoUrl: "https://all-india-villages-api-pi.vercel.app",
    thumbnail: {
      image: "/projects/all-india-villages-api.svg",
      alt: "Illustration of an India map and regional data explorer",
      kind: "map",
    },
    highlights: [
      "Separate web and API applications in a monorepo.",
      "State and village API routes backed by Prisma and PostgreSQL.",
      "Python data-cleaning and loading pipeline.",
    ],
    featured: true,
  },
  {
    slug: "speak2learn",
    name: "Speak2Learn",
    summary: "A conversational language-practice partner with voice support.",
    description:
      "A language-learning application with a React frontend and FastAPI backend. Conversation sessions retain message history, and the Gemini API-backed tutor responds in English or Swedish based on the selected practice language.",
    category: "AI & Machine Learning",
    technologies: ["Python", "FastAPI", "Gemini API", "React", "JavaScript", "Web Speech API"],
    githubUrl: "https://github.com/cheswinvaddi/Speak2Learn",
    thumbnail: {
      image: "/projects/speak2learn.svg",
      alt: "Illustration of an AI language-learning chat interface",
      kind: "conversation",
    },
    highlights: [
      "Session-based conversation endpoints with saved turn history.",
      "Tutor responses tailored to English or Swedish language practice.",
      "Browser speech recognition and adjustable voice settings.",
    ],
    featured: true,
  },
  {
    slug: "minidb",
    name: "MiniDB",
    summary: "A small C++ database-storage and buffer-management project.",
    description:
      "A C++23 implementation focused on foundational database internals. Its source is separated into storage, cache, and utility modules, with dedicated unit-test and benchmark targets.",
    category: "Backend Engineering",
    technologies: ["C++23", "CMake", "GoogleTest", "Google Benchmark", "spdlog"],
    githubUrl: "https://github.com/cheswinvaddi/MiniDB",
    thumbnail: {
      image: "/projects/minidb.svg",
      alt: "Illustration of MiniDB storage pages and a buffer pool",
      kind: "storage",
    },
    highlights: [
      "Disk manager and slotted-page storage modules.",
      "Buffer pool manager and replacement-policy modules.",
      "CMake build with storage/cache tests and benchmark targets.",
    ],
    featured: true,
  },
  {
    slug: "cybercrime-complaint-portal",
    name: "Cybercrime Complaint Portal",
    summary: "An educational full-stack prototype for submitting and tracking complaints.",
    description:
      "A MERN-stack prototype with separate user and administrator flows. Users can submit a complaint with supporting evidence and follow its status; administrators can review submissions and update their status. The README explicitly notes that it is not connected to real police or government systems.",
    category: "Full Stack Development",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Mongoose", "JWT", "Multer"],
    githubUrl: "https://github.com/cheswinvaddi/cybercrime-portal",
    liveDemoUrl: "https://cybercrime-portal.vercel.app",
    thumbnail: {
      image: "/projects/cybercrime-complaint-portal.svg",
      alt: "Illustration of a complaint review and tracking dashboard",
      kind: "shield",
    },
    highlights: [
      "User registration, login, and complaint status tracking.",
      "Administrator review and status-management flows.",
      "Evidence upload in an educational prototype, not a government service.",
    ],
    featured: true,
    status: "Educational prototype",
  },
  {
    slug: "bluestock-mutual-fund-analytics",
    name: "Mutual Fund Analytics Capstone",
    summary: "An analysis and ETL workflow for mutual fund and market data.",
    description:
      "A data analytics capstone organized around source and processed datasets, Python cleaning and ETL scripts, PostgreSQL schema/loading tools, SQL analysis, Jupyter notebooks, and dashboard-ready summaries.",
    category: "Data Analytics",
    technologies: ["Python", "Pandas", "Jupyter", "PostgreSQL", "SQL"],
    githubUrl: "https://github.com/cheswinvaddi/bluestock_mf_capstone",
    thumbnail: {
      image: "/projects/mutual-fund-analytics.svg",
      alt: "Illustration of mutual fund analytics with a chart and summary values",
      kind: "chart",
    },
    highlights: [
      "Data validation, cleaning, ingestion, and ETL scripts.",
      "PostgreSQL loading scripts, schema, and analytical SQL queries.",
      "Jupyter analysis and exported dashboard datasets.",
    ],
    featured: true,
  },
];
