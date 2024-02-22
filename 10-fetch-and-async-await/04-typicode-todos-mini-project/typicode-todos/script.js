const todos = document.getElementById("todo-list");
const getToDoButton = document.getElementById("get-todo");
const button = document.createElement("button");
const getTodos = () => {
  fetch("https://jsonplaceholder.typicode.com/todos?_limit=5", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      data.forEach((todo) => {
        const button = document.createElement("button");
        button.innerText = todo.title;
        todos.append(button);
      });
    });
};
const getOneTodo = (e) => {
  e.preventDefault();
  fetch("https://jsonplaceholder.typicode.com/todos?_limit=1", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      data.forEach((todo) => {
        const button = document.createElement("button");
        button.innerText = todo.title;
        todos.append(button);
      });
    });
};
const showDone = (e) => {
  // e.preventDefault();
  // button.classList.add("dark");
  console.log("clicked");
};
const removeIt = (e) => {
  // remove button
};
getTodos();
getToDoButton.addEventListener("click", getOneTodo);
button.addEventListener("click", showDone);
button.addEventListener("dblclick", removeIt);
