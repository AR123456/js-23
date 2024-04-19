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
