<template>
  <section>
    <the-section> </the-section>

    <div class="grid grid-cols-4">
      <the-card
        v-for="item in items"
        :product="item"
        :key="item._id"
      ></the-card>
    </div>
  </section>
</template>

<script lang="ts">
import TheSection from "@/components/TheSection.vue";
import TheCard from "@/components/TheCard.vue";
import TheInput from "@/components/atoms/TheInput.vue";
import axios from "axios";
import type { Product } from "@/domain/Product";
import { useProductStore } from "@/stores/productsStore";
export default {
  components: {
    TheSection,
    TheCard,
    TheInput,
  },
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
  },
  mounted() {
    this.getApiData();
  },
};
</script>
