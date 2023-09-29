<template>
  <input class="outline-none" :type="type" :placeholder="placeholder" />
  <slot></slot>
</template>

<script lang="ts">
export default {
  name: "TheInput",
  props: {
    placeholder: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "text",
    },
  },
};
</script>
