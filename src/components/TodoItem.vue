<template>
  <div
    class="content is-medium block box"
    :class="{ 'has-background-light': status }"
  >
    <div>
      <div class="level-left mb-2">
        <b-checkbox v-model="status"></b-checkbox>
        <h1 class="is-size-4-mobile is-size-3 m-0">{{ header }}</h1>
      </div>
    </div>
    <div class="level is-mobile">
      <div class="is-size-7">
        {{ date | formatDate("datetime") }}
      </div>
      <b-button
        @click="deleteTodo()"
        type="button is-danger is-small-mobile"
        outlined
        >Удалить</b-button
      >
    </div>
  </div>
</template>

<script>

export default {
  name: "TodoItem",
  props: ["header", "date", "id"],
  computed: {
    status: {
      get: function () {
        let todo = this.$store.getters.todos.filter(item => item.id === this.id);
        return !todo[0].active;
      },
      set: function () {
        this.$store.dispatch("changeTodoStatus", this.id);
      },
    },
  },
  methods: {
    deleteTodo() {
      this.$store.dispatch("deleteTodo", this.id);
    },
  },
};
</script>
