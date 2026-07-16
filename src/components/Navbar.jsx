// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import "./Navbar.css";

const links = [
  { label: "About",       href: "#about" },
  { label: "Experience",  href: "#experience" },
  { label: "Projects",    href: "#projects" },
  { label: "Skills",      href: "#skills" },
  { label: "Education",   href: "#education" },
  { label: "Contact",     href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active,   setActive]   = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = links.map(l => document.querySelector(l.href));
      sections.forEach((sec) => {
        if (!sec) return;
        const rect = sec.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) setActive("#" + sec.id);
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <a href="#hero" className="navbar__brand">
          <span className="navbar__brand-initials">HV</span>
          <span className="navbar__brand-name">Harsa Vardan</span>
        </a>

        <ul className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`navbar__link ${active === l.href ? "navbar__link--active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="mailto:harsavardanharsa@gmail.com" className="navbar__cta">
          Hire Me
        </a>

        <button className={`navbar__burger ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
