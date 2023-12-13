let x;

// Creating an object
const person = {
  name: "John Doe",
  age: 30,
  isAdmin: true,
  address: {
    street: "123 Main st",
    city: "Boston",
    state: "MA",
  },
  hobbies: ["music", "sports"],
};

// Accessing object properties - can use dot or bracket notation
x = person.name; // Dot notation
x = person["age"]; // Bracket notation
x = person.address.state;
x = person.hobbies[0]; // index 0 of the hobbies array in the object

// Updating properties
person.name = "Jane Doe";
person["isAdmin"] = false;

// Deleting properties
delete person.age;

// Create new properties and add them
person.hasChildren = true;

// Add functions
person.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

person.greet();

// Keys with multiple words - one can do this but it is not recommended a dash would be better
const person2 = {
  "first name": "Brad",
  "last name": "Traversy",
};

x = person2["first name"];

console.log(x);
