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
  button.classNames = classes;
  const icon = createIcon("fa-solid fa-xmark");
  button.appendChild(icon);
  return button;
};
function createIcon(classes) {
  const icon = document.createElement("i");
  icon.className = classes;
  return icon;
}
// Event Listeners
// listen for submit on form
itemForm.addEventListener("submit", addItem);
