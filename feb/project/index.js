const gameContainer = document.querySelector('.game');
const startContainer = document.querySelector(".start");

let player = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false,
    start: false
}

 function moveEnemy(car) {
   let ele = document.querySelectorAll(".enemy");
   ele.forEach(function (item) {
     if (false) {
       console.log("HIT");
       endGame();
     }
     if (item.y >= 1500) {
       item.y = -600;
       item.style.left = Math.floor(Math.random() * 350) + "px";
       item.style.backgroundColor = 'green';
     }
     item.y += 3;
     item.style.top = item.y + "px";
   });
 }
function playGame() {

    const block = gameContainer.getBoundingClientRect();
     moveLines();
     moveEnemy();
    if(player.ArrowUp && player.y < block.bottom) {
        player.y += 5;
    }

    if (player.ArrowDown && player.y > block.top) {
      player.y -= 5;
    }

    if (player.ArrowLeft && player.x > 0) {
        player.x -= 5;
    }

     if (player.ArrowRight && player.x < block.width - 50) {
       player.x += 5;
     }

    const car =  document.querySelector('.car');
    car.style.top = player.y + 'px';
    car.style.left = player.x + 'px';

    window.requestAnimationFrame(playGame);
    
}

function moveLines() {
  let lines = document.querySelectorAll(".line");
  lines.forEach(function (item) {
    if (item.y >= 1500) {
      item.y -= 1500;
    }
    item.y += 3;
    item.style.top = item.y + "px";
  });
}

function handleStartGame(e){
    startContainer.classList.add('hide');
    const car = document.createElement('div');
    car.classList.add('car');
    gameContainer.appendChild(car);
    player.x = car.offsetLeft;
    player.y= car.offsetTop;

     for (let x = 0; x < 10; x++) {
       let div = document.createElement("div");
       div.classList.add("line");
       div.y = x * 150;
       div.style.top = x * 150 + "px";
       gameContainer.appendChild(div);
     }
    window.requestAnimationFrame(playGame);
    for (let x = 0; x < 3; x++) {
        let enemy = document.createElement("div");
        enemy.classList.add("enemy");
        enemy.innerHTML = "<br>" + (x + 1);
        enemy.y = ((x + 1) * 600) * -1;
        enemy.style.top = enemy.y + "px";
        enemy.style.left = Math.floor(Math.random() * 350) + "px";
        enemy.style.backgroundColor = 'purple';
        gameContainer.appendChild(enemy);
            
}
}

function handleKeyUp(e) {
    e.preventDefault();
    console.log("key",e.key);
    player[e.key] = true;
}

function handleKeydown(e) {
    e.preventDefault();
    player[e.key] = false;
}
document.addEventListener('keyup', handleKeyUp);
document.addEventListener('keydown', handleKeydown);
startContainer.addEventListener('click',handleStartGame)