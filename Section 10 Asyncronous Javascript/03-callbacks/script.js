const toggle = (e) => {
  e.target.classList.toggle("danger");
};
// a call back is a function that gets passed into another function
document.querySelector("button").addEventListener("click", toggle);

// fake server data for demo
const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];
// creating a post
function createPost(post, cb) {
  setTimeout(() => {
    posts.push(post);
    // make get posts a call back of createPost
    cb();
  }, 2000);
}
// grabbing set time out to mimic server request
function getPosts() {
  setTimeout(() => {
    // this is a callback
    posts.forEach(function (post) {
      // create div
      const div = document.createElement("div");
      // add posts to div
      div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
      // add div to the dom
      document.querySelector("#posts").appendChild(div);
    });
  }, 1000);
}
// this will get passed in as a callback here in create posts
// getPosts();
createPost(
  { title: "Post Three", body: "This is post three" },
  // passing in getPosts as callback
  getPosts
);
