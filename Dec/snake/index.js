import { draw as drawSnake , update as updateSnake,getSnakeHead } from "./snake.js";
import { draw as drawFood, update as updateFood } from "./food.js";
import { outSideGrid } from "./grid.js";

let lastRenderTime = 0;
let gameOver = false;

const SNAKE_SPEED = 4;
const gameBoard = document.getElementById("game-board");

function main(ctime) {

    if(gameOver) {
        alert("Game over");
        return;
    }
    window.requestAnimationFrame(main);

    const secondsSinceLastRender = (ctime-lastRenderTime) / 1000;

    if(secondsSinceLastRender < 1/SNAKE_SPEED) return;
    lastRenderTime = ctime;

    update();
    draw();
}

window.requestAnimationFrame(main);
function update() {
    updateSnake();
    updateFood();
    checkForDeath();
}

function draw(){
    gameBoard.innerHTML = ''
    console.log(gameBoard);
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

function checkForDeath() {
    gameOver = outSideGrid(getSnakeHead());
}