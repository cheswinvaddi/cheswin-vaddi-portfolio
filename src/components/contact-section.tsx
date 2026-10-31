import { ArrowUpRight, Github, Linkedin, Mail, Phone } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/section-heading";

export function ContactSection() {
  return (
    <section className="section contact-section" id="contact">
      <div className="section-inner">
        <SectionHeading index="06" eyebrow="Make something matter" title="Have a good one?" />
        <div className="contact-content">
          <p>
            I&apos;m always up for a conversation about AI, software, or an
            interesting problem worth solving.
          </p>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email}
            <ArrowUpRight size={25} aria-hidden="true" />
          </a>
          <div className="contact-links">
            <a href={`tel:${profile.phone.replaceAll(" ", "")}`}>
              <Phone size={15} aria-hidden="true" /> {profile.phone}
            </a>
            <a href={`mailto:${profile.email}`}>
              <Mail size={15} aria-hidden="true" /> Email me
            </a>
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
        </div>
      </div>
    </section>
  );
}
