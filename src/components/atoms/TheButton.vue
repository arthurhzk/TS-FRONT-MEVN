<template>
  <button :class="style"><slot></slot></button>
</template>

<script lang="ts">
export default {
  name: "TheButton",
  props: {
    type: {
      type: String,
      default: "button",
    },
    style: {
      type: String,
      default: "bg-orange-400  text-white font-semibold py-2 px-4 rounded",
    },
  },
};
</script>
