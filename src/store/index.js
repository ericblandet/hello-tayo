import Vue from "vue";
import Vuex from "vuex";
import createMultiTabState from "vuex-multi-tab-state";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeBackgroundColor: "#ffcc00",
    activeColor: "black",
  },
  mutations: {
    toggle(state) {
      state.activeBackgroundColor =
        state.activeBackgroundColor === "black" ? "#ffcc00" : "black";
      state.activeColor = state.activeColor === "black" ? "#ffcc00" : "black";
    },
  },
  actions: {
    toggle(context) {
      context.commit("toggle");
    },
  },
  modules: {},
  plugins: [
    createMultiTabState({
      statesPaths: ["activeBackgroundColor", "activeColor"],
    }),
  ],
});
