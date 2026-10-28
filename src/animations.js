// src/animations.js
// Attaches scroll-reveal and scroll-progress behaviour by class name, so no
// component markup or logic needs to change. Re-scans on DOM changes so
// re-rendered items (e.g. filtered project cards) animate in too.

const REVEAL_TARGETS = [
  [".section-label", "up"],
  [".section-title", "up"],
  [".skills__intro", "up"],
  [".about__text", "up"],
  [".about__highlight-card", "scale"],
  [".about__lang-box", "up"],
  [".about__links", "up"],
  [".exp__item", "left"],
  [".projects__filters", "up"],
  [".project-card", "scale"],
  [".skill-group", "up"],
  [".edu__card", "up"],
  [".cert__card", "up"],
  [".contact__left", "left"],
  [".contact__right", "right"],
  [".footer__top", "up"],
];

const STAGGER = 0.08;
const MAX_STAGGER = 0.48;

export function initAnimations() {
  if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  document.documentElement.classList.add("js-anim");

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.setAttribute("data-revealed", "");
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  const scan = () => {
    REVEAL_TARGETS.forEach(([selector, direction]) => {
      document.querySelectorAll(selector).forEach((el) => {
        if (el.hasAttribute("data-reveal")) return;
        el.setAttribute("data-reveal", direction);
        const siblings = el.parentElement
          ? Array.from(el.parentElement.children).filter((c) => c.matches(selector))
          : [el];
        const delay = Math.min(siblings.indexOf(el) * STAGGER, MAX_STAGGER);
        el.style.setProperty("--reveal-delay", `${delay}s`);
        io.observe(el);
      });
    });
  };

  let scheduled = false;
  const scheduleScan = () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      scan();
    });
  };

  const bar = document.createElement("div");
  bar.className = "scroll-progress";
  bar.setAttribute("aria-hidden", "true");
  document.body.appendChild(bar);

  const updateProgress = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const progress = max > 0 ? window.scrollY / max : 0;
    bar.style.setProperty("--scroll-progress", progress.toFixed(4));
  };
  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);

  const start = () => {
    scan();
    updateProgress();
    new MutationObserver(scheduleScan).observe(document.getElementById("root") || document.body, {
      childList: true,
      subtree: true,
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    requestAnimationFrame(start);
  }
}
