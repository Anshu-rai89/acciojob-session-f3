async function fetchTodo () {
     const apiUrl = "https://jsonplaceholder.typicode.com/todos";
     return fetch(apiUrl);
}

const todos = fetchTodo();
todos.then((res) => res.json()).then((todosData) => console.log(todosData));


