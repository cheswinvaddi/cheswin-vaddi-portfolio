"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/section-heading";

export function ContactSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section contact-section" id="contact">
      <div className="section-inner">
        <SectionHeading index="06" eyebrow="Make something matter" title="Have a good one?" />
        <motion.div
          className="contact-content"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <p>
            I&apos;m always up for a conversation about AI, software, or an
            interesting problem worth solving.
          </p>
          <motion.a
            className="contact-email"
            href={`mailto:${profile.email}`}
            whileHover={shouldReduceMotion ? undefined : { y: -2 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
          >
            {profile.email}
            <ArrowUpRight size={25} aria-hidden="true" />
          </motion.a>
          <div className="contact-links">
            <motion.a
              href={profile.emailComposeUrl}
              aria-label="Email Cheswin"
              whileHover={shouldReduceMotion ? undefined : { y: -2 }}
            >
              <Mail size={15} aria-hidden="true" /> Email me
            </motion.a>
            <a
              href={profile.socialLinks[0].href}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub (opens in a new tab)"
            >
              <Github size={15} aria-hidden="true" /> GitHub
            </a>
            <a
              href={profile.socialLinks[1].href}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn (opens in a new tab)"
            >
              <Linkedin size={15} aria-hidden="true" /> LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
