<template>
  <div class="content is-medium block box">
    <h1 class="is-size-4-mobile is-size-3">{{ headerNote }}</h1>
    <p v-html="mainNote"></p>
    <div class="level is-mobile">
      <div class="is-size-7">
        {{ dateNote | formatDate("datetime") }}
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
  props: ["headerNote", "mainNote", "idNote", "dateNote"],
  methods: {
    deleteNote() {
      console.log('Note: ', this.idNote)
      this.$store.dispatch("deleteNote", this.idNote);
    },
  },
};
</script>

<style></style>
