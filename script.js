
/* ============================================
   HASHORATECH — INTERACTIVE WEBSITE ENGINE
   Innovate. Design. Dominate.
============================================ */

document.addEventListener("DOMContentLoaded", () => {

  /* 1. MOBILE NAVIGATION */

  const menuToggle = document.getElementById("menuToggle");
  const siteNav = document.getElementById("siteNav");

  if (menuToggle && siteNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = siteNav.classList.toggle("open");

      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    // Close menu after selecting a page
    siteNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        siteNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
      });
    });

    // Close menu with Escape key
    document.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        siteNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
      }
    });
  }


  /* 2. ACTIVE NAVIGATION LINK */

  const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".site-nav a").forEach(link => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });


  /* 3. NAVBAR SCROLL EFFECT */

  const header = document.querySelector(".site-header");

  function updateHeader() {
    if (header) {
      header.classList.toggle("scrolled", window.scrollY > 30);
    }
  }

  updateHeader();

  window.addEventListener("scroll", updateHeader, {
    passive: true
  });


  /* 4. SCROLL REVEAL ANIMATIONS */

  const revealItems = document.querySelectorAll(
    ".service-row, .services-intro, .services-cta, " +
    ".service-card, .price-card, .portfolio-card, " +
    ".contact-form-card, .contact-detail, .about-section"
  );

  if ("IntersectionObserver" in window) {

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
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
      }
    );

    revealItems.forEach(item => {
      item.classList.add("reveal");
      revealObserver.observe(item);
    });

  } else {
    revealItems.forEach(item => {
      item.classList.add("visible");
    });
  }


  /* 5. SMOOTH INTERNAL NAVIGATION */

  document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", event => {

      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") {
        event.preventDefault();
        return;
      }

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


  /* 6. AUTOMATIC COPYRIGHT YEAR */

  document.querySelectorAll("#year").forEach(element => {
    element.textContent = new Date().getFullYear();
  });

  document.querySelectorAll(".copyright").forEach(element => {
    element.textContent = element.textContent.replace(
      /©\s*\d{4}/,
      "© " + new Date().getFullYear()
    );
  });


  /* 7. BUTTON INTERACTION */

  document.querySelectorAll(".big-cta, .service-arrow").forEach(button => {

    button.addEventListener("mouseenter", () => {
      button.classList.add("hovered");
    });

    button.addEventListener("mouseleave", () => {
      button.classList.remove("hovered");
    });

  });


  /* 8. IMAGE LOADING SUPPORT */

  document.querySelectorAll("img").forEach(img => {

    img.addEventListener("error", () => {
      img.classList.add("image-error");
      console.warn("Image could not load:", img.src);
    });

  });


  /* 9. PAGE READY */

  document.body.classList.add("page-ready");

  console.log("HASHORATECH website initialized successfully.");

});
