var parentElement = document.getElementById('parent');
var divElement = document.getElementById("div1");

var spanElement = document.createElement('span');
spanElement.textContent = 'I am span after p and before div';

// we need to add 

parentElement.insertBefore(spanElement, divElement);