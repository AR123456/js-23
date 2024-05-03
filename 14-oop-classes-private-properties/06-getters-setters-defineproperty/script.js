function Person(firstName, lastName) {
  this._firstName = firstName;
  this._lastName = lastName;
  Object.defineProperty(this, "firstName", {
    get: function () {
      return this._firstName;
    },
    set: function () {
      this._firstName = value;
    },
  });
  Object.defineProperty(this, "lastName", {
    get: function () {
      return this._lastName;
    },
    set: function () {
      this._lastName = value;
    },
  });
}
// re usable function to cap the first letter
Person.prototype.capitalizeFirst = function (value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
};
// instantiate new person object
const person1 = new Person("john", "doe");
console.log(person1.firstName);
console.log(person1.lastName);
