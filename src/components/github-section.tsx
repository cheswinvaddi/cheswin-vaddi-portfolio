import { ArrowUpRight, Github } from "lucide-react";
import { profile } from "@/data/profile";

export function GitHubSection() {
  return (
    <section className="section github-section" id="github">
      <div className="section-inner">
        <div className="github-panel">
          <div className="github-panel-copy">
            <span className="eyebrow">The open-source side</span>
            <h2>Built in the open.</h2>
            <p>
              Explore my repositories, experiments, and project source on GitHub.
              No activity counts here—just the work itself.
            </p>
          </div>
          <a
            className="button button-outline github-profile-link"
            href={profile.socialLinks[0].href}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={16} aria-hidden="true" />
            Visit my GitHub
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
