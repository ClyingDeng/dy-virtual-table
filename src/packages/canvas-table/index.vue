<script setup lang="ts">
import { computed, onMounted, ref, nextTick } from 'vue'
import { calculateTextHeight, getCellWidthMap } from '../util'
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
let cellWidth = computed(() => {
  let w = dyCanvas.value.getContext('2d').canvas.width

  return 60
})
let cellHeight = 25

let row = ref(props.data.length) // 多少行
let col = ref(props.columns.length) //多少列
let tHeight = computed(() => {
  // props.height?props.height:row*cellHeight
  return row.value * cellHeight
})

let tableData = ref(props.data)
let column = ref(props.columns)

// 单元格列宽集合
let cellWidths = computed(() => {
  return getCellWidthMap(col.value, props.width, column.value)
})
let cellHeights = computed(() => {
  return getCellHeightMap(row.value, tableData.value, 25)
})

onMounted(() => {
  ctx = dyCanvas.value.getContext('2d')
  // ctx.fillStyle = 'red'
  // ctx.fillRect(0, 0, dyCanvas.value.width, dyCanvas.value.height)
  let canvasWidth = ctx.canvas.width
  let canvasHeight = ctx.canvas.height

  // let row = Math.floor(canvasHeight / cellHeight) // 多少行
  // let col = Math.floor(canvasWidth / cellWidth) //多少列

  // 画外框
  drawBorder(ctx, canvasWidth, canvasHeight)
  // 画行 横线
  drawRows(ctx, canvasWidth, canvasHeight, row.value, col.value)
  // 竖线
  drawCols(ctx, canvasWidth, canvasHeight, row.value, col.value)
  // 竖线
  renderData(ctx, canvasWidth, canvasHeight, row.value, col.value)

  // console.log(props.data, props.columns)
})
const drawBorder = (ctx, canvasWidth, canvasHeight) => {
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
const drawRows = (ctx, canvasWidth, canvasHeight, row, col) => {
  for (let i = 0; i < row; i++) {
    ctx.beginPath()
    ctx.moveTo(0, i * cellHeight)
    ctx.lineTo(canvasWidth, i * cellHeight)
    ctx.strokeStyle = '#cccccc'
    ctx.lineWidth = 0.5
    ctx.stroke()
  }
}
// 画列宽
// 如果设置列宽 就使用列宽
// 没有 将剩余未设置的宽度给未设置的均分
const drawCols = (ctx, canvasWidth, canvasHeight, row, col) => {
  let start = 0
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
const renderData = (ctx, canvasWidth, canvasHeight, row, col) => {
  // 每一行
  // for (let i = 0; i < col; i++) {
  for (let i = 3; i < 4; i++) {
    let cellWidth = cellWidths.value[i]
    for (let j = 0; j < row; j++) {
      let textValue = tableData.value[j][column.value[i].prop]

      ctx.moveTo(i * cellWidth, j * cellHeight)
      ctx.font = '12px'
      let textMetrics = ctx.measureText(textValue)

      let textWidth = textMetrics.width
      let textHeight = cellHeight + textMetrics.actualBoundingBoxAscent - textMetrics.actualBoundingBoxDescent
      // console.log(column.value[i].prop, tableData.value[j][column.value[i].prop])
      console.log(textWidth, cellWidth, textValue)
      if (textWidth > cellWidth) {
        let cellInfo = calculateTextHeight(ctx, textValue, cellWidth, cellHeight)
        if (cellInfo.needsWrap) {
          textHeight = cellInfo.totalHeight
        }
        console.log('换行渲染', calculateTextHeight(ctx, textValue, cellWidth, cellHeight))
      }
      // 居中
      else
        ctx.fillText(
          textValue,
          Math.floor(cellWidth / 2 - textWidth / 2) + i * cellWidth,
          textHeight / 2 + j * cellHeight
        )
    }
  }
}
</script>

<template>
  <div class="canvas-table">
    <canvas ref="dyCanvas" :width="width" :height="tHeight">
      抱歉，你的浏览器不支持 canvas 元素 （这些内容将会在不支持&lt;canvas%gt;元素的浏览器或是禁用了 JavaScript
      的浏览器内渲染并展现）
    </canvas>
  </div>
</template>

<style lang="scss" scoped></style>
