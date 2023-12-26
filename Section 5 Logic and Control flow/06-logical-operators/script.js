console.log(10 < 20 && 30 > 15 && 40 > 30); //With the double ampersand all must be true
console.log(10 > 20 || 30 < 15); // Only one has to be true because double piles ar an or

// && - Will return first falsy value or the last value
let a;

a = 10 && 20;
a = 10 && 20 && 30;
a = 10 && 0 && 30;
a = 10 && "" && 0 && 30;

console.log(a);

const posts = [];
posts.length > 0 && console.log(posts[0]); // do this so that if the array is empty it does not return undefined

// || - Will return the first truthy value or the last value

let b;

b = 10 || 20;
b = 0 || 20;
b = 0 || null || "" || undefined;

console.log(b); // this returns undefined because it is last of the faulsys

//The Nullish coalescing operator   ?? - Returns the right side operand when the left is null or undefined - it is not looking at truthy or faulsy

let c;

c = 10 ?? 20;
c = null ?? 20;
c = undefined ?? 30;
c = 0 ?? 30;
c = "" ?? 30;

console.log(c);
