const strLit = "Hello";
const strObj = new String("Hello from new String");

console.log(strLit, typeof strLit);
console.log(strObj, typeof strObj);
// cannot use a method on a primitive data type
//https://javascript.plainenglish.io/javascript-boxing-wrappers-5b5ff9e5f6ab
//Boxing - js adds wrapper object onto literal
console.log(strLit.toUpperCase());
console.log(strLit[0]);
//un boxing - object turned back into a literal
console.log(strObj.valueOf(), typeof strObj.valueOf());
//constructor on a primative data type
console.log(strLit.constructor);
//check to see if object is an instance of a constructor function
// literal is false
console.log(strLit instanceof String);
// object is not
console.log(strObj instanceof String);
