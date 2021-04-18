<template>
  <div class="content is-medium block box">
    <h1 class="is-size-4-mobile is-size-3">{{ header }}</h1>
    <p v-html="main"></p>
    <div class="level is-mobile">
      <div class="is-size-7">
        {{ date | formatDate("datetime") }}
      </div>
      <b-button
        @click="deleteNote()"
        type="button is-danger is-small-mobile"
        outlined
        >Удалить</b-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "NoteItem",
  props: ["header", "main", "date", "id"],
  methods: {
    deleteNote() {
      this.$store.dispatch("deleteNote", this.id);
    },
  },
};
</script>

<style></style>
