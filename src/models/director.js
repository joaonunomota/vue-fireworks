export function director(scene) {
  let action = "",
    playPressed = null,
    pausePressed = null;

  const draw = function(timestamp) {
    if (action === "play") {
      if (playPressed === null) {
        playPressed = timestamp;
      }

      if (pausePressed !== null) {
        playPressed += timestamp - pausePressed;
        pausePressed = null;
      }

      scene.draw((60 * (timestamp - playPressed)) / 1000);
      window.requestAnimationFrame(draw);
    } else if (action === "stop") {
      playPressed = null;
      scene.reset();
    } else {
      pausePressed = timestamp;
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
