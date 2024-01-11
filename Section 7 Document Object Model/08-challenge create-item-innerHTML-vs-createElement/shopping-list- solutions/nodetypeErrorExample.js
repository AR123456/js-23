// Challenge add a new list item to the DOM shopping list
// way one - innerHTML
// create a function that will take in an item to be added

const createListItem = (item) => {
  // this will not work because it is not a node, you have to create the element node first
  const li = `<li>${item}</li>`;
  document.querySelector(".items").appendChild(li);
};

// call function
createListItem("Eggs");
