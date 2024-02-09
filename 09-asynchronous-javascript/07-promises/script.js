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
  console.log("Promise in the .then aka promise consumed");
});
//Another syntax is to put the .then right at the end of the promise
new Promise((resolve, reject) => {
  // simulating an async task with set time out
  // Do some async task
  setTimeout(() => {
    // simulating something coming back from an API
    resolve({ name: "John", age: 30 });
  }, 1000);
}).then((user) => console.log(user));
console.log("Hello from global scope");
