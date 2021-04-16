<template>
  <div class="columns">
    <div class="column is-half is-offset-one-quarter">
      <form @submit.prevent="submitHandler">
        <div class="title">Создайте свою заметку:</div>
        <div class="column box">
          <b-field label="Заголовок">
            <b-input
              v-model.trim="header"
              placeholder="Введите сюда любой заголовок"
            ></b-input>
          </b-field>
          <b-field label="Основной текст">
            <b-input
              v-model.trim="main"
              validation-message="Лох"
              maxlength="1000"
              type="textarea"
              placeholder="Введите сюда любой текст"
            ></b-input>
          </b-field>
          <b-button native-type="submit" :disabled="!header.length">Создать</b-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      header: "",
      main: "",
    };
  },
  methods: {
    submitHandler() {
      if (!this.header.length) return;

      const note = {
        header: this.header,
        main: this.main,
        date: new Date(),
      };
      console.log(note);
    },
  },

};
</script>