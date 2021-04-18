<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <div
        class="column is-10-mobile is-offset-1-mobile is-10-touch is-offset-1-touch is-8 is-offset-2"
      >
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

<style></style>
