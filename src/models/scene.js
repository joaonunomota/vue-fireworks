import { circle, clear, square } from "../utils";

export function scene(overlay, container, actors, style) {
  const scale = window.devicePixelRatio,
    context = overlay.getContext("2d"),
    friction = 0.98,
    gravity = 2,
    draw = (function() {
      switch (style) {
        case "square":
          return function() {
            clear(context);
            this.actors.forEach(a => square(context, a));
          };
        case "circle":
        default:
          return function() {
            clear(context);
            this.actors.forEach(a => circle(context, a));
          };
      }
    })();

  return {
    actors: actors,
    draw: draw,
    update: function(steps) {
      this.actors.forEach(a => {
        const angle = (a.angle * Math.PI) / 180,
          distance =
            (a.speed * (Math.pow(friction, steps + 1) - friction)) /
            (friction - 1);
        a.x = a.xs + Math.sin(angle) * distance;
        a.y = a.ys + Math.cos(angle) * distance + steps * gravity;
      });
    },
    reset: function() {
      clear(context);
      this.actors.forEach(a => a.reset());
    },
    resize: function() {
      overlay.height = Math.floor(container.clientHeight * scale);
      overlay.width = Math.floor(container.clientWidth * scale);
      context.scale(scale, scale);
    }
  };
}
