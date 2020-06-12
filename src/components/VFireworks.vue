<template>
  <div ref="container">
    <canvas id="overlay" ref="overlay"></canvas>
    <slot :play="play" :pause="pause" :stop="stop"></slot>
  </div>
</template>

<script>
export default {
  name: "VFireworks",
  data: () => ({
    context: null,
    freeze: false,
  }),
  mounted: function() {
    if (this.$refs.overlay !== undefined) {
      this.context = this.$refs.overlay.getContext("2d");
    }
  },
  methods: {
    draw: function(timestamp) {
      if (this.freeze) {
        this.freeze = false;
        return;
      }

      if (this.$refs.container !== undefined) {
        this.context.canvas.height = this.$refs.container.clientHeight;
        this.context.canvas.width = this.$refs.container.clientWidth;
      }

      this.clear();
      this.item.draw(this.context);

      window.requestAnimationFrame(this.draw);
    },
    play: function() {
      this.freeze = false;
      window.requestAnimationFrame(this.draw);
    },
    pause: function() {
      this.freeze = true;
    },
    stop: function() {
      this.freeze = true;
      this.clear();
    },
    clear: function() {
      this.context.clearRect(
        0,
        0,
        this.context.canvas.width,
        this.context.canvas.height
      );
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
