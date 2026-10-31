"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  ExternalLink,
  Github,
  X,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { SectionHeading } from "@/components/section-heading";
import {
  projectCategories,
  projects,
  type Project,
} from "@/data/projects";

function ProjectArtwork({ project }: { project: Project }) {
  return (
    <div
      className={`project-art project-art-${project.thumbnail.kind}`}
      role="img"
      aria-label={project.thumbnail.alt}
    >
      <Image
        className="project-art-image"
        src={project.thumbnail.image}
        alt=""
        fill
        sizes="(max-width: 760px) 100vw, (max-width: 1050px) 50vw, 560px"
      />
    </div>
  );
}

function ProjectDialog({
  project,
  onClose,
  dialogRef,
  closeButtonRef,
}: {
  project: Project | null;
  onClose: () => void;
  dialogRef: React.RefObject<HTMLDialogElement | null>;
  closeButtonRef: React.RefObject<HTMLButtonElement | null>;
}) {
  const [closingProjectSlug, setClosingProjectSlug] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const isClosing = project !== null && closingProjectSlug === project.slug;
  const requestClose = () => {
    if (project && !isClosing) setClosingProjectSlug(project.slug);
  };

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (!project) {
      if (dialog.open) dialog.close();
      return;
    }

    const previousBodyOverflow = document.body.style.overflow;
    if (!dialog.open) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
      closeButtonRef.current?.focus();
    }

    return () => {
      document.body.style.overflow = previousBodyOverflow;
    };
  }, [closeButtonRef, dialogRef, project]);

  return (
    <dialog
      className="project-dialog"
      ref={dialogRef}
      aria-labelledby={project ? `project-dialog-title-${project.slug}` : undefined}
      aria-describedby={project ? `project-dialog-description-${project.slug}` : undefined}
      aria-modal="true"
      onClose={() => {
        setClosingProjectSlug(null);
        onClose();
      }}
      onClick={(event) => {
        if (event.target === dialogRef.current) requestClose();
      }}
      onCancel={(event) => {
        event.preventDefault();
        requestClose();
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          event.preventDefault();
          requestClose();
        }
      }}
    >
      <AnimatePresence>
        {project && (
          <motion.div
            className="project-dialog-content"
            initial={{ opacity: 0, y: 14, scale: 0.99 }}
            animate={isClosing ? { opacity: 0, y: 8, scale: 0.99 } : { opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.2, ease: "easeOut" }}
            onAnimationComplete={() => {
              if (isClosing) dialogRef.current?.close();
            }}
          >
            <ProjectArtwork project={project} />
            <div className="project-dialog-copy">
              <span className="project-dialog-category">{project.category}</span>
              <h2 id={`project-dialog-title-${project.slug}`}>{project.name}</h2>
              <p id={`project-dialog-description-${project.slug}`}>{project.description}</p>
              {project.status && (
                <span className="project-status">{project.status}</span>
              )}
              <h3>Project highlights</h3>
              <ul className="project-highlights">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <div className="project-dialog-tech" aria-label="Technologies">
                {project.technologies.map((technology) => (
                  <span className="skill-tag" key={technology}>{technology}</span>
                ))}
              </div>
              <div className="project-dialog-actions">
                <a
                  className="button button-outline"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={15} aria-hidden="true" />
                  GitHub repository
                </a>
                {project.liveDemoUrl && (
                  <a
                    className="button button-primary"
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live demo <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
            <button
              className="project-dialog-close"
              type="button"
              aria-label="Close project details"
              ref={closeButtonRef}
              onClick={requestClose}
            >
              <X size={19} aria-hidden="true" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </dialog>
  );
}

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<(typeof projectCategories)[number]>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const visibleProjects = projects.filter(
    (project) => project.featured &&
      (activeCategory === "All" || project.category === activeCategory),
  );

  return (
    <section className="section work-section" id="projects">
      <div className="section-inner">
        <SectionHeading
          index="03"
          eyebrow="Selected work"
          title="Ideas, made tangible."
          description="A selection of projects across machine learning, full-stack software, data, and systems engineering."
        />
        <div className="project-filters" role="group" aria-label="Filter projects by category">
          {projectCategories.map((category) => (
            <button
              className={`project-filter${activeCategory === category ? " is-active" : ""}`}
              type="button"
              key={category}
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        {visibleProjects.length > 0 ? (
          <motion.div className="projects-grid" layout>
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project, index) => (
                <motion.article
                  className="project-card"
                  key={project.slug}
                  layout
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.32, delay: index * 0.035 }}
                >
                  <button
                    className="project-card-open"
                    type="button"
                    aria-label={`View ${project.name} case study`}
                    onClick={(event) => {
                      triggerRef.current = event.currentTarget;
                      setSelectedProject(project);
                    }}
                  >
                    <ProjectArtwork project={project} />
                    <span className="project-card-copy">
                      <span className="project-card-meta">
                        <span>{project.category}</span>
                        <ArrowUpRight size={15} aria-hidden="true" />
                      </span>
                      <span className="project-card-title">{project.name}</span>
                      <span className="project-card-description">{project.summary}</span>
                      <span className="project-card-tech">
                        {project.technologies.slice(0, 4).map((technology) => (
                          <span key={technology}>{technology}</span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span>+{project.technologies.length - 4}</span>
                        )}
                      </span>
                      <span className="project-card-link">
                        Explore case study <ArrowDownRight size={14} aria-hidden="true" />
                      </span>
                    </span>
                  </button>
                  <a
                    className="project-card-github"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.name} on GitHub`}
                  >
                    <Github size={16} aria-hidden="true" />
                  </a>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="project-empty-state" role="status">
            More work in this category will be added as it is ready to share.
          </div>
        )}
        <a
          className="button button-outline github-link"
          href="https://github.com/cheswinvaddi"
          target="_blank"
          rel="noreferrer"
        >
          Explore all repositories <ExternalLink size={15} aria-hidden="true" />
        </a>
      </div>
      <ProjectDialog
        project={selectedProject}
        onClose={() => {
          setSelectedProject(null);
          triggerRef.current?.focus();
        }}
        dialogRef={dialogRef}
        closeButtonRef={closeButtonRef}
      />
    </section>
  );
}
