<template>
  <div>
    <div
      @click="toggle"
      v-bind:style="{
        backgroundColor: $store.state.activeBackgroundColor,
        color: this.$store.state.activeColor,
      }"
    >
      🙂 Click to toggle color 🙃
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloTayo",
  data() {
    return {
      activeBackgroundColor: "black",
      activeColor: "#ffcc00",
    };
  },
  methods: {
    toggle() {
      this.$store.commit("toggle");
      this.activeBackgroundColor = this.$store.state.activeBackgroundColor;
      this.activeColor = this.$store.state.activeColor;
    },
  },
};
</script>

<style scoped>
div {
  padding: 10px 15px;
  display: inline-block;
  border-radius: 2px;
  cursor: pointer;
}
</style>
