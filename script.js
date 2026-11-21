
/* =========================================
   HASHORATECH — MAIN JAVASCRIPT
   Innovate. Design. Dominate.
========================================= */

document.addEventListener("DOMContentLoaded", () => {

  // 1. Smooth scrolling for same-page links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });


  // 2. Highlight the current navigation page
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".nav-links a").forEach(link => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });


  // 3. Reveal sections when they enter the screen
  const revealElements = document.querySelectorAll(
    ".service-card, .price-card, .portfolio-card, .contact-detail, .cta"
  );

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12
    });

    revealElements.forEach(element => {
      element.classList.add("reveal");
      revealObserver.observe(element);
    });
  }


  // 4. Footer copyright year
  document.querySelectorAll(".copyright").forEach(element => {
    element.textContent = element.textContent.replace(
      /©\s*\d{4}/,
      "© " + new Date().getFullYear()
    );
  });


  // 5. Prevent accidental empty placeholder links
  document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
    });
  });


  // 6. Add a small scroll shadow to the navigation
  const navbar = document.querySelector(".navbar");

  if (navbar) {
    const updateNavbar = () => {
      navbar.classList.toggle("scrolled", window.scrollY > 20);
    };

    updateNavbar();
    window.addEventListener("scroll", updateNavbar, { passive: true });
  }

});
