// declare relevant dom elemets
const input = document.querySelector("#item-input");
const addBtn = document.querySelector(".btn");
const itemFilterInput = document.querySelector("#filter");
const liItem = document.querySelector("li");
const deleteButton = document.querySelector(".remove-item");
const clearAllBtn = document.querySelector("#clear");

// input function
const validInputItem = (e) => {
  // need all the keys not just one
  console.log(e.key);
};

// put event listener on the input
input.addEventListener("keyup", validInputItem);

// put event listioner on the button, on click
// take the text from input, clean it up by stripping out spaces and things that are not letters or numbers.
// make the first letter upper case
//add the item as and li to the ul

// deleting items -
//add on click of x icon , when clicked allert do you want to del
// remove item from the DOM ul

// filter  add event listoner to the filter input
// onkey -down or up or press call function that filters  by looking for that value in any of the list item text.  only show the match in the DOM
// add any additional keys to the filter string

// set up on click of the clear button that clears all the items from the DOM
// edit mode ?
// make it persist to local storage
// deploy
