// querySelectorAll()
// Returns a NodeList - array like but not array, can use higher order array methods

const listItems = document.querySelectorAll(".item");

// Access elements by index
console.log(listItems[1]);
// console.log(listItems[1].innerText);

// Setting a color for specific element
listItems[1].style.color = "red";

// We can use forEach() on a NodeList
listItems.forEach((item, index) => {
  item.style.color = "red";

  if (index === 1) {
    item.remove();
  }

  if (index === 0) {
    item.innerHTML = ` Oranges
    <button class="remove-item btn-link text-red">
      <i class="fa-solid fa-xmark"></i>
    </button>`;
  }
});

// getElementsByClassName()
// Returns an HTMLCollection

const listItems2 = document.getElementsByClassName("item");
// can pass in an index
console.log(listItems2[2].innerText);
// console.log(listItems2[2]);

// this does not work - error listItems2.forEach() is not a function - because getElemensByClassNme returns a HTML collection
// listItems2.forEach((item) => {
//   console.log(item.innerText);
// });
// to use for each turn it into an array first
const listItemsArray = Array.from(listItems2);

listItemsArray.forEach((item) => {
  console.log(item.innerText);
});

// getElementsByTagName() - also retuns an HTML collection

const listItems3 = document.getElementsByTagName("li");

console.log(listItems3[0].innerText);
