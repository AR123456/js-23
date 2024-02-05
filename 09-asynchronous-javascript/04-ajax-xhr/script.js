const ul = document.querySelector("#results");
// HTML request object initiated
const xhr = new XMLHttpRequest();
// need type of request and the url
xhr.open("GET", "./movies.json");
// event handler
xhr.onreadystatechange = function () {
  // 5 possible states 0-4  - state 4 is finished, status 200 all ok

  // make sure that the request is finished and status is successful
  if (this.readyState === 4 && this.status === 200) {
    // this response is a JSON string so use JSON.parse to pars as array
    const data = JSON.parse(this.responseText);
    // for each movie create a list item
    data.forEach((movie) => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${movie.title}</strong> -${movie.year}`;
      ul.appendChild(li);
    });
  }
};

xhr.send();
