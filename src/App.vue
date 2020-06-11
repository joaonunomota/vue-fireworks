<template>
  <v-fireworks v-slot="{ play, pause, stop }">
    <div id="app">
      <v-media-button action="play" @click="play" />
      <v-media-button action="pause" @click="pause" />
      <v-media-button action="stop" @click="stop" />
    </div>
  </v-fireworks>
</template>

<script>
import { VFireworks, VMediaButton } from "./components";

export default {
  name: "App",
  components: {
    VFireworks,
    VMediaButton
  }
};
</script>

<style>
body {
  margin: 0;
}

#app {
  background: #102542;
  height: 100vh;
  width: 100vw;
  font-family: "Open Sans", sans-serif;
  text-align: center;
}

button {
  background: transparent;
  color: white;
  margin: 30px;
  border: 0 none;
  padding: 0.5em 1em;
  cursor: pointer;
}
</style>
