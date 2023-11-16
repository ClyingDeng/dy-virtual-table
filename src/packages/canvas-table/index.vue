<script setup lang="ts">
import { onMounted, ref } from 'vue'
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
    default: 800
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
onMounted(() => {
  ctx = dyCanvas.value.getContext('2d')
  // ctx.fillStyle = 'red'
  // ctx.fillRect(0, 0, dyCanvas.value.width, dyCanvas.value.height)
  let gridSize = 80
  let canvasWidth = ctx.canvas.width
  let canvasHeight = ctx.canvas.height

  let row = Math.floor(canvasHeight / gridSize)
  let col = Math.floor(canvasWidth / gridSize)

  // 画行 横线
  for (let i = 0; i < row; i++) {
    ctx.beginPath()
    ctx.moveTo(0, i * gridSize - 0.5)
    ctx.lineTo(canvasWidth, i * gridSize - 0.5)
    ctx.strokeStyle = '#cccccc'
    ctx.stroke()
    // 文本填充
    ctx.moveTo(0, 0)
    ctx.font = '12px'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    let textWidth = ctx.measureText('row' + i).width
    let textHeight = ctx.measureText('row' + i).height
    console.log(Math.floor(gridSize / 2 - textHeight / 2), i * gridSize - 0.5)
    // 居中
    ctx.fillText('row' + i, Math.floor(gridSize / 2 - textWidth / 2), i * gridSize - 0.5 + gridSize / 2)
  }
  // for (let i = 0; i < col; i++) {
  //   ctx.beginPath()
  //   ctx.moveTo(i * gridSize - 0.5, 0)
  //   ctx.lineTo(i * gridSize - 0.5, canvasHeight)
  //   ctx.strokeStyle = '#cccccc'
  //   ctx.stroke()
  // }
})
</script>

<template>
  <div class="canvas-table">
    <canvas ref="dyCanvas" :width="width" :height="height">
      抱歉，你的浏览器不支持 canvas 元素 （这些内容将会在不支持&lt;canvas%gt;元素的浏览器或是禁用了 JavaScript
      的浏览器内渲染并展现）
    </canvas>
  </div>
</template>

<style lang="scss" scoped></style>
