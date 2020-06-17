const director = (context, container, actors) => {
  let action = "";

  const draw = function() {
    if (container !== undefined) {
      context.canvas.height = container.clientHeight;
      context.canvas.width = container.clientWidth;
    }

    if (action === "stop") {
      actors.forEach(a => a.reset());
    } else {
      let live = actors.filter(a => a.timer > 0);

      action === "pause"
        ? live.forEach(a => a.draw())
        : live.forEach(a => a.update().draw());

      if (live.length > 0) {
        window.requestAnimationFrame(draw);
      }
    }
  };

  return {
    play: function() {
      if (action !== "play" && action !== "pause") {
        action = "play";
        window.requestAnimationFrame(draw);
      } else {
        action = "play";
      }
    },
    pause: function() {
      if (action !== "stop") {
        action = "pause";
      }
    },
    stop: function() {
      action = "stop";
    }
  };
};

export { director };
