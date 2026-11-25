import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import SummaryData from "../data/SummaryData";

export default function Summary() {
  const [language] = useContext(LanguageContext);
  const content = SummaryData[language];

  return (
    <section id="summary" className="summary-section">
      <div className="cv-hero">
        <div className="cv-icon-wrap" aria-hidden="true">
          <i className="fa fa-file-text-o cv-hero-icon" />
        </div>
        <h1 className="hero-title">{content.name}</h1>
        <p className="hero-role">{content.role}</p>
        <button
          type="button"
          className="cv-download-btn"
          onClick={() => alert("Add your PDF file in src/assets/ to enable CV download.")}
        >
          {content.downloadBtn}
        </button>
      </div>

      <div className="summary-grid">
        <div className="media-placeholder">
          <i className="fa fa-user-circle-o media-placeholder-icon" />
          <p>{content.placeholderNote}</p>
        </div>

        <ul className="info-list">
          <li>
            <i className="fa fa-phone profile-icon" />
            <span>{content.phone}</span>
          </li>
          <li>
            <i className="fa fa-envelope profile-icon" />
            <a href={`mailto:${content.email}`}>{content.email}</a>
          </li>
          <li>
            <i className="fa fa-linkedin profile-icon" />
            <a href={content.linkedinUrl} target="_blank" rel="noreferrer">
              {content.linkedinLabel}
            </a>
          </li>
          <li>
            <i className="fa fa-github profile-icon" />
            <a href={content.githubUrl} target="_blank" rel="noreferrer">
              {content.githubLabel}
            </a>
          </li>
          <li>
            <i className="fa fa-map-marker profile-icon" />
            <span>{content.location}</span>
          </li>
        </ul>
      </div>

      <p className="bio-text">{content.bio}</p>
    </section>
  );
}