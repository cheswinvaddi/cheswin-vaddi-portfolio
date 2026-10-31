# Cheswin Vaddi — Portfolio

A personal portfolio highlighting Cheswin Vaddi's projects, technical interests, education, and experience. Built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and Lucide icons.

## Features

- Responsive dark-theme portfolio with animated navigation and hero section.
- Project gallery with category filters, project-specific artwork, and accessible case-study dialogs.
- Centralized profile, project, experience, skills, education, and achievement data.
- Downloadable résumé and contact links.
- SEO metadata and reduced-motion-aware animation behavior.

Project gallery artwork is custom SVG illustration, not screenshots of deployed applications.

## Getting started

### Requirements

- Node.js 20.9 or later
- npm

### Install and run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Check TypeScript types |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build |

## Project structure

```text
public/
  projects/                 Project-specific SVG illustrations
  cheswin-vaddi-resume.txt  Downloadable résumé
src/
  app/                      Next.js app entry, layout, and global styles
  components/               Reusable portfolio sections and UI
  data/                     Editable portfolio content
  lib/                      Shared utilities
```

Project and profile content can be edited in the files under `src/data/`.

## Technology

- Next.js 16 and React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide React

## Contact

- GitHub: [cheswinvaddi](https://github.com/cheswinvaddi)
- LinkedIn: [Cheswin Vaddi](https://www.linkedin.com/in/cheswin-vaddi/)
- Email: [cheswinvaddi.1@gmail.com](mailto:cheswinvaddi.1@gmail.com)
