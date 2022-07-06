class Cell {
  constructor(x, y, CELL_SIZE) {
    this.x = x;
    this.y = y;
    this.width = CELL_SIZE;
    this.height = CELL_SIZE;
  }

  draw(ctx) {
    ctx.strokeStyle = "#c9c9c9";
    ctx.strokeRect(this.x, this.y, this.width, this.height);
  }
}

export default Cell;
