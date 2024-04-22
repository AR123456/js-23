// object of prototypes
const rectanglePrototypes = {
  area: function () {
    return this.width * this.height;
  },
  perimeter: function () {
    return 2(this.width + this.height);
  },
  isSquare: function () {
    return this.width === this.height;
  },
};
/// using the object create method in this function ()alternative to a constructor function)
function createRectangle(height, width) {
  return Object.create(rectanglePrototypes, {
    height: {
      value: height,
    },
    width: {
      value: width,
    },
  });
}
const rect = createRectangle(10, 20);
//log the object
console.log(rect);
// call one of the methods
console.log(rect.area());
