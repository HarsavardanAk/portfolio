// src/components/About.jsx
import resume from "../data/resume";
import "./About.css";

export default function About() {
  const highlights = [
   { icon: "↗", label: "App Publishing", value: "Google Play & App Store" },
   { icon: "📱", label: "Flutter Development", value: "Mobile & Desktop Apps" },
{ icon: "⚙️", label: "State Management",   value: "GetX • BLoC • Provider" },
{ icon: "🔗", label: "API & ERP",          value: "REST APIs • NetSuite" },
{ icon: "☁️", label: "Backend Services",   value: "Firebase Integration" },
  ];

  return (
    <section id="about" className="about section">
      <div className="section__inner">
        <div className="about__grid">
          <div className="about__left">
            <p className="section-label">About Me</p>
            <h2 className="section-title">Crafting Enterprise<br /><em>Solutions that Scale</em></h2>
            <p className="about__text">{resume.summary}</p>
            <div className="about__links">
              <a href={resume.linkedinUrl} target="_blank" rel="noreferrer" className="about__link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                LinkedIn
              </a>
              <a href={`mailto:${resume.email}`} className="about__link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4l-10 9L2 4"/></svg>
                {resume.email}
              </a>
            </div>
          </div>

          <div className="about__right">
            <div className="about__highlights">
              {highlights.map((h, i) => (
                <div key={i} className="about__highlight-card">
                  <span className="about__highlight-icon">{h.icon}</span>
                  <div>
                    <div className="about__highlight-value">{h.value}</div>
                    <div className="about__highlight-label">{h.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="about__lang-box">
              <p className="about__lang-title">Languages</p>
              <div className="about__lang-list">
                {resume.languages.map((l, i) => (
                  <span key={i} className="tag">{l}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
