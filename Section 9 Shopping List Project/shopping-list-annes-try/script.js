// declare relevant dom elemets
const item = document.querySelector("#item-input");

const itemFilterInput = document.querySelector("#filter");
const liItem = document.querySelector("li");
const deleteButtons = document.querySelectorAll(".remove-item");

const clearBtn = document.querySelector("#clear");
const form = document.querySelector("#item-form");
const ul = document.querySelector("ul");
const li = document.querySelectorAll("li");
const onSubmit = (e) => {
  e.preventDefault();
  // TODO validate input and cap first letter
  const formData = new FormData(form);
  const item = formData.get("item");
  // TODO put into local storage
  createListItem(item);

  form.reset();
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
  if (confirm("You are about to delete all, are you sure?") == true) {
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }
  }
};

//// call the event listeners after the functions are declared

// on submit
form.addEventListener("submit", onSubmit);

// put event listener on the clearBTN
clearBtn.addEventListener("click", onClear);
// delete individual items
deleteButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const listItem = button.parentElement;
    listItem.remove();
  });
});
// edit mode ?
// make it persist to local storage
// deploy
