import { onSnake, expandSnake } from "./snake.js";
let food = {x:4,y:4};
let score = 0;

export function getScore () {
    return score;
}
export function renderFood (gameBoard) {
    const foodElement = document.createElement("div");

    // set its position in our game board
    foodElement.style.gridRowStart = food.x;
    foodElement.style.gridColumnStart = food.y;

    // assign it a class called game

    foodElement.classList.add("food");

    // Append div on gameBoard

    gameBoard.appendChild(foodElement);
}

export function moveFood () {
    // If any part of snake body collide with this food

    if(onSnake(food,false)) {
        score += 1;
        // Expand snake by 1
            expandSnake();

            food = {
                x: Math.floor(Math.random() * 40) +1,
                y : Math.floor(Math.random() * 40) + 1
            };
        // update food position 
    }
}