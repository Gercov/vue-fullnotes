<template>
  <div>
    <div class="title is-size-4-mobile is-2">Все ваши листы:</div>
    <note-item
      v-for="(item, idx) in AllNotes"
      :key="idx"
      :headerNote="item.header"
      :mainNote="item.main"
      :dateNote="item.date"
      :idNote="item.id"
    >
    </note-item>
    <todo-item
      v-for="(item, idx) in AllTodos"
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
</template>

<script>
import TodoItem from "@/components/TodoItem.vue";
import NoteItem from "@/components/NoteItem.vue";

export default {
  name: "AllItems",
  components: {
    TodoItem,
    NoteItem,
  },
  computed: {
    AllTodos() {
      const ActiveTodos = this.$store.getters.todos.filter(todo => todo.active === true)
      return ActiveTodos
    },
    AllNotes() {
      return this.$store.getters.notes;
    },
  },
};
</script>