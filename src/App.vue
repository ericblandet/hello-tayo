<template>
  <div id="app">
    <h1>👋 Hello Etienne 👋</h1>
    <HelloTayo />
  </div>
</template>

<script>
import HelloTayo from "./components/HelloTayo.vue";

export default {
  name: "App",
  components: {
    HelloTayo,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
