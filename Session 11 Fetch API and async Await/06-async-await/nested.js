/////////////
// example of nested from chat gpt
async function outerFunction() {
  console.log("Start outerFunction");

  async function innerFunction() {
    console.log("Start innerFunction");
    const result = await someAsyncOperation();
    console.log("Result from innerFunction:", result);
  }

  await innerFunction();

  console.log("End outerFunction");
}

async function someAsyncOperation() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Async operation completed");
    }, 1000);
  });
}

outerFunction();
