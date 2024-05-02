class Person {
  constructor(firstName, lastName) {
    // the underscore by convention denotes a private property but is not required
    // there are more modern ways to protect now
    this._firstName = firstName;
    this._lastName = lastName;
  }
  // use a getter to make upper case
  get firstName() {
    return this._firstName.charAt(0).toUpperCase() + this._firstName.slice(1);
  }
  // .firstName gets return and now first letter is Uppercase
}

const person1 = new Person("john", "doe");
console.log(person1._firstName);
console.log(person1.firstName);
