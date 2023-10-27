<template>
  <section class="flex justify-around flex-wrap">
    <div class="flex gap-10">
      <div class="page-container" v-for="page in pages">
        <router-link :to="page.path">
          <h1
            class="font-bold text-lg leading-22 uppercase text-gray-600 py-9 hover:text-orange-500 title-section"
            :class="{ 'text-orange-500': $route.path === page.path }"
          >
            {{ page.name }}
          </h1>
        </router-link>
      </div>
    </div>
    <div class="flex py-9 justify-center items-center gap-2">
      <p class="text-gray-500 cursor-default font-light">Organizar por</p>
      <the-icon
        @click="organizeItems = !organizeItems"
        class="text-gray-500 cursor-pointer"
        icon="fas fa-chevron-down"
      ></the-icon>
    </div>
    <div
      class="flex absolute w-30 h-15 bg-slate-200 top-40 right-5 rounded-md shadow-md cursor-default"
      v-if="organizeItems"
      style="white-space: nowrap"
    >
      <div class="p-4 text-gray-500 text-xs">
        <p
          @click="organizeByHighestPrice"
          class="hover:border-b-2 border-orange-400"
        >
          Preço: Maior - Menor
        </p>
        <p
          @click="organizeByLowestPrice"
          class="hover:border-b-2 border-orange-400"
        >
          Preço: Menor - Maior
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import pages from "@/data/pages";
import TheIcon from "./atoms/TheIcon.vue";
import { useProductStore } from "@/stores/productsStore";
export default {
  name: "ProductsPage",
  data() {
    return {
      pages: pages,
      organizeItems: false,
    };
  },
  setup() {
    const productStore = useProductStore();
    return {
      productStore,
    };
  },
  components: {
    TheIcon,
  },
  methods: {
    async organizeByHighestPrice() {
      await this.getApiData();
      this.productStore.organizeProductsByHighestPrice();

      this.organizeItems = false;
    },
    async organizeByLowestPrice() {
      await this.getApiData();
      this.productStore.organizeProductsByLowestPrice();

      this.organizeItems = false;
    },
    async getApiData() {
      await this.productStore.fetchProducts();
    },
    closeDropdown() {
      this.organizeItems = false;
    },
    pageClickHandler(e: { target: any }) {
      if (!this.$el.contains(e.target)) {
        this.closeDropdown();
      }
    },
  },
  mounted() {
    window.addEventListener("click", this.pageClickHandler);
  },
  beforeDestroy() {
    window.removeEventListener("click", this.pageClickHandler);
  },
};
</script>

<style scoped>
@media (max-width: 378px) {
  h1 {
    text-align: center;
    justify-content: center;
    font-size: medium;
    padding: 8px;
  }
}
</style>
