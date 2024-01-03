const button = document.querySelector("form button");
// the second div in the form
const div = document.querySelector("form div:nth-child(2)");
const form = document.querySelector("form");

button.addEventListener("click", (e) => {
  //   e.preventDefault();
  alert("clicked");
  e.stopPropagation();
});
