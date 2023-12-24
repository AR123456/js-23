const clearBtn = document.querySelector("#clear");
clearBtn.onClick = onClear;
// the function to run on the event
function onClear() {
  alert("clear");
}
clearBtn.onclick = onClear;
