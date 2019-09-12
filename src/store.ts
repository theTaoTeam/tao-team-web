import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    backgroundColor: '#151515',
  },
  mutations: {
    setAppBackgroundColor(state, newColor: string): void {
      state.backgroundColor = newColor;
    },
    resetAppBackgroundColor(state, newColor: string): void {
      state.backgroundColor = '#151515';
    },
  },
  actions: {},
});
