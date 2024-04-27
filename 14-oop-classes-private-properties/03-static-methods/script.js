class Rectangle {
  constructor(name, height, width) {
    this.name = name;
    this.height = height;
    this.width = width;
  }
  // area cannot be static because we need height and width
  area() {
    return this.height * this.width;
  }
  // this just returns the name of the rectangle
  static getClass() {
    return "This is my static method";
  }
}
// instantiate the object to call it

const rect = new Rectangle("rect", 10, 10);
console.log(rect.area());
// to call a static use the class itself, not the instance
console.log(Rectangle.getClass());
