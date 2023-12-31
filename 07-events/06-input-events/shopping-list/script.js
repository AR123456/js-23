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
}
// the input event works with all the input types
itemInput.addEventListener("input", onInput);
