export function actor(x, y, angle, speed, size) {
  return {
    x: x,
    y: y,
    dx: speed * Math.sin((angle * Math.PI) / 180),
    dy: speed * Math.cos((angle * Math.PI) / 180),
    size: size,
    color: "white",
    reset: function() {
      this.x = x;
      this.y = y;
      this.dx = speed * Math.sin((angle * Math.PI) / 180);
      this.dy = speed * Math.cos((angle * Math.PI) / 180);
      this.size = size;

      return this;
    }
  };
}
