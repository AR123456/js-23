const todoForm = document.getElementById("todo-form");
const submitButton = document.querySelector("button");
const todoInput = document.getElementById("title");
const todoList = document.getElementById("todo-list");

const getTodos = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/?_limit=5")
    .then((res) => res.json())
    // .then((data) => console.log(data))
    .then((data) => data.forEach((todo) => showTodos(todo)));
};
const showTodos = (todo) => {
  todoList.innerHTML += ` 
  <div>${todo.title}</div>`;
};

submitButton.addEventListener("click", getTodos());
