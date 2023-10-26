<template>
  <main class="flex justify-around">
    <section class="flex flex-col pl-36 pt-9">
      <router-link class="flex items-center gap-2" to="/">
        <the-icon class="cursor-pointer" icon="fas fa-arrow-left"></the-icon>
        <p class="text-gray-500 font-medium leading-6">Voltar</p>
      </router-link>
      <h2 class="text-gray-500 font-medium leading-6 pt-4">SEU CARRINHO</h2>
      <p
        v-if="productsStore.cartItems.length > 0"
        class="font-saira text-base font-light leading-9"
      >
        Total ({{ productsStore.cartItems.length + quantity - 1 }} produtos)
        <span class="font-strong font-bold"
          >R$ {{ totalCartItems.toFixed(2) }}</span
        >
      </p>
      <p class="font-saira text-base font-light leading-9" v-else>
        Não existem produtos no carrinho!
      </p>
      <the-card-cart-item
        v-for="item in productsStore.cartItems"
        :key="item._id"
        :product="item"
        :quantity="quantity"
        @remove="removeFromCart(item)"
        @increment="incrementItem(item)"
        @decrement="decrementItem(item)"
      >
      </the-card-cart-item>
    </section>
    <the-checkout
      :disabled="totalCartItems === 0"
      :tax="40"
      :price="totalCartItems"
    ></the-checkout>
  </main>
</template>
<script lang="ts">
import TheIcon from "@/components/atoms/TheIcon.vue";
import { useProductStore } from "@/stores/productsStore";
import TheCardCartItem from "@/components/TheCardCartItem.vue";
import TheCheckout from "@/components/TheCheckout.vue";
import TheButton from "@/components/atoms/TheButton.vue";
export default {
  name: "ProductCart",
  components: {
    TheIcon,
    TheCardCartItem,
    TheCheckout,
    TheButton,
  },
  data() {
    return {
      total: 1,
      quantity: 1,
    };
  },
  setup() {
    const productsStore = useProductStore();
    return {
      productsStore,
    };
  },
  computed: {
    totalCartItems() {
      const total = this.productsStore.cartItems.reduce(
        (acc, item) => acc + item.price * this.total * this.quantity,
        0
      );
      return total;
    },
  },
  methods: {
    removeFromCart(product: any) {
      this.productsStore.removeFromCart(product);
    },
    incrementItem(item: any) {
      this.productsStore.cartItems.forEach((product) => {
        if (product._id === item._id) {
          this.quantity += 1;
        }
      });
    },
    decrementItem(item: any) {
      if ((this.quantity -= 1)) {
        return;
      }
      this.productsStore.cartItems.forEach((product) => {
        if (product._id === item._id) {
          this.quantity += 1;
        }
      });
    },
  },
};
</script>
