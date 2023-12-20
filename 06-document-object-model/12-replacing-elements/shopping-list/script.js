// the replaceWith Method
const replaceFirstItem = () => {
  // on page this is Apples
  const itemToReplace = document.querySelector("li:nth-child(1)");
  console.log(itemToReplace);
  const li = document.createElement("li");
  li.textContent = "What I am adding using replace with";
  console.log(li);
  itemToReplace.replaceWith(li);
};

// replaceFirstItem();

// OuterHTML Property  outerHTML()
const replaceSecondItem = () => {
  const secondItem = document.querySelector("li:nth-child(2)");
  // this can be just a string, or put the HTML in the string
  secondItem.outerHTML = "<li>Replaced Second using outerHTML</li>";
};
// replaceSecondItem();

// replace All Items with outerHTML
const replaceAllItems = () => {
  // this is a node list -
  const lists = document.querySelectorAll("li");
  console.log(lists);
  // loop the node list have the forEach() without the need to make an array
  lists.forEach((list) => {
    list.outerHTML = "<li>All replaced with this </li>";
  });
};

replaceAllItems();
