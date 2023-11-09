<script setup lang="ts">
import { onMounted, ref, nextTick, computed } from 'vue'
import DyTableColumn from '../table-column/index.vue'
import { parseMinWidth, parseWidth } from '../util'
const tableHeader = ref()

const props = defineProps({
  columns: {
    type: Array,
    default() {
      return () => []
    }
  },
  getHeaderCellClass: {
    type: Function,
    default() {
      return () => {}
    }
  },
  getHeaderCellStyle: {
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
let headerHeight = computed(() => {
  return tableHeader.value.offsetHeight
})
defineExpose({
  headerHeight: headerHeight
})
onMounted(() => {
  // nextTick(() => {
  //   console.log(tableHeader.value)
  // })
})
</script>

<template>
  <div class="dy-vl-header">
    <table
      ref="tableHeader"
      class="dy-table-header dy-table--border-header"
      :border="0"
      cellspacing="0"
      cellpadding="0"
    >
      <thead>
        <tr>
          <th
            v-for="(column, index) in columns"
            :key="`${column.prop}-thead`"
            class="dy-table__cell"
            :style="{ width: setColumnWidth(column).realWidth + 'px' }"
          >
            <!-- <div class="cell">{{ column.label }}</div> -->
            <dy-table-column :data="column.label"></dy-table-column>
          </th>
        </tr>
      </thead>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.dy-vl-header {
  width: 100%;
}
.dy-table-header {
  position: relative;
  width: 100%;
}
.dy-table--border-header {
  // border-left: 0px solid #363637;
  // border-top: 0px solid #363637;
}
.header {
  width: 100%;
}
.dy-table__cell {
  padding: 0;
  border-bottom: 1px solid #363637;
  border-right: 1px solid #363637;
  box-sizing: border-box;
  // overflow: hidden;
  // text-overflow: ellipsis;
  // white-space: normal;
  // word-break: break-all;
  // line-height: 23px;
  // padding: 0 12px;
}
</style>
