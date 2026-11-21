
/* ==========================================
   HASHORATECH
   PREMIUM WEBSITE INTERACTIONS
   Innovate. Design. Dominate.
========================================== */

document.addEventListener("DOMContentLoaded", () => {

  // 1. MOBILE NAVIGATION

  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("active");

      menuToggle.textContent = isOpen ? "✕" : "☰";
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.querySelectorAll("a").forEach(link => {

      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
      });

    });

    document.addEventListener("click", event => {

      if (
        !navLinks.contains(event.target) &&
        !menuToggle.contains(event.target)
      ) {
        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
      }

    });

  }


  // 2. ACTIVE NAVIGATION HIGHLIGHT

  const sections = document.querySelectorAll("main section[id]");
  const navigationLinks = document.querySelectorAll(
    '.nav-links a[href^="#"]'
  );

  if ("IntersectionObserver" in window) {

    const sectionObserver = new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            const currentId = entry.target.id;

            navigationLinks.forEach(link => {

              link.classList.toggle(
                "active",
                link.getAttribute("href") === `#${currentId}`
              );

            });

          }

        });

      },
      {
        rootMargin: "-25% 0px -65% 0px",
        threshold: 0
      }
    );

    sections.forEach(section => {
      sectionObserver.observe(section);
    });

  }


  // 3. SMOOTH SCROLLING

  document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", event => {

      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (target) {

        event.preventDefault();

        target.scrollIntoView({
          behavior: window.matchMedia(
            "(prefers-reduced-motion: reduce)"
          ).matches ? "auto" : "smooth",
          block: "start"
        });

      }

    });

  });


  // 4. SCROLL REVEAL ANIMATIONS

  const revealElements = document.querySelectorAll(
    ".service-card, " +
    ".project-card, " +
    ".demo-card, " +
    ".price-card, " +
    ".about-text, " +
    ".about-photo, " +
    ".photo-gallery figure, " +
    ".contact-item"
  );

  if (
    "IntersectionObserver" in window &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add("visible");
            observer.unobserve(entry.target);

          }

        });

      },
      {
        threshold: 0.12
      }
    );

    revealElements.forEach(element => {

      element.classList.add("reveal");
      revealObserver.observe(element);

    });

  } else {

    revealElements.forEach(element => {
      element.classList.add("visible");
    });

  }


  // 5. AUTOMATIC COPYRIGHT YEAR

  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }


  // 6. IMAGE ERROR HANDLING

  document.querySelectorAll("img").forEach(img => {

    img.addEventListener("error", () => {

      img.classList.add("image-error");
      console.warn("Image could not load:", img.getAttribute("src"));

    });

  });


  // 7. CONSOLE BRANDING

  console.log(
    "%c HASHORATECH ",
    "background:#b18a4d;color:white;padding:12px 20px;font-size:18px;font-weight:bold;"
  );

  console.log(
    "%c Innovate. Design. Dominate. ",
    "color:#a77b39;font-size:13px;font-style:italic;"
  );

  console.log("Welcome to HASHORATECH!");

});
