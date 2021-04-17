<template>
  <div>
    <form @submit.prevent="submitNotesHandler" class="form">
      <div class="title is-size-4-mobile is-2">Создайте новую заметку:</div>
      <div class="column box">
        <b-field label="Заголовок">
          <b-input
            v-model.trim="header"
            placeholder="Введите сюда любой заголовок"
          ></b-input>
        </b-field>
        <b-field label="Основной текст">
          <b-input
            v-model="main"
            maxlength="1000"
            type="textarea"
            placeholder="Введите сюда любой текст"
          ></b-input>
        </b-field>
        <b-button native-type="submit" :disabled="!header.length"
          >Создать</b-button
        >
      </div>
    </form>
    <div v-if="notes.length">
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
    </div>
  </div>
</template>

<script>
import NoteItem from "@/components/NoteItem";

export default {
  components: {
    NoteItem,
  },
  data() {
    return {
      header: "",
      main: "",
    };
  },
  methods: {
    submitNotesHandler() {
      if (!this.header.length) return;

      const note = {
        header: this.header,
        main: this.main.split("\n").join("<br>"),
        date: new Date(),
        id: Date.now(),
      };

      this.$store.dispatch("createNote", note);
      this.header = this.main = "";
    },
    deleteNote(id) {
      this.$store.dispatch("deleteNote", id);
    },
  },
  computed: {
    notes() {
      return this.$store.getters.notes;
    },
  },
};
</script>

<style scoped>
.form {
  margin-bottom: 150px;
}

.chat-bubble {
  white-space: pre !important;
  max-width: 10% !important;
  padding: 2px 9px 2px 9px !important;
  height: auto !important;
  text-align: left !important;
}
</style> 
