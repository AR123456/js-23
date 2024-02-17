function fetchUser() {
  fetch("https://randomuser.me/api")
    .then((res) => res.json())
    .then((data) => {
      // passing this into display uer function

      displayUser(data.results[0]);
    });
}
fetchUser();
