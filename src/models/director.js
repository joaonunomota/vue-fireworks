export function director(scene) {
  let action = "";

  const draw = function() {
    if (action === "play") {
      scene.update();
      scene.draw();
      window.requestAnimationFrame(draw);
    } else if (action === "stop") {
      scene.reset();
    }
  };

  return {
    play: function() {
      if (action !== "play") {
        action = "play";
        scene.resize();
        window.requestAnimationFrame(draw);
      }
    },
    pause: function() {
      action = "pause";
    },
    stop: function() {
      this.play();
      action = "stop";
    }
  };
}
