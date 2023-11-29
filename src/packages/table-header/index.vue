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
  },
  width: {
    type: Number,
    default: 600
  }
})
let scrollWidthContainer = ref(200 * props.columns.length) // 所有数据的大容器
const tableHeaderWrapper = ref()
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
  nextTick(() => {
    tableHeaderWrapper.value.addEventListener('scroll', (e) => scrollEvent(e))
  })
})

const scrollEvent = (e) => {
  let scrollLeft = e.target.scrollLeft // 当前滚动的位置
  console.log(e.target.scrollLeft)

  //  0-pageSize*pageNum
  // 开始/结束位置
  // if (scrollTop > oldScrollTop.value) {
  //   // 向下滚动
  //   onDownScroll(scrollTop)
  // }
  // if (scrollTop < oldScrollTop.value) {
  //   // 向下滚动
  //   onUpScroll(scrollTop)
  // }
}
</script>

<template>
  <div ref="tableHeaderWrapper" class="dy-vl-header" :style="{ width: width + 'px' }">
    <table
      ref="tableHeader"
      class="dy-table-header dy-table--border-header"
      :border="0"
      cellspacing="0"
      cellpadding="0"
      :style="{ width: scrollWidthContainer + 'px' }"
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
  overflow: auto;
  width: 100%;
  position: relative;
  border-right: 1px solid #363637;
}
.dy-table-header {
  // width: 100%;
}
.dy-table--border-header {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.header {
  // width: 100%;
}
.dy-table__cell {
  padding: 0;
  border-bottom: 1px solid #363637;
  border-right: 1px solid #363637;
  box-sizing: border-box;
}
</style>
