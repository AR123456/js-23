// Challenge add a new list item to the DOM shopping list
// a more performant way is to create all the elements, add the classes ect
// Solving by creating new elements and appending them -  it is more performant. Don’t have event issue and is the preferred way
// create a function that will take in an item to be added

const createNewItem = (item) => {
  // create the list item
  const li = document.createElement("li");
  // append the li with a text node that has the item passed in into it.
  li.appendChild(document.createTextNode(item));
  // create the button
  const button = document.createElement("button");
  // add the classes to the button
  button.className = "remove-item btn-link text-red";
  // create the icon
  const i = document.createElement("i");
  // add the icon classes
  i.className = "fa-solid fa-xmark";
  // put the icon in the button div
  button.appendChild(i);
  // put the button inside the list
  li.appendChild(button);
  // console.log(li);
  // add the li to the page by appending
  document.querySelector(".items").appendChild(li);
};
// call function

createNewItem("Eggs");
