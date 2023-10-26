import type { Product } from "@/domain/Product";
import { defineStore } from "pinia";
import axios from "axios";

export const useProductStore = defineStore("products", {
  state: () => ({
    products: [] as Product[],
    searchQuery: "",
    cartItems: [] as Product[],
  }),
  actions: {
    async fetchProducts() {
      const response = await axios.get("http://localhost:8000/api/products");
      this.products = response.data;
    },
    addToCart(product: Product) {
      if (this.cartItems.find((item) => item._id === product._id)) {
        return;
      } else {
        this.cartItems.push(product);
      }
    },
    removeFromCart(product: Product) {
      const index = this.cartItems.indexOf(product);
      if (index !== -1) {
        this.cartItems.splice(index, 1);
      }
    },
    organizeProductsByHighestPrice(): Product[] {
      this.products.sort((a, b) => b.price - a.price);
      return this.products;
    },
    organizeProductsByLowestPrice(): Product[] {
      this.products.sort((a, b) => a.price - b.price);
      return this.products;
    },
  },
  getters: {
    filteredProducts(): Product[] {
      return this.products.filter((product) =>
        product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
});
