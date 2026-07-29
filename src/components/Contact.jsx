// src/components/Contact.jsx
import resume from "../data/resume";
import "./Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useEffect } from "react";

export default function Contact() {
  const form = useRef();


useEffect(() => {
  emailjs.init("0vfRq1RVOMhKO_NhK");
}, []);
const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_zm6eqcu",
      "template_o2tpso8",
      form.current
    )
    .then(() => {
      alert("Message sent successfully!");
      form.current.reset();
    })
    .catch((error) => {
      console.log(error);
      alert(error.text);
    });
};
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

  <h2 className="section-title">
    Let's Build <br />
    <em>Something Great</em>
  </h2>

  <p className="contact__text">
    Thank you for visiting my portfolio. I'm a Flutter Developer passionate
    about building high-performance mobile and desktop applications with
    clean architecture, intuitive user experiences, and seamless API
    integrations.
  </p>

  <p className="contact__text">
    Whether you're looking for a Flutter Developer, need assistance with an
    existing project, or would like to discuss a new opportunity, I'd be
    happy to connect. Feel free to use the contact form, and I'll respond as
    soon as possible.
  </p>

  <div className="contact__availability">
    <span className="contact__status"></span>
    <span>Available for Full-Time Opportunities & Freelance Projects</span>
  </div>
</div>

       <div className="contact__right">

<form
    ref={form}
    onSubmit={sendEmail}
    className="contact__form"
>

<div className="form__group">
<input
type="text"
name="user_name"
placeholder="Your Name"
required
/>
</div>

<div className="form__group">
<input
type="email"
name="user_email"
placeholder="Your Email"
required
/>
</div>

<div className="form__group">
<input
type="text"
name="subject"
placeholder="Subject"
required
/>
</div>

<div className="form__group">
<textarea
name="message"
rows="6"
placeholder="Write your message..."
required
/>
</div>

<button
type="submit"
className="btn btn--primary contact__cta"
>
Send Message →
</button>

</form>

</div>
        </div>
      </div>
    </section>
  );
}
