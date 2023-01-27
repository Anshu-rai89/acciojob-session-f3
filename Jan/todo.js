const fetchBtn = document.querySelector("[id=fetch]"),
  todoContainer = document.querySelector("[id='todoContainer']"),
  inputTodo = document.getElementById('todo'),
  addBtn = document.getElementById('add');

const renderTodo = (todo) => {
  const div = document.createElement('div');
    // Step 1 Create a li element 
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.textContent = "DELETE";
    // Step 2 Add todo inside li element as text
    li.textContent = todo.title;
    li.style.color = "blue";
    button.id = todo.id;
    button.className = 'delete';
    button.onclick= (e) => deleteTodo(e);

    div.appendChild(li);
    div.appendChild(button);

    todoContainer.classList.add('center')
    // add li element inside todoContainer
    todoContainer.appendChild(div);
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


const createTodo = async(todo) => {
  
  const todoObj = {
    title: todo
  }

  const url = "https://jsonplaceholder.typicode.com/todos";
  const res = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body:JSON.stringify(todoObj)
  });

  const data = await res.json();
  console.log(data);

}

const deleteTodo = async (event) => {
 
  const todoId = event.target.id;
   console.log("delete todo", todoId);
  try{
    const url = `https://jsonplaceholder.typicode.com/todos/${todoId}`;
    const res = await fetch(url , {
      method: "DELETE"
    });

    const data = await res.json();
    console.log("Delete success",data);
} catch(error) {
  console.error("Error in deleting todo",error);
}
}

const handleAddTodo = ()=> {
  // we will get todo value from input 

  const todo = inputTodo.value;
  createTodo(todo);
}

addBtn.addEventListener('click',handleAddTodo);
fetchBtn.addEventListener('click',fetchTodoList);

