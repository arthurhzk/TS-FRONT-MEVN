<template>
  <the-nav></the-nav>

  <router-view></router-view>
</template>

<script lang="ts">
import TheNav from "@/components/TheNav.vue";

export default {
  name: "App",
  components: {
    TheNav,
  },
};
</script>

<style scoped></style>
