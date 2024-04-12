// constructor function to create multiple instances of objects
// new initializes a new constructor function
// const now = new Date();
// here can set up properties by passing them into the function
function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
}

// instantiate
const rect1 = new Rectangle("rect2", 5, 7);
// Using the new keyword 4 things happen
// 1.	A new empty object is created
// 2.	The constructor function is called with the arguments that we passed in.
// 3.	The this keyword is set to the new empty object.
// 4.	The new object is returned from the constructor function.
console.log(rect1);
