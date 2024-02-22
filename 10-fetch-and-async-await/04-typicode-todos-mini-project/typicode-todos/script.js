const todos = document.getElementById("todo-list");
getTodos = () => {
  fetch("https://jsonplaceholder.typicode.com/todos?_limit=5", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      todos.innerHTML = data[0].title;
    });
};
getTodos();
