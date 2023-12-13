<script setup lang="ts">
import { onMounted, ref, nextTick, watch, computed } from 'vue'
import DyTableColumn from '../table-column/index.vue'
import { parseMinWidth, parseWidth } from '../util'
import { cloneDeep,throttle } from 'lodash'

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
  width: {
    type: Number,
    default: 600
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

let tableWrapper = ref(null)
let dyTableWrapper = ref(null)
let scrollBody = ref(null) // 可视区域
let scrollHeightContainer = ref(200 * props.data.length) // 所有数据的大容器
let scrollWidthContainer = ref(200 * props.columns.length) // 所有数据的大容器
let clientHeight = ref(props.height) // 容器高度
let clientWidth = ref(props.width) // 容器宽度
let dataList = ref<any>([])
let pageSize = ref(2)
let pageNum = ref(1)
let heightMap = ref({})
let whidthMap = ref({})
const oldScrollTop = ref(0) // 记录上一次滚动位置 与当前滚动做对比 判断向上还是向下

const addDataFn = () => {
  let pageData = props.data.slice(pageSize.value * (pageNum.value - 1), pageSize.value * pageNum.value)
  if (pageData.length) dataList.value.push(...pageData)
  pageNum.value++
}
// 向上添加数据
const unshiftDataFn = () => {
  let pageData = props.data.slice(pageSize.value * (pageNum.value - 5), pageSize.value * (pageNum.value - 4))
  if (pageData.length) dataList.value = pageData.concat(dataList.value)

  pageNum.value--
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
      // addDataFn()
      nextTick(() => {
        heightMap.value[0] = 0
        let first = scrollBody.value.getElementsByTagName('tr')[pageSize.value - 1]
        heightMap.value[1] = first.offsetTop + first.offsetHeight
        if (dataList.value.length >= 2 * pageSize.value) {
          let second = scrollBody.value.getElementsByTagName('tr')[pageSize.value * 2 - 1]
          heightMap.value[2] = second.offsetTop + second.offsetHeight
          addDataFn() // 第三页数据
          nextTick(() => {
            let third = scrollBody.value.getElementsByTagName('tr')[dataList.value.length - 1]
            heightMap.value[3] = third.offsetTop + third.offsetHeight
            if (dataList.value.length < 3 * pageSize.value) {
              scrollHeightContainer.value = third.offsetTop + third.offsetHeight
            }
          })
        } else {
          let second = scrollBody.value.getElementsByTagName('tr')[dataList.value.length - 1]
          heightMap.value[3] = second.offsetTop + second.offsetHeight
          // console.log('铺满了屏幕 两倍', heightMap.value, dataList.value.length, pageNum.value)
          scrollHeightContainer.value = second.offsetTop + second.offsetHeight
        }
        tableWrapper.value.addEventListener('scroll', (e) => scrollEvent(e))
      })
    }
  })
}

// 滚动
let scrollHeight = ref(0)
const onDownScroll = (scrollTop: number) => {
  let firstChild = scrollBody.value.getElementsByTagName('tr')[0]
  let lastChild = scrollBody.value.getElementsByTagName('tr')[dataList.value.length - 1] //最后一个元素离顶部的距离
  let midChild = scrollBody.value.getElementsByTagName('tr')[pageSize.value] //第一页数据的高度
  let midLastChild = scrollBody.value.getElementsByTagName('tr')[pageSize.value * 2] //最后一页第一条数据
  nextTick(() => {
    // 渲染出的真实节点的最后一个子节点滚动的位置 加上 本身高度 减去 滚动的偏移量 是否占满不了一屏
    if (midChild.offsetTop < scrollTop) {
      // 最后边界不满一页数据也需要加载
      if ((pageNum.value - 1) * pageSize.value > props.data.length) {
        return
      }
      addDataFn() // 加数据
      let arr = cloneDeep(dataList.value)
      // 完全滚出页面的数据高度
      scrollHeight.value = heightMap.value[pageNum.value - 4]

      // 数据处理 超出的最前面一页的数据去除
      dataList.value = arr.slice(Number(pageSize.value), dataList.value.length)
      // 去除数据后 使用padding占位
      scrollBody.value.style.paddingTop = scrollHeight.value + 'px'
      nextTick(() => {
        let second = scrollBody.value.getElementsByTagName('tr')[dataList.value.length - 1]
        heightMap.value[pageNum.value - 1] = second.offsetTop + second.offsetHeight
        oldScrollTop.value = scrollTop
        //加载到最后不满一页 整个屏幕禁止滚动
        if (dataList.value.length < pageSize.value * 3) {
          scrollHeightContainer.value = heightMap.value[pageNum.value - 1]
          return
        }
        //滚动触发数据变化
        onDownScroll(scrollHeight.value)
      })
    }
  })
}
const onUpScroll = (scrollTop: number) => {
  let firstChild = scrollBody.value.getElementsByTagName('tr')[0]
  let lastChild = scrollBody.value.getElementsByTagName('tr')[dataList.value.length - 1] //最后一个元素离顶部的距离
  let midChild = scrollBody.value.getElementsByTagName('tr')[pageSize.value] //第一页数据的高度
  let midLastChild = scrollBody.value.getElementsByTagName('tr')[pageSize.value * 2] //最后一页第一条数据
  nextTick(() => {
    // 上滑 向头部添加数据 删除尾部隐藏数据
    if (scrollTop - scrollHeight.value < heightMap.value[pageNum.value - 5]) {
      // 上滑到第一页
      // 渲染占满一屏至少需要两页数据 所以当pageNum为2时 说明已经加载到最前面一页的数据了
      if (pageNum.value <= 3) {
        scrollBody.value.style.paddingTop = 0 + 'px'
        return
      }
      unshiftDataFn()
      // 容器高度恢复
      // scrollHeightContainer.value = 200 * props.data.length
      let arr = cloneDeep(dataList.value)
      // 完全滚出页面的数据高度
      // scrollHeight.value = scrollHeight.value - (hiddenHeight.offsetTop - scrollHeight.value)
      scrollHeight.value = heightMap.value[pageNum.value - 4]
      // 数据处理 超出的最前面一页的数据去除
      dataList.value = arr.slice(0, pageSize.value * 3)
      // 去除数据后 使用padding占位
      scrollBody.value.style.paddingTop = scrollHeight.value + 'px'

      oldScrollTop.value = scrollHeight.value
      //加载到最前面 整个屏幕禁止滚动
      // if (finished.value) {
      //   scrollBody.value.style.paddingTop = 0 + 'px'
      //   return
      // }
      onUpScroll(scrollHeight.value)
    }
  })
}

const scrollEvent = (e) => {
  let scrollTop = e.target.scrollTop // 当前滚动的位置
  let scrollLeft = e.target.scrollLeft // 当前滚动的位置
  //  0-pageSize*pageNum
  emits('scrollLeft', scrollLeft)
  emits('scrollTop', scrollTop)
  // 开始/结束位置
  if (scrollTop > oldScrollTop.value) {
    // 向下滚动
    onDownScroll(scrollTop)
  }
  if (scrollTop < oldScrollTop.value) {
    // 向下滚动
    onUpScroll(scrollTop)
  }
}

nextTick(() => {
  init()
})
const emits = defineEmits(['scrollLeft', 'scrollTop'])
defineExpose({})
watch(
  () => props.keepScrollLeft,
  (val, old) => {
    if (val && val !== old) {
      tableWrapper.value.scrollLeft = props.keepScrollLeft
      // console.log('keepScrollLeft', props.keepScrollLeft)
    }
  },
  { immediate: true, deep: true }
)
</script>

<template>
  <div
    id="dy-table-scroll-container"
    ref="tableWrapper"
    class="dy-vt__wrapper"
    :style="{ height: height + 'px', width: width + 'px' }"
  >
    <table
      ref="dyTableWrapper"
      class="dy-table--border-wrapper"
      :border="0"
      cellspacing="0"
      cellpadding="0"
      :style="{ height: scrollHeightContainer + 'px', width: scrollWidthContainer + 'px' }"
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
  overflow: auto;
  width: 100%;
  position: relative;
  border-right: 1px solid #363637;
}
.dy-vt__wrapper::-webkit-scrollbar {
  width: 0;
  height: 0;
}

.dy-vt__wrapper::-webkit-scrollbar-track {
  background: transparent;
}

.dy-vt__wrapper::-webkit-scrollbar-thumb {
  background: transparent;
}

.dy-vt__wrapper::-webkit-scrollbar-thumb:hover {
  background: transparent;
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
