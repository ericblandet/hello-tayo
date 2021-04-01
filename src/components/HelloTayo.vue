<template>
  <div>
    <div
      @click="toggle"
      v-bind:style="{
        backgroundColor: activeBackgroundColor,
        color: activeColor,
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
      activeBackgroundColor: this.$store.state.activeBackgroundColor,
      activeColor: this.$store.state.activeColor,
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
