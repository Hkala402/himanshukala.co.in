/* ═══════════════════════════════════════
   HIMANSHU KALA — script.js
═══════════════════════════════════════ */

(function () {
  "use strict";

  /* Typewriter */
  const roles = ["AI QA Engineer","LLM Output Validator","Hallucination Hunter","RAG Pipeline Tester","Prompt Test Engineer","AI Safety Evaluator"];
  const el = document.getElementById("typewriter");
  if (el) {
    let roleIndex = 0, charIndex = 0, isDeleting = false, isPaused = false;
    function typeLoop() {
      const current = roles[roleIndex];
      el.textContent = isDeleting ? current.slice(0, --charIndex) : current.slice(0, ++charIndex);
      if (!isDeleting && charIndex === current.length) {
        if (!isPaused) { isPaused = true; setTimeout(() => { isDeleting = true; isPaused = false; typeLoop(); }, 2200); return; }
      }
      if (isDeleting && charIndex === 0) { isDeleting = false; roleIndex = (roleIndex + 1) % roles.length; }
      setTimeout(typeLoop, isDeleting ? 50 : charIndex === 0 ? 300 : 85);
    }
    setTimeout(typeLoop, 900);
  }

  /* Nav scroll */
  const header = document.getElementById("site-header");
  if (header) {
    window.addEventListener("scroll", () => {
      header.style.background = window.scrollY > 40 ? "rgba(7,7,13,0.97)" : "rgba(7,7,13,0.88)";
    }, { passive: true });
  }

  /* Mobile nav */
  const toggle = document.getElementById("navToggle");
  const navLinks = document.querySelector(".nav-links");
  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      navLinks.classList.toggle("is-open");
      toggle.classList.toggle("is-active");
      document.body.style.overflow = navLinks.classList.contains("is-open") ? "hidden" : "";
    });
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("is-open");
        toggle.classList.remove("is-active");
        document.body.style.overflow = "";
      });
    });
    document.addEventListener("click", e => {
      if (!navLinks.contains(e.target) && !toggle.contains(e.target)) {
        navLinks.classList.remove("is-open");
        toggle.classList.remove("is-active");
        document.body.style.overflow = "";
      }
    });
  }

  /* Active nav highlight */
  const sections = document.querySelectorAll("section[id]");
  const navItems = document.querySelectorAll(".nav-links a");
  if (sections.length && navItems.length) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navItems.forEach(a => { a.style.color = a.getAttribute("href")?.includes(id) ? "var(--cyan)" : ""; });
        }
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    sections.forEach(s => obs.observe(s));
  }

  /* Fade-in */
  const fadeEls = document.querySelectorAll(".skill-group,.project-card,.contact-link,.stat,.ach-card,.edu-card,.exp-item");
  if ("IntersectionObserver" in window && fadeEls.length) {
    fadeEls.forEach(el => { el.style.opacity="0"; el.style.transform="translateY(18px)"; el.style.transition="opacity 0.5s ease,transform 0.5s ease"; });
    const fadeObs = new IntersectionObserver(entries => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => { entry.target.style.opacity="1"; entry.target.style.transform="translateY(0)"; }, 60*(i%5));
          fadeObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    fadeEls.forEach(el => fadeObs.observe(el));
  }

  /* PDF opener helper */
  function openPDF(b64) {
    if (!b64) return;
    const binary = atob(b64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
    window.open(URL.createObjectURL(new Blob([bytes], { type: "application/pdf" })), "_blank");
  }

  window.openCert = function () {
    const el = document.getElementById("cert-data");
    if (el) openPDF(el.dataset.b64);
  };

  window.openResume = function () {
    const el = document.getElementById("resume-data");
    if (el) openPDF(el.dataset.b64);
  };

})();
