// declare relevant dom elemets
const item = document.querySelector("#item-input");

const itemFilterInput = document.querySelector("#filter");
const liItem = document.querySelector("li");
const deleteButton = document.querySelector(".remove-item");
const clearBtn = document.querySelector("#clear");
const form = document.querySelector("#item-form");

const onSubmit = (e) => {
  e.preventDefault();
  // TODO validate input and cap first letter
  const formData = new FormData(form);
  const item = formData.get("item");
  // returns string
  console.log(item);
  // put into local storage
  createListItem(item);
  //TODO clear the input element after submit
};
const createListItem = (item) => {
  // add to DOM
  const li = document.createElement("li");
  li.innerHTML = `
${item}
 <button class="remove-item btn-link text-red">
   <i class="fa-solid fa-xmark"></i>
 </button>
`;
  document.querySelector(".items").appendChild(li);
};
// deleting items -
const onDelete = () => {
  console.log("you hit the red x");
};

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

// on submit
form.addEventListener("submit", onSubmit);

// put event listener on the clearBTN
clearBtn.addEventListener("click", onClear);
// event listener on addItem button
deleteButton.addEventListener("click", onDelete);
// edit mode ?
// make it persist to local storage
// deploy
