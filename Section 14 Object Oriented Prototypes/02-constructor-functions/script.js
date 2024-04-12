// consturctor function to create multiple instances of objects
// new initializes a new constructor function
// const now = new Date();
function Rectangle() {
  //can set properties in here but more likely to set by passing in
  this.name = "rectangle 1";
}

// instanciate
const rect1 = new Rectangle();
// Using the new keyword 4 things happen
// 1.	A new empty object is created
// 2.	The constructor function is called with the arguments that we passed in.
// 3.	The this keyword is set to the new empty object.
// 4.	The new object is returned from the constructor function.
