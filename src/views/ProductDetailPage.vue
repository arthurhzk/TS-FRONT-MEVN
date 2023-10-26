<template>
  <section class="flex">
    <img
      class="w-96 h-96 rounded-lg mt-20 ml-40"
      :src="product.image"
      alt="Product Image"
    />
    <div class="ml-8">
      <h1 class="text-3xl font-light leading-9 mt-20 text-gray-600">
        {{ product.name }}
      </h1>
      <h1 class="text-lg font-bold mt-10 text-gray-600">
        R$ {{ product.price }},00.
      </h1>
      <p class="mt-10 font-bold leading-9 text-gray-600">
        *Frete de R$40,00 para todo o Brasil. Grátis para compras acima de
        R$900,00.
      </p>
      <the-button
        v-if="!productOnCart"
        class="style mt-10 mb-10"
        @click="addCartItem"
      >
        Adicionar ao carrinho
      </the-button>
      <p style="color: green" v-if="productAdded">
        Produto adicionado ao carrinho com sucesso!
      </p>
      <p class="text-gray-600 font-bold leading-9">DESCRIÇÃO</p>
      <p class="font-light text-gray-600 mb-10">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        <br />Voluptas, reprehenderit ullam velit modi in ipsa rerum reiciendis
        dignissimos soluta ad,<br />
        laboriosam molestias pariatur aperiam quod sunt. Quod officiis in ea!
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import axios from "axios";
import TheButton from "@/components/atoms/TheButton.vue";
import type { Product } from "@/domain/Product";
import { useProductStore } from "@/stores/productsStore";
export default {
  name: "ProductDetailPage",
  data() {
    return {
      product: {} as Product,
      productAdded: false,
      productOnCart: false,
    };
  },
  setup() {
    const productsStore = useProductStore();
    return {
      productsStore,
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
    addCartItem() {
      this.productAdded = true;
      this.productOnCart = true;
      this.productsStore.addToCart(this.product);
    },
  },
  mounted() {
    this.getProductById();
  },
  components: {
    TheButton,
  },
};
</script>
