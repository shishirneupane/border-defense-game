class Cell {
  constructor(x, y, CELL_SIZE) {
    this.x = x;
    this.y = y;
    this.width = CELL_SIZE;
    this.height = CELL_SIZE;
  }

  draw(ctx) {
    ctx.strokeStyle = "#ebae4a";
    ctx.strokeRect(this.x, this.y, this.width, this.height);
  }
}

export default Cell;
