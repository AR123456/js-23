// declare relevant dom elemets
const item = document.querySelector("#item-input");

const itemFilterInput = document.querySelector("#filter");

const deleteButtons = document.querySelectorAll(".remove-item");

const clearBtn = document.querySelector("#clear");
const form = document.querySelector("#item-form");
const ul = document.querySelector("ul");
const li = document.querySelectorAll("li");
const onSubmit = (e) => {
  e.preventDefault();
  // TODO validate input and cap first letter
  const formData = new FormData(form);
  const item = formData.get("item");
  // TODO put into local storage
  createListItem(item);

  form.reset();
};
const createListItem = (item) => {
  // add to DOM
  const li = document.createElement("li");
  li.innerHTML = `
${item}
 <button class="remove-item btn-link text-red">
   <i class="fa-solid fa-xmark"></i>
 </button>
`;
  document.querySelector(".items").appendChild(li);
};
// deleting items -
const onDelete = () => {
  console.log("you hit the red x");
};

const onClear = () => {
  if (confirm("You are about to delete all, are you sure?") == true) {
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }
  }
};

// on submit
form.addEventListener("submit", onSubmit);
// put event listener on the clearBTN
clearBtn.addEventListener("click", onClear);
// delete individual items
deleteButtons.forEach(function (button) {
  // button.addEventListener("click", function () {
  //   // why not removing dynamically added ?
  //   const liItem = button.parentElement;
  //   liItem.remove();
  // });
  ul.addEventListener("click", function (e) {
    if (e.target.classList.contains("remove-item")) {
      // get the parent element (li) of the clicked button
      const liItem = e.target.parentElement;

      // remove the dynamically added li element
      liItem.remove();
    }
  });
});
