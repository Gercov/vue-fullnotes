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
        :header="item.header"
        :date="item.date"
        :id="item.id"
        :index="idx"
      >
      </todo-item>
    </div>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem.vue";

export default {
  components: {
    TodoItem,
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
        header: this.todoName,
        id: Date.now(),
        date: new Date(),
        active: true,
        component: this.$route.meta.name,
      };

      this.$store.dispatch("createTodo", todo);
      this.todoName = "";
    },
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
  margin-bottom: 130px;
}
</style>
