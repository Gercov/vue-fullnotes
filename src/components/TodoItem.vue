<template>
  <div
    class="content is-medium block box"
    :class="{ 'has-background-light': completed }"
  >
    <div>
      <div class="level-left mb-2">
        <b-checkbox v-model="completed"> </b-checkbox>
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
  watch: {
    completed: () => {
      console.log(JSON.parse(localStorage.todos[0]))
      // JSON.stringify(localStorage.todos[this.index].active = val)
    }
  }
};
</script>