"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness, Code2 } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { experience } from "@/data/experience";

export function ExperienceSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section timeline-section" id="experience">
      <div className="section-inner experience-inner">
        <SectionHeading
          index="04"
          eyebrow="Experience & contributions"
          title="Learning by doing."
          description="Internships and project contributions, shared with the scope and context they deserve."
        />
        <div className="experience-list">
          {experience.map((entry, index) => {
            const Icon = entry.kind === "Internship" ? BriefcaseBusiness : Code2;
            return (
              <motion.article
                className="experience-entry"
                key={`${entry.organization}-${entry.position}`}
                initial={shouldReduceMotion ? false : { opacity: 0, x: -14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <div className="experience-marker" aria-hidden="true">
                  <Icon size={16} />
                </div>
                <div className="experience-entry-content">
                  <div className="experience-entry-meta">
                    <span className="experience-type">{entry.kind}</span>
                    {entry.current && (
                      <span className="experience-current">
                        <span className="status-dot" /> Current
                      </span>
                    )}
                    {entry.period && <span className="experience-period">{entry.period}</span>}
                  </div>
                  <h3>{entry.position}</h3>
                  <p className="experience-organization">{entry.organization}</p>
                  <p className="experience-description">{entry.description}</p>
                  {entry.project && (
                    <p className="experience-project">
                      <span>Project</span> {entry.project}
                    </p>
                  )}
                  <div className="experience-tags">
                    {entry.technologies.map((technology) => (
                      <span className="skill-tag" key={technology}>{technology}</span>
                    ))}
                    {entry.externalUrl && (
                      <a
                        className="experience-source"
                        href={entry.externalUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Repository <ArrowUpRight size={13} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
