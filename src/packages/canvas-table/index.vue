<script setup lang="ts" name="CanvasTable">
import { computed, onMounted, ref } from 'vue'
import { getCellHeightMap, getCellWidthMap, wrapText } from '../util'
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

const dyCanvas = ref()
let ctx = null
// 默认单元格宽高
// let cellWidth = computed(() => {
//   let w = dyCanvas.value.getContext('2d').canvas.width

//   return 60
// })
let regularHeadHeight = 30 // 固定表头行高
let regularHeight = 20 // 固定填充文字行高
let paddingLR = 8 // 固定左右边距

let row = ref(props.data.length) // 多少行
let col = ref(props.columns.length) //多少列
// let tHeight = computed(() => {
//   // props.height?props.height:row*cellHeight
//   return props.height
// })

let tableData = ref<any>(props.data)
let column = ref<any>(props.columns)

// 单元格列宽集合
let cellWidths: any = computed(() => {
  return getCellWidthMap(col.value, props.width, column.value)
})
let cellHeights = computed(() => {
  return getCellHeightMap(
    dyCanvas.value.getContext('2d'),
    row.value,
    tableData.value,
    column.value,
    cellWidths.value,
    regularHeight
  )
})

onMounted(() => {
  ctx = dyCanvas.value.getContext('2d')

  // 设置画布宽高
  let canvasWidthAll = () => {
    let all = 0
    for (const key in cellWidths.value) {
      all += cellWidths.value[key]
    }
    return all
  }
  let canvasHeightAll = () => {
    let all = regularHeadHeight
    for (const key in cellHeights.value) {
      all += cellHeights.value[key]
    }
    return all
  }
  ctx.canvas.width = canvasWidthAll()
  ctx.canvas.height = canvasHeightAll()
  let canvasWidth = canvasWidthAll()
  let canvasHeight = canvasHeightAll()
  // ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
  // 画外框
  drawBorder(ctx, canvasWidth, canvasHeight)
  // 表格头渲染
  renderTHeader(ctx, canvasWidth, canvasHeight, row.value, col.value, regularHeadHeight)
  // // 画行 横线
  drawRows(ctx, canvasWidth, canvasHeight, row.value, col.value, 0, regularHeadHeight)
  // 竖线
  drawCols(ctx, canvasWidth, canvasHeight, row.value, col.value, 0, regularHeadHeight)
  // // 表格数据渲染
  renderData(ctx, canvasWidth, canvasHeight, row.value, col.value, 0, regularHeadHeight)
})
const drawBorder = (
  ctx: {
    beginPath: () => void
    moveTo: (arg0: number, arg1: number) => void
    lineTo: (arg0: number, arg1: number) => void
    strokeStyle: string
    lineWidth: number
    stroke: () => void
  },
  canvasWidth: number,
  canvasHeight: number
) => {
  ctx.beginPath()
  // 横线
  ctx.moveTo(0, 0)
  ctx.lineTo(canvasWidth, 0)
  ctx.lineTo(canvasWidth, canvasHeight) // 连接着的竖线
  // 竖线
  ctx.moveTo(0, 0)
  ctx.lineTo(0, canvasHeight)
  ctx.lineTo(canvasWidth, canvasHeight)

  ctx.strokeStyle = '#cccccc'
  ctx.lineWidth = 1
  ctx.stroke()
}
// 画行高
const drawRows = (
  ctx: {
    beginPath: () => void
    moveTo: (arg0: number, arg1: number) => void
    lineTo: (arg0: any, arg1: number) => void
    strokeStyle: string
    lineWidth: number
    stroke: () => void
  },
  canvasWidth: number,
  _canvasHeight: number,
  row: number,
  _col: number,
  _x = 0,
  y = 0,
  cellHeightsMap: any = cellHeights.value
) => {
  let start = y
  for (let i = 0; i < row; i++) {
    let cellHeight = cellHeightsMap[i]
    start += cellHeight

    ctx.beginPath()
    ctx.moveTo(0, start)
    ctx.lineTo(canvasWidth, start)
    ctx.strokeStyle = '#cccccc'
    ctx.lineWidth = 0.5
    ctx.stroke()
  }
}
// 画列宽
// 如果设置列宽 就使用列宽
// 没有 将剩余未设置的宽度给未设置的均分
const drawCols = (
  ctx: {
    beginPath: () => void
    moveTo: (arg0: number, arg1: number) => void
    lineTo: (arg0: number, arg1: any) => void
    strokeStyle: string
    lineWidth: number
    stroke: () => void
  },
  _canvasWidth: number,
  canvasHeight: number,
  _row: number,
  col: number,
  x = 0,
  _y = 0
) => {
  let start = x
  for (let i = 0; i < col; i++) {
    let cellWidth = cellWidths.value[i]
    start += cellWidth
    ctx.beginPath()
    ctx.moveTo(start, 0)
    ctx.lineTo(start, canvasHeight)
    ctx.strokeStyle = '#cccccc'
    ctx.lineWidth = 0.5
    ctx.stroke()
  }
}

// 文本填充
const renderData = (
  ctx: {
    moveTo: (arg0: number, arg1: number) => void
    font: string
    measureText: (arg0: any) => any
    fillText: (arg0: any, arg1: number, arg2: number) => void
  },
  _canvasWidth: number,
  _canvasHeight: number,
  row: number,
  col: number,
  x = 0,
  y = 0
) => {
  let startX = x

  // 每一行
  for (let i = 0; i < col; i++) {
    // 4列 定位的是第一个 x
    let cellWidth = cellWidths.value[i]

    let startY = y
    for (let j = 0; j < row; j++) {
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

// 头部
const renderTHeader = (
  ctx: {
    beginPath: () => void
    moveTo: (arg0: number, arg1: number) => void
    lineTo: (arg0: any, arg1: number) => void
    strokeStyle: string
    lineWidth: number
    stroke: () => void
  },
  canvasWidth: number,
  canvasHeight: number,
  row: number,
  col: number,
  _x = 0,
  _y = 0
) => {
  drawRows(ctx, canvasWidth, 20, 1, col, 0, 0, { 0: regularHeadHeight }) //横线
  drawCols(ctx, canvasWidth, regularHeadHeight, row, col) // 竖线
  renderHeadData(ctx, canvasWidth, canvasHeight, 1, col)
}
const renderHeadData = (
  ctx: any,
  _canvasWidth: any,
  _canvasHeight: any,
  row: number,
  col: number,
  cellHeight = regularHeadHeight
) => {
  let startX = 0

  // 每一行
  for (let i = 0; i < col; i++) {
    // 4列 定位的是第一个 x
    let cellWidth = cellWidths.value[i]

    let startY = 0
    for (let j = 0; j < row; j++) {
      let textValue = column.value[i].label
      ctx.moveTo(startX, startY)
      ctx.font = '18px'
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
  <!-- <div class="canvas-table" :style="{ height: tHeight + 'px', width: width + 'px' }"> -->
  <canvas ref="dyCanvas">
    抱歉，你的浏览器不支持 canvas 元素 （这些内容将会在不支持&lt;canvas%gt;元素的浏览器或是禁用了 JavaScript
    的浏览器内渲染并展现）
  </canvas>
  <!-- </div> -->
</template>

<style lang="scss" scoped>
.canvas-table {
  overflow: auto;
}
canvas {
  image-rendering: optimizeQuality; /* 或者 -webkit-optimize-contrast */
}
</style>
