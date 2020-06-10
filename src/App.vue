<template>
  <v-fireworks v-slot="{ start }">
    <div id="app">
      <button @click="start">Press Me</button>
    </div>
  </v-fireworks>
</template>

<script>
import { VFireworks } from "./components";

export default {
  name: "App",
  components: {
    VFireworks
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
