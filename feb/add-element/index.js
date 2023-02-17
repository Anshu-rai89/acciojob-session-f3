var parentElement = document.getElementById('parent');
var divElement = document.getElementById("div1");

var spanElement = document.createElement('span');
spanElement.textContent = 'I am span after p and before div';

// we need to add 

parentElement.insertBefore(spanElement, divElement);

function minCostToFormRope(event) {
	alert("test");
	event.preventDefault();
	var inputElement = document.querySelector('input').value;
	var arr = inputElement.split(',');
	arr.sort(function (a,b) { return a-b});

	// we need to access first two element 
	// add them & store in a variable res

	// add the res in array 
	// increment cost by res
    var cost = 0;
	while(arr.length > 1) {
		var res = Number(arr[0]) + Number(arr[1]);
		arr.push(res);
		cost += res;
        arr.shift();
		arr.shift();

		arr.sort(function (a,b) { return a-b});
	}

	document.getElementById("result").textContent = cost;
}

document.addEventListener


var todoValue = document.getElementById("newTodoInput").value;
var btn = document.getElementById("addTodoBtn");
var ol = document.getElementById("todoList");

function addTodo() {
  if (todoValue) {
    // we need to create a li
    var li = document.createElement("li");
    li.textContent = todoValue;
    ol.appendChild(li);
  }
}

btn.addEventListener("click", addTodo);