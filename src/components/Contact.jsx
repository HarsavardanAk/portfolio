// src/components/Contact.jsx
import resume from "../data/resume";
import "./Contact.css";

export default function Contact() {
  const items = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4l-10 9L2 4"/>
        </svg>
      ),
      label: "Email",
      value: resume.email,
      href: `mailto:${resume.email}`,
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
        </svg>
      ),
      label: "Phone",
      value: resume.phone,
      href: `tel:${resume.phone}`,
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
        </svg>
      ),
      label: "LinkedIn",
      value: resume.linkedin,
      href: resume.linkedinUrl,
    },        
    {
      icon: <span style={{ fontSize: "1.2rem" }}>📍</span>,
      label: "Location",
      value: resume.location,
      href: null,
    },
  ];

  return (
    <section id="contact" className="contact section section--alt">
      <div className="section__inner">
        <div className="contact__grid">
          <div className="contact__left">
            <p className="section-label">Get In Touch</p>
            <h2 className="section-title">Let's Work<br /><em>Together</em></h2>
            <p className="contact__text">
              I'm currently open to new opportunities. Whether you have a project, a question, or just want to connect — my inbox is always open.
            </p>
            <a href={`mailto:${resume.email}`} className="btn btn--primary contact__cta">
              Send a Message →
            </a>
          </div>

          <div className="contact__right">
            {items.map((item, i) => (
              <div key={i} className="contact__item">
                <div className="contact__icon">{item.icon}</div>
                <div className="contact__item-body">
                  <span className="contact__item-label">{item.label}</span>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="contact__item-value contact__item-value--link">
                      {item.value}
                    </a>
                  ) : (
                    <span className="contact__item-value">{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
