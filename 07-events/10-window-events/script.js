// wait for the entire page to load including all resources
window.addEventListener("load", () => console.log("Page Loaded"));

// On DOM Load - runs as soon as the DOM is parsed
window.addEventListener("DOMContentLoaded", () => console.log("DOM Loaded"));

console.log("Run me");

window.addEventListener("resize", () => {
  document.querySelector(
    "h1"
  ).innerText = `Resize to ${window.innerWidth}X${window.innerHeight}`;
});
