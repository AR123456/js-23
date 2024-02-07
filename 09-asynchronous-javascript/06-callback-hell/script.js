// setting up nested callbacks

// function takes in endpoint , this is the movie file

function getData(endpoint) {
  //xhr object
  const xhr = new XMLHttpRequest();
  // open with get request to move file
  xhr.open("GET", endpoint);
  // event handler for onreadystatechage
  xhr.onreadystatechange = function () {
    if ((this.readyState === 4) & (this.status === 200)) {
      //
      console.log(xhr.responseText);
    }
  };
}
