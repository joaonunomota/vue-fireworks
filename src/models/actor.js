const actor = (context, style, angle, speed) => {
  const size = 5,
    color = "white";
  let x = context.canvas.width / 2 - size / 2,
    y = context.canvas.height / 2 - size / 2,
    dx = speed * Math.cos((angle * Math.PI) / 180),
    dy = speed * Math.sin((angle * Math.PI) / 180);

  return {
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
      x += dx;
      y += dy;

      return this;
    },
    reset: function() {
      x = context.canvas.width / 2 - size / 2;
      y = context.canvas.height / 2 - size / 2;
      dx = speed * Math.cos((angle * Math.PI) / 180);
      dy = speed * Math.sin((angle * Math.PI) / 180);

      return this;
    }
  };
};

export { actor };
