
import { getInputDirection } from "./input.js";
const snakeBody = [{x:20,y:1,},{x:21,y:1}];

export function renderSnake(gameBoard) {
    // I have to iterate on all the position of snake body 
        snakeBody.forEach(segment=> {
          // For every segment i need to a create a div

          const snakeBodyElement = document.createElement("div");

          // set its position in our game board
          snakeBodyElement.style.gridRowStart = segment.x;
          snakeBodyElement.style.gridColumnStart = segment.y;

          // assign it a class called game

          snakeBodyElement.classList.add("snake");

          // Append div on gameBoard

          gameBoard.appendChild(snakeBodyElement);
        })
}

export function moveSnake () {
    // Move all body parts of snake 1 step forward except head

    for(let i = snakeBody.length-2; i >= 0; i--) {
        snakeBody[i+1] = {...snakeBody[i]};   // a = ['one','two','three']  ['two','three']
    }

    const inputDirection = getInputDirection();
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}

export function onSnake(position) {
   
  return snakeBody.some((segment) => {
     
    return segment.x === position.x && segment.y === position.y;
  });
}

function checkIntersection(position) {
    const newSnake = [...snakeBody];
    newSnake.shift();
    console.log(newSnake,snakeBody);
     return newSnake.some((segment) => {
       return segment.x === position.x && segment.y === position.y;
     });

}
export function expandSnake() {
    // We will add a segment to this snake
    snakeBody.push({...snakeBody[snakeBody.length-1]});
}

export function getSnakeHead() {
    return snakeBody[0];
}

export function isSnakeIntersected() {
    console.log("Snake intersection")
    const val =  checkIntersection(snakeBody[0]);
    console.log("SNake",val);
}