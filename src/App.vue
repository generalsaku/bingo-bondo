<template>
  <Celebration v-if="isBingo"></Celebration>
  <table v-if="bingo.length">
    <tr v-for="(row) in 5" :key="`row-${row}`">
      <td v-for="(cell) in 5" :key="`row-${row}-cell-${cell}`" @click="() => toggle(getOption(row, cell))" :class="{ 'is-active': getOption(row, cell).active }">
        <div class="cell-content">
          {{getOption(row, cell).name}}
        </div>
      </td>
    </tr>
  </table>
  <button v-if="isBingo" @click="createBingo">
    Click for a new round
  </button>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import Celebration from './components/Celebration.vue'
import options from './bingo-options.json'
import combinations from './bingo-combinations.json'
import shuffle from './shuffle.js'
import { get, set } from 'idb-keyval'

const key = 'bingo'
const bingo = ref([])
const isBingo = ref(false)

onMounted(async () => {
  const _bingo = await getBingo()
  if (!_bingo) {
    await createBingo()
  } else {
    bingo.value = _bingo
    verifyBingo()
  }
})

const getBingo = async () => await get(key)

const getOption = (row, cell) => {
  const index = ((row - 1)) * 5 + (cell - 1)
  return bingo.value[index]
}

const getRowCellFromOption = (option) => {
  const index = bingo.value.indexOf(option)
  return {
    row: Math.floor((index / 5)) + 1,
    cell: (index % 5) + 1
  }
}

const createBingo = async () => {
  await set(key, createBingoOptions())
  bingo.value = await getBingo()
  verifyBingo()
}

const toggle = async (option) => {
  option.active = !option.active
  verifyBingo()
  await set(key, JSON.parse(JSON.stringify(bingo.value)))
}

const verifyBingo = () => {
  const activated = bingo.value.filter(x => x.active).map(option => ({ ...getRowCellFromOption(option) }))
  isBingo.value = combinations.some(combination => combination.every(values => {
    const row = values[0]
    const cell = values[1]
    return activated.some(option => option.row === row && option.cell === cell)
  }))
}

const createBingoOptions = () => shuffle(options).slice(0, 25).map((option) => ({ name: option, active: false }))
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;500;600,700&display=swap');

body,html {
  margin: 0;
}

#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

table {
  width: 100%;
  border: 0px solid black;
  border-spacing: 0;
  table-layout: fixed;
  padding: 0;

  td { 
    width: 20%; 
    height: 20vh;
    border: 0;
    vertical-align: middle;
    padding: 0;
    outline: 1px dashed #c7c7c7;
    cursor: pointer;
    font-size: 2.6vw;

    &.is-active {
      background: #a3f1a3;
      outline: 1px dashed #00bf00;
      font-weight: 600;
    }
  }
}

button {
  font-family: 'Open Sans', sans-serif;
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
