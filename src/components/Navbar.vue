<template>
  <div class="header container">
    <b-navbar>
      <template #brand>
        <b-navbar-item
          tag="router-link"
          :to="{ name: 'info' }"
          class="logo is-size-5-mobile"
        >
          FullNotes
        </b-navbar-item>
      </template>
      <template #end>
        <b-navbar-item tag="router-link" :to="{ name: 'notes' }" :exact="true">
          Notes
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ name: 'todos' }">
          To-Do
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ name: 'allitems' }">
          All
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ name: 'info' }">
          Info
        </b-navbar-item>
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
  margin-bottom: 90px;
}
</style>
