var div1 = document.getElementById("div-1");
var alertButton = document.getElementById('btn');


console.log("div1", div1);

/**
 * Lets create a button call click me and add it inside div1
 */


function createButton () {
  // Create a html element using js function and add it as a child of other html element
  // create a html element
  var button = document.createElement("button"); // Dom Object

  //set its text content
  button.textContent = "Click Me";
  button.style.color = "green";
  button.onclick = function () {
    alert("Click me");
  };
  button.addEventListener("click", function () {});

  // add a child to a html element
  // How can we add a child to a html element
  div1.appendChild(button);
}


function randoMFunction () {
    alert("You have clicked a alert button");
}

alertButton.addEventListener("click", randoMFunction);





