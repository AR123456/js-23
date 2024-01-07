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
const replaceAllItemsO = () => {
  // this is a node list -
  const lists = document.querySelectorAll("li");
  console.log(lists);
  // loop the node list have the forEach() without the need to make an array
  lists.forEach((list) => {
    list.outerHTML = "<li>All replaced with this </li>";
  });
};

// replaceAllItemsO();
// replace All Items with innerHTML
const replaceAllItems = () => {
  // this is a node list -
  const lists = document.querySelectorAll("li");
  console.log(lists);
  // loop the node list have the forEach() without the need to make an array
  lists.forEach((list) => {
    // do not need the tags for innerHTML
    list.innerHTML = "All replaced with this";
  });
};

// replaceAllItems();

// using  replaceChild() Method - takes in new and current
replaceChildHeading = () => {
  // header is the parent
  const header = document.querySelector("header");
  const currentH1 = document.querySelector("header h1");

  const newH1 = document.createElement("h1");
  newH1.id = "app-title";
  newH1.textContent = "New and improved Shopping list header";
  header.replaceChild(newH1, currentH1);
};
replaceChildHeading();
