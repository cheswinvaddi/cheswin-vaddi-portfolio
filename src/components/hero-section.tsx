"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  Github,
  Linkedin,
  Mail,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [characterIndex, setCharacterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const roles = profile.roles;
  const currentRole = roles[roleIndex];

  useEffect(() => {
    if (shouldReduceMotion) return;

    const isRoleComplete = characterIndex === currentRole.length;
    const isRoleEmpty = characterIndex === 0;
    const delay =
      isRoleComplete && !isDeleting
        ? 1500
        : isRoleEmpty && isDeleting
          ? 350
          : isDeleting
            ? 38
            : 82;

    const timeout = window.setTimeout(() => {
      if (isRoleComplete && !isDeleting) {
        setIsDeleting(true);
      } else if (isRoleEmpty && isDeleting) {
        setRoleIndex((index) => (index + 1) % roles.length);
        setIsDeleting(false);
      } else {
        setCharacterIndex((index) => index + (isDeleting ? -1 : 1));
      }
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [characterIndex, currentRole.length, isDeleting, roles.length, shouldReduceMotion]);

  const visibleRole = shouldReduceMotion
    ? roles[0]
    : currentRole.slice(0, characterIndex);
  const entrance = (delay: number) => ({
    initial: shouldReduceMotion ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, delay, ease: "easeOut" as const },
  });

  return (
    <section className="hero-section" id="home" aria-labelledby="hero-title">
      <div className="hero-backdrop" aria-hidden="true">
        <div className="hero-grid-pattern" />
        <div className="hero-glow hero-glow-blue" />
        <div className="hero-glow hero-glow-violet" />
        <div className="hero-grain" />
      </div>
      <div className="hero-grid">
        <div className="hero-copy">
          <motion.div className="hero-identity" {...entrance(0.08)}>
            <span className="hero-identity-mark" aria-hidden="true">
              <Sparkles size={14} />
            </span>
            <span>{profile.displayName}</span>
            <span className="hero-identity-divider" aria-hidden="true" />
            <span className="hero-location">CS UNDERGRADUATE</span>
          </motion.div>

          <motion.div className="hero-intro" {...entrance(0.2)}>
            <p className="hero-overline">
              <span className="status-dot" />
              A curious mind, building what&apos;s next
            </p>
            <h1 className="hero-title" id="hero-title">
              <span className="hero-title-line">
                Building <span className="hero-title-accent">Intelligent</span>
              </span>
              <span className="hero-title-line">Solutions.</span>
              <span className="hero-title-line hero-title-future">
                Engineering the <span className="hero-title-accent">Future.</span>
              </span>
            </h1>
          </motion.div>

          <motion.div className="hero-role" {...entrance(0.34)}>
            <span className="role-prefix" aria-hidden="true">&gt;_</span>
            <span className="role-label">I&apos;m a</span>
            <span className="role-value" aria-hidden="true">
              {visibleRole}
              {!shouldReduceMotion && <span className="role-cursor" />}
            </span>
            <span className="sr-only" aria-live="polite" aria-atomic="true">
              {currentRole}
            </span>
          </motion.div>

          <motion.div className="hero-description" {...entrance(0.43)}>
            <p>
              I&apos;m a Computer Science undergraduate passionate about
              Artificial Intelligence, Machine Learning, and Full Stack
              Development.
            </p>
            <p>
              I enjoy transforming ideas into practical applications and
              building technology that solves real-world problems.
            </p>
          </motion.div>

          <motion.div className="hero-actions" {...entrance(0.54)}>
            <a className="button button-primary hero-project-button" href="#projects">
              View My Projects <ArrowDownRight size={17} aria-hidden="true" />
            </a>
            <a
              className="button button-quiet hero-resume-button"
              href={profile.resumePath}
              download
            >
              Download Resume <ArrowDown size={16} aria-hidden="true" />
            </a>
            <a
              className="button hero-email-button"
              href={`mailto:${profile.email}`}
              aria-label="Email Cheswin"
            >
              <Mail size={17} aria-hidden="true" />
              <span>Email me</span>
              <ArrowUpRight className="hero-email-arrow" size={14} aria-hidden="true" />
            </a>
          </motion.div>

          <motion.div className="hero-socials" {...entrance(0.65)}>
            <span className="social-caption">ELSEWHERE ON THE INTERNET</span>
            {profile.socialLinks.map((social, index) => {
              const Icon = social.label === "GitHub" ? Github : Linkedin;
              return (
                <span className="hero-social-item" key={social.label}>
                  {index > 0 && <span className="social-divider" aria-hidden="true" />}
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${social.label} (opens in a new tab)`}
                  >
                    <Icon size={16} aria-hidden="true" />
                    <span>{social.label}</span>
                    <ArrowUpRight size={12} aria-hidden="true" />
                  </a>
                </span>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          aria-hidden="true"
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.94, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: "easeOut" }}
        >
          <div className="visual-ambient" />
          <div className="visual-frame">
            <div className="visual-frame-header">
              <div className="visual-window-dots">
                <i /><i /><i />
              </div>
              <span>INTELLIGENCE / 001</span>
              <span className="visual-live"><i /> SYNTHESIS</span>
            </div>
            <div className="visual-stage">
              <svg className="neural-lines" viewBox="0 0 500 430" fill="none">
                <path d="M66 108 164 161 253 100 348 153 431 95" />
                <path d="M66 108 113 249 164 161 218 290 253 100 291 248 348 153 378 306 431 95" />
                <path d="M113 249 218 290 291 248 378 306" />
                <path d="M164 161 291 248M253 100 218 290M348 153 218 290" />
              </svg>
              <div className="visual-axis axis-horizontal" />
              <div className="visual-axis axis-vertical" />
              <div className="neural-orbit neural-orbit-one" />
              <div className="neural-orbit neural-orbit-two" />
              <div className="neural-core">
                <div className="neural-core-inner">
                  <span className="core-symbol">CV<span>.</span></span>
                  <span className="core-kicker">IDEA → IMPACT</span>
                </div>
              </div>
              <span className="neural-node node-one" />
              <span className="neural-node node-two" />
              <span className="neural-node node-three" />
              <span className="neural-node node-four" />
              <span className="neural-node node-five" />
              <span className="neural-node node-six" />
              <span className="neural-node node-seven" />
              <span className="neural-node node-eight" />
              <span className="neural-node node-nine" />
              <div className="visual-float-label float-label-top">
                <Sparkles size={12} />
                <span>NEURAL NETWORK</span>
              </div>
              <div className="visual-float-label float-label-bottom">
                <Code2 size={12} />
                <span>HUMAN-CENTERED CODE</span>
              </div>
              <span className="visual-coord coord-left">NODE / 01</span>
              <span className="visual-coord coord-right">LAYER / 02</span>
            </div>
            <div className="visual-frame-footer">
              <span>IDEAS IN</span>
              <span className="footer-signal"><i /><i /><i /><i /><i /><i /><i /></span>
              <span>SOLUTIONS OUT</span>
            </div>
          </div>
          <div className="visual-stamp stamp-top">
            <span>01</span>
            <span>LEARN<br />&amp; QUESTION</span>
          </div>
          <div className="visual-stamp stamp-bottom">
            <span>02</span>
            <span>DESIGN<br />&amp; BUILD</span>
          </div>
        </motion.div>
      </div>
      <a className="scroll-cue" href="#about" aria-label="Scroll to about section">
        <span>Scroll to explore</span>
        <ArrowDown size={15} aria-hidden="true" />
      </a>
      <div className="hero-index" aria-hidden="true">
        <span>CHESWIN VADDI</span>
        <span>AI × SOFTWARE</span>
      </div>
    </section>
  );
}
