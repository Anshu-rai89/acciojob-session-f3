
import { renderSnake ,moveSnake, getSnakeHead,isSnakeIntersected } from "./snake.js";
import { renderFood, moveFood,getScore } from "./food.js";

let lastRenderTime = 0,
    gameOver = false;
const SNAKE_SPEED = 10,
    gameBoard = document.getElementById('gameContainer'),
    scoreBoard = document.getElementById('score');

/**
 * 
 * Speed of snake in 100ms is 1  -> 0.1ms -> 1/ 100 -> 0.01
 * speed of snake in 1s is 10  -> 
 */

//  1/ 10 ;
function main (time) {
    
    if(gameOver) {
        alert("Game Over");
        scoreBoard.textContent = 0;
        gameOver = false;
        return ;
    }
      console.log("Render before function call");
    const lastRenderSecond = (time - lastRenderTime) / 1000;  // 1 -> 10  2s -> 20  // 0.05 -// 0.1
    window.requestAnimationFrame(main);

    console.log("Render after function call");
    if(lastRenderSecond < 1 / SNAKE_SPEED) { return };
    lastRenderTime = time;
    gameBoard.innerHTML = '';
    update();
    renderGameBoard();

}

function update() {
    moveSnake();
    moveFood();
    scoreBoard.textContent = getScore();
    const snakeHead = getSnakeHead();

    if(snakeHead.x > 40 || snakeHead.x < 1 || snakeHead.y > 40 || snakeHead.y <1) {
        gameOver = true;
    }

    if(isSnakeIntersected()) {
        console.log("Intersected");
        gameOver = true;
    }
}

function renderGameBoard() {
    renderSnake(gameBoard);
    renderFood(gameBoard);
}

//renderSnakeGame(267890)

// We have to render our snake after every 100ms 

window.requestAnimationFrame(main);