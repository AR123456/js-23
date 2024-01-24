const button = document.querySelector("form button");
// the second div in the form
const div = document.querySelector("form div:nth-child(2)");
const form = document.querySelector("form");

button.addEventListener("click", (e) => {
  //   e.preventDefault();
  alert("clicked");
  e.stopPropagation();
});
// this will bubble up to its parents
div.addEventListener("click", () => {
  alert("Div was clicked");
});
// will bubble up to its parents
form.addEventListener("click", () => {
  alert("Form was clicked");
});
// will bubble up to its parents
document.body.addEventListener("click", () => {
  alert("Body was clicked");
});
