const actor = (context, style, angle, speed, size, despawn, spawn) => {
  const color = "white",
    friction = 0.98,
    gravity = 0.03;
  let x = context.canvas.width / 2 - size / 2,
    y = context.canvas.height,
    dx = -speed * Math.sin((angle * Math.PI) / 180),
    dy = -speed * Math.cos((angle * Math.PI) / 180);

  return {
    spawn: spawn || 0,
    despawn: despawn,
    draw: function() {
      if (this.spawn <= 0) {
        context.fillStyle = color;
        if (style === "square") {
          context.fillRect(x, y, size, size);
        } else {
          context.beginPath();
          context.arc(x, y, size / 2, 0, Math.PI * 2);
          context.fill();
        }
      }

      return this;
    },
    update: function() {
      if (this.spawn > 0) {
        this.spawn -= 1;
      } else {
        this.despawn -= 1;
        dx = dx * friction;
        dy = (dy + gravity) * friction;
        x += dx;
        y += dy;
      }

      return this;
    },
    reset: function() {
      x = context.canvas.width / 2 - size / 2;
      y = context.canvas.height;
      dx = -speed * Math.sin((angle * Math.PI) / 180);
      dy = -speed * Math.cos((angle * Math.PI) / 180);
      this.spawn = spawn || 0;
      this.despawn = despawn;

      return this;
    }
  };
};

export { actor };
