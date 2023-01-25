const addbtn = document.getElementById('add');
const todoElement = document.getElementById('todo');
const deadlineElement = document.getElementById('deadline');
const priorityElement = document.getElementById('priority');

const addTodoToLocalStorage = (todoList) => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
}

const getTodoListFromLocalStorage = () => {
    let todoList = JSON.parse(localStorage.getItem('todoList'));
    todoList = todoList ? todoList : [];

    return todoList;
}


const renderTodo = (todo, parentContainer) => {
    const todoList = getTodoListFromLocalStorage();
    const tdoIndex = todoList.findIndex(item => item.name === todo.name);
    // create a todo element

    const parentDiv = document.createElement('div');
    parentDiv.classList.add('flex');
    const todoDiv = document.createElement('div');
    todoDiv.textContent = todo.name;

    const deadline = document.createElement('div');

    console.log("todo date", new Date(todo.deadline));
    deadline.textContent= `${new Date(todo.deadline).toISOString().substring(0,10)}`;

    const priority = document.createElement('div');
    priority.textContent = todo.priority;

    const btns = document.createElement('div');
    const completedBtn = document.createElement('button');
    const deletedbutton = document.createElement('button');

    completedBtn.textContent = 'complete'
    deletedbutton.textContent = 'delete';
    deletedbutton.onclick = (e) => deleteTodo(e);
    completedBtn.onclick = (e) => completedTodo(e);

    completedBtn.id = tdoIndex;
    deletedbutton.id = tdoIndex;

    btns.appendChild(completedBtn);
    btns.appendChild(deletedbutton);


    parentDiv.appendChild(todoDiv);
    parentDiv.appendChild(deadline);
    parentDiv.appendChild(priority);
    parentDiv.appendChild(btns);

    parentContainer.appendChild(parentDiv);
    // add it inside parentContainer
}

const renderTodoItems = (containerId, todoList) => {
    const todoItemContainer = document.getElementById(containerId);
    while(todoItemContainer.firstChild) {
        todoItemContainer.removeChild(todoItemContainer.firstChild)
    }

    todoList.map((item) => {
        renderTodo(item, todoItemContainer);
    });
}

const deleteTodo = (e) => {
    const index = e.target.id ;
    console.log("Index", index);
    const todoLists = getTodoListFromLocalStorage();
    todoLists.splice(index, 1);
    addTodoToLocalStorage(todoLists);
    renderTodos();
}

const completedTodo = (e) => {
    const index = e.target.id ;
    const todoLists = getTodoListFromLocalStorage();
    todoLists[index].isCompleted = true;
    addTodoToLocalStorage(todoLists);
    renderTodos();
}
const renderTodos = () => {
    const todoList = getTodoListFromLocalStorage();
    const todatDate = new Date();
    const todayDate = todatDate.toISOString.substring(0,11);
    const todasTodo = todoList.filter(todo => {
        return new Date(todo.deadline).toISOString.substring(0,11) == todayDate && !todo.isCompleted;
        });
    const futureTodo = todoList.filter(todo => new Date(todo.deadline).getDate() > todayDate && !todo.isCompleted);
    const completedTodo = todoList.filter(todo => todo.isCompleted);

    renderTodoItems('today', todasTodo);
    renderTodoItems('future', futureTodo);
    renderTodoItems('past', completedTodo);
}

const addTodo = ()=> {
    const todo = todoElement.value;
    const deadline = deadlineElement.value;
    const priority = priorityElement.value;

    const date = new Date(deadline);
    const todoObj = {
        name: todo,
        deadline: date,
        priority,
        isCompleted: false
    }

    const todoList = getTodoListFromLocalStorage();
    todoList.push(todoObj);
    addTodoToLocalStorage(todoList);
    renderTodos();
}

renderTodos();

addbtn.addEventListener('click', addTodo);