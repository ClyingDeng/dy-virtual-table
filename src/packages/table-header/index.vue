<script setup lang="ts">
// @ts-ignore
import { onMounted, ref, nextTick, watch, emits, computed } from 'vue'
import DyTableColumn from '../table-column/index.vue'
import { parseMinWidth, parseWidth } from '../util'
// @ts-ignore
import { cloneDeep } from 'lodash'
const tableHeader = ref()

const props = defineProps({
  maxWidth: {
    type: Number,
    default: 0
  },
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
  },
  keepScrollLeft: {
    type: Number,
    default: 0
  },
  //边框
  border: {
    type: Boolean,
    default: true
  }
})
const setColumnWidth = (column: any) => {
  handleWidthMap()
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
    // column.minWidth = 80
  }
  column.realWidth = Number(!column.width ? column.minWidth : column.width)

  return column
}
const handleWidthMap = () => {
  let allWidth = 0,
    nanWidthNum = 0
  props.columns.forEach((column: any) => {
    allWidth += column.width || 0
    if (!column.width) nanWidthNum++
  })

  if (allWidth < props.width) {
    // 所有设置的宽和 没有超过设置的总宽
    let otherWidth = props.width - allWidth
    let avgWidth = Math.floor(otherWidth / nanWidthNum)

    props.columns.forEach((column: any) => {
      if (!column.width) column.width = avgWidth
    })
  } else {
    // 如果超过了总宽，给定默认列宽
    let w = 0
    props.columns.forEach((column: any) => {
      if (!column.width) column.width = 100
      w += column.width
    })
    scrollWidthContainer.value = w
  }
}

// let scrollWidthContainer = ref<number>(200 * props.columns.length) // 所有数据的大容器
let scrollWidthContainer = ref<number>(props.width) // 所有数据的大容器
let pageSizeLR = ref(2)
let pageNumLR = ref(1)
let tableHeaderWrapper = ref<any>(null)
let scrollBody = ref<any>(null) // 可视区域
let clientWidth = ref<any>(props.width) // 容器宽度
let columnList = ref<any>([])
let widthMap = ref<any>({}) // 记录宽度
let headerHeight = computed(() => {
  return tableHeader.value.offsetWidth
})
const oldscrollLeft = ref(0) // 记录上一次滚动位置 与当前滚动做对比 判断向上还是向下

const addDataFnLR = (allData = props.columns, changeData = columnList.value) => {
  let pageData = allData.slice(pageSizeLR.value * (pageNumLR.value - 1), pageSizeLR.value * pageNumLR.value)
  if (pageData.length) changeData.push(...pageData)
  pageNumLR.value++
}
// 向上/左添加数据
const unshiftDataFnLR = (allData = props.columns) => {
  let pageData = allData.slice(pageSizeLR.value * (pageNumLR.value - 5), pageSizeLR.value * (pageNumLR.value - 4))
  if (pageData.length) columnList.value = pageData.concat(columnList.value)

  pageNumLR.value--
}
// 页面初始化 渲染满可视区域需要多少条数据
const initLR = () => {
  addDataFnLR() // 加载一屏数据
  nextTick(() => {
    // console.log(columnList.value.length, Number(pageSizeLR.value * (pageNumLR.value - 1)))
    // let lastChild = scrollBody.value.getElementsByTagName('th')[Number(pageSizeLR.value * (pageNumLR.value - 1)) - 1] //最后一个元素离顶部的距离
    let lastChild = scrollBody.value.getElementsByTagName('th')[Number(pageSizeLR.value * (pageNumLR.value - 1)) - 1] //最后一个元素离顶部的距离
    // 没铺满屏幕 继续加数据
    if (lastChild && lastChild.offsetLeft + lastChild.offsetWidth < clientWidth.value) {
      initLR()
    } else {
      // 铺满后，设置两倍数据方便滚动
      pageSizeLR.value = columnList.value.length
      pageNumLR.value = 2
      addDataFnLR() // 第二页数据
      nextTick(() => {
        widthMap.value[0] = 0
        let first = scrollBody.value.getElementsByTagName('th')[pageSizeLR.value - 1]
        widthMap.value[1] = first.offsetLeft + first.offsetWidth
        if (columnList.value.length >= pageSizeLR.value * 2) {
          let second = scrollBody.value.getElementsByTagName('th')[pageSizeLR.value * 2 - 1]
          widthMap.value[2] = second.offsetLeft + second.offsetWidth
          addDataFnLR() // 第三页数据
          nextTick(() => {
            let third = scrollBody.value.getElementsByTagName('th')[columnList.value.length - 1]
            widthMap.value[3] = third.offsetLeft + third.offsetWidth
            if (columnList.value.length < pageSizeLR.value * 3)
              scrollWidthContainer.value = third.offsetLeft + third.offsetWidth
          })
        } else {
          let third = scrollBody.value.getElementsByTagName('th')[columnList.value.length - 1]
          let w = third.offsetLeft + third.offsetWidth

          scrollWidthContainer.value = w < props.width ? props.width : w

          widthMap.value[2] = third.offsetLeft + third.offsetWidth
        }

        // console.log('铺满了三屏', columnList.value.length, pageSizeLR.value, widthMap.value, pageNumLR.value)
        tableHeaderWrapper.value.addEventListener('scroll', (e: any) => scrollEvent(e))
      })
    }
  })
}
// 滚动
let scrollWidth = ref<any>(0)
const onLeftScroll = (scrollLeft: number) => {
  let midChild = scrollBody.value.getElementsByTagName('th')[pageSizeLR.value] //第一页数据的高度
  nextTick(() => {
    // 渲染出的真实节点的最后一个子节点滚动的位置 加上 本身高度 减去 滚动的偏移量 是否占满不了一屏
    if (midChild.offsetLeft < scrollLeft) {
      // 最后边界不满一页数据也需要加载
      if ((pageNumLR.value - 1) * pageSizeLR.value > props.columns.length) {
        return
      }
      addDataFnLR() // 加数据
      // console.log(midChild.offsetLeft, scrollLeft, widthMap.value, pageNumLR.value)
      let arr = cloneDeep(columnList.value)
      // 完全滚出页面的数据高度
      scrollWidth.value = widthMap.value[pageNumLR.value - 4]

      // 数据处理 超出的最前面一页的数据去除
      columnList.value = arr.slice(Number(pageSizeLR.value), columnList.value.length)
      // 去除数据后 使用padding占位
      scrollBody.value.style.paddingLeft = scrollWidth.value + 'px'
      nextTick(() => {
        let second = scrollBody.value.getElementsByTagName('th')[columnList.value.length - 1]
        widthMap.value[pageNumLR.value - 1] = second.offsetLeft + second.offsetWidth
        oldscrollLeft.value = scrollLeft
        // console.log('columnList', columnList.value, pageSizeLR.value)

        //加载到最后不满一页 整个屏幕禁止滚动
        if (columnList.value.length < pageSizeLR.value * 3) {
          // console.log('widthMap.value', widthMap.value)

          scrollWidthContainer.value = widthMap.value[pageNumLR.value - 1]
          emits('maxScrollWidth', scrollWidthContainer.value)
          return
        }
        //滚动触发数据变化
        onLeftScroll(scrollLeft)
      })
    }
  })
}
const onRightScroll = (scrollLeft: number) => {
  // let midChild = scrollBody.value.getElementsByTagName('th')[pageSizeLR.value] //第一页数据的高度
  nextTick(() => {
    // 渲染出的真实节点的最后一个子节点滚动的位置 加上 本身高度 减去 滚动的偏移量 是否占满不了一屏
    if (scrollLeft - scrollWidth.value < widthMap.value[pageNumLR.value - 5]) {
      if (pageNumLR.value <= 3) {
        scrollBody.value.style.paddingLeft = 0 + 'px'
        return
      }
      unshiftDataFnLR()
      let arr = cloneDeep(columnList.value)
      // 完全滚出页面的数据高度
      scrollWidth.value = widthMap.value[pageNumLR.value - 4]

      // 数据处理 超出的最前面一页的数据去除
      columnList.value = arr.slice(0, pageSizeLR.value * 3)
      // 去除数据后 使用padding占位
      scrollBody.value.style.paddingLeft = scrollWidth.value + 'px'
      nextTick(() => {
        oldscrollLeft.value = scrollWidth.value
        //滚动触发数据变化
        onRightScroll(scrollLeft)
      })
    }
  })
}
const scrollEvent = (e: any) => {
  let scrollLeft = e.target.scrollLeft // 当前滚动的位置
  // console.log(e.target.scrollLeft, oldscrollLeft.value)
  emits('scrollLeft', scrollLeft)
  //  0-pageSizeLR*pageNumLR
  // 开始/结束位置
  if (scrollLeft > oldscrollLeft.value) {
    // 向右滚动
    onLeftScroll(scrollLeft)
  }
  if (scrollLeft < oldscrollLeft.value) {
    // 向下滚动
    onRightScroll(scrollLeft)
  }
}
const emits = defineEmits(['scrollLeft', 'scrollTop', 'maxScrollWidth'])
defineExpose({
  headerHeight: headerHeight
})
onMounted(() => {
  // nextTick(() => {
  //   tableHeaderWrapper.value.addEventListener('scroll', (e) => scrollEvent(e))
  // })
  scrollWidthContainer.value = props.width
})
nextTick(() => {
  initLR()
})
watch(
  () => props.keepScrollLeft,
  (val, old) => {
    if (val && val !== old) {
      tableHeaderWrapper.value.scrollLeft = props.keepScrollLeft
    }
    if (!val) {
      tableHeaderWrapper.value.scrollLeft = 0
    }
  },
  { deep: true }
)
watch(
  () => props.maxWidth,
  // @ts-ignore
  (val, old) => {
    if (val) {
      scrollWidthContainer.value = val
      // console.log('keepScrollLeft', props.keepScrollLeft)
    }
  },
  { deep: true }
)
let alignDir = ['center', 'left', 'right']
</script>

<template>
  <div
    ref="tableHeaderWrapper"
    class="dy-vl-header"
    :class="{ 'dy-vl-header-border': border }"
    :style="{ width: width + 'px' }"
  >
    <table
      ref="tableHeader"
      class="dy-table-header dy-table--border-header"
      :border="0"
      cellspacing="0"
      cellpadding="0"
      :style="{ width: scrollWidthContainer + 'px' }"
    >
      <thead ref="scrollBody">
        <tr>
          <th
            v-for="(column, index) in columnList"
            :key="`${column.prop}-thead`"
            class="dy-table__cell"
            :class="[
              { 'dy-table__cell-border': border },
              `dy-table_cell-text-${alignDir.includes(column.align) ? column.align : 'center'}`
            ]"
            :style="{ width: setColumnWidth(column).realWidth + 'px' }"
          >
            <!-- <div class="cell">{{ column.label }}</div> -->
            <dy-table-column :data="column.label" :index="index"></dy-table-column>
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

  tr {
    background-color: transparent;
    border: 0px solid transparent;
  }
  th {
    border: 0px solid transparent;
    background-color: transparent;
  }
  .dy-table__cell-border {
    border-right: 1px solid #ebeef5;
  }
  .dy-table__cell {
    color: #606266;
    padding: 0;
    border-bottom: 1px solid #ebeef5;

    box-sizing: border-box;
    // overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    word-break: break-all;
    line-height: 23px;
    padding: 0 12px;
  }
  .dy-table__cell:last-child {
    border-right: 0px solid #ebeef5;
  }

  .dy-table--border-header {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .header {
    // width: 100%;
  }

  .dy-table_cell-text-center {
    text-align: center;
  }
  .dy-table_cell-text-left {
    text-align: left;
  }
  .dy-table_cell-text-right {
    text-align: right;
  }
}
.dy-vl-header-border {
  border-right: 1px solid #ebeef5;
}

// 滚动条
.dy-vl-header::-webkit-scrollbar {
  width: 0;
  height: 0;
}

.dy-vl-header::-webkit-scrollbar-track {
  background: transparent;
}

.dy-vl-header::-webkit-scrollbar-thumb {
  background: transparent;
}

.dy-vl-header::-webkit-scrollbar-thumb:hover {
  background: transparent;
}
</style>
