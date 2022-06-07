<template>
  <Confetti v-if="isBingo"></Confetti>
  <Bingo :bingo="bingo" @toggle="toggle"></Bingo>
  <CreateNewButton v-if="isBingo" @click="createNew"></CreateNewButton>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Confetti from "./components/Confetti.vue";
import Bingo from "./components/Bingo.vue";
import CreateNewButton from "./components/CreateNewButton.vue";

import * as service from "./service.js";

const bingo = ref([]);
const isBingo = ref(false);

onMounted(async () => {
  bingo.value = await service.load();
  isBingo.value = await service.verify();
});

const createNew = async () => {
  bingo.value = await service.createNew();
  isBingo.value = false;
};

const toggle = async (option) => {
  await service.toggle(bingo.value, option);
  isBingo.value = await service.verify();
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;500;600,700&display=swap");

body,
html {
  margin: 0;
}

#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
