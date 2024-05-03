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
}
