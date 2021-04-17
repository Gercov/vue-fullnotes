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
    <!-- <div v-if="notes.length">
      <div class="title is-size-4-mobile is-2">Ваши заметки:</div>
      <note-item
        v-for="item in notes"
        :key="item.id"
        :headerNote="item.header"
        :mainNote="item.main"
        :dateNote="item.date"
        @delete="deleteNote(item.id)"
      >
      </note-item>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoName: "",
    };
  },
  methods: {
    submitTodoHandler() {
      if(!this.todoName.length) return

      const todo = {
        todoName: this.todoName,
        id: Date.now(),
        active: true,
      }

      console.log(todo)
    }
  }
};
</script>