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
promise.then(() => {
  console.log("Promise in the .then aka promise consumed");
});
