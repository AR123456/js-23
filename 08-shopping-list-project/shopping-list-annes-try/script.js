// declare relevant dom elemets
const itemInput = document.querySelector("#item-input");
const addItem = document.querySelector(".btn");
const itemFilterInput = document.querySelector("#filter");
const liItem = document.querySelector("li");
const deleteButton = document.querySelector(".remove-item");
const clearBtn = document.querySelector("#clear");

// input function
const onInput = (e) => {
  // TODO in this function clean this up
  let addedItem = e.target.value;
  console.log(addedItem);
  return addedItem;
};
const onAddItem = (addedItem) => {
  e.preventDefault();
  console.log(addedItem);
  // get value from onInput
  // write it to the DOM
};
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

const onClear = () => {
  // alert
  // clear items
};

//// call the event listeners after the functions are declared
// put event listener on the item-input
itemInput.addEventListener("input", onInput);
// put event listener on the clearBTN
clearBtn.addEventListener("click", onClear);
// event listener on addItem button
addItem.addEventListener("click", onAddItem);
// edit mode ?
// make it persist to local storage
// deploy
