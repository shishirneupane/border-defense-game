import Cell from "./Cell.js";
import Defender from "./Defender.js";
import Enemy from "./Enemy.js";

// canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 700;
canvas.height = 500;

// global variables
const CELL_SIZE = 100;
const cells = [];
const defenders = [];
const enemies = [];
let enemiesInterval = 300;
let frame = 0;
let gameOver = false;

// cells
function drawCells() {
  for (let y = 0; y < canvas.height; y += CELL_SIZE) {
    for (let x = 0; x < canvas.width; x += CELL_SIZE) {
      cells.push(new Cell(x, y, CELL_SIZE));
    }
  }

  for (let i = 0; i < cells.length; i++) {
    cells[i].draw(ctx);
  }
}

drawCells();

// defenders
canvas.addEventListener("click", function (e) {
  const defenderPosition = {
    x: e.x - (e.x % CELL_SIZE),
    y: e.y - (e.y % CELL_SIZE),
  };
  for (let i = 0; i < defenders.length; i++) {
    if (
      defenders[i].x === defenderPosition.x &&
      defenders[i].y === defenderPosition.y
    )
      return;
  }
  defenders.push(
    new Defender(defenderPosition.x, defenderPosition.y, CELL_SIZE)
  );
});

function drawDefenders() {
  for (let i = 0; i < defenders.length; i++) {
    defenders[i].draw(ctx);
    for (let j = 0; j < enemies.length; j++) {
      if (
        enemies[j].y === defenders[i].y &&
        !(
          enemies[j].x + enemies[j].width <= defenders[i].x + 10 ||
          defenders[i].x + defenders[i].width <= enemies[j].x
        )
      ) {
        defenders[i].health -= 0.5;
        enemies[j].speed = 0;
      }
      if (defenders[i].health <= 0) {
        defenders.splice(i, 1);
        enemies[j].speed = 3;
        return;
      }
    }
  }
}

// enemies
function drawEnemies() {
  if (frame % enemiesInterval === 0) {
    let verticalPosition = Math.floor(Math.random() * 5) * CELL_SIZE;
    enemies.push(new Enemy(canvas, verticalPosition, CELL_SIZE));
    if (enemiesInterval > 100) enemiesInterval -= 50;
  }

  for (let i = 0; i < enemies.length; i++) {
    enemies[i].move();
    enemies[i].draw(ctx);
    if (enemies[i].x < 0) gameOver = true;
  }
}

// show game over
function showGameOver() {
  if (gameOver) {
    ctx.fillStyle = "red";
    ctx.font = "70px Fira Code";
    ctx.fillText("GAME OVER", 150, 275);
  }
}

// animate
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCells();
  drawDefenders();
  drawEnemies();
  showGameOver();
  frame++;
  if (!gameOver) requestAnimationFrame(animate);
}

animate();
