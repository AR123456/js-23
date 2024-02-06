// output to #results
const joke = document.querySelector("#joke");
const endpoint = "https://api.chucknorris.io/jokes/random";

// initiate HTML request object
const xhr = new XMLHttpRequest();
xhr.open("GET", endpoint);

xhr.onreadystatechange = function () {
  const data = JSON.parse(this.responseText);
  console.log(data.value);
};

xhr.send();
