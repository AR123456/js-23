// function getData(endpoint, cb) {
// don't return the call back
function getData(endpoint) {
  // put all of this into a promise
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", endpoint);

    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          //   cb(JSON.parse(this.responseText));
          // this becomes resolve
          resolve(JSON.parse(this.responseText));
        } else {
          reject("Something went wrong");
        }
      }
      {
      }
    };

    setTimeout(() => {
      xhr.send();
    }, Math.floor(Math.random() * 3000) + 1000);
  });
}

// getData("./movies.json", (data) => {
//   console.log(data);
//   getData("./actors.json", (data) => {
//     console.log(data);
//     getData("./directors.json", (data) => {
//       console.log(data);
//     });
//   });
// });
getData("./movies.json").then((movies) => {
  console.log(movies);
});
