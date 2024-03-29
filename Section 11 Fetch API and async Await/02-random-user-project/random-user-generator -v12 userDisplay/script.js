function fetchUser() {
  fetch("https://randomuser.me/api")
    .then((res) => res.json())
    .then((data) => {
      // passing this into display uer function

      displayUser(data.results[0]);
    });
}
function displayUser(user) {
  const userDisplay = document.querySelector("#user");
  if (user.gender === "female") {
    document.body.style.backgroundColor = "rebeccapurple";
  } else {
    document.body.style.backgroundColor = "steelblue";
  }

  userDisplay.innerHTML = ``;
}

fetchUser();
