const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;

    if (!error) {
      resolve({ name: "John", age: 30 });
    } else {
      reject("Error: Something went wrong");
    }
  }, 1000);
});
promise
  .then((user) => {
    console.log(user);
    return user.name;
  })
  // can access the return in another .then
  .then((name) => {
    console.log(name);
  })

  .catch((error) => console.log(error));
