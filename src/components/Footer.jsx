import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import SummaryData from "../data/SummaryData";

export default function Footer() {
  const [language] = useContext(LanguageContext);
  const content = SummaryData[language];
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-links">
        <a href={`mailto:${content.email}`} aria-label="Email">
          <i className="fa fa-envelope footer-symbol" />
        </a>
        <a href={content.linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <i className="fa fa-linkedin footer-symbol" />
        </a>
        <a href={content.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub">
          <i className="fa fa-github footer-symbol" />
        </a>
      </div>
      <p className="footer-copy">© {year} Francesca Rigoni</p>
    </footer>
  );
}