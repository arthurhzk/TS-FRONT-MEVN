<template>
  <section class="mt-10 items-center p-10 relative">
    <p class="font-semibold text-lg leading-6 uppercase text-gray-500">
      Resumo do pedido 🛒
    </p>
    <div>
      <p class="text-gray-500 font-light leading-6 pt-6">
        Subtotal dos produtos <br />
        <span class="font-bold">R${{ price }}</span>
      </p>
      <p v-if="price < 900 && price > 0">Entrega R$ {{ tax.toFixed(2) }}</p>
      <p v-if="price >= 900">Frete Gratis!</p>
      <p v-show="price > 0 && price < 900">Total R$ {{ total.toFixed(2) }}</p>
    </div>
    <the-button
      :disabled="disabled"
      class="mt-20"
      :class="{ 'bg-gray-300 text-gray-500 cursor-not-allowed': disabled }"
      >FINALIZAR COMPRA</the-button
    >
  </section>
</template>

<script lang="ts">
import TheButton from "./atoms/TheButton.vue";
export default {
  name: "TheCheckout",
  props: {
    price: {
      type: Number,
      required: true,
    },
    tax: {
      type: Number,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
  },
  components: {
    TheButton,
  },
  computed: {
    total() {
      return this.price + this.tax;
    },
  },
};
</script>

<style scoped>
.disabled-button:hover {
  background-color: inherit;
  color: inherit;
  cursor: not-allowed;
}
</style>
