"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { skillGroups } from "@/data/skills";

export function SkillsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section skills-section" id="skills">
      <div className="section-inner">
        <SectionHeading
          index="02"
          eyebrow="What I work with"
          title="A growing toolkit."
          description="Technologies and concepts explored through projects, coursework, and hands-on practice."
        />
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <motion.article
              className="skill-card"
              key={group.number}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <div className="skill-card-top">
                <span>{group.number}</span>
                <ArrowUpRight size={17} aria-hidden="true" />
              </div>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>{skill}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
