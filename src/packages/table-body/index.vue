<script setup lang="ts">
import { onMounted, ref, nextTick, watch } from 'vue'
import DyTableColumn from '../table-column/index.vue'
import { parseMinWidth, parseWidth } from '../util'
import { cloneDeep } from 'lodash'

// Vue.component('DyTableColumn', DyTableColumn)
onMounted(() => {})
const props = defineProps({
  data: {
    type: Array,
    default() {
      return () => []
    }
  },
  height: {
    type: Number,
    default: 400
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
let tableWrapper = ref(null)
let dyTableWrapper = ref(null)
let scrollBody = ref(null) // 可视区域
let padBody = ref(null) // 隐藏区域
let scrollContainer = ref(1000) // 所有数据的大容器
// let scrollContainer = ref(20 * props.data.length) // 所有数据的大容器
let clientHeight = ref(props.height) // 容器高度
let offsetStart = ref(0) // 滚动开始的位置
let dataList = ref<any>([])
let pageSize = ref(15)
let pageNum = ref(1)
let visibleNum = ref(10) // 渲染一屏 需要多少条数据

const addDataFn = () => {
  let pageData = props.data.slice(pageSize.value * (pageNum.value - 1), pageSize.value * pageNum.value)
  if (pageData.length) dataList.value.push(...pageData)
  pageNum.value++
}
// 页面初始化 渲染满可视区域需要多少条数据
const init = () => {
  addDataFn() // 加载一屏数据
  nextTick(() => {
    let lastChild = scrollBody.value.getElementsByTagName('tr')[Number(pageSize.value * (pageNum.value - 1)) - 1] //最后一个元素离顶部的距离
    // 没铺满屏幕 继续加数据
    if (lastChild.offsetTop + lastChild.offsetHeight < clientHeight.value) {
      init()
    } else {
      // 铺满后，设置两倍数据方便滚动
      pageSize.value = dataList.value.length
      pageNum.value = 2
      addDataFn()
      tableWrapper.value.addEventListener('scroll', (e) => scrollEvent(e))
    }
  })
}

// 滚动
let scrollHeight = ref(0)
const scrollChangeData = (scrollTop: number) => {
  nextTick(() => {
    console.log('分页', pageSize.value * (pageNum.value - 2), Number(pageSize.value * (pageNum.value - 1)) - 1)
    // let firstChild = scrollBody.value.getElementsByTagName('tr')[pageSize.value * (pageNum.value - 2)]
    // let lastChild = scrollBody.value.getElementsByTagName('tr')[Number(pageSize.value * (pageNum.value - 1)) - 1] //最后一个元素离顶部的距离
    let lastChild = scrollBody.value.getElementsByTagName('tr')[dataList.value.length - 1] //最后一个元素离顶部的距离
    // offsetStart.value = scrollTop - firstChild.offsetHeight

    if (lastChild.offsetTop + lastChild.offsetHeight - scrollTop <= clientHeight.value) {
      addDataFn() // 加数据
      let arr = cloneDeep(dataList.value)
      // let hiddenHeight = scrollBody.value.getElementsByTagName('tr')[pageSize.value * (pageNum.value - 3)]
      let hiddenHeight = scrollBody.value.getElementsByTagName('tr')[pageSize.value]
      // 完全滚出页面的数据高度
      scrollHeight.value = hiddenHeight.offsetTop + hiddenHeight.offsetHeight

      // dataList.value = arr.slice(Number(pageSize.value * (pageNum.value - 3)), dataList.value.length)
      dataList.value = arr.slice(Number(pageSize.value), dataList.value.length)

      // scrollHeight.value += scrollTop
      // padBody.value.style.height = scrollHeight.value + 'px'
      scrollBody.value.style.paddingTop = scrollHeight.value + 'px'
      //滚动出发数据变化
      scrollChangeData(scrollHeight.value)
    }
  })
}

const scrollEvent = (e) => {
  let scrollTop = e.target.scrollTop // 当前滚动的位置
  //  0-pageSize*pageNum
  // 开始/结束位置

  scrollChangeData(scrollTop)
}

nextTick(() => {
  init()
})
</script>

<template>
  <div id="dy-table-scroll-container" ref="tableWrapper" class="dy-vt__wrapper" :style="{ height: height + 'px' }">
    <table
      ref="dyTableWrapper"
      class="dy-table--border-wrapper"
      :border="0"
      cellspacing="0"
      cellpadding="0"
      :style="{ height: scrollContainer + 'px' }"
    >
      <tbody ref="scrollBody" class="scroll-container">
        <!-- <div ref="scrollBody"> -->
        <tr v-for="(item, index) in dataList" :key="`tbody_${index}`" class="dy-vt-wrapper">
          <td
            v-for="(column, i) in columns"
            :key="`tcolumn_${index}_${i}`"
            class="dy-table__cell"
            :style="{ width: setColumnWidth(column).realWidth + 'px' }"
          >
            <dy-table-column :data="item" :index="index" :column="column" :key-prop="column.prop"></dy-table-column>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.dy-vt__wrapper {
  overflow-y: auto;
  width: 100%;
  position: relative;
  width: 100%;
}
.dy-table--border-wrapper {
  // position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  .padding-block {
    width: 100%;
    position: absolute;
    background-color: red;
  }
  .scroll-container {
    width: 100%;
    .dy-vt-wrapper {
      display: flex;
    }
  }
}
.dy-table__cell {
  padding: 0;
  border-bottom: 1px solid #363637;
  border-right: 1px solid #363637;
  box-sizing: border-box;
  // overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  word-break: break-all;
  line-height: 23px;
  padding: 0 12px;
}
</style>
