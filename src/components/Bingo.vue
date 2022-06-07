<template>
  <table v-if="bingo.length">
    <tr v-for="row in 5" :key="`row-${row}`">
      <td
        v-for="option in getOptions(row)"
        :key="`row-${row}-cell-${option.cell}`"
        @click="() => emit('toggle', option)"
        :class="{ 'is-active': option.active }"
      >
        <div class="cell-content">{{ option.name }}</div>
      </td>
    </tr>
  </table>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  bingo: Array,
});

const emit = defineEmits(["toggle"]);

const getOptions = (row) => {
  const start = (row - 1) * 5;
  const end = start + 5;
  return props.bingo.slice(start, end);
};
</script>

<style lang="scss" scoped>
table {
  max-width: 100%;
  max-height: calc(var(--1w) * 20);
  border-spacing: 0;
  padding: 0;
  border-collapse: collapse;
  margin: 0 auto;

  td {
    width: calc(var(--1wh) * 20);
    height: calc(var(--1wh) * 20);
    border: 0;
    vertical-align: middle;
    padding: 0;
    outline: 1px dashed #c7c7c7;
    cursor: pointer;
    font-size: calc(var(--1wh) * 2.5);

    &.is-active {
      background: #a3f1a3;
      outline: 1px dashed #00bf00;
      font-weight: 600;
    }

    .cell-content {
      padding: 4px;
    }
  }
}
</style>
