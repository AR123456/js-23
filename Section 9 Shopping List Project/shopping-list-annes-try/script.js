// variables
const item = document.querySelector("#item-input");
const itemFilterInput = document.querySelector("#filter");
const liItem = document.querySelector("li");
const deleteButtons = document.querySelectorAll(".remove-item");

const clearBtn = document.querySelector("#clear");
const form = document.querySelector("#item-form");
const ul = document.querySelector("ul");
const li = document.querySelectorAll("li");
//Functions

const onSubmit = (e) => {
  e.preventDefault();
  // TODO validate input trim
  const formData = new FormData(form);
  const item = formData.get("item").trim();
  if (item === "") {
    alert("Add an item");
    return;
  }
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
const onDelete = (e) => {
  // clicking on the Ul so need to traverse dom and only remove the element with remove class
  // console.log(e.target.parentElement.parentElement);
  if (e.target.parentElement.classList.contains("remove-item")) {
    e.target.parentElement.parentElement.remove();
  }
};
// clear button that clears all the items from the DOM
const onClear = () => {
  if (confirm("You are about to delete all, are you sure?") == true) {
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }
  }
};
const checkUI = () => {
  // check the DOM for li 's and if none found dont show clear and filter otherwise do show
  const items = ul.querySelectorAll("li");
  if (items.length === 0) {
    clearBtn.style.display = "none";
    itemFilterInput.display = "none";
  } else {
    clearBtn.style.display = "block";
    itemFilterInput.display = "block";
  }
};
// filter onkey -down looking for that value in any of the list item text.  only show the match in the DOM then any additional keys to the filter string
const onFilter = (e) => {
  // as each key is added to filter check other entries for it  and each additional
  // going to need to loop in some way
};

// Event listeners call the event listeners after the functions are declared
// on submit
form.addEventListener("submit", onSubmit);
//  clearBTN
clearBtn.addEventListener("click", onClear);
// delete item
ul.addEventListener("click", onDelete);
// filter
itemFilterInput.addEventListener("keydown", onFilter);
// check UI state on page load
checkUI();
