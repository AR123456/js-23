// Instantiating a new Rectangle object with constructor function
function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.width * this.height;
  };
}

const rect1 = new Rectangle("Rectangle 1", 22, 20);
const rect2 = new Rectangle("rectangle 2", 20, 30);

console.log(rect1.name, rect2.width);
// or bracket notation
console.log(rect1["name"], rect2["height"]);
// can add a new property
rect1.color = "red";
console.log(rect1.color);
// adding this outside the constructor so no need to use the this keyword
rect1.perimeter = function () {
  return 2 * (rect1.height + rect1.width);
};
// or as arrow
rect2.perimeter = () => 2 * (rect2.height + rect2.width);

console.log(rect2.perimeter());
console.log(rect1.area());
// Deleting a property
delete rect2.perimeter;
// checking for property
console.log(rect2.hasOwnProperty("color"));
console.log(rect1.hasOwnProperty("color"));
// Get Keys of object
console.log(Object.keys(rect1));
