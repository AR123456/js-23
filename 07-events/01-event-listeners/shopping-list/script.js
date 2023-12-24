const clearBtn = document.querySelector("#clear");

// the function to run on the event
function onClear() {
  alert("cleared from the function");
}
// clearBtn.onclick = onClear;

// /// another way to write
// clearBtn.onclick = function () {
//   alert("cleared from the other way in line non es6");
// };
// /// ES 6 way to write

// clearBtn.onclick = () => alert("cleared from in line on click");
// add event listener allow one to pass in the type of event and hen the function
// or can add the event in line
// Use named function
clearBtn.addEventListener("click", onClear);
// // passing in the function in line
// clearBtn.addEventListener("click", () => alert("I am in line and clearing"));
// // removeEventListener()
// // here using in a setTimeout so will happen in 5 sec
// setTimeout(() => {
//   clearBtn.removeEventListener("click", onClear), 5000;
// });
// in this line JS is firing the event without a click
setTimeout(() => clearBtn.click(), 5000);
