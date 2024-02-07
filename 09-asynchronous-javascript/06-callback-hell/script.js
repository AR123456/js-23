// setting up nested callbacks

// function takes in endpoint , this is the movie file

function getData(endpoint, cb) {
  //xhr object
  const xhr = new XMLHttpRequest();
  // open with get request to move file
  xhr.open("GET", endpoint);
  // event handler for onreadystatechage
  xhr.onreadystatechange = function () {
    // check ready state and status
    if ((this.readyState === 4) & (this.status === 200)) {
      //
      cb(JSON.parse(this.responseText));
    }
  };
  // randomly make request with set time out
  setTimeout(() => {
    xhr.send();
  }, Math.floor(Math.random() * 3000) + 1000);
}
// when done this way it comes back in no particular order
// getData("./movies.json");
// getData("./actors.json");
// getData("./directors.json");
getData("./movies.json", (data) => {
  console.log(data);
  getData("./actors.json", (data) => {
    console.log(data);
    getData("./directors.json", (data) => {
      console.log(data);
    });
  });
});
