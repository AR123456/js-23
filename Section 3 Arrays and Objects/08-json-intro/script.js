const post = {
  id: 1,
  title: "Post One",
  body: "This is the body",
};

// Convert to JSON string - this is important step for sending to local storage

const str = JSON.stringify(post); // puts the "" around the keys

console.log(str);
console.log(post);
// Parse JSON
const obj = JSON.parse(str);

console.log(obj.id);

// JSON & arrays - array of objects
const posts = [
  {
    id: 1,
    title: "Post One",
    body: "This is the body",
  },
  {
    id: 2,
    title: "Post Two",
    body: "This is the body",
  },
];

const str2 = JSON.stringify(posts);

console.log(str2);
