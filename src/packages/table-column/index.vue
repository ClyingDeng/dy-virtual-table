<script setup lang="ts" name="dyTableColumn">
import { onMounted, ref } from 'vue'
import { parseWidth, parseMinWidth } from '../util'
// import { TableColumnCtx } from '../virtual-table/table-data/defaults';

onMounted(() => {})
const props = defineProps({
  data: {
    type: Object || String,
    default() {
      return () => {}
    }
  },
  column: {
    type: Object || Function,
    default() {
      return () => {}
    }
  },
  keyProp: {
    type: String,
    default: ''
  },
  height: {
    type: String,
    default: '30px'
  },
  minHeight: {
    type: String,
    default: ''
  },
  width: {
    type: String,
    default: ''
  },
  minWidth: {
    type: String,
    default: ''
  },
  index: {
    type: Number,
    default: 0
  }
})
</script>

<template>
  <div class="cell">{{ keyProp ? data[keyProp] : data }}</div>
</template>

<style lang="scss" scoped></style>
