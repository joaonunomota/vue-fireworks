const director = (overlay, container, actors) => {
  let action = "";

  const resize = function() {
    if (container !== undefined) {
      let scale = window.devicePixelRatio;

      overlay.height = Math.floor(container.clientHeight * scale);
      overlay.width = Math.floor(container.clientWidth * scale);
    }
  };

  const draw = function() {
    resize();
    let live = actors.filter(a => a.despawn > 0);

    if (action !== "stop" && live.length > 0) {
      action === "pause"
        ? live.forEach(a => a.draw())
        : live.forEach(a => a.update().draw());

      window.requestAnimationFrame(draw);
    } else {
      action = "stop";
      actors.forEach(a => a.reset());
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
