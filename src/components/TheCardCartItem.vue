<template>
  <section class="py-4">
    <div class="flex">
      <img class="w-20 h-30 rounded-lg" :src="product.image" />

      <div class="flex flex-col justify-between ml-4">
        <p class="font-bold">R$ {{ product.price.toFixed(2) }}</p>

        <p class="text-lg text-gray-500 font-light leading-6">
          {{ product.name }}
        </p>
        <p>{{ product.quantity }}</p>

        <the-icon
          @click="removeFromCart"
          class="cursor-pointer text-red-500"
          icon="fas fa-trash"
        ></the-icon>
      </div>
    </div>
    <div class="flex gap-4 mt-5">
      <the-button @click="decrementItem"
        ><the-icon icon="fas fa-minus"></the-icon
      ></the-button>
      <the-button @click="incrementItem"
        ><the-icon icon="fas fa-plus"></the-icon
      ></the-button>
    </div>
  </section>
</template>

<script lang="ts">
import TheIcon from "./atoms/TheIcon.vue";
import TheButton from "./atoms/TheButton.vue";

export default {
  name: "TheCardCartItem",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  components: {
    TheIcon,
    TheButton,
  },
  methods: {
    removeFromCart() {
      this.$emit("remove", this.product);
    },
    incrementItem() {
      this.$emit("increment", this.product);
    },
    decrementItem() {
      this.$emit("decrement", this.product);
    },
  },
  computed: {
    quantity() {
      return this.product.quantity;
    },
  },
};
</script>
