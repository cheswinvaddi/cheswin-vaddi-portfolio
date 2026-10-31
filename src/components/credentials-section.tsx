import { Award, GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { credentials } from "@/data/achievements";
import { education } from "@/data/education";

export function CredentialsSection() {
  return (
    <section className="section credentials-section" id="credentials">
      <div className="section-inner">
        <SectionHeading
          index="05"
          eyebrow="Foundations"
          title="Learning is the work."
          description="Formal study and continued learning, captured as they happen."
        />
        <div className="credentials-grid">
          <article className="credential-card education-card" id="education">
            <div className="credential-card-heading">
              <span className="credential-icon"><GraduationCap size={17} /></span>
              <span className="credential-index">EDUCATION / 01</span>
            </div>
            {education.map((entry) => (
              <div className="education-entry" key={entry.institution}>
                <h3>{entry.program}</h3>
                <p>{entry.institution}</p>
                {entry.location && <span>{entry.location}</span>}
                {entry.period && <span>{entry.period}</span>}
              </div>
            ))}
          </article>
          <article className="credential-card certification-card" id="certifications">
            <div className="credential-card-heading">
              <span className="credential-icon"><Award size={17} /></span>
              <span className="credential-index">LEARNING / 02</span>
            </div>
            <div className="credential-list">
              {credentials.map((credential) => (
                <article className="credential-entry" key={credential.credentialId}>
                  <div className="credential-entry-meta">
                    <span>{credential.type}</span>
                    <span>{credential.issued}</span>
                  </div>
                  <h3>{credential.name}</h3>
                  <p>{credential.issuer}</p>
                  <code>Credential ID · {credential.credentialId}</code>
                </article>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
