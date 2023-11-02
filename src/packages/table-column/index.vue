<script setup lang="ts" name="dyTableColumn">
import { onMounted, ref } from 'vue'
import { parseWidth, parseMinWidth } from '../util'
// import { TableColumnCtx } from '../virtual-table/table-data/defaults';

onMounted(() => {})
const props = defineProps({
  data: {
    type: Object,
    default() {
      return () => {}
    }
  },
  column: {
    type: Object,
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
  }
})

const realWidth = ref(parseWidth(props.width))
const realMinWidth = ref(parseMinWidth(props.minWidth))
const setColumnWidth = () => {
  let column = {}
  if (realWidth.value) column.width = realWidth.value
  if (realMinWidth.value) {
    column.minWidth = realMinWidth.value
  }
  if (!realWidth.value && realMinWidth.value) {
    column.width = undefined
  }
  if (!column.minWidth) {
    column.minWidth = 80
  }
  column.realWidth = Number(column.width === undefined ? column.minWidth : column.width)
  return column
}
let columnWidth = ref(setColumnWidth())
</script>

<template>
  <div class="cell" :style="{ width: columnWidth.realWidth + 'px' }">
    {{ keyProp ? data[keyProp] : data }}
  </div>
</template>

<style lang="scss" scoped></style>
