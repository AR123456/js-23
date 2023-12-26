function first() {
  const x = 100; // parent scope

  function second() {
    const y = 200;
    console.log(x + y);
  }

  // console.log(y);// y is out of scope here and this console log errors out
  // in order for second to run it needs to be called inside first
  second();
}

first();

if (true) {
  const x = 100;

  if (x === 100) {
    const y = 200;
    console.log(x + y);
  }

  // console.log(y); // here y is undefined because it is a const in the if block
}
