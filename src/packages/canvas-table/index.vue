<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
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
let cellWidth = 60
let cellHeight = 25

let row = ref(props.data.length) // 多少行
let col = ref(props.columns.length) //多少列
let tHeight = computed(() => {
  // props.height?props.height:row*cellHeight
  return row.value * cellHeight
})

let tableData = ref(props.data)
let column = ref(props.columns)

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
const drawRows = (ctx, canvasWidth, canvasHeight, row, col) => {
  for (let i = 0; i < row; i++) {
    ctx.beginPath()
    ctx.moveTo(0, i * cellHeight)
    ctx.lineTo(canvasWidth, i * cellHeight)
    ctx.strokeStyle = '#cccccc'
    ctx.lineWidth = 0.5
    ctx.stroke()
    // // 文本填充
    // ctx.moveTo(0, 0)
    // ctx.font = '12px'
    // ctx.textAlign = 'center'
    // ctx.textBaseline = 'middle'
    // let textWidth = ctx.measureText('row' + i).width
    // console.log(cellWidth / 2 - textWidth / 8, (cellWidth - textWidth) / 2 + textWidth / 4)

    // // 居中
    // ctx.fillText('row' + i, Math.floor(cellWidth / 2 - textWidth / 8), i * cellHeight - 0.5 + cellHeight / 2)
  }
}
const drawCols = (ctx, canvasWidth, canvasHeight, row, col) => {
  for (let i = 0; i < col; i++) {
    ctx.beginPath()
    ctx.moveTo(i * cellWidth, 0)
    ctx.lineTo(i * cellWidth, canvasHeight)
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
    for (let j = 0; j < row; j++) {
      let textValue = tableData.value[j][column.value[i].prop]

      ctx.moveTo(i * cellWidth, j * cellHeight)
      ctx.font = '12px'
      let textMetrics = ctx.measureText(textValue)

      let textWidth = textMetrics.width
      let textHeight = cellHeight + textMetrics.actualBoundingBoxAscent - textMetrics.actualBoundingBoxDescent
      // console.log(column.value[i].prop, tableData.value[j][column.value[i].prop])
      // console.log(textWidth, cellWidth, tableData.value[j][column.value[i].prop])
      if (textWidth > cellWidth) wrapText(ctx, textValue, cellWidth, i * cellWidth, j * cellHeight, cellHeight)
      // 居中
      ctx.fillText(
        textValue,
        Math.floor(cellWidth / 2 - textWidth / 2) + i * cellWidth,
        textHeight / 2 + j * cellHeight
      )
    }
  }
}
// 将文本按照指定宽度进行自动换行 TODO:
const wrapText = (ctx, text, maxWidth, x, y, lineHeight) => {
  let words = text.split('')
  let line = ''

  for (let i = 0; i < words.length; i++) {
    let testLine = line + words[i] + ' '
    let metrics = ctx.measureText(testLine)
    let testWidth = metrics.width

    if (testWidth > maxWidth && i > 0) {
      ctx.fillText(line, x, y)
      line = words[i] + ''
      y += lineHeight
      console.log('line height', line, y)
    } else {
      line = testLine
    }
  }
  // console.log(y, lineHeight)

  ctx.fillText(line, x, y)
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
