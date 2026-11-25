import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import PortfolioData from "../data/PortfolioData";

export default function Projects() {
  const [language] = useContext(LanguageContext);
  const data = PortfolioData[language];
  const labels =
    language === "IT"
      ? { challenge: "Sfida:", solution: "Soluzione:", impact: "Impatto:" }
      : { challenge: "Challenge:", solution: "Solution:", impact: "Impact:" };

  return (
    <section id="projects" className="cv-section section-alt">
      <div className="section-container">
        <h2 className="section-heading">{data.projectsTitle}</h2>
        <div className="cards-grid two-col">
          {data.projects.map((proj) => (
            <article className="cv-card project-card" key={proj.title}>
              <span className="project-context">{proj.context}</span>
              <h3 className="card-title">{proj.title}</h3>
              <p className="project-detail">
                <strong>{labels.challenge}</strong> {proj.challenge}
              </p>
              <p className="project-detail">
                <strong>{labels.solution}</strong> {proj.solution}
              </p>
              <p className="project-impact">
                <strong>{labels.impact}</strong> {proj.impact}
              </p>
              <div className="tag-list">
                {proj.tech.map((t) => (
                  <span className="cv-tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}