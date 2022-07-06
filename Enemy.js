let enemy = new Image();
enemy.src = "img/enemy.png";

class Enemy {
  constructor(canvas, verticalPosition, CELL_SIZE) {
    this.x = canvas.width;
    this.y = verticalPosition;
    this.width = CELL_SIZE;
    this.height = CELL_SIZE;
    this.speed = 10;
    this.health = 100;
  }

  draw(ctx) {
    ctx.drawImage(enemy, this.x, this.y, this.width, this.height);
    ctx.fillStyle = "black";
    ctx.font = "30px Fira Code";
    ctx.fillText(this.health, this.x + 25, this.y - 10);
  }

  move() {
    this.x -= this.speed;
  }
}

export default Enemy;
