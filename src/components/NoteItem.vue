<template>
  <div class="content is-medium block box">
    <h1 class="is-size-4-mobile is-size-3">{{ headerNote }}</h1>
    <p>
      {{ mainNote }}
    </p>
    <div class="level is-mobile">
      <div class="is-size-7">
        {{ dateNote | formatDate("datetime") }}
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
  name: "NoteItem",
  props: ["headerNote", "mainNote", "dateNote"],
};
</script>

<style>
</style>