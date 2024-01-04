// .map() –  performs a function on each item in the array and returns a new array with the results
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubledNumbers = numbers.map((number) => number * 2);
console.log(doubledNumbers);

// Same with forEach
const doubledNumbers2 = [];
numbers.forEach((number) => {
  doubledNumbers2.push(number * 2);
});

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

// Create an array of company names
const companyNames = companies.map((company) => company.name);
console.log(companyNames);

// Create an array with just company and category
const companyInfo = companies.map((company) => {
  return {
    name: company.name,
    category: company.category,
  };
});
console.log(companyInfo);
// Create an array of objects with the name and the length of each company in years
const companyYears = companies.map((company) => {
  return {
    name: company.name,
    length: company.end - company.start + " years",
  };
});

console.log(companyYears);

// Chain map methods
//  from numbers array above  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const squareAndDouble = numbers
  .map((number) => Math.sqrt(number))
  //  what is returned from the first map is put into the second
  .map((sqrt) => sqrt * 2);
//  long version without the chaining
const squareAndDouble2 = numbers
  .map(function (number) {
    return Math.sqrt(number);
  })
  // passing in the result of the first map
  .map(function (sqrt) {
    return sqrt * 2;
  })
  //  passing in the result of the prior map
  .map(function (sqrtDoubled) {
    return sqrtDoubled * 3;
  });

// Chaining different methods
const evenDouble = numbers
  // get the even numbers by filtering out the odds
  .filter((number) => number % 2 === 0)
  // now map this array of even numbers multiply times 2
  .map((number) => number * 2);

console.log(evenDouble);
