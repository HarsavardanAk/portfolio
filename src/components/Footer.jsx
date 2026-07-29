// src/components/Footer.jsx
import resume from "../data/resume";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">

        {/* Left */}

        <div className="footer__left">

          <div className="footer__brand">
            <span className="footer__initials">HV</span>

            <div>
              <h3 className="footer__name">
                Harsa Vardan A K
              </h3>

              <p className="footer__role">
                Flutter Developer
              </p>
            </div>
          </div>

          <p className="footer__description">
            Passionate about developing scalable Flutter applications,
            seamless REST API integrations, and intuitive user experiences
            for mobile and desktop platforms.
          </p>

        </div>

        {/* Center */}

        <div className="footer__center">

          <h4>Quick Links</h4>

          <div className="footer__links">
            {[
              "#about",
              "#experience",
              "#projects",
              "#skills",
              "#education",
              "#contact",
            ].map((h) => (
              <a key={h} href={h} className="footer__link">
                {h.replace("#", "")}
              </a>
            ))}
          </div>

        </div>

        {/* Right */}

        <div className="footer__right">

          <h4>Connect</h4>

          <div className="footer__socials">

            <a
              href={resume.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="footer__social"
            >
              LinkedIn
            </a>

            {resume.githubUrl && (
              <a
                href={resume.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="footer__social"
              >
                GitHub
              </a>
            )}

            <a
              href={`mailto:${resume.email}`}
              className="footer__social"
            >
              Email
            </a>

          </div>

          <a href="#hero" className="footer__top">
            ↑ Back to Top
          </a>

        </div>

      </div>

      <div className="footer__bottom">

        <span>
          © {new Date().getFullYear()} Harsa Vardan A K. All Rights Reserved.
        </span>

        

      </div>
    </footer>
  );
}