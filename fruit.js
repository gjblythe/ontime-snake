function Fruit() {
  this.x;
  this.y;

  this.draw = () => {
    ctx.fillStyle = '#111111'
    ctx.fillRect(this.x, this.y, scale, scale)
  }

  this.pickLocation = () => {
    this.x = (Math.floor(Math.random() * rows - 1) + 1) * scale;
    this.y = (Math.floor(Math.random() * columns - 1) + 1) * scale;
  };
}