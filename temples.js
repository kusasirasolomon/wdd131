document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  const lastModifiedSpan = document.getElementById("lastModified");
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");

  // Footer Info
  yearSpan.textContent = new Date().getFullYear();
  lastModifiedSpan.textContent = document.lastModified;

  // Hamburger Toggle
  hamburger.addEventListener("click", () => {
    const isVisible = navMenu.style.display === "flex";
    navMenu.style.display = isVisible ? "none" : "flex";
    hamburger.textContent = isVisible ? "☰" : "✖";
  });
});
