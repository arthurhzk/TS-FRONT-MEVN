<template>
  <section class="flex justify-around">
    <div class="flex gap-10">
      <div v-for="page in pages">
        <router-link :to="page.path">
          <h1
            class="saira font-bold text-lg leading-22 uppercase text-gray-600 py-9"
          >
            {{ page.name }}
          </h1></router-link
        >
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import pages from "@/data/pages";
export default {
  name: "ProductsPage",
  data() {
    return {
      pages: pages,
    };
  },
};
</script>

<style scoped>
.saira {
  font-family: "Saira", sans-serif;
}
</style>
