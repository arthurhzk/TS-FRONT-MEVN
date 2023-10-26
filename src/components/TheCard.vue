<template>
  <section class="flex justify-center mb-4">
    <div class="flex flex-col items-center p-2 border rounded-lg">
      <router-link :to="`/${product._id}`">
        <img class="rounded-lg w-64 h-72" :src="product.image" />
      </router-link>
      <p class="text-lg text-gray-500 font-light leading-6 pt-2">
        {{ product.name }}
      </p>
      <p class="font-bold pt-2">R$ {{ product.price.toFixed(2) }}</p>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: "TheCard",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>
