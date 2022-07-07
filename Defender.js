import Bullet from "./Bullet.js";

let defender = new Image();
defender.src = "img/defender.png";

class Defender {
  constructor(x, y, CELL_SIZE) {
    this.x = x;
    this.y = y;
    this.width = CELL_SIZE;
    this.height = CELL_SIZE;
    this.health = 50;
    this.frame = 0;
    // this.isShooting = false;
  }

  draw(ctx) {
    ctx.drawImage(defender, this.x, this.y, this.width, this.height);
    ctx.fillStyle = "black";
    ctx.font = "30px Fira Code";
    ctx.fillText(Math.floor(this.health), this.x + 25, this.y - 10);
  }

  fire(bullets, CELL_SIZE) {
    // if (this.isShooting) {
    this.frame++;
    if (this.frame % 30 === 0) {
      bullets.push(new Bullet(this.x + CELL_SIZE, this.y + 50));
    }
    // } else {
    // 	this.frame = 0;
    // }
  }
}

export default Defender;
