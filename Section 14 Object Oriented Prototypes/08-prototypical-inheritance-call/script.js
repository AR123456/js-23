// shape object
// likely that in JS one would use class for this in a large project
function Shape(name) {
  this.name = name;
}

function Rectangle(name, height, width) {
  Shape.call(this, name);

  this.height = height;
  this.width = width;
}
function Circle(name, radius) {
  Shape.call(this, name);
  this.radius = radius;
}

const rect = new Rectangle("Rectangle1", 20, 20);
console.log(rect);
const circle = new Circle("Circle 1", 30);
console.log(circle);
