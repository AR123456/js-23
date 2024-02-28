// destructure out the title and body from the post
const createPost = ({ title, body }) => {
  // json placeholder to test
  fetch("https://jsonplaceholder.typicode.com/posts", {
    // address method, body , headers of the post here REST standards - crud
    method: "POST",
    // content goes in body needs to be json string
    body: JSON.stringify({
      // specify the parts of the post-post.title and post.body
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
