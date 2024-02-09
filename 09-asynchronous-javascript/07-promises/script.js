// promise constructor
const promise = new Promise((resolve, reject) => {
  // simulating an async task with set time out
  // Do some async task
  setTimeout(() => {
    console.log("Async task complete");
    resolve();
  }, 1000);
});

// promise resovled so .then it takes in anything that is passed to resolve or could console.log something
// the .then runs after the promise resolves
promise.then(() => {
  console.log(
    "Promise in the .then of the first function aka promise consumed"
  );
});
//Another syntax is to put the .then right at the end of the promise
const getUser = new Promise((resolve, reject) => {
  // simulating an async task with set time out
  // Do some async task
  setTimeout(() => {
    // handle and error
    let error = true;
    if (!error) {
      // simulating something coming back from an API
      resolve({ name: "John", age: 30 });
    } else {
      reject("Error in the reject()");
    }
  }, 1000);
});
getUser
  .then((user) => console.log(user))
  // put the reject in a .catch that takes in the reject message from the promise
  .catch((error) => console.log(error));
console.log("Hello from global scope");
