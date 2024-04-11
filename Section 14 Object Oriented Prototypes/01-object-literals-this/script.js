// key value pairs
const rectangle = {
  name: "Rectangle 1",
  width: 10,
  height: 10,
  area: function () {
    // not great if one needs additional objects created - that is where constructors come in.... 
    return this.width * this.height;
  },
};

console.log(rectangle.area());
