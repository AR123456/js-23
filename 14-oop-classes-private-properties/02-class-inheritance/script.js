//Parent
class Shape {
  constructor(name) {
    this.name = name;
  }
  // adding method to log the name
  logName() {
    console.log(`Shape Name: ${this.name}`);
  }
}
// sub class
class Rectangle extends Shape {
  constructor(name, width, height) {
    // super calls the constructor of the parent class, here passing in name
    super(name);
    this.width = width;
    this.height = height;
  }
}
class Circle extends Shape {
  constructor(name, radius) {
    super(name);
    this.radius = radius;
  }
}
const rect = new Rectangle("Rect 1", 20, 20);
rect.logName();
const cir = new Circle("Cir 1", 30);
cir.logName();
