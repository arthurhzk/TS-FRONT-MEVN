<template>
  <section></section>
</template>

<script lang="ts">
import axios from "axios";
export default {
  name: "ProductDetailPage",
  methods: {
    async getProductById() {
      const productId = this.$route.params.id;
      const apiUrl = `http://localhost:8000/api/products/${productId}`;
      try {
        const response = await axios.get(apiUrl);
        const product = response.data;
        console.log(product);
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
