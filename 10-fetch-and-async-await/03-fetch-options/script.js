// JSON placeholder for API testing and prototyping  https://jsonplaceholder.typicode.com/
function createPost() {
  fetch("https://jsonplaceholder.typicode.com/").then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    console.log(response);
  });
}

createPost();
