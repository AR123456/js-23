const apiUrl = "https://jsonplaceholder.typicode.com/todos";

const addTodoToDom = (todo) => {
  const div = document.createElement("div");
  div.appendChild(document.createTextNode(todo.title));
  // custom data set attribute
  div.setAttribute("data-id", todo.id);
  if (todo.completed) {
    div.classList.add("done");
  }
  document.getElementById("todo-list").appendChild(div);
};
const getTodos = () => {
  fetch(apiUrl + "?_limit=5")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((todo) => addTodoToDom(todo));
    });
};

// add event listoner to dom
const createTodo = (e) => {
  // stop default submit
  e.preventDefault();
  // in here e.target is the form
  // e.target.firstElementChild is the text input - but why not just get the input value?
  // console.log(e.target.firstElementChild.value);
  // the newToDo const is what will be sent to the server
  const newTodo = {};
};
// fire this off when the page loads
const init = () => {
  document.addEventListener("DOMContentLoaded", getTodos);
  //   submit event listoner on form
  document.querySelector("#todo-form").addEventListener("submit", createTodo);
};

init();
