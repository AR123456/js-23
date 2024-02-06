// output to #results
const results = document.querySelector("#results");
const endpoint = "https://api.chucknorris.io/jokes/random";

// initiate HTML request object
const xhr = new XMLHttpRequest();
xhr.open("GET", endpoint);

xhr.send();
console.log(this.responseText);
