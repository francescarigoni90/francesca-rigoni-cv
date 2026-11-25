import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import PortfolioData from "../data/PortfolioData";

export default function Skills() {
  const [language] = useContext(LanguageContext);
  const data = PortfolioData[language];

  return (
    <section id="skills" className="cv-section section-alt">
      <div className="section-container">
        <h2 className="section-heading">{data.skillsTitle}</h2>
        <div className="cards-grid two-col">
          {data.skillsGroups.map((group) => (
            <div className="cv-card" key={group.category}>
              <h3 className="card-title">
                <i className={`fa ${group.icon} card-icon`} />
                {group.category}
              </h3>

              {group.items && (
                <div className="skill-bars">
                  {group.items.map((skill) => (
                    <div className="skill-bar-row" key={skill.name}>
                      <div className="skill-bar-header">
                        <span>{skill.name}</span>
                        <span className="skill-level">{skill.level}</span>
                      </div>
                      <div className="skill-track">
                        <div
                          className="skill-fill"
                          style={{ width: `${skill.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {group.tags && (
                <div className="tag-list">
                  {group.tags.map((tag) => (
                    <span className="cv-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}