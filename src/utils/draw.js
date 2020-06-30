export function circle(context, actor) {
  context.fillStyle = actor.color;
  context.beginPath();
  context.arc(actor.x, actor.y, actor.size / 2, 0, Math.PI * 2);
  context.fill();
}

export function square(context, actor) {
  context.fillStyle = actor.color;
  context.fillRect(actor.x, actor.y, actor.size, actor.size);
}

export function clear(context) {
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
}
