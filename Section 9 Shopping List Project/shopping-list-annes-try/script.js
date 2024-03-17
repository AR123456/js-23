// get elements from DOM
const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");
const clearBtn = document.getElementById("clear");
const itemFilter = document.getElementById("filter");
const formBtn = itemForm.querySelector("button");
let isEditMode = false;

function displayItems() {
  const itemsFromStorage = getItemsFromStorage();
  itemsFromStorage.forEach((item) => addItemToDOM(item));
  checkUI();
}

// functions
function onAddItemSubmit(e) {
  e.preventDefault();
  const newItem = itemInput.value;
  // basic validation
  if (newItem === "") {
    alert("Please add item");
    return;
  }
  // check to see if app is in edit mode
  if (isEditMode) {
    // remove the item from local storage and DOM , then put in the new item
    // all you can do with local storage is add and remove
    const itemToEdit = itemList.querySelector(".edit-mode");
    removeItemFromStorage(itemToEdit.text);
    // remove edit mode from li
    itemToEdit.classList.remove("edit-mode");
    // remove from DOM
    itemToEdit.remove();
    // take app out of edit mode
    isEditMode = false;
  }
  // add to dom
  addItemToDOM(newItem);
  addItemToStorage(newItem);
  checkUI();
  // clear the input box
  itemInput.value = "";
}
function addItemToDOM(item) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(item));
  const button = createButton("remove-item btn-link text-red");
  li.appendChild(button);
  itemList.appendChild(li);
}

// use ths in the addItem function
const createButton = (classes) => {
  const button = document.createElement("button");
  button.className = classes;
  const icon = createIcon("fa-solid fa-xmark");
  button.appendChild(icon);
  return button;
};
// use this in the addItem function
function createIcon(classes) {
  const icon = document.createElement("i");
  icon.className = classes;
  return icon;
}
// add to local storage
function addItemToStorage(item) {
  const itemsFromStorage = getItemsFromStorage();
  // add to array
  itemsFromStorage.push(item);
  // re stringify and put back in local storage
  localStorage.setItem("items", JSON.stringify(itemsFromStorage));
}

function getItemsFromStorage() {
  // array of list of items stringified will jason.parse when we get it out of local storage
  let itemsFromStorage;
  // are there any items in local storage ?
  if (localStorage.getItem("items") === null) {
    itemsFromStorage = [];
  } else {
    // get stuff from local storage, which is a string and make it an array
    itemsFromStorage = JSON.parse(localStorage.getItem("items"));
  }
  return itemsFromStorage;
}
// onClick handler
function onClickItem(e) {
  // was the click on the red x?
  if (e.target.parentElement.classList.contains("remove-item")) {
    removeItem(e.target.parentElement.parentElement);
  } else {
    // call the set item on the list item
    setItemToEdit(e.target);
  }
}
function setItemToEdit(item) {
  isEditMode = true;
  // if any of the items is currently in edit mode, remove it so only editing one item at a time
  itemList
    .querySelectorAll("li")
    .forEach((i) => i.classList.remove("edit-mode"));
  // make sure that a click on the white space doesent
  //add all the items, use localName so I can keep lower case
  if (item.localName === "li") {
    // give visual feedback that we are in edit mode
    item.classList.add("edit-mode");
    // change text and icon on the form button
    formBtn.innerHTML = `<i class="fa-solid fa-pen"></i> Update Item`;
    formBtn.style.backgroundColor = "#228B22";
    // put the value of the item in the form input field
    itemInput.value = item.textContent;
  }
}
function removeItem(item) {
  if (confirm("Are you sure?")) {
    // DOM
    item.remove();
    // local storage
    removeItemFromStorage(item.textContent);
    checkUI();
  }
}
function removeItemFromStorage(item) {
  let itemsFromStorage = getItemsFromStorage();
  // filter out item to be removed - this will return a new array with the item removed
  itemsFromStorage = itemsFromStorage.filter((i) => i !== item);
  // re send to local storage
  localStorage.setItem("items", JSON.stringify(itemsFromStorage));
}
// delete individual items
function clearItems() {
  if (confirm("You are about to delete all,are you sure?") == true) {
    while (itemList.firstChild) {
      itemList.removeChild(itemList.firstChild);
    }
  }
  // remove from local
  localStorage.removeItem("items");
  checkUI();
}
function filterItems(e) {
  // for ease of comparison make all lower case
  const text = e.target.value.toLowerCase();
  // get the list items for comparison - items is a node list
  const items = itemList.querySelectorAll("li");
  items.forEach((item) => {
    // the first child is the text
    const itemName = item.firstChild.textContent.toLowerCase();
    // using index of to determine if the itemName contains the text const
    // -1 is what indexOf returns if the passed in value is not in the array
    // if (itemName.indexOf(text) != -1) {
    // or use includes()
    if (itemName.includes(text)) {
      // add(keep the style of flex)
      item.style.display = "flex";
    } else {
      // set display to none so the non match is not seen
      item.style.display = "none";
    }
  });
}
// function filterItems(e) {
//   // another way to filter from Wil
//   const items = itemList.querySelectorAll("li");
//   const text = e.target.value.toLowerCase();
//   // if letter is anywhere in the word, not neccisarily in the order type
//   items.forEach((item) => {
//     const itemName = item.firstChild.textContent.toLowerCase();
//     for (const letter of text) {
//       if (itemName.includes(letter)) {
//         item.style.display = "flex";
//       } else {
//         item.style.display = "none";
//       }
//     }
//   });
//   console.log(text);
// }

// dont show clear and filter if there are no li on the page
function checkUI() {
  // this needs to be defined outside of global scope
  //querySelectorAll returns a node list -
  const items = itemList.querySelectorAll("li");
  if (items.length === 0) {
    clearBtn.style.display = "none";
    itemFilter.style.display = "none";
  } else {
    clearBtn.style.display = "block";
    itemFilter.style.display = "block";
  }
  formBtn.innerHTML = "<i class='fa-solid fa-plus'></i> Add Item";
  formBtn.style.backgroundColor = "#333";
  isEditMode = false;
}
// moving out of global scope and into this init function
function init() {
  // Event Listeners
  // listen for submit on form
  itemForm.addEventListener("submit", onAddItemSubmit);
  // to remove or edit an item
  itemList.addEventListener("click", onClickItem);
  clearBtn.addEventListener("click", clearItems);
  // this could be key up or key down , here using the input event
  itemFilter.addEventListener("input", filterItems);
  // when the page loads get stuff from local storage
  document.addEventListener("DOMContentLoaded", displayItems);
  // don't show clear and filter if there are no items
  checkUI();
}
init();
