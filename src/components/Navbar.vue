<template>
  <nav class="orange darken-4">
    <div class="nav-wrapper container">
      <a href="#" class="brand-logo">FullNotes</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="sass.html">Notes</a></li>
        <li><a href="sass.html">To-Do</a></li>
        <li><a href="badges.html"></a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
  #nav-mobile a {
    font-size: 18px;
  }
</style>