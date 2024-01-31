// get elements from DOM
const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");
const clearBtn = document.getElementById("clear");
const itemFilter = document.getElementById("filter");
const formBtn = itemForm.querySelector("button");
let isEditMode = false;

function addItem(e) {
  // dont submit
  e.preventDefault();
  const newItem = itemInput.value;
  // basic validation
  if (newItem === " ") {
    alert("Please add item");
    return;
  }
  // put value typed into DOM
  // list item
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(newItem));
  // button - a function that takes in css classes and makes a button
  const button = createButton("remove-item btn-link text-red");
  li.appendChild(button);
  // add to dom
  itemList.appendChild(li);
  // after adding to dom clear the input box
  itemInput.value = "";
}

const createButton = (classes) => {
  const button = document.createElement("button");
  button.className = classes;
  const icon = createIcon("fa-solid fa-xmark");
  button.appendChild(icon);
  return button;
};
function createIcon(classes) {
  const icon = document.createElement("i");
  icon.className = classes;
  return icon;
}
function removeItem(e) {
  // click on x but delete the list item which is 2 parents up
  // console.log(e.target.parentElement.parentElement);

  // put this in an if to check if the remove-item class is on the button - not totally necessary for this use case
  if (e.target.parentElement.classList.contains("remove-item")) {
    // traverse the DOM to get to the li
    e.target.parentElement.parentElement.remove();
  }
}
// Event Listeners
// listen for submit on form
itemForm.addEventListener("submit", addItem);
// to del with the red x on the individual list item put the event on the item list ul and target what is inside that
itemList.addEventListener("click", removeItem);
