const clearBtn = document.querySelector("#clear");

// the function to run on the event
function onClear() {
  alert("clear");
}
// clearBtn.onclick = onClear;

// /// another way to write
// clearBtn.onclick = function () {
//   alert("cleared");
// };
// /// ES 6 way to write
// clearBtn.onclick = () => alert("clear");
// add event listener allow one to pass in the type of event and hen the function
// or can add the event in line
clearBtn.addEventListener("click", onClear);
