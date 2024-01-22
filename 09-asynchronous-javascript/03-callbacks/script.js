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

// grabbing set time out to mimic server request
function getPosts() {
  setTimeout(() => {
    // this is a callback
    posts.forEach(function () {});
  }, 1000);
}
