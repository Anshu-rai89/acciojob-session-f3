import { getInputDirection } from "./input.js";

const snakeBody = [{ x: 11, y: 11 }];

export function update() {
    const inputDirection = getInputDirection();
    for(let i = snakeBody.length -2 ; i>=0 ; i--) {
        snakeBody[i+1] = {...snakeBody[i]};
    }

    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}
export function draw(gameBoard) {
    snakeBody.forEach((item) => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = item.y;
        snakeElement.style.gridColumnStart = item.x;

        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);
    })
}

export function getSnakeHead() {
    return snakeBody[0];
}
export function onSnake(position) {
    return snakeBody.some((segment)=> {
        return segment.x === position.x && segment.y === position.y
    })
}

export function expandSnake () {
    snakeBody.push({...snakeBody[snakeBody.length-1]})
}