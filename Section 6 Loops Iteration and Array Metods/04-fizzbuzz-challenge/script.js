/* # FizzBuzz Challenge

**Instructions:**

- Print/log the numbers from 1 to 100
- For **multiples of three** print "Fizz" instead of the number
- For **multiples of five** print "Buzz"
- For numbers which are **multiples of both three and five** print "FizzBuzz". */

const fizzBuzz = () => {
  for (let i = 1; i < 101; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(`${i} is a multiple of 3 and 5 - AKA FizzBuzz`);
    } else if (i % 5 === 0) {
      console.log(`${i} is a multiple of 5-AKA Buzz`);
    } else if (i % 3 === 0) {
      console.log(`${i} is a multiple of 3 AKA Fizz `);
    } else {
      console.log(i);
    }
  }
};
// fizzBuzz();

const fizzyWhile = () => {
  let i = 1;
  while (i < 101) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(`${i} is a multiple of 3 and 5 - AKA FizzBuzz`);
    } else if (i % 5 === 0) {
      console.log(`${i} is a multiple of 5-AKA Buzz`);
    } else if (i % 3 === 0) {
      console.log(`${i} is a multiple of 3 AKA Fizz `);
    } else {
      console.log(i);
    }
    i++;
  }
};

fizzyWhile();

// or using moduli of 15
// for (let i = 1; i <= 100; i++) {
//   if (i % 15 == 0) {
//     console.log(`${i}"FizzBuzz"`);
//   } else if (i % 3 == 0) {
//     console.log("Fizz");
//   } else if (i % 5 == 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }
