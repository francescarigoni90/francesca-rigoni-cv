import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import PortfolioData from "../data/PortfolioData";

export default function LanguagesInterests() {
  const [language] = useContext(LanguageContext);
  const data = PortfolioData[language];

  return (
    <section id="languages-interests" className="cv-section">
      <div className="section-container">
        <div className="cards-grid two-col">
          <div className="cv-card">
            <h2 className="section-heading left">{data.languagesTitle}</h2>
            <div className="skill-bars">
              {data.languages.map((lang) => (
                <div className="skill-bar-row" key={lang.name}>
                  <div className="skill-bar-header">
                    <strong>{lang.name}</strong>
                    <span className="skill-level">{lang.level}</span>
                  </div>
                  <div className="skill-track">
                    <div
                      className="skill-fill"
                      style={{ width: `${lang.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="citizenship-box">
              <i className="fa fa-id-card-o" /> {data.citizenshipNote}
            </p>
          </div>

          <div className="cv-card">
            <h2 className="section-heading left">{data.interestsTitle}</h2>
            <ul className="interests-list">
              {data.interests.map((item) => (
                <li key={item.label}>
                  <i className={`fa ${item.icon} interest-icon`} />
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}