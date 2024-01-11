// create 2 functions one to create a button and one to create a the icon
// then in the third function use the first 2 to create the new item

const createNewItem = (item) => {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(item));

  const button = createButton();
  li.appendChild(button);
  document.querySelector(".items").appendChild(li);
};
const createIcon = () => {
  const icon = document.createElement("i");
  icon.className = "fa-solid fa-xmark";
  return icon;
};
const createButton = () => {
  const button = document.createElement("button");
  button.className = "remove-item btn-link text-red";
  const icon = createIcon();
  button.appendChild(icon);
  return button;
};

createNewItem("Cheese");
createNewItem("Sauce");
