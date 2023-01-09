const fetchBtn = document.querySelector("[id=fetch]"),
  todoContainer = document.querySelector("[id='todoContainer']");

const renderTodo = (todo) => {
    // Step 1 Create a li element 
    const li = document.createElement('li');

    // Step 2 Add todo inside li element as text
    li.textContent = todo.title;
    li.style.color = "blue";

    todoContainer.classList.add('center')
    // add li element inside todoContainer
    todoContainer.appendChild(li);
}

const fetchTodoList = ()=> {
    const apiUrl = "https://jsonplaceholder.typicode.com/todos";
    const todoPromise = fetch(apiUrl);

    todoPromise.then(res=> res.json())
    .then((todoList => {
      console.log("TodoList", todoList);
      /**
         *  {
         *      completed: false
         *      id: 1
                title: "delectus aut autem"
                userId: 1
         * }
         */

            for(let i = 0; i<15; i++) {
                renderTodo(todoList[i]);
            }
    }))
}

fetchBtn.addEventListener('click',fetchTodoList);

