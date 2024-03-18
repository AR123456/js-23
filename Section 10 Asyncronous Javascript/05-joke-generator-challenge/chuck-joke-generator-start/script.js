// output to #results
const joke = document.querySelector("#joke");
const endpoint = "https://api.chucknorris.io/jokes/random";
const jokeBtn = document.querySelector("#joke-btn");

// get joke
const getJoke = () => {
  // initiate HTML request object
  const xhr = new XMLHttpRequest();
  xhr.open("GET", endpoint);

  xhr.onreadystatechange = function () {
    // wait for ready state 4
    if (this.readyState === 4) {
      // if status is 200 then write response to dom
      if (this.status === 200) {
        // need .value
        const data = JSON.parse(this.responseText).value;
        joke.innerHTML = `${data}`;
      }
    }
  };

  xhr.send();
};
jokeBtn.addEventListener("click", getJoke);
// add a joke on page load
document.addEventListener("DOMContentLoaded", getJoke);
