// HTML request object initiated
const xhr = new XMLHttpRequest();
// need type of request and the url
xhr.open("GET", "./movies.json");
// event handler
xhr.onreadystatechange = function () {
  // 5 possible states 0-4  - state 4 is finished
  console.log(this.readyState);
  console.log(this.status);
};

xhr.send();
