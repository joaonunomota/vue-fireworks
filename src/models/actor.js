const actor = (context, style) => {
  let x = 0,
    y = 0,
    size = 5,
    color = "white";

  return {
    draw: function () {
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
    update: function () {
      x = y += 1;

      return this;
    },
    reset: function () {
      x = 0;
      y = 0;
      size = 5;
      color = "white";

      return this;
    }
  };
};

export { actor };

