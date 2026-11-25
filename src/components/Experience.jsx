import React, { useContext, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";
import PortfolioData from "../data/PortfolioData";

export default function Experience() {
  const [language] = useContext(LanguageContext);
  const data = PortfolioData[language];
  const [expanded, setExpanded] = useState({});

  const btnText =
    language === "IT"
      ? { more: "Espandi", less: "Riduci" }
      : { more: "Show more", less: "Show less" };

  function toggleExpand(index) {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  }

  return (
    <section id="experience" className="cv-section">
      <div className="section-container experience-wide">
        <h2 className="section-heading">
          {data.experienceTitle}
        </h2>

        <div className="main-timeline">
          {data.experience.map((job, idx) => {
            const side = idx % 2 === 0 ? "left" : "right";
            const isOpen = !!expanded[idx];
            const visibleBullets = isOpen
              ? job.highlights
              : job.highlights.slice(0, 1);

            return (
              <div className={`timeline-item ${side}`} key={`${job.company}-${idx}`}>
                <span className="timeline-dot" aria-hidden="true" />

                <article className="tl-card">
                  <div
                    className="tl-company-circle"
                  >
                    <img
                      src={job.logo}
                      alt={`${job.company} logo`}
                      className="tl-company-img"
                    />
                  </div>

                  <div className="tl-card-header">
                    <h3 className="tl-role">{job.role}</h3>
                  </div>

                  <div className="tl-card-body">
                    <div className="tl-company-row">
                      <span className="tl-company-name">{job.company}</span>
                      {job.companyInfo && (
                        <span className="tl-tooltip">
                          <i className="fa fa-info-circle" />
                          <span className="tl-tooltip-text">{job.companyInfo}</span>
                        </span>
                      )}
                    </div>

                    <div className="tl-meta-line">
                      <i className="fa fa-map-marker" aria-hidden="true" />
                      <span>{job.location}</span>
                    </div>

                    <div className="tl-meta-line">
                      <i className="fa fa-calendar-o" aria-hidden="true" />
                      <span>{job.period}</span>
                    </div>

                    {job.award && (
                      <div className="tl-award">
                        <i className="fa fa-star" aria-hidden="true" /> {job.award}
                      </div>
                    )}

                    <ul className="tl-bullets">
                      {visibleBullets.map((item, bIdx) => (
                        <li key={bIdx}>{item}</li>
                      ))}
                      {!isOpen && job.highlights.length > 1 && (
                        <li className="tl-ellipsis">...</li>
                      )}
                    </ul>

                    {job.highlights.length > 1 && (
                      <button
                        type="button"
                        className="tl-expand-btn"
                        onClick={() => toggleExpand(idx)}
                      >
                        {isOpen ? btnText.less : btnText.more}
                      </button>
                    )}
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}