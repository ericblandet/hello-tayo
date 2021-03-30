<template>
  <h2 @click="toggle" v-bind:class="{ active: isActive }">
    🙂 Click to toggle color 🙃
  </h2>
</template>

<script>
export default {
  name: "HelloTayo",
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggle() {
      this.isActive = !this.isActive;
      console.log(this.isActive);
    },
  },
};
</script>

<style scoped>
h2 {
  background-color: #ffcc00;
  padding: 10px 15px;
  display: inline-block;
  border-radius: 2px;
}

.active {
  color: #ffcc00;
  background-color: black;
}
</style>
