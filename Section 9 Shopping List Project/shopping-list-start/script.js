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
  // button
  const button = document.createElement("button");
  li.appendChild(button);
  // add to dom
  itemList.appendChild(li);
}
// Event Listeners
// listen for submit on form
itemForm.addEventListener("submit", addItem);
