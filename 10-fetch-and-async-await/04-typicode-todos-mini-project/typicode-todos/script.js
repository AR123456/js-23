const apiUrl = "https://jsonplaceholder.typicode.com/todos";

const getTodos = () => {
  fetch(apiUrl + "?_limit=5")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((todo) => addTodoToDom(todo));
    });
};
const addTodoToDom = (todo) => {
  const div = document.createElement("div");
  div.classList.add("todo");
  div.appendChild(document.createTextNode(todo.title));
  // custom data set attribute
  div.setAttribute("data-id", todo.id);
  if (todo.completed) {
    div.classList.add("done");
  }
  document.getElementById("todo-list").appendChild(div);
};
// post request add a todo
const createTodo = (e) => {
  // stop default submit
  e.preventDefault();
  // in here e.target is the form
  // e.target.firstElementChild is the text input - but why not just get the input value?
  // console.log(e.target.firstElementChild.value);
  // the newToDo const is what will be sent to the server in the body of the post request
  const newTodo = {
    title: e.target.firstElementChild.value,
    completed: false,
  };
  fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(newTodo),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((data) => addTodoToDom(data));
};
// ssingle click to mark completed
const toggleCompleted = (e) => {
  if (e.target.classList.contains("todo")) {
    e.target.classList.toggle("done");

    updateTodo(e.target.dataset.id, e.target.classList.contains("done"));
  }
};

const updateTodo = (id, completed) => {
  // fetch in here
  fetch(`${apiUrl}/${id}`, {
    method: "PUT",
    body: JSON.stringify({ completed }),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};
// fire this off when the page loads
const init = () => {
  document.addEventListener("DOMContentLoaded", getTodos);
  //   submit event listener  on form
  document.querySelector("#todo-form").addEventListener("submit", createTodo);
  document
    .querySelector("#todo-list")
    .addEventListener("click", toggleCompleted);
};

init();
