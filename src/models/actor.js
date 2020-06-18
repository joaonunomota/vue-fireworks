const actor = (context, style, angle, speed) => {
  const size = 20,
    color = "white",
    friction = 0.98,
    gravity = 0.03;
  let x = context.canvas.width / 2 - size / 2,
    y = context.canvas.height / 2 - size / 2,
    dx = speed * Math.cos((angle * Math.PI) / 180),
    dy = speed * Math.sin((angle * Math.PI) / 180);

  return {
    timer: 100,
    draw: function() {
      context.fillStyle = color;
      if (style === "square") {
        context.fillRect(x, y, size, size);
      } else {
        context.beginPath();
        context.arc(x, y, size / 2, 0, Math.PI * 2);
        context.fill();
      }

      return this;
    },
    update: function() {
      dx = dx * friction;
      dy = (dy + gravity) * friction;
      x += dx;
      y += dy;
      this.timer -= 1;

      return this;
    },
    reset: function() {
      x = context.canvas.width / 2 - size / 2;
      y = context.canvas.height / 2 - size / 2;
      dx = speed * Math.cos((angle * Math.PI) / 180);
      dy = speed * Math.sin((angle * Math.PI) / 180);
      this.timer = 100;

      return this;
    }
  };
};

export { actor };
