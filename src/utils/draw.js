const circle = function(context, actor) {
  context.fillStyle = actor.color;
  context.beginPath();
  context.arc(actor.x, actor.y, actor.size / 2, 0, Math.PI * 2);
  context.fill();
};

const square = function(context, actor) {
  context.fillStyle = actor.color;
  context.fillRect(actor.x, actor.y, actor.size, actor.size);
};

const clear = function(context) {
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
};

export { circle, clear, square };
