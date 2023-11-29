<script setup lang="ts">
import { computed, onMounted, ref, nextTick } from 'vue'
import { calculateTextHeight, getCellHeightMap, wrapText } from '../util'
const props = defineProps({
  data: {
    type: Array,
    default() {
      return () => []
    }
  },
  height: {
    type: Number,
    default: 300
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
  }
})

const dyCanvasContent = ref()
const dyCanvas = ref()
const dyCanvasHeader = ref()
let ctx = null
// let scrollContainer = 200 * props.data.length // 所有数据的大容器
let scrollContainer = 1340 // 所有数据的大容器
let regularHeadHeight = 30 // 固定表头行高
let regularHeight = 20 // 固定填充文字行高
let paddingLR = 8 // 固定左右边距
let column = ref(props.columns)
let pageSize = ref(2) // 分页
let pageNum = ref(1)
let tableData = ref<any>([])

// 单元格列宽集合
let cellWidths = computed(() => {
  // 默认列宽80
  return getCellWidthMap(column.value.length, props.width, column.value)
})
const getCellWidthMap = (size: number, all: number, column: any) => {
  let map = {}
  let cellWidth = 80
  // 未设置指定宽度的列宽
  let otherSize = all,
    noSize = 0
  for (let j = 0; j < size; j++) {
    if (column[j].width) otherSize = otherSize - column[j].width
    else noSize++
  }
  // 列很多 默认列宽*列数 超过 画布宽 就使用默认的
  // 列少 除了设定的宽度 其他均分
  let otherCellSize = cellWidth * size > all ? 80 : Math.floor(otherSize / noSize)

  for (let i = 0; i < size; i++) {
    // 如果设置列宽 就使用列宽
    // 没有 将剩余未设置的宽度给未设置的均分
    if (column[i].width) map[i] = column[i].width
    else {
      map[i] = otherCellSize
    }
  }
  return map
}
let cellHeights = computed(() => {
  return getCellHeightMap(
    dyCanvas.value.getContext('2d'),
    pageSize.value * (pageNum.value - 1),
    tableData.value,
    column.value,
    cellWidths.value,
    regularHeight
  )
})

onMounted(() => {
  ctx = dyCanvas.value.getContext('2d')
  ctx.canvas.height = scrollContainer

  // 表格头渲染
  renderTHeader(dyCanvasHeader.value.getContext('2d'), props.width, regularHeadHeight)
  // 渲染一屏数据
  renderPageData(ctx, props.width, props.height)
  nextTick(() => {
    dyCanvasContent.value.addEventListener('scroll', (e) => scrollEvent(e))
  })
})

const scrollEvent = (e) => {
  let scrollTop = e.target.scrollTop // 当前滚动的位置
  // console.log(scrollTop, props.height)
  onDownScroll(scrollTop)
  // 开始/结束位置
  // if (scrollTop > oldScrollTop.value) {
  // 向下滚动
  // onDownScroll(scrollTop)
  // }
  // if (scrollTop < oldScrollTop.value) {
  //   // 向下滚动
  //   onUpScroll(scrollTop)
  // }
}

const onDownScroll = (scrollTop) => {
  console.log(scrollTop, canvasHeightAll())
  // if (tableData.value.length >= props.data.length) {
  //   dyCanvas.value.getContext('2d').canvas.height = canvasHeightAll()
  //   console.log('fff', canvasHeightAll())

  //   return
  // }
  if (scrollTop > canvasHeightAll() - props.height) {
    renderScrollData(dyCanvas.value.getContext('2d'), props.width, props.height)
  }
}
let canvasHeightAll = () => {
  let all = 0
  for (const key in cellHeights.value) {
    all += cellHeights.value[key]
  }
  return all
}
// 数据
const renderPageData = (ctx, canvasWidth, canvasHeight = 20, row = 20, col = column.value.length, x = 0, y = 0) => {
  addDataFn()

  let h = canvasHeightAll()

  while (h <= canvasHeight) {
    addDataFn()
    h = canvasHeightAll()
  }
  pageSize.value = tableData.value.length
  pageNum.value = 2
  addDataFn()
  h = canvasHeightAll()
  drawCols(ctx, canvasWidth, h, pageSize.value * (pageNum.value - 1) - 1, col) // 竖线
  drawRows(ctx, canvasWidth, h, pageSize.value * (pageNum.value - 1) - 1, col, 0, 0, cellHeights.value) //横线
  renderData(ctx, canvasWidth, h, pageSize.value * (pageNum.value - 1) - 1, col, 0, 0)
}
const renderScrollData = (ctx, canvasWidth, canvasHeight = 20, row = 20, col = column.value.length, x = 0, y = 0) => {
  if (tableData.value.length >= props.data.length) {
    // ctx.canvas.height = canvasHeightAll()
    return
  }
  console.log(canvasHeightAll())

  addDataFn()
  let h = canvasHeightAll()
  console.log(cellHeights.value, tableData.value.length, canvasHeightAll())

  drawCols(ctx, canvasWidth, h, tableData.value.length - 1, col) // 竖线
  drawRows(ctx, canvasWidth, h, tableData.value.length - 1, col, 0, 0, cellHeights.value) //横线
  renderData(ctx, canvasWidth, h, tableData.value.length - 1, col, 0, 0)
}
// 文本填充
const renderData = (ctx, canvasWidth, canvasHeight, row, col, x = 0, y = 0) => {
  let startX = x

  // 每一行
  for (let i = 0; i < col; i++) {
    // 4列 定位的是第一个 x
    let cellWidth = cellWidths.value[i]

    let startY = y
    for (let j = 0; j <= row; j++) {
      let cellHeight = cellHeights.value[j]

      let textValue = tableData.value[j][column.value[i].prop]
      ctx.moveTo(startX, startY)
      ctx.font = '14px'
      let textMetrics = ctx.measureText(textValue)

      let textWidth = textMetrics.width
      let textHeight = startY + textMetrics.actualBoundingBoxAscent - textMetrics.actualBoundingBoxDescent
      let allTextOffset = (textMetrics.actualBoundingBoxAscent + textMetrics.actualBoundingBoxDescent) * 1.5

      // 居中
      if (textWidth > cellWidth) {
        // 文字换行
        // x轴再加上左右边距各一半 startX + paddingLR / 2
        wrapText(ctx, textValue, startX + paddingLR / 2, 2 * textHeight - startY, cellWidth - paddingLR, regularHeight)
      } else ctx.fillText(textValue, Math.floor(cellWidth / 2 - textWidth / 2) + startX, startY + allTextOffset)
      startY += cellHeight
    }
    startX += cellWidth
  }
}

const addDataFn = () => {
  let pageData = props.data.slice(pageSize.value * (pageNum.value - 1), pageSize.value * pageNum.value)
  if (pageData.length) tableData.value.push(...pageData)
  pageNum.value++
}
// 头部
const renderTHeader = (ctx, canvasWidth, canvasHeight, row = 0, col = column.value.length) => {
  drawRows(ctx, canvasWidth, 20, 1, col, 0, 0, { 0: regularHeadHeight }) //横线
  drawCols(ctx, canvasWidth, regularHeadHeight, row, col) // 竖线
  renderHeadData(ctx, canvasWidth, canvasHeight, 1, col)
}
// 画列宽
// 如果设置列宽 就使用列宽
// 没有 将剩余未设置的宽度给未设置的均分
const drawCols = (ctx, canvasWidth, canvasHeight, row, col, x = 0, y = 0) => {
  let start = x

  for (let i = 0; i < col - 1; i++) {
    let cellWidth = cellWidths.value[i]
    start += cellWidth
    console.log(cellWidths.value[i], start)
    ctx.beginPath()
    ctx.moveTo(start, 0)
    ctx.lineTo(start, canvasHeight)
    ctx.strokeStyle = '#363637'
    ctx.lineWidth = 0.5
    ctx.stroke()
  }
}
// 画行高
const drawRows = (ctx, canvasWidth, canvasHeight, row, col, x = 0, y = 0, cellHeightsMap: any) => {
  let start = y
  for (let i = 0; i < row; i++) {
    let cellHeight = cellHeightsMap[i]
    start += cellHeight

    ctx.beginPath()
    ctx.moveTo(0, start)
    ctx.lineTo(canvasWidth, start)
    ctx.strokeStyle = '#363637'
    ctx.lineWidth = 0.5
    ctx.stroke()
  }
}
const renderHeadData = (ctx, canvasWidth, canvasHeight, row, col, cellHeight = regularHeadHeight) => {
  let startX = 0

  // 每一行
  for (let i = 0; i < col; i++) {
    // 4列 定位的是第一个 x
    let cellWidth = cellWidths.value[i]

    let startY = 0
    for (let j = 0; j < row; j++) {
      let textValue = column.value[i].label
      ctx.moveTo(startX, startY)
      ctx.font = '400 16px Arial'
      let textMetrics = ctx.measureText(textValue)

      let textWidth = textMetrics.width
      let textHeight = startY + textMetrics.actualBoundingBoxAscent - textMetrics.actualBoundingBoxDescent
      let allTextOffset =
        (startY + cellHeight + textMetrics.actualBoundingBoxAscent + textMetrics.actualBoundingBoxDescent) / 2

      // 居中
      if (textWidth > cellWidth) {
        // 文字换行
        // x轴再加上左右边距各一半 startX + paddingLR / 2
        wrapText(ctx, textValue, startX + paddingLR / 2, 2 * textHeight - startY, cellWidth - paddingLR, regularHeight)
      } else ctx.fillText(textValue, Math.floor(cellWidth / 2 - textWidth / 2) + startX, startY + allTextOffset)
      startY += cellHeight
    }
    startX += cellWidth
  }
}
</script>

<template>
  <div ref="dyCanvasContent" class="canvas-table" :style="{ height: height + 'px', width: width + 'px' }">
    <canvas ref="dyCanvasHeader" class="table-header" :width="width" :height="regularHeadHeight">
      抱歉，你的浏览器不支持 canvas 元素 （这些内容将会在不支持&lt;canvas%gt;元素的浏览器或是禁用了 JavaScript
      的浏览器内渲染并展现）
    </canvas>
    <canvas
      ref="dyCanvas"
      :style="{ 'padding-top': regularHeadHeight + 'px' }"
      class="table-body"
      :width="width"
      :height="height"
    >
      抱歉，你的浏览器不支持 canvas 元素 （这些内容将会在不支持&lt;canvas%gt;元素的浏览器或是禁用了 JavaScript
      的浏览器内渲染并展现）
    </canvas>
  </div>
</template>

<style lang="scss" scoped>
.canvas-table {
  border: 1px solid #cccccc;
  overflow: auto;
  position: relative;
  background-color: #fff;
  .table-header {
    position: fixed;
    background-color: #89ddff;
  }
  .table-body {
    // background-color: red;
  }
}
</style>
