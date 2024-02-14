// use fetch to make the request
fetch("./movies.json")
  // then handle the promise, what comes back is the response object
  // .then(response);
  //   .then((response) => {
  //     console.log(response);
  //   })
  ///// to get to the data return the response in json
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((data) => {
  //     console.log(data);
  //   });
  // another shorter way of writing it
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
