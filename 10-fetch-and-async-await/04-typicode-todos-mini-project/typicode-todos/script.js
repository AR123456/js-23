const todos = document.getElementById("todo-list");
getTodos = () => {
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
getTodos();
