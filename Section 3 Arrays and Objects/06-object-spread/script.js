let x;
/* Can create an object this way 
const todo={}
todo.id = 1;
todo.name = "Buy Milk";
todo.completed = false;
*/

// Or  Create object using the object constructor
const todo = new Object();

todo.id = 1;
todo.name = "Buy Milk";
todo.completed = false;

x = todo;

// Object Nesting
const person = {
  address: {
    coords: {
      lat: 42.9384,
      lng: -71.3232,
    },
  },
};

x = person.address.coords.lat;

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// Spread operator - similar to way it works with arrays
// nested object
const obj3a = { obj1, obj2 };
// each key value pair into a combined object, not nested
const obj3 = { ...obj1, ...obj2 };

/* From MDM 
Object.assign()
The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
Properties in the target object are overwritten by properties in the sources if they have the same key. Later sources' properties overwrite earlier ones.
The Object.assign() method only copies enumerable and own properties from a source object to a target object. It uses [[Get]] on the source and [[Set]] on the target, so it will invoke getters and setters. Therefore it assigns properties, versus copying or defining new properties. This may make it unsuitable for merging new properties into a prototype if the merge sources contain getters.
For copying property definitions (including their enumerability) into prototypes, use Object.getOwnPropertyDescriptor() and Object.defineProperty() instead.
Both String and Symbol properties are copied.  */
const obj4 = Object.assign({}, obj1, obj2);

// Array of objects
const todos = [
  { id: 1, name: "Buy Milk" },
  { id: 2, name: "Pickup kids from school" },
  { id: 3, name: "Take out trash" },
];

x = todos[0].name;

// Get array of object keys
x = Object.keys(todo);

// Get length of an object- cannot just do .length that is undefined
x = Object.keys(todo).length;

// Get array of object values
x = Object.values(todo);

// Get array of object key/value pairs
x = Object.entries(todo);

// Check if object has a property
x = todo.hasOwnProperty("age");

console.log(z);
// all the values note todos not todo
console.log(Object.values(todos));
