<template>
  <section>
    <img
      class="w-96 h-96 rounded-lg mt-20 ml-40"
      :src="product.image"
      alt="Product Image"
    />
    <h1>{{ product.name }}</h1>
  </section>
</template>

<script lang="ts">
import axios from "axios";
interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}
export default {
  name: "ProductDetailPage",
  data() {
    return {
      product: {} as Product,
    };
  },
  methods: {
    async getProductById() {
      const productId = this.$route.params.id;
      const apiUrl = `http://localhost:8000/api/products/${productId}`;
      try {
        const response = await axios.get(apiUrl);
        this.product = response.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.getProductById();
  },
};
</script>
