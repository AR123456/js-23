// async await is alternative to .then  most devs use async await at this point
const promise = new Promise((resolve, reject) => {
  // consume promise
  setTimeout(() => {
    resolve({ name: "John", age: 20 });
  }, 1000);
});
//using .then
// promise.then((data) => console.log(data));

// using async await
// async function getPromise() {
//   const response = await promise;
//   console.log(response);
// }
const getPromise = async () => {
  const response = await promise;
  console.log(response);
};

getPromise();
