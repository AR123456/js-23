class Shape {
  constructor(name) {
    this.name;
  }
}
class Rectangle extends Shape {
  constructor(name, width, height) {
    // super calls the constructor of the parent class, here passing in name
    super(name);
    this.width = width;
    this.height = height;
  }
}
