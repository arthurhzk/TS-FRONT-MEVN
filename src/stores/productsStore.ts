import type { Product } from "@/domain/Product";
import { defineStore } from "pinia";
import axios from "axios";

export const useProductStore = defineStore("products", {
  state: () => ({
    products: [] as Product[],
  }),
  actions: {
    async fetchProducts() {
      const response = await axios.get("http://localhost:8000/api/products");
      this.products = response.data;
      console.log(this.products);
    },
  },
});
