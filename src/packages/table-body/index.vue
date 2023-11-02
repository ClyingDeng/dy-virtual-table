<script setup lang="ts">
import { onMounted, ref } from 'vue'
import DyTableColumn from '../table-column/index.vue'
import { parseMinWidth, parseWidth } from '../util'

onMounted(() => {})
const props = defineProps({
  data: {
    type: Array,
    default() {
      return () => []
    }
  },
  columns: {
    type: Array,
    default() {
      return () => []
    }
  },
  getCellClass: {
    type: Function,
    default() {
      return () => {}
    }
  },
  getCellStyle: {
    type: Function,
    default() {
      return () => {}
    }
  }
})

const setColumnWidth = (column: any) => {
  const realWidth = ref(parseWidth(column.width))
  const realMinWidth = ref(parseMinWidth(column.minWidth))
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
// let columnWidth = ref(setColumnWidth())
</script>

<template>
  <tbody class="dy-vl__wrapper">
    <tr v-for="(item, index) in data" :key="`tbody_${index}`">
      <td
        v-for="(column, i) in columns"
        :key="`tcolumn_${index}_${i}`"
        class="dy-table__cell"
        :style="{ width: setColumnWidth(column).realWidth + 'px' }"
      >
        <dy-table-column :data="item" :column="column" :key-prop="column.prop"></dy-table-column>
      </td>
    </tr>
  </tbody>
</template>

<style lang="scss" scoped>
.dy-vl__wrapper{
  
}
.dy-table__cell {
  padding: 0;
  border-bottom: 1px solid #363637;
  border-right: 1px solid #363637;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  word-break: break-all;
  line-height: 23px;
  padding: 0 12px;
}
</style>
