<template>
  <div>
    <label for="name">{{ label }}</label>
    <input
      :placeholder="placeholder"
      name="name"
      :type="type"
      :value="modelValue"
      @input="updateValue"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: "TheInput",
  props: {
    modelValue: { type: [String, Number], default: "" },
    label: String,
    type: { type: String, default: "text" },
    placeholder: {
      type: String,
      default: "",
    },
  },
  methods: {
    updateValue($event: Event) {
      this.$emit(
        "update:modelValue",
        ($event.target as HTMLInputElement).value
      );
    },
  },
};
</script>
