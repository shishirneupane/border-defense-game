class Defender {
  constructor(x, y, CELL_SIZE) {
    this.x = x;
    this.y = y;
    this.width = CELL_SIZE;
    this.height = CELL_SIZE;
    this.health = 100;
  }

  draw(ctx) {
    ctx.fillStyle = "blue";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = "white";
    ctx.font = "30px Fira Code";
    ctx.fillText(Math.floor(this.health), this.x + 25, this.y + 60);
  }
}

export default Defender;
