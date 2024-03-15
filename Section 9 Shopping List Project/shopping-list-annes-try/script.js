// get elements from DOM
const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");
const clearBtn = document.getElementById("clear");
const itemFilter = document.getElementById("filter");
const formBtn = itemForm.querySelector("button");

// functions
function onAddItemSubmit(e) {
  // dont submit
  e.preventDefault();
  const newItem = itemInput.value;
  // basic validation
  if (newItem === "") {
    alert("Please add item");
    return;
  }
  addItemToDOM(newItem);
  addItemToStorage(newItem);
  checkUI();
  // after adding to dom clear the input box
  itemInput.value = "";
}
function addItemToDOM(item) {
  // list item
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(item));
  // button - a function that takes in css classes and makes a button
  const button = createButton("remove-item btn-link text-red");
  li.appendChild(button);
  // add to dom
  itemList.appendChild(li);
}
// add to local storage
function addItemToStorage(item) {
  // array of list of items stringified will jason.parse when we get it out of local storage

  let itemsFromStorage;
  // are there any items in local storage ?
  if (localStorage.getItem("items") === null) {
    itemsFromStorage = [];
  } else {
    // get stuff from local storage, which is a string and make it an array
    itemsFromStorage = JSON.parse(localStorage.getItem("items"));
  }
  itemsFromStorage.push(item);
  // re stringify and put back in local storage
  localStorage.setItem("items", JSON.stringify(itemsFromStorage));
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
function removeItem(e) {
  // click on x but delete the list item which is 2 parents up
  // console.log(e.target.parentElement.parentElement);
  // put this in an if to check if the remove-item class is on the button
  if (e.target.parentElement.classList.contains("remove-item")) {
    // traverse the DOM to get to the li
    e.target.parentElement.parentElement.remove();
  }
  checkUI();
}
// delete individual items
function clearItems() {
  if (confirm("You are about to delete all,are you sure?") == true) {
    // using a while loop
    while (itemList.firstChild) {
      itemList.removeChild(itemList.firstChild);
    }
  }
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

  console.log(text);
}

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
}

// Event Listeners
// listen for submit on form
itemForm.addEventListener("submit", onAddItemSubmit);
// to del with the red x on the individual list item put the event on the item list ul and target what is inside that
itemList.addEventListener("click", removeItem);
clearBtn.addEventListener("click", clearItems);
// this could be key up or key down , here using the input event
itemFilter.addEventListener("input", filterItems);
checkUI();
