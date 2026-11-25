import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import PortfolioData from "../data/PortfolioData";

export default function Certifications() {
  const [language] = useContext(LanguageContext);
  const data = PortfolioData[language];

  return (
    <section id="certifications" className="cv-section section-alt">
      <div className="section-container">
        <h2 className="section-heading">{data.certificationsTitle}</h2>
        <div className="cards-grid two-col">
          {data.certifications.map((cert) => (
            <article className="cv-card" key={cert.title}>
              <div className="edu-top">
                <span className="cert-issuer">{cert.issuer}</span>
                <span className="period-pill">{cert.date}</span>
              </div>
              <h3 className="card-title">{cert.title}</h3>
              <p className="cert-note">{cert.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}