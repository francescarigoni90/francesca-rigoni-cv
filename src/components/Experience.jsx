import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import PortfolioData from "../data/PortfolioData";

export default function Experience() {
  const [language] = useContext(LanguageContext);
  const data = PortfolioData[language];

  return (
    <section id="experience" className="cv-section">
      <div className="section-container">
        <h2 className="section-heading">{data.experienceTitle}</h2>
        <div className="timeline">
          {data.experience.map((job) => (
            <article className="timeline-card" key={`${job.company}-${job.period}`}>
              <div className="timeline-header">
                <div>
                  <h3 className="job-role">{job.role}</h3>
                  <div className="job-company">
                    <strong>{job.company}</strong> · {job.location}
                  </div>
                </div>
                <div className="job-meta">
                  <span className="period-pill">{job.period}</span>
                  {job.badge && <span className="award-pill">{job.badge}</span>}
                </div>
              </div>

              <p className="job-summary">{job.summary}</p>
              <ul className="job-bullets">
                {job.highlights.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}