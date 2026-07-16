// src/components/Skills.jsx
import resume from "../data/resume";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="skills section section--alt">
      <div className="section__inner">
        <p className="section-label">Expertise</p>
        <h2 className="section-title">Technical Skills</h2>
        <p className="skills__intro">
          A full-stack toolkit built around enterprise mobile development, ERP integration, and secure application architecture.
        </p>

        <div className="skills__grid">
          {resume.skills.map((group, i) => (
            <div key={i} className="skill-group">
              <div className="skill-group__header">
                <span className="skill-group__icon">{group.icon}</span>
                <h3 className="skill-group__name">{group.category}</h3>
              </div>
              <div className="skill-group__items">
                {group.items.map((item, j) => (
                  <span key={j} className="skill-pill">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
