<template>
  <canvas ref="canvas">
    <slot></slot>
  </canvas>
</template>

<script>
export default {
  name: "VFireworks",
  data: () => ({
    context: null
  }),
  mounted: function() {
    if (this.$refs.canvas !== undefined) {
      this.context = this.$refs.canvas.getContext("2d");
    }
  }
};
</script>
