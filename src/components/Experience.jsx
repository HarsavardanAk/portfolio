// src/components/Experience.jsx
import resume from "../data/resume";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="experience section section--alt">
      <div className="section__inner">
        <p className="section-label">Career</p>
        <h2 className="section-title">Work Experience</h2>

        <div className="exp__timeline">
          {resume.experience.map((job, idx) => (
            <div key={job.id} className="exp__item">
              <div className="exp__marker">
                <div className="exp__dot" />
                {idx < resume.experience.length - 1 && <div className="exp__line" />}
              </div>

              <div className="exp__card">
                <div className="exp__card-top">
                  <div className="exp__card-left">
                    <span className="exp__type-badge">{job.type}</span>
                    <h3 className="exp__role">{job.role}</h3>
                    <div className="exp__company-row">
                      <span className="exp__company">{job.company}</span>
                      <span className="exp__sep">·</span>
                      <span className="exp__location">{job.location}</span>
                    </div>
                  </div>
                  <div className="exp__period">{job.period}</div>
                </div>

                <ul className="exp__bullets">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="exp__bullet">
                      <span className="exp__bullet-dot" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
