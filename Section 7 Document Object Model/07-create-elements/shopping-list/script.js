// creating the div
const div = document.createElement("div");
// here adding attributes to the newly created div
div.className = "my-element";
div.id = "my-element";
// can also use setAttribute to add attributes
div.setAttribute("title", "My Element");

// div.innerText = 'Hello World';

const text = document.createTextNode("Hello World");
div.appendChild(text);

// document.body.appendChild(div);

document.querySelector("ul").appendChild(div);
