// src/components/Hero.jsx
import { useEffect, useRef } from "react";
import resume from "../data/resume";
import "./Hero.css";
import "./Deployments.css";
import profileImage from "../assets/profile.jpg";

export default function Hero() {
  const canvasRef = useRef(null);

  // Particle field
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let W, H, particles;

    const resize = () => {
      W = canvas.width  = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };

    const init = () => {
      resize();
      particles = Array.from({ length: 60 }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.5 + 0.1,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(79, 195, 247, ${p.alpha})`;
        ctx.fill();
      });
      // Lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(79, 195, 247, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };

    init();
    draw();
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  const stats = [
    { value: "1+",  label: "Years Experience" },
    { value: "4+",  label: "Projects Shipped" },
    { value: "10+", label: "Tools & Technologies" },
    { value: "3",   label: "Enterprise Clients" },
  ];

  return (
    <section id="hero" className="hero">
      <canvas ref={canvasRef} className="hero__canvas" />
      <div className="hero__glow hero__glow--1" />
      <div className="hero__glow hero__glow--2" />

      <div className="hero__inner">
        <div className="hero__content">
          <div className="hero__eyebrow animate-fadeUp" style={{ animationDelay: "0.1s" }}>
            <span className="hero__status-dot" />
            Available for new opportunities
          </div>

          <h1 className="hero__name animate-fadeUp" style={{ animationDelay: "0.2s" }}>
            <span className="hero__name-first">Harsa Vardan</span>
            <span className="hero__name-last"> A K</span>
          </h1>

          <h2 className="hero__title animate-fadeUp" style={{ animationDelay: "0.3s" }}>
            {resume.title}
          </h2>

          <p className="hero__bio animate-fadeUp" style={{ animationDelay: "0.4s" }}>
            Building enterprise-grade mobile & web applications integrated with
            <span className="hero__highlight"> NetSuite ERP</span>. Specializing in
            <span className="hero__highlight"> secure architectures</span>,
            <span className="hero__highlight"> AI-powered features</span>, and
            cross-platform solutions that scale.
          </p>

          <div className="hero__actions animate-fadeUp" style={{ animationDelay: "0.5s" }}>
            <a href="#projects" className="btn btn--primary">View My Work</a>
            <a href="#contact" className="btn btn--ghost">Get In Touch</a>
          </div>

          <div className="hero__meta animate-fadeUp" style={{ animationDelay: "0.6s" }}>
            <span className="hero__meta-item">📍 {resume.location}</span>
            <span className="hero__meta-sep">·</span>
            <span className="hero__meta-item">🏢 Bonbloc</span>
          </div>

          <div className="hero__deployments animate-fadeUp" style={{ animationDelay: "0.7s" }}>
            <span>Published apps</span>
            <strong>Google Play: TSSF HRMS</strong>
            <strong>App Store: Palmetto</strong>
          </div>
        </div>

        <div className="hero__right animate-fadeUp" style={{ animationDelay: "0.3s" }}>
          <div className="hero__card">
            <div className="hero__avatar">
              <div className="hero__avatar-ring" />
             <div className="hero__avatar-inner">
  <img
    src={profileImage}
    alt="Harsa Vardan A K"
    className="hero__avatar-image"
  />
</div>
            </div>
           <div className="hero__card-badge">
  <span>📱</span> Application Developer
</div>

<div className="hero__card-badge hero__card-badge--2">
  <span>⚡</span> GetX • BLoC • Provider  
</div>

<div className="hero__card-badge hero__card-badge--3">
  <span>🔗</span> REST APIs • NetSuite
</div>
          </div>
        </div>
      </div>

      <div className="hero__stats">
        {stats.map((s, i) => (
          <div key={i} className="hero__stat animate-fadeUp" style={{ animationDelay: `${0.6 + i * 0.1}s` }}>
            <span className="hero__stat-value">{s.value}</span>
            <span className="hero__stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      <a href="#about" className="hero__scroll">
        <span className="hero__scroll-line" />
        <span className="hero__scroll-text">Scroll to explore</span>
      </a>
    </section>
  );
}
