// declare relevant dom elements
const item = document.querySelector("#item-input");
const itemFilterInput = document.querySelector("#filter");
const clearBtn = document.querySelector("#clear");
const form = document.querySelector("#item-form");
const ul = document.querySelector("ul");
const li = document.querySelectorAll("li");

const onSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const newItem = formData.get("item");
  createListItem(newItem);
  form.reset();
};

const createListItem = (item) => {
  const li = document.createElement("li");
  li.innerHTML = `
    ${item}
    <button class="remove-item btn-link text-red">
      <i class="fa-solid fa-xmark"></i>
    </button>
  `;
  document.querySelector(".items").appendChild(li);
};

const onDelete = () => {
  console.log("you hit the red x");
};

const onClear = () => {
  if (confirm("You are about to delete all, are you sure?")) {
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }
  }
};

// on submit
form.addEventListener("submit", onSubmit);

// put event listener on the clearBTN
clearBtn.addEventListener("click", onClear);

// delete individual items using event delegation
ul.addEventListener("click", function (e) {
  if (e.target.classList.contains("remove-item")) {
    const liItem = e.target.parentElement;
    liItem.remove();
  }
});
