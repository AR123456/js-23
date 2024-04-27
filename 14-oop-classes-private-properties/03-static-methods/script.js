class Rectangle {
  constructor(name, height, width) {
    this.name = name;
    this.height = height;
    this.width = width;
  }
  area() {
    return this.height * this.width;
  }
}
// instanciate the object to call it

const rect = new Rectangle("rect", 10, 10);
console.log(rect.area());
