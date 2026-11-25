import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export default function Flag() {
  const [language, setLanguage] = useContext(LanguageContext);

  return (
    <div className="flag-group">
      <button
        type="button"
        className={`flag-btn ${language === "UK" ? "active" : ""}`}
        onClick={() => setLanguage("UK")}
        title="English"
        aria-label="Switch to English"
      >
        <svg viewBox="0 0 60 30" width="28" height="16">
          <clipPath id="s"><path d="M0,0 v30 h60 v-30 z" /></clipPath>
          <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
          <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#s)" stroke="#C8102E" strokeWidth="4" />
          <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
          <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
        </svg>
      </button>

      <button
        type="button"
        className={`flag-btn ${language === "IT" ? "active" : ""}`}
        onClick={() => setLanguage("IT")}
        title="Italiano"
        aria-label="Passa all'italiano"
      >
        <svg viewBox="0 0 3 2" width="28" height="16">
          <rect width="1" height="2" x="0" fill="#009246" />
          <rect width="1" height="2" x="1" fill="#ffffff" />
          <rect width="1" height="2" x="2" fill="#ce2b37" />
        </svg>
      </button>
    </div>
  );
}