export function actor(x, y, angle, speed, size, spawn, despawn) {
  return {
    x: x,
    y: y,
    xs: x,
    ys: y,
    angle: angle,
    speed: speed,
    despawn: despawn,
    spawn: spawn,
    size: size,
    color: "white",
    reset: function() {
      this.x = x;
      this.y = y;

      return this;
    }
  };
}
