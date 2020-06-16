const director = (context, container, actors) => {
  let action = "";

  const draw = function() {
    if (container !== undefined) {
      context.canvas.height = container.clientHeight;
      context.canvas.width = container.clientWidth;
    }

    if (action === "pause") {
      actors.forEach(a => a.draw());
      window.requestAnimationFrame(draw);
    } else if (action === "stop") {
      actors.forEach(a => a.reset());
    } else {
      actors.forEach(a => a.update().draw());
      window.requestAnimationFrame(draw);
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
