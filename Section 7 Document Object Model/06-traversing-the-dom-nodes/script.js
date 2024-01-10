let output;

// Get child nodes

const parent = document.querySelector(".parent");
// console.log(parent.nodeType);

output = parent.childNodes;
console.log(output); // logs the node list
output = parent.childNodes[0].textContent;
output = parent.childNodes[0].nodeName;
console.log(output); // the text node name
output = parent.childNodes[3].textContent;
console.log(output);
output = parent.childNodes[3].outerHTML; // surrounding HTML
console.log(output);
output = parent.childNodes[3].innerText = "Child One";
output = parent.childNodes[5].style.color = "red";

output = parent.firstChild;

output = parent.lastChild;

parent.lastChild.textContent = "Hello";

// Get parent node

const child = document.querySelector(".child");
// the same
output = child.parentNode;
output = child.parentElement;

child.parentNode.style.backgroundColor = "#ccc";
child.parentNode.style.padding = "10px";

// Get sibling nodes
const secondItem = document.querySelector(".child:nth-child(2)");

output = secondItem.nextSibling;
output = secondItem.previousSibling;

console.log(output);
