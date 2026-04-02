/* ═══════════════════════════════════════
   HIMANSHU KALA PORTFOLIO — script.js
═══════════════════════════════════════ */

(function () {
  "use strict";

  /* ── Typewriter ─────────────────────── */
  const roles = [
    "AI QA Engineer",
    "LLM Output Validator",
    "Hallucination Hunter",
    "RAG Pipeline Tester",
    "Prompt Test Engineer",
  ];

  const el = document.getElementById("typewriter");
  if (el) {
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isPaused = false;

    function typeLoop() {
      const current = roles[roleIndex];

      if (isDeleting) {
        charIndex--;
        el.textContent = current.slice(0, charIndex);
      } else {
        charIndex++;
        el.textContent = current.slice(0, charIndex);
      }

      if (!isDeleting && charIndex === current.length) {
        if (!isPaused) {
          isPaused = true;
          setTimeout(() => {
            isDeleting = true;
            isPaused = false;
            typeLoop();
          }, 2200);
          return;
        }
      }

      if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }

      const speed = isDeleting ? 55 : charIndex === 0 ? 300 : 90;
      setTimeout(typeLoop, speed);
    }

    setTimeout(typeLoop, 800);
  }

  /* ── Nav: scroll shrink ──────────────── */
  const header = document.getElementById("site-header");
  if (header) {
    window.addEventListener("scroll", () => {
      header.style.background =
        window.scrollY > 40
          ? "rgba(7, 7, 13, 0.96)"
          : "rgba(7, 7, 13, 0.8)";
    }, { passive: true });
  }

  /* ── Mobile nav toggle ───────────────── */
  const toggle = document.getElementById("navToggle");
  const navLinks = document.querySelector(".nav-links");

  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      navLinks.classList.toggle("is-open");
      const isOpen = navLinks.classList.contains("is-open");
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("is-open");
        document.body.style.overflow = "";
      });
    });
  }

  /* ── Smooth active nav highlight ────── */
  const sections = document.querySelectorAll("section[id]");
  const navItems = document.querySelectorAll(".nav-links a");

  if (sections.length && navItems.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            navItems.forEach((a) => {
              a.style.color = a.getAttribute("href")?.includes(id)
                ? "var(--cyan)"
                : "";
            });
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
  }

  /* ── Fade-in on scroll ───────────────── */
  const fadeEls = document.querySelectorAll(
    ".skill-group, .project-card, .post-row, .contact-link, .stat"
  );

  if ("IntersectionObserver" in window && fadeEls.length) {
    fadeEls.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    });

    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.style.opacity = "1";
              entry.target.style.transform = "translateY(0)";
            }, 60 * (i % 6));
            fadeObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    fadeEls.forEach((el) => fadeObserver.observe(el));
  }

})();
