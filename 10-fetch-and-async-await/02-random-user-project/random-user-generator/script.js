// fetch data
fetch("https://randomuser.me/api/")
  .then((response) => response.json())
  .then((data) => console.log(data.results));
//   .then((data) => (document.querySelector("h1").textContent = data));
