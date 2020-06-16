<template>
  <div ref="container">
    <canvas id="overlay" ref="overlay"></canvas>
    <slot :play="play" :pause="pause" :stop="stop"></slot>
  </div>
</template>

<script>
import { actor, director } from "../models";

export default {
  name: "VFireworks",
  data: () => ({
    director: null
  }),
  mounted: function() {
    if ([this.$refs.overlay, this.$refs.container].indexOf(undefined) === -1) {
      const context = this.$refs.overlay.getContext("2d");
      this.director = director(context, this.$refs.container, [
        actor(context, "circle")
      ]);
    }
  },
  methods: {
    play: function() {
      this.director.play();
    },
    pause: function() {
      this.director.pause();
    },
    stop: function() {
      this.director.stop();
    }
  }
};
</script>

<style>
#overlay {
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
</style>
