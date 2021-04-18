import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notes: JSON.parse(localStorage.notes || "[]"),
    todos: JSON.parse(localStorage.todos || "[]"),
  },
  mutations: {
    createNote(state, note) {
      state.notes.unshift(note);
      localStorage.setItem("notes", JSON.stringify(state.notes));
    },
    deleteNote(state, id) {
      state.notes = state.notes.filter((item) => item.id != id);
      localStorage.setItem("notes", JSON.stringify(state.notes));
    },
    deleteTodo(state, id) {
      state.todos = state.todos.filter((item) => item.id != id);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    createTodo(state, todo) {
      state.todos.unshift(todo);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    changeTodoStatus(state, id) {
      let index = state.todos.findIndex((item) => item.id == id);
      Vue.set(state.todos[index], "active", !state.todos[index].active);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
  actions: {
    createNote({ commit }, note) {
      commit("createNote", note);
    },
    deleteNote({ commit }, id) {
      commit("deleteNote", id);
    },
    createTodo({ commit }, todo) {
      commit("createTodo", todo);
    },
    deleteTodo({ commit }, id) {
      commit("deleteTodo", id);
    },
    changeTodoStatus({ commit }, id) {
      commit("changeTodoStatus", id);
    },
  },
  getters: {
    notes: (s) => s.notes,
    todos: (s) => s.todos,
  },
});
