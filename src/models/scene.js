import { circle, clear, square } from "../utils";

export function scene(overlay, container, actors, style) {
  const scale = window.devicePixelRatio,
    context = overlay.getContext("2d"),
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
    update: function() {
      this.actors.forEach(a => {
        a.x += a.dx;
        a.y += a.dy;
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
