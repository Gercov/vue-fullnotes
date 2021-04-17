<template>
  <div class="content is-medium block box">
    <h1 class="is-size-4-mobile is-size-3">{{ headerNote }}</h1>
    <p>
      {{ mainNote }}
    </p>
    <div class="level is-mobile">
      <div class="is-size-7">
        {{ dateNote | date('datetime') }}
      </div>
      <b-button @click="$emit('delete')" type="button is-danger is-small-mobile" outlined>Удалить</b-button>
    </div>

    <!-- <h2>Second level</h2>
    <p>
      Curabitur accumsan turpis pharetra
      <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi,
      sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis.
      Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis.
      Donec at dignissim dui. Ut et neque nisl.
    </p>
    <ul>
      <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
      <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
      <li>
        Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.
      </li>
      <li>Ut non enim metus.</li>
    </ul> -->
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