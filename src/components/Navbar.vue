<template>
  <div class="header container">
    <b-navbar>
      <template #brand>
        <b-navbar-item class="logo"> FullNotes </b-navbar-item>
      </template>
      <template #end>
        <b-navbar-item href="#"> Notes </b-navbar-item>
        <b-navbar-item href="#"> To-Do </b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
  .logo {
    font-size: 30px;
  }

  .header {
    margin-bottom: 100px;
  }
</style>