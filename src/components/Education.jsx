// src/components/Education.jsx
import resume from "../data/resume";
import "./Education.css";

export default function Education() {
  return (
    <section id="education" className="education section">
      <div className="section__inner">
        <div className="edu__grid">

          {/* Education */}
          <div>
            <p className="section-label">Academic</p>
            <h2 className="section-title" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>Education</h2>

            <div className="edu__list">
              {resume.education.map((e, i) => (
                <div key={i} className="edu__card">
                  <div className="edu__card-accent" />
                  <div className="edu__card-body">
                    <div className="edu__period">{e.period}</div>
                    <h3 className="edu__degree">{e.degree}</h3>
                    <p className="edu__institution">{e.institution}</p>
                    <p className="edu__location">{e.location}</p>
                    <div className="edu__cgpa">
                      <span className="edu__cgpa-label">CGPA</span>
                      <span className="edu__cgpa-value">{e.cgpa}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <p className="section-label">Achievements</p>
            <h2 className="section-title" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>Certifications</h2>

            <div className="cert__list">
              {resume.certifications.map((c, i) => (
                <div key={i} className="cert__card">
                  <div className="cert__icon">🏅</div>
                  <div className="cert__body">
                    <h4 className="cert__name">{c.name}</h4>
                    <p className="cert__issuer">{c.issuer}</p>
                    <p className="cert__detail">{c.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
