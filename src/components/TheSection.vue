<template>
  <section class="flex justify-center">
    <div class="flex gap-10">
      <div v-for="page in pages">
        <router-link :to="page.path">
          <h1
            class="font-bold text-lg leading-22 uppercase text-gray-600 py-9 hover:text-orange-500"
            :class="{ 'text-orange-500': $route.path === page.path }"
          >
            {{ page.name }}
          </h1>
        </router-link>
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

<style scoped></style>
