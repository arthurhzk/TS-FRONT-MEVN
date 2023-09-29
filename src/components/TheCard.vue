<template>
  <div class="flex">
    <div class="flex flex-col items-center">
      <router-link :to="`/${product._id}`">
        <img class="w-50 h-80 rounded-lg" :src="product.image" />
      </router-link>
      <p class="text-xl text-gray-500 font-light leading-6 pt-2">
        {{ product.name }}
      </p>
      <p class="font-bold pt-2">R$ {{ product.price }}</p>
    </div>
  </div>
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
