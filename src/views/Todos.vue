<template>
  <div>
    <form @submit.prevent="submitTodoHandler" class="form">
      <div class="title is-size-4-mobile is-2">Создайте новую задачу:</div>
      <div class="column box">
        <b-field label="Название">
          <b-input
            v-model.trim="todoName"
            placeholder="Введите сюда любое название"
          ></b-input>
        </b-field>
        <b-button native-type="submit" :disabled="!todoName.length"
          >Создать</b-button
        >
      </div>
    </form>
    <div v-if="todos.length">
      <div class="title is-size-4-mobile is-2">Ваши задачи:</div>
      <todo-item
        v-for="(item, idx) in todos"
        :key="item.id"
        :headerTodo="item.todoName"
        :dateTodo="item.date"
        :id="item.id"
        :status="item.active"
        :index="idx"
        @delete="deleteTodo(item.id)"
      >
      </todo-item>
    </div>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue';

export default {
  components: {
    TodoItem
  },
  data() {
    return {
      todoName: "",
    };
  },
  methods: {
    submitTodoHandler() {
      if (!this.todoName.length) return;

      const todo = {
        todoName: this.todoName,
        id: Date.now(),
        date: new Date(),
        active: true,
      };

      this.$store.dispatch("createTodo", todo);
      this.todoName = ""
    },
    deleteTodo(id) {
      this.$store.dispatch("deleteTodo", id)
    }
  },
  computed: {
    todos() {
      return this.$store.getters.todos;
    },
  },
};
</script>

<style scoped>
.form {
  margin-bottom: 150px;
}
</style>