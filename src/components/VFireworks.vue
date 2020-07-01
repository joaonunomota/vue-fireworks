<template>
  <div ref="container">
    <canvas id="overlay" ref="overlay"></canvas>
    <slot :play="play" :pause="pause" :stop="stop"></slot>
  </div>
</template>

<script>
import { actor, director, scene } from "../models";

export default {
  name: "VFireworks",
  data: () => ({
    director: null,
    scene: null
  }),
  mounted: function() {
    this.scene = scene(
      this.$refs.overlay,
      this.$refs.container,
      [actor(700, 700, 200, 20, 10)],
      "square"
    );
    this.director = director(this.scene);
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
  -moz-transform: scale(1, -1);
  -webkit-transform: scale(1, -1);
  -o-transform: scale(1, -1);
  transform: scale(1, -1);
  filter: FlipY;
}
</style>
