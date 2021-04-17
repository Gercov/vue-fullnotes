<template>
  <div class="header container">
    <b-navbar>
      <template #brand>
        <b-navbar-item
          tag="router-link"
          :to="{ name: 'home' }"
          class="logo is-size-5-mobile"
        >
          FullNotes
        </b-navbar-item>
      </template>
      <template #end>
        <b-navbar-item tag="router-link" :to="{ name: 'notes' }">
          Notes
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ name: 'todos' }">
          To-Do
        </b-navbar-item>
        <b-navbar-item href="#"> All </b-navbar-item>
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
