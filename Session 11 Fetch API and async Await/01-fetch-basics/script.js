// use fetch to make the request  - a json file
fetch("./movies.json")
  // then handle the promise, what comes back is the response object
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
// have to do it a little differently for a text file
fetch("./test.txt")
  .then((response) => response.text())
  .then((data) => console.log(data));
// fetching from an API someone elses or your own backend
fetch("http://api.github.com/users/mojombo")
  .then((response) => response.json())
  //   .then((data) => console.log(data))
  .then((data) => (document.querySelector("h1").textContent = data.login));
