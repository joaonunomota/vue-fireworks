const actor = context => {
  let x = 0,
    y = 0,
    size = 5,
    color = "white";

  const a = {
    draw: () => {
      context.beginPath();
      context.arc(x, y, size, 0, Math.PI * 2);
      context.fillStyle = color;
      context.fill();

      return a;
    },
    update: () => {
      x = y += 1;

      return a;
    },
    reset: () => {
      x = 0;
      y = 0;
      size = 5;
      color = "white";

      return a;
    }
  };

  return a;
};

export { actor };
