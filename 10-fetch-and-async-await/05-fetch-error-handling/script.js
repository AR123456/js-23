// when using fetch you have to specifically look for error responses.
// catch method will not acctually function like it does with other APIs
// you have to check the response for the status and if it is not a 200 throw some meaningful errors.
// .catch()does work for network errors
// Check for specific code
fetch("http://httpstat.us/200")
  .then((response) => {
    if (response.status === 404) {
      throw new Error("Not Found");
    } else if (response.status === 500) {
      throw new Error("Server Error");
    } else if (response.status !== 200) {
      throw new Error("Request Failed");
    }
    return response;
  })
  .then(() => {
    console.log("success");
  })
  .catch((error) => {
    console.log(error);
  });

// Catch ONLY runs on a network error
// fetch("http://hello123.net")
//   .then((response) => {
//     return response;
//   })
//   .then(() => {
//     console.log("success");
//   })
//   .catch((error) => {
//     console.log(error);
//   });
