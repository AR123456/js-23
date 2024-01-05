listItems = document.querySelectorAll("li");
list = document.querySelector("ul");

// Can add event listener to all the li 's
listItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.target.remove();
  });
});
// Can add event listener to all the ul to get to the li 's
list.addEventListener("click", (e) => {
  console.log(e.target);
});
