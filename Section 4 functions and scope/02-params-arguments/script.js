// Default Params - in es6 pass in the paramater user = "Bot"
// Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.
function registerUser(user = "Bot") {
  // Old way - before using `=` - if the user was not passed in use this default
  // if (!user) {
  //   user = "Bot";
  // }

  return user + " is registered";
}
// here not passing in an argument
console.log(registerUser()); // Bot
// here passing in an argument
console.log(registerUser("Selda")); //Selda
// Rest Params
// The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.
function sum(...numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}
console.log(sum(1, 2, 3, 4, 5, 6, 100));
// Objects as params
function loginUser(user) {
  return `The user ${user.name} with the id of ${user.id} is logged in`;
}

const user = {
  id: 1,
  name: "John",
};

console.log(loginUser(user));
console.log(
  loginUser({
    id: 2,
    name: "Sara",
  })
);

// Arrays as params
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);

  const item = arr[randomIndex];

  console.log(item);
}

getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
