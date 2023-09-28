<template>
  <header>
    <nav class="h-20 bg-white flex items-center">
      <router-link to="/">
        <h1 class="saira text-4xl text-gray-600">Kunz Shoes</h1>
      </router-link>
    </nav>
  </header>
</template>

<script lang="ts">
export default {
  name: "TheNav",
};
</script>

<style scoped>
.saira {
  font-family: "Saira Stencil One", cursive;
}
</style>
