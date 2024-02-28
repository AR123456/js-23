const createPost = ({ title, body }) => {
  // json placeholder to test
  fetch("https://jsonplaceholder.typicode.com/posts", {
    // address method, body , headers of the post here REST standards - crud
    method: "POST",
    // content goes in body
    body: JSON.stringify({
      title,
      body,
    }),
    headers: {
      // content type goes in header
      "": "",
      token: "abc123",
    },
  })
    .then((res) => {
      res.json();
    })
    .then((data) => {
      console.log(data);
    });
};
