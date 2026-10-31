"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/section-heading";

export function AboutSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section about-section" id="about">
      <div className="section-inner">
        <SectionHeading index="01" eyebrow="A little about me" title="Built on curiosity." />
        <motion.div
          className="about-grid"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <motion.p
            className="about-lead"
            initial={shouldReduceMotion ? false : { opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
          >
            I&apos;m <span>{profile.name}</span> — an aspiring AI/ML engineer
            and full stack developer, drawn to the space between thoughtful
            ideas and useful technology.
          </motion.p>
          <motion.div
            className="about-detail"
            initial={shouldReduceMotion ? false : { opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.16, ease: "easeOut" }}
          >
            {profile.about.map((paragraph, index) => (
              <motion.p
                key={paragraph}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
              >
                {paragraph}
              </motion.p>
            ))}
            <a className="text-link" href="#contact">
              A good place to start? Say hello <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          className="about-signoff"
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span>THINK DEEPLY</span>
          <span className="signoff-line" />
          <span>BUILD WITH INTENT</span>
          <span className="signoff-mark">CV.</span>
        </motion.div>
      </div>
    </section>
  );
}
