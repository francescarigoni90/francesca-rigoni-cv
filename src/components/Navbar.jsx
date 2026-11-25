import React, { useContext, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";
import NavbarData from "../data/NavbarData";
import Avatar from "./Avatar";
import Flag from "./Flag";

export default function Navbar() {
  const [language] = useContext(LanguageContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const anchors = [
    "#summary",
    "#skills",
    "#experience",
    "#projects",
    "#education",
    "#certifications",
    "#languages-interests",
  ];

  return (
    <header className="navbar">
      <div className="navbar-left">
        <Avatar />
        <a href="#summary" className="navbar-name">
          Francesca Rigoni
        </a>
      </div>

      <button
        type="button"
        className="navbar-toggle"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle navigation"
      >
        <i className="fa fa-bars" />
      </button>

      <nav className={`navbar-right ${menuOpen ? "open" : ""}`}>
        <ul className="navbar-nav">
          {NavbarData[language].map((label, idx) => (
            <li className="nav-item" key={anchors[idx]}>
              <a
                className="nav-link"
                href={anchors[idx]}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <Flag />
      </nav>
    </header>
  );
}