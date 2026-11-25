import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import SummaryData from "../data/SummaryData";
import profile from "../images/profile.jpeg";

export default function Summary() {
  const [language] = useContext(LanguageContext);
  const content = SummaryData[language];
  const pdfFileName =
    language === "IT"
      ? "Francesca_Rigoni_CV_IT.pdf"
      : "Francesca_Rigoni_CV_EN.pdf";
  const pdfUrl = `${process.env.PUBLIC_URL}/${pdfFileName}`;

  return (
    <section id="summary" className="summary-section">
      <div className="cv-hero">
        <div className="cv-icon-wrap" aria-hidden="true">
          <i className="fa fa-file-text-o cv-hero-icon" />
        </div>
        <h1 className="hero-title">{content.name}</h1>
        <p className="hero-role">
          {content.role} · <span className="citizenship-tag">{content.citizenships}</span>
        </p>

        <a
          href={pdfUrl}
          download={pdfFileName}
          className="cv-download-btn"
        >
          {content.downloadBtn}
        </a>
      </div>

      <div className="summary-grid">
        <div className="profile-photo-wrap">
          <img
            src={profile}
            alt="Francesca Rigoni"
            className="profile-photo"
          />
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
            <a href={content.locationUrl} target="_blank" rel="noreferrer">
              {content.location}
            </a>
          </li>
          <li>
            <i className="fa fa-calendar profile-icon" />
            <span>{content.dob}</span>
          </li>
        </ul>
      </div>

      <p className="bio-text">{content.bio}</p>
    </section>
  );
}