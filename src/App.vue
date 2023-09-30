<template>
  <the-nav></the-nav>

  <router-view></router-view>
</template>

<script lang="ts">
import TheNav from "@/components/TheNav.vue";
import type { Product } from "@/domain/Product";
export default {
  name: "App",
  components: {
    TheNav,
  },
  data() {
    return {
      items: [] as Product[],
    };
  },
};
</script>

<style scoped></style>
