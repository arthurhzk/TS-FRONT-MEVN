<template>
  <input :placeholder="placeholder" type="text" />
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
  },
};
</script>
