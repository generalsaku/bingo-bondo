<template>
  <button @click="() => emit('click')">Click for a new round</button>
</template>

<script setup>
import { defineEmits } from "vue";

const emit = defineEmits(["click"]);
</script>

<style lang="scss" scoped>
button {
  font-family: "Open Sans", sans-serif;
  position: fixed;
  top: 0;
  right: 0;
  padding: 8px 20px;
  background: #00bf00;
  border: 0;
  border-bottom-left-radius: 5px;
  box-shadow: 0 0 3px #8f8f8f;
  cursor: pointer;
}
</style>
