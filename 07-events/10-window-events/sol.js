// On Page Load- old school if JS in head with out defer
// window.onload = function () {
//   document.querySelector('h1').textContent = 'Hello World';
// };
// wait for the entire page to load including all resources
window.addEventListener("load", () => console.log("Page Loaded"));

// On DOM Load - runs as soon as the DOM is parsed
window.addEventListener("DOMContentLoaded", () => console.log("DOM Loaded"));

console.log("Run me");

// Resize Event
window.addEventListener("resize", () => {
  document.querySelector(
    "h1"
  ).innerText = `Resized to ${window.innerWidth} x ${window.innerHeight}`;
});

// Scroll Event
window.addEventListener("scroll", () => {
  console.log(`Scrolled: ${window.scrollX} x ${window.scrollY}`);

  if (window.scrollY > 70) {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
});

// Focus & Blur Events
window.addEventListener("focus", () => {
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = "blue";
  });
});

window.addEventListener("blur", () => {
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = "black";
  });
});
