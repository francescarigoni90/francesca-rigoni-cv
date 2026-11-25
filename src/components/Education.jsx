import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import PortfolioData from "../data/PortfolioData";

export default function Education() {
  const [language] = useContext(LanguageContext);
  const data = PortfolioData[language];

  return (
    <section id="education" className="cv-section">
      <div className="section-container">
        <h2 className="section-heading">{data.educationTitle}</h2>
        <div className="cards-grid two-col">
          {data.education.map((edu) => (
            <article className="cv-card" key={`${edu.institution}-${edu.period}`}>
              <div className="edu-top">
                <span className="period-pill">{edu.period}</span>
                <span className="grade-pill">{edu.grade}</span>
              </div>
              <h3 className="card-title">{edu.degree}</h3>
              <p className="edu-inst">{edu.institution}</p>
              <p className="edu-loc">
                <i className="fa fa-map-marker" /> {edu.location}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}