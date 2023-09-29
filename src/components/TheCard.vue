<template>
  <img class="w-40 h-40" :src="product.image" />
  <p>{{ product.name }}</p>
  <p>{{ product.price }}</p>
  <p>{{ product.rating }}</p>
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
