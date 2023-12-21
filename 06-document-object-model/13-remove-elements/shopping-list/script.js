// remove the clear button using  remove() Method
const removeClearButton = () => {
  clearBtn = document.querySelector("#clear");
  clearBtn.remove();
};
// removeClearButton();

/// remove the first list item using removeChild()
const removeFirstItem = () => {
  // get parent
  ul = document.querySelector("ul");
  // child to remove
  firstLi = document.querySelector("li:nth-child(1)");
  // call it on the parent
  ul.removeChild(firstLi);
};
// removeFirstItem();
/// using removeChild passing in the node list position
const removeItem = (num) => {
  const ul = document.querySelector("ul");
  const li = document.querySelector(`li:nth-child(${num})`);
  ul.removeChild(li);
};
// removeItem(2);
/// using removeChild using querySelector all
const removeItem2 = (num) => {
  const ul = document.querySelector("ul");
  // node list - array like so can access the index
  const li = document.querySelectorAll("li")[num - 2];
  ul.removeChild(li);
};
removeItem2(2);
