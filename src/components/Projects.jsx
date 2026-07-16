// src/components/Projects.jsx
import { useState } from "react";
import resume from "../data/resume";
import "./Projects.css";

const categories = ["All", "Enterprise", "Full-Stack", "Web"];

export default function Projects() {
  const [active, setActive] = useState("All");
  const [expanded, setExpanded] = useState(null);

  const filtered = active === "All"
    ? resume.projects
    : resume.projects.filter(p => p.category === active);

  return (
    <section id="projects" className="projects section">
      <div className="section__inner">
        <p className="section-label">Work</p>
        <h2 className="section-title">Featured Projects</h2>

        <div className="projects__filters">
          {categories.map(c => (
            <button
              key={c}
              className={`projects__filter ${active === c ? "active" : ""}`}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {filtered.map((project) => (
            <div
              key={project.id}
              className={`project-card ${expanded === project.id ? "project-card--expanded" : ""}`}
              style={{ "--card-accent": project.color }}
            >
              <div className="project-card__top">
                <div className="project-card__header">
                  <span className="project-card__category">{project.category}</span>
                  <span className="project-card__period">{project.period}</span>
                </div>
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__subtitle">{project.subtitle}</p>
                <p className="project-card__desc">{project.description}</p>
              </div>

              <div className="project-card__tags">
                {project.tags.map((t, i) => (
                  <span key={i} className="tag">{t}</span>
                ))}
              </div>

              {expanded === project.id && (
                <ul className="project-card__bullets">
                  {project.bullets.map((b, i) => (
                    <li key={i} className="project-card__bullet">
                      <span className="project-card__bullet-icon">▸</span>
                      {b}
                    </li>
                  ))}
                </ul>
              )}

              <div className="project-card__footer">
                <span className="project-card__company">@ {project.company}</span>
                <button
                  className="project-card__toggle"
                  onClick={() => setExpanded(expanded === project.id ? null : project.id)}
                >
                  {expanded === project.id ? "Show Less ↑" : "Details ↓"}
                </button>
              </div>

              <div className="project-card__glow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
