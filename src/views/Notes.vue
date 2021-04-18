<template>
  <div>
    <div v-if="helperSeen" class="notification is-info is-light" >
      <button class="delete" @click="disableHelper"></button>
      Все свои заметки и задачи вы можете посмотреть во вкладке <strong>All</strong>
    </div>
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
        v-for="(item, idx) in notes"
        :key="idx"
        :header="item.header"
        :main="item.main"
        :date="item.date"
        :id="item.id"
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
      helperSeen: true,
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
        component: this.$route.meta.name,
      };

      this.$store.dispatch("createNote", note);
      this.header = this.main = "";
    },
    disableHelper() {
      this.helperSeen = localStorage.ALL_HELPER = false
    }
  },
  computed: {
    notes() {
      return this.$store.getters.notes;
    }
  },
  mounted() {
    if(localStorage.ALL_HELPER) {
      this.helperSeen = JSON.parse(localStorage.ALL_HELPER)
    } 
  }
};
</script>

<style scoped>
.form {
  margin-bottom: 130px;
}
</style>
