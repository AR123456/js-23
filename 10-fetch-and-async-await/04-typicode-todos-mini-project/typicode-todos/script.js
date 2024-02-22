const todos = document.getElementById("todo-list");
getTodos = () => {
  fetch("https://jsonplaceholder.typicode.com/todos?_limit=5", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        todos.innerHTML = `<p>${data[i].title}</p>`;
      }
    });
};
getTodos();
