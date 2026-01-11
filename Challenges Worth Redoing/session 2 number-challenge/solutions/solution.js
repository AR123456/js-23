let x = Math.floor(Math.random() * 100 + 1);

let y = Math.floor(Math.random() * 50 + 1);

let sum = x + y;
let difference = x - y;
let product = x * y;
let quotient = x / y;
let moduli = x % y;

console.log(x, y);
console.log(`The sum of ${x} and ${y} =${sum}
The difference  ${difference}, 
The product ${product},
The quotient ${quotient},
the remainder ${moduli}`);
