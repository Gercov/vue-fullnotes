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
    },
    deleteNote(state, id) {
      state.notes = state.notes.filter(item => item.id != id)
      localStorage.setItem('notes', JSON.stringify(state.notes))
    }
  },
  actions: {
    createNote({commit}, note) {
      commit('createNote', note);
    },
    deleteNote({commit}, id) {
      commit('deleteNote', id)
    }
  },
  getters: {
    notes: s => s.notes
  },
  modules: {},
});
