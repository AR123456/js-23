const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Add all numbers together
const sum = numbers.reduce(function (accumulator, currentValue) {
  // console.log(accumulator, currentValue);
  console.log(
    `This is the accumulator ${accumulator}, this is the current value ${currentValue}`
  );
  return accumulator + currentValue;
  // 0 here is the optional initial value
}, 0);
console.log(sum);
// short hand version
const sum2 = numbers.reduce((acc, cur) => acc + cur, 0);

// Using a for loop - could also use a for each to solve
const sum3 = () => {
  let acc = 0;
  for (const cur of numbers) {
    acc += cur;
  }
  return acc;
};

// Shopping cart example (objects)
const cart = [
  { id: 1, name: "Product 1", price: 130 },
  { id: 2, name: "Product 2", price: 150 },
  { id: 3, name: "Product 3", price: 200 },
];

const total = cart.reduce(function (acc, product) {
  return acc + product.price;
}, 0);

console.log(total);
