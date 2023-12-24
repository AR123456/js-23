const clearBtn = document.querySelector("#clear");

// the function to run on the event
// function onClear() {
//   alert("clear");
// }
// clearBtn.onclick = onClear;
/// another way to write
// clearBtn.onclick = function () {
//   alert("cleared");
// };
/// ES 6 way to write
clearBtn.onclick = () => alert("clear");
