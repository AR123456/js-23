let output;

// Get child elements from a parent

const parent = document.querySelector(".parent");
console.log(parent.attributes);

// this is not a method , it is a property
output = parent.children;
console.log(output); //this is an HTML collection
console.dir(output); // console dir show the avalible properties and methods

output = parent.children[1].innerText;
console.log(output);
output = parent.children[1].className;
console.log(output);
output = parent.children[1].nodeName;
console.log(output);

parent.children[1].innerText = "Child Two";
parent.children[1].style.color = "red";

parent.firstElementChild.innerText = "Child One";
parent.lastElementChild.innerText = "Child Three";

// Get parent elements from a child

const child = document.querySelector(".child");

output = child.parentElement;
child.parentElement.style.border = "1px solid #ccc";
child.parentElement.style.padding = "10px";

// Get sibling elements

const secondItem = document.querySelector(".child:nth-child(2)");

output = secondItem;
output = secondItem.nextElementSibling;

secondItem.nextElementSibling.style.color = "green";
secondItem.previousElementSibling.style.color = "orange";

console.log(output);
