<template>
  <header>
    <nav class="h-20 bg-white flex items-center justify-around">
      <router-link to="/">
        <h1 class="saira text-4xl text-gray-600">Kunz Shoes</h1>
      </router-link>
      <div class="rounded-md px-4 py-2">
        <the-input placeholder="Procurando por algo?" class="text-sm"
          ><the-icon icon="fas fa-search"></the-icon
        ></the-input>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import TheInput from "@/components/atoms/TheInput.vue";
import TheIcon from "@/components/atoms/TheIcon.vue";
export default {
  name: "TheNav",
  components: {
    TheInput,
    TheIcon,
  },
};
</script>

<style scoped>
.saira {
  font-family: "Saira Stencil One", cursive;
}
</style>
