let inputDirection = {x:0,y:0};
let lastInputDirection = {x:0,y:0};

export function getInputDirection() {
    lastInputDirection = inputDirection; 
    return inputDirection;
}

document.addEventListener('keydown',(event) => {
    switch (event.key) {
      case "ArrowUp":
        if(lastInputDirection.x!==0) break;
        inputDirection = { x: -1, y: 0 };
        console.log("ArrowUp",inputDirection);
        break;

      case "ArrowDown":
         if (lastInputDirection.x !== 0) break;
        inputDirection = { x: 1, y: 0 };
        console.log("ArrowDown", inputDirection);
        break;

      case "ArrowLeft":
         if (lastInputDirection.y !== 0) break;
        inputDirection = { x: 0, y: -1 };
        console.log("ArrowLeft", inputDirection);
        break;

      case "ArrowRight":
         if (lastInputDirection.y !== 0) break;
        inputDirection = { x: 0, y: 1 };
         console.log("ArrowRight", inputDirection);
        break;
    }
})