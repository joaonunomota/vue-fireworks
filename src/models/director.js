export function director(scene) {
  let action = "",
    start = null;

  const draw = function(timestamp) {
    if (action === "play") {
      if (start === null) {
        start = timestamp;
      }
      scene.update((60 * (timestamp - start)) / 1000);
      scene.draw();
      window.requestAnimationFrame(draw);
    } else if (action === "stop") {
      start = null;
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
