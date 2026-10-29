import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { personalInfo } from "../data/personalInfo.js";

const links = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Education", "#education"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <nav className="nav-shell container" aria-label="Main navigation">
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Shivashankar KV, home">
          <span className="wordmark-mark">S<span>.</span></span>
          <span className="wordmark-name">Shivashankar KV</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <div
          className={`nav-content${menuOpen ? " nav-content-open" : ""}`}
          id="primary-navigation"
        >
          <div className="nav-links">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={closeMenu}>
                {label}
              </a>
            ))}
          </div>
          {personalInfo.resumeUrl && (
            <a className="button button-outline nav-resume" href={personalInfo.resumeUrl} target="_blank" rel="noreferrer">
              View resume <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          )}
        </div>
      </nav>
    </header>
  );
}
