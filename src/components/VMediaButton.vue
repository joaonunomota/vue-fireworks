<template>
  <input
    :alt="action"
    :class="action"
    :disabled="disabled"
    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
    type="image"
    @click="$emit('click')"
  />
</template>

<script>
export default {
  name: "VMediaButton",
  props: {
    action: {
      type: String,
      required: true,
      validator: value =>
        value !== undefined && ["play", "pause", "stop"].indexOf(value) !== -1
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
      validator: value => value !== undefined
    }
  }
};
</script>

<style>
input[type="image"] {
  height: 32px;
  width: 32px;
  margin: 32px;
  background-image: url("../assets/images/buttons.svg");
  background-size: 300% 100%;
}

input[type="image"].play {
  background-position: 0 0;
}

input[type="image"].pause {
  background-position: 50% 0;
}

input[type="image"].stop {
  background-position: 100% 0;
}
</style>
