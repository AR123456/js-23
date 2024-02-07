// setting up nested callbacks

// function takes in endpoint , this is the movie file

function getData(endpoint) {
  //xhr object
  const xhr = new XMLHttpRequest();
  // open with get request to move file
  xhr.open("GET", endpoint);
  // event handler for onreadystatechage
  xhr.onreadystatechange = function () {
    // check ready state and status
    if ((this.readyState === 4) & (this.status === 200)) {
      //
      console.log(JSON.parse(this.responseText));
    }
  };
  // randomly make request with set time out
  setTimeout(() => {
    xhr.send();
  }, Math.floor(Math.random() * 3000) + 1000);
}
getData("./movies.json");
