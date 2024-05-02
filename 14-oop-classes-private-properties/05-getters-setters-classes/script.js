class Person {
  constructor(firstName, lastName) {
    // the underscore by convention denotes a private property but is not required
    this._firstName = firstName;
    this._lastName = lastName;
  }
  // use a getter to make upper case
}

const person1 = new Person("john", "doe");
console.log(person1._firstName);
