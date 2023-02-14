var todoValue = document.getElementById("newTodoInput");
var btn = document.getElementById("addTodoBtn");
var ol = document.getElementById("todoList");

function addTodo() {
  //alert(todoValue.value);
  if (todoValue.value) {
    // we need to create a li
    var li = document.createElement("li");
    li.textContent = todoValue.value;
    ol.appendChild(li);
    todoValue.value = "";
  }
}

btn.addEventListener("click", addTodo);
