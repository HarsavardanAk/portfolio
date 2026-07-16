// src/components/Footer.jsx
import resume from "../data/resume";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__left">
          <div className="footer__brand">
            <span className="footer__initials">HV</span>
            <span className="footer__name">Harsa Vardan A K</span>
          </div>
          <p className="footer__role">{resume.title}</p>
        </div>

        <div className="footer__links">
          {["#about","#experience","#projects","#skills","#education","#contact"].map(h => (
            <a key={h} href={h} className="footer__link">
              {h.replace("#","")}
            </a>
          ))}
        </div>

        <div className="footer__right">
          <a href={resume.linkedinUrl} target="_blank" rel="noreferrer" className="footer__social">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
          <a href={`mailto:${resume.email}`} className="footer__social">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="M22 4l-10 9L2 4"/>
            </svg>
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} Harsa Vardan A K · All rights reserved</span>
        <span>Built with React</span>
      </div>
    </footer>
  );
}
