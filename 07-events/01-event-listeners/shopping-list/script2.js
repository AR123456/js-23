//challange
// make the clear all acctually clear the items
const clearBtn = document.querySelector("#clear");
const ul = document.querySelector("ul");
const li = document.querySelectorAll("li");
function clearList() {
  console.log("cleared");
  console.log(ul);
  ul.remove();
}

// clearBtn.addEventListener("click", clearList);
// function clearList2() {
//   console.log(li);
//   li.forEach((li) => li.remove());
// }

// clearBtn.addEventListener("click", clearList2);
// using a while loop
function clearList3() {
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
}

clearBtn.addEventListener("click", clearList3);
