import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notes: JSON.parse(localStorage.getItem('notes') || '[]')
  },
  mutations: {
    createNote(state, note) {
      state.notes.unshift(note);

      localStorage.setItem('notes', JSON.stringify(state.notes))
    }
  },
  actions: {
    createNote({commit}, note) {
      commit('createNote', note);
    }
  },
  getters: {
    notes: s => s.notes
  },
  modules: {},
});
