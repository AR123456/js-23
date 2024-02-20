// JSON placeholder for API testing and prototyping  https://jsonplaceholder.typicode.com/
// destructure
createPost = ({ title, body }) => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    // object with options
    method: "POST",
    body: JSON.stringify({
      title: title,
      body: body,
    }),
    // content type of the data being sent
    headers: {
      // could send a token here too
      "Content-Type": "application/json",
      token: "abc123",
    },
  })
    // response object
    .then((res) => res.json())
    .then((data) => console.log(data));
};

createPost({ title: "My Post", body: "This is the Post" });
