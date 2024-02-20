// JSON placeholder for API testing and prototyping  https://jsonplaceholder.typicode.com/
createPost = () => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    // object with options
    method: "POST",
    body: JSON.stringify({
      title: post.title,
      body: post.body,
    }),
  }).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    console.log(response);
  });
};

createPost();
