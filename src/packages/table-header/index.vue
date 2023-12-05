<script setup lang="ts">
import { onMounted, ref, nextTick, watch, emits, computed } from 'vue'
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
  },
  keepScrollLeft: {
    type: Number,
    default: 0
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

let scrollWidthContainer = ref(200 * props.columns.length) // 所有数据的大容器
let pageSize = ref(2)
let pageNum = ref(1)
let tableHeaderWrapper = ref(null)
let scrollBody = ref(null) // 可视区域
let clientWidth = ref(props.width) // 容器宽度
let headDataList = ref<any>([])
let whidthMap = ref({}) // 记录宽度
let headerHeight = computed(() => {
  return tableHeader.value.offsetWidth
})
const oldscrollLeft = ref(0) // 记录上一次滚动位置 与当前滚动做对比 判断向上还是向下

const addDataFn = (allData = props.columns, changeData = headDataList.value) => {
  let pageData = allData.slice(pageSize.value * (pageNum.value - 1), pageSize.value * pageNum.value)
  if (pageData.length) changeData.push(...pageData)
  pageNum.value++
}
// 向上/左添加数据
const unshiftDataFn = (allData = props.columns, changeData = headDataList.value) => {
  let pageData = allData.slice(pageSize.value * (pageNum.value - 5), pageSize.value * (pageNum.value - 4))
  if (pageData.length) changeData = pageData.concat(changeData)

  pageNum.value--
}
// 页面初始化 渲染满可视区域需要多少条数据
const init = () => {
  addDataFn() // 加载一屏数据
  nextTick(() => {
    let lastChild = scrollBody.value.getElementsByTagName('th')[Number(pageSize.value * (pageNum.value - 1)) - 1] //最后一个元素离顶部的距离
    // 没铺满屏幕 继续加数据
    if (lastChild.offsetLeft + lastChild.offsetWidth < clientWidth.value) {
      init()
    } else {
      // 铺满后，设置两倍数据方便滚动
      pageSize.value = headDataList.value.length
      pageNum.value = 2
      addDataFn() // 第二页数据

      whidthMap.value[0] = 0
      let first = scrollBody.value.getElementsByTagName('th')[pageSize.value - 1]
      whidthMap.value[1] = first.offsetLeft + first.offsetWidth
      if (headDataList.value.length >= pageSize.value * 2) {
        let second = scrollBody.value.getElementsByTagName('th')[pageSize.value * 2 - 1]
        whidthMap.value[2] = second.offsetLeft + second.offsetWidth
        addDataFn() // 第三页数据
        nextTick(() => {
          let third = scrollBody.value.getElementsByTagName('th')[headDataList.value.length - 1]
          whidthMap.value[3] = third.offsetLeft + third.offsetWidth
          if (headDataList.value.length < pageSize.value * 3)
            scrollWidthContainer.value = third.offsetLeft + third.offsetWidth
        })
      } else {
        let third = scrollBody.value.getElementsByTagName('th')[headDataList.value.length - 1]
        scrollWidthContainer.value = third.offsetLeft + third.offsetWidth
        whidthMap.value[2] = third.offsetLeft + third.offsetWidth
      }

      console.log(
        '铺满了三幕 两倍',
        headDataList.value.length,
        pageSize.value,
        whidthMap.value,
        headDataList.value.length,
        pageNum.value
      )
      tableHeaderWrapper.value.addEventListener('scroll', (e) => scrollEvent(e))
      // })
    }
  })
}
// 滚动
let scrollLeft = ref(0)
const onLeftScroll = (scrollLeft: number) => {
  let midChild = scrollBody.value.getElementsByTagName('th')[pageSize.value] //第一页数据的高度
  nextTick(() => {
    // 渲染出的真实节点的最后一个子节点滚动的位置 加上 本身高度 减去 滚动的偏移量 是否占满不了一屏
    if (midChild.offsetLeft < scrollLeft) {
      // 最后边界不满一页数据也需要加载
      if ((pageNum.value - 1) * pageSize.value > props.columns.length) {
        return
      }
      addDataFn() // 加数据
      let arr = cloneDeep(headDataList.value)
      // 完全滚出页面的数据高度
      scrollLeft.value = whidthMap.value[pageNum.value - 4]

      // 数据处理 超出的最前面一页的数据去除
      headDataList.value = arr.slice(Number(pageSize.value), headDataList.value.length)
      // 去除数据后 使用padding占位
      scrollBody.value.style.paddingTop = scrollLeft.value + 'px'
      nextTick(() => {
        let second = scrollBody.value.getElementsByTagName('tr')[headDataList.value.length - 1]
        whidthMap.value[pageNum.value - 1] = second.offsetLeft + second.offsetHeight
        oldscrollLeft.value = scrollLeft
        //加载到最后不满一页 整个屏幕禁止滚动
        if (headDataList.value.length < pageSize.value * 3) {
          scrollWidthContainer.value = whidthMap.value[pageNum.value - 1]
          return
        }
        //滚动触发数据变化
        onLeftScroll(scrollLeft.value)
      })
    }
  })
}
const scrollEvent = (e) => {
  let scrollLeft = e.target.scrollLeft // 当前滚动的位置
  console.log(e.target.scrollLeft)
  emits('scrollLeft', scrollLeft)
  onLeftScroll(scrollLeft)
  //  0-pageSize*pageNum
  // 开始/结束位置
  // if (scrollLeft > oldscrollLeft.value) {
  //   // 向下滚动
  //   onDownScroll(scrollLeft)
  // }
  // if (scrollLeft < oldscrollLeft.value) {
  //   // 向下滚动
  //   onUpScroll(scrollLeft)
  // }
}
const emits = defineEmits(['scrollLeft', 'scrollTop'])
defineExpose({
  headerHeight: headerHeight
})
onMounted(() => {
  nextTick(() => {
    tableHeaderWrapper.value.addEventListener('scroll', (e) => scrollEvent(e))
  })
})
nextTick(() => {
  init()
})
watch(
  () => props.keepScrollLeft,
  (val, old) => {
    if (val && val !== old) {
      tableHeaderWrapper.value.scrollLeft = props.keepScrollLeft
      // console.log('keepScrollLeft', props.keepScrollLeft)
    }
  },
  { immediate: true, deep: true }
)
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
      <thead ref="scrollBody">
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
.dy-table__cell:last-child {
  border-right: 0px solid #363637;
}
</style>
