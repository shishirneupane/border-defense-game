class Bullet {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.width = 10;
		this.speed = 50;
	}

	draw(ctx) {
		ctx.fillStyle = 'black';
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.width, 0, Math.PI * 2);
		ctx.fill();
	}

	move() {
		this.x += this.speed;
	}
}

export default Bullet;
