const todoForm = document.getElementById("todo-form");
const submitButton = document.querySelector("button");
const todoInput = document.getElementById("title");
const todoList = document.getElementById("todo-list");

const getTodos = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/5")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .then((data) => showTodos(data));
};
const showTodos = (data) => {
  todoList.innerHTML += `<div>${data}</div>
  <div>body</div>
  <div>userid</div>`;
};

submitButton.addEventListener("click", getTodos());
