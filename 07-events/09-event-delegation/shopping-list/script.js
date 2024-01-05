listItems = document.querySelectorAll("li");
list = document.querySelector("ul");

// Can add event listener to all the li 's
// listItems.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     e.target.remove();
//   });
// });
// Can add event listener to all the ul to get to the li 's
list.addEventListener("click", (e) => {
  // what is clicked on
  console.log(e.target);
  //what the event listener is on
  console.log(e.currentTarget);
});

list.addEventListener("mouseover", (e) => {
  // note tagName returns in upper case
  if (e.target.tagName === "LI") {
    e.target.style.color = "red";
  }
});
