//text input
itemInput = document.querySelector("#item-input");
// select list
priorityInput = document.querySelector("#priority-input");
// check box input
checkbox = document.querySelector("#checkbox");
heading = document.querySelector("h1");

// looking at the text input
function onInput(e) {
  console.log("input");
  // to get the value - whatever is being typed in
  console.log(e.target.value);
}
// the input event works with all the input types
itemInput.addEventListener("input", onInput);

// looking at the select list -
function onSelect(e) {
  console.log(e.target.value);
}
priorityInput.addEventListener("input", onSelect);
// change does same
// priorityInput.addEventListener("change", onSelect);

// check box
function onChecked(e) {
  console.log(e.target.checked);
}
checkbox.addEventListener("input", onChecked);
