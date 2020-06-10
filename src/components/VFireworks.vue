<template>
  <div ref="container">
    <canvas id="overlay" ref="overlay"></canvas>
    <slot :start="draw"></slot>
  </div>
</template>

<script>
export default {
  name: "VFireworks",
  data: () => ({
    context: null
  }),
  mounted: function() {
    if (this.$refs.overlay !== undefined) {
      this.context = this.$refs.overlay.getContext("2d");
    }
  },
  methods: {
    draw: function() {
      if (this.$refs.container !== undefined) {
        this.context.canvas.height = this.$refs.container.clientHeight;
        this.context.canvas.width = this.$refs.container.clientWidth;
      }
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
