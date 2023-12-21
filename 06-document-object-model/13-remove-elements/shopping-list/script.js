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
/// using removeChild passing in the node list postion
const removeItem = (num) => {
  const ul = document.querySelector("ul");
  const li = document.querySelector(`li:nth-child(${num})`);
  ul.removeChild(li);
};
removeItem(2);
