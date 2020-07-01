export function actor(x, y, angle, speed, size) {
  return {
    x: x,
    y: y,
    xs: x,
    ys: y,
    angle: angle,
    speed: speed,
    size: size,
    color: "white",
    reset: function() {
      this.x = x;
      this.y = y;
      this.xs = x;
      this.ys = y;
      this.speed = speed;

      return this;
    }
  };
}
