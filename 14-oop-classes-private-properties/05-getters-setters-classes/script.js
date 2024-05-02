// DRY
class Person {
  constructor(firstName, lastName) {
    // the underscore by convention denotes a private property but is not required
    // there are more modern ways to protect now
    this._firstName = firstName;
    this._lastName = lastName;
  }
  ///////////// getter
  get firstName() {
    return this.capitalizeFirst(this._firstName);
  }

  ////////////// setter
  // takes in the value we want to set here "this._firstName"
  set firstName(value) {
    this._firstName = this.capitalizeFirst(value);
  }
  ///////////// getter
  get lastName() {
    return this.capitalizeFirst(this._lastName);
  }

  ////////////// setter
  // takes in the value we want to set here "this._firstName"
  set lastName(value) {
    this._lastName = this.capitalizeFirst(value);
  }
  // method to cap the first letter
  capitalizeFirst(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}

const person1 = new Person("john", "doe");
// console.log(person1._firstName);
console.log(person1.firstName);
console.log(person1.lastName);
/// access the setter to make it uppercase
person1.firstName = "joe";
console.log(person1);
