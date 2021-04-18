<template>
  <div
    class="content is-medium block box"
    :class="{ 'has-background-light': status }"
  >
    <div>
      <div class="level-left mb-2">
        <b-checkbox v-model="status"></b-checkbox>
        <h1 class="is-size-4-mobile is-size-3 m-0">{{ headerTodo }}</h1>
      </div>
    </div>
    <div class="level is-mobile">
      <div class="is-size-7">
        {{ dateTodo | formatDate("datetime") }}
      </div>
      <b-button
        @click="$emit('delete')"
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
  props: ["headerTodo", "dateTodo", "id", "active", "index"],
  data() {
    return {
      completed: false,
    };
  },
  computed: {
    status: {
      get: function () {
        let todos = this.$store.getters.todos
        return !todos[this.index].active
      },
      set: function () {
        this.$store.dispatch("changeTodoStatus", this.id);
      }
    }
  }
};
</script>