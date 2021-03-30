<template>
  <div
    @click="toggle"
    v-bind:style="{
      backgroundColor: activeBackgroundColor,
      color: activeColor,
    }"
  >
    🙂 Click to toggle color 🙃
  </div>
</template>

<script>
export default {
  name: "HelloTayo",
  data() {
    return {
      activeBackgroundColor: "#ffcc00",
      activeColor: "black",
    };
  },
  methods: {
    toggle() {
      this.activeBackgroundColor =
        this.activeBackgroundColor === "black" ? "#ffcc00" : "black";
      this.activeColor = this.activeColor === "black" ? "#ffcc00" : "black";
      this.$store.commit("toggle");
    },
  },
};
</script>

<style scoped>
div {
  -color: #ffcc00;
  padding: 10px 15px;
  display: inline-block;
  border-radius: 2px;
}

.active {
  color: #ffcc00;
  background-color: black;
}
</style>
