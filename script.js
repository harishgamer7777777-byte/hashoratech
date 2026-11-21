
// =====================================
// HASHORATECH INTERACTIVE WEBSITE
// =====================================

document.addEventListener("DOMContentLoaded", function () {

  // MOBILE NAVIGATION
  const menuToggle = document.getElementById("menuToggle");
  const siteNav = document.getElementById("siteNav");

  if (menuToggle && siteNav) {
    menuToggle.addEventListener("click", function () {
      siteNav.classList.toggle("active");
      menuToggle.classList.toggle("active");
    });

    siteNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        siteNav.classList.remove("active");
        menuToggle.classList.remove("active");
      });
    });
  }

  // HEADER SCROLL EFFECT
  const header = document.querySelector(".site-header");

  function updateHeader() {
    if (header) {
      header.classList.toggle("scrolled", window.scrollY > 40);
    }
  }

  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();

  // SCROLL REVEAL ANIMATION
  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12
    });

    revealElements.forEach(function (element) {
      revealObserver.observe(element);
    });
  } else {
    revealElements.forEach(function (element) {
      element.classList.add("visible");
    });
  }

  // ANIMATE HEADINGS ON SCROLL
  const headings = document.querySelectorAll(
    "main h1, main h2, main h3"
  );

  headings.forEach(function (heading) {
    heading.classList.add("heading-ready");
  });

  if ("IntersectionObserver" in window) {
    const headingObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("heading-visible");
          headingObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15
    });

    headings.forEach(function (heading) {
      headingObserver.observe(heading);
    });
  } else {
    headings.forEach(function (heading) {
      heading.classList.add("heading-visible");
    });
  }

  // CURRENT YEAR
  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // IMAGE ERROR HANDLING
  document.querySelectorAll("img").forEach(function (image) {
    image.addEventListener("error", function () {
      console.warn("Image could not be loaded:", image.src);
    });
  });

});
