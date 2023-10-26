<template>
  <header>
    <nav class="h-20 bg-slate-50 flex items-center justify-around">
      <router-link to="/" class="cursor-pointer">
        <h1 class="saira text-4xl text-gray-600 hover:text-orange-500">
          Kunz Shoes
        </h1>
      </router-link>
      <div class="rounded-md px-4 py-2 bg-slate-50 flex">
        <input
          class="text-sm bg-slate-50"
          placeholder="Procurando por algo?"
          v-model="updateValue"
        />
        <the-icon icon="fas fa-search"></the-icon>
        <router-link to="/cart">
          <the-icon
            :class="{ 'text-orange-500': $route.path === '/cart' }"
            class="cursor-pointer ml-10"
            icon="fas fa-shopping-cart"
          ></the-icon>
        </router-link>
        <p class="ml-10 cursor-pointer hover:text-orange-500">Entrar</p>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import TheInput from "@/components/atoms/TheInput.vue";
import TheIcon from "@/components/atoms/TheIcon.vue";
import { useProductStore } from "@/stores/productsStore";
import type { Product } from "@/domain/Product";
export default {
  name: "TheNav",
  components: {
    TheInput,
    TheIcon,
  },
  emits: ["search"],
  setup() {
    const productsStore = useProductStore();
    return {
      productsStore,
    };
  },
  data() {
    return {
      updateValue: "" as any,
      items: [] as Product[],
    };
  },
  methods: {
    async getApiData() {
      await this.productsStore.fetchProducts();
      this.items = this.productsStore.products;
    },
    handleSearch() {
      this.productsStore.searchQuery = this.updateValue;
      this.getApiData();
    },
  },
};
</script>

<style scoped>
.saira {
  font-family: "Saira Stencil One", cursive;
}
</style>
