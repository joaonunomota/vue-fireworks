import { circle, clear, square } from "../utils";

export function scene(overlay, container, actors, style) {
  const scale = window.devicePixelRatio,
    context = overlay.getContext("2d"),
    friction = 0.98,
    gravity = 2,
    draw =
      style === "square" ? a => square(context, a) : a => circle(context, a);

  return {
    actors: actors,
    draw: function(steps) {
      clear(context);
      this.actors
        .filter(a => steps >= a.spawn && steps < a.despawn)
        .forEach(a => {
          const angle = (a.angle * Math.PI) / 180,
            actorSteps = steps - a.spawn,
            distance =
              (a.speed * (Math.pow(friction, actorSteps + 1) - friction)) /
              (friction - 1);
          a.x = a.xs + Math.sin(angle) * distance;
          a.y = a.ys + Math.cos(angle) * distance - actorSteps * gravity;
          draw(a);
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
