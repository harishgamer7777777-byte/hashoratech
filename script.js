
/* =====================================
   HASHORATECH
   Website Interactions
===================================== */

// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    menuToggle.textContent =
      navLinks.classList.contains("active") ? "✕" : "☰";
  });

  // Close menu after clicking a navigation link
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.textContent = "☰";
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", event => {
    if (
      !navLinks.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      navLinks.classList.remove("active");
      menuToggle.textContent = "☰";
    }
  });
}

// AUTOMATIC COPYRIGHT YEAR

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// SMOOTH SCROLLING

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

// REVEAL ANIMATIONS

const revealElements = document.querySelectorAll(
  ".service-card, .project-card, .price-card, .about-content"
);

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    entries => {
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
    observer.observe(element);
  });
} else {
  revealElements.forEach(element => {
    element.classList.add("visible");
  });
}

// CURRENT YEAR LOG
console.log(
  "%c HASHORATECH ",
  "background:#2563eb;color:white;padding:8px;font-weight:bold;"
);

console.log("Innovate. Design. Dominate.");
console.log("Welcome to HASHORATECH!");
