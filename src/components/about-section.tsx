import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/section-heading";

export function AboutSection() {
  return (
    <section className="section about-section" id="about">
      <div className="section-inner">
        <SectionHeading index="01" eyebrow="A little about me" title="Built on curiosity." />
        <div className="about-grid">
          <p className="about-lead">
            I&apos;m <span>{profile.name}</span> — an aspiring AI/ML engineer
            and full stack developer, drawn to the space between thoughtful
            ideas and useful technology.
          </p>
          <div className="about-detail">
            {profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <a className="text-link" href="#contact">
              A good place to start? Say hello <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="about-signoff">
          <span>THINK DEEPLY</span>
          <span className="signoff-line" />
          <span>BUILD WITH INTENT</span>
          <span className="signoff-mark">CV.</span>
        </div>
      </div>
    </section>
  );
}
