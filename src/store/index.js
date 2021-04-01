import Vue from "vue";
import Vuex from "vuex";
import { colors } from "../../constants";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeBackgroundColor: colors.primary,
    activeColor: colors.black,
  },
  mutations: {
    toggle(state) {
      state.activeBackgroundColor =
        state.activeBackgroundColor === colors.black
          ? colors.primary
          : colors.black;
      state.activeColor =
        state.activeColor === colors.black ? colors.primary : colors.black;
    },
  },
  actions: {
    toggle(context) {
      context.commit("toggle");
    },
  },
  modules: {},
});
