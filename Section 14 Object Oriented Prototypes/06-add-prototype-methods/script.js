function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
  //   this.area = function () {
  //     return this.width * this.height;
  //   };
}
const rect = new Rectangle("Rect", 10, 10);

// moving the area function to the prototype - more efficient
Rectangle.prototype.area = function () {
  return this.width * this.height;
};
// now its on the prototype of the Rectangle object
console.log(rect);
