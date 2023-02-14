function createNode () {
  const span = document.getElementById("span2");
  const parentElement = span.parentNode;
  const span1= document.createElement('span');
  span1.textContent= "Dynamic";
  parentElement.insertBefore(span1, span);

}

document.addEventListener('DOMContentLoaded', createNode);

const todo = document.getElementById("addTodoBtn");
const list = document.getElementById("todoList");

function addTodo() {
  var input = document.getElementById("newTodoInput");

  if(input.value) {
    var li = document.createElement("li");
    li.textContent = input.value;

    list.appendChild(li);

    input.value = "";
  }
}
todo.addEventListener('click', addTodo); 