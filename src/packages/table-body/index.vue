<script setup lang="ts">
import { onMounted, ref, nextTick, watch } from 'vue'
import DyTableColumn from '../table-column/index.vue'
import { parseMinWidth, parseWidth } from '../util'

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
    default() {
      return () => 400
    }
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
let scrollBody = ref(null)
let scrollContainer = ref(20 * props.data.length)
let dataList = ref<any>([])
let pageSize = ref(10)
let pageNum = ref(1)
let finished = ref(false)

// 加数据
// const addDataFn = () => {
//   // 第一页直接进行数据赋值
//   if (pageNum.value === 1) {
//     // 无数据时
//     // noData.value = data.length === 0 ? true : false
//     dataList.value = props.data.slice(0, pageSize.value) || []
//     if (dataList.value.length === 0) {
//       finished.value = true
//     }
//   }
//   console.log(pageSize.value * (pageNum.value - 1), pageSize.value * pageNum.value)

//   // 大于1页后需要push数据
//   let pageData = props.data.slice(pageSize.value * (pageNum.value - 1), pageSize.value * pageNum.value)
//   if (pageNum.value > 1 && pageData.length) dataList.value.push(...pageData)

//   pageNum.value++
// }
const addDataFn = () => {
  // 第一页直接进行数据赋值
  // if (pageNum.value === 1) {
  //   // 无数据时
  //   // noData.value = data.length === 0 ? true : false
  //   dataList.value = props.data.slice(0, pageSize.value) || []
  //   if (dataList.value.length === 0) {
  //     finished.value = true
  //   }
  // }
  // console.log(pageSize.value * (pageNum.value - 1), pageSize.value * pageNum.value)

  // 大于1页后需要push数据
  let pageData = props.data.slice(pageSize.value * (pageNum.value - 1), pageSize.value * pageNum.value)
  if (pageData.length) dataList.value.push(...pageData)

  pageNum.value++
}

addDataFn()

const renderTrFn = () => {
  // 删除所有子节点
  while (scrollBody.value.firstChild) scrollBody.value.removeChild(scrollBody.value.firstChild)

  // 创建新的子节点
  const fragment = new DocumentFragment()

  dataList.value.forEach((item: any, index: number) => {
    const liContainer = document.createElement('tr')
    liContainer.setAttribute('key', `tbody_${index}`)
    liContainer.setAttribute('class', `dy-vt-wrapper`)
    // fragment += `<tr :key="tbody_${index}" class="dy-vt-wrapper">`
    // let s = ''
    const fragmentli = new DocumentFragment()
    props.columns.forEach((column: any, i: number) => {
      const li = document.createElement('td')
      li.setAttribute('key', `tcolumn_${index}_${i}`)
      li.setAttribute('class', `dy-table__cell`)
      li.style.width = `${setColumnWidth(column).realWidth}px`

      const cell = document.createElement('dy-table-column')
      cell.setAttribute('data', `${JSON.stringify(item)}`)
      cell.setAttribute('index', `${index}`)
      cell.setAttribute('column', `${JSON.stringify(column)}`)
      cell.setAttribute('key-prop', `${column.prop}`)

      li.appendChild(cell)
      // s += `          <td
      //       :key="tcolumn_${index}_${i}"
      //       class="dy-table__cell"
      //       :style="{ width: ${setColumnWidth(column).realWidth}px }"
      //     >
      //     <dy-table-column :data="${item}" :index="${index}" :column="${column}" :key-prop="${column.prop}"
      //     ></dy-table-column>
      //     </td>
      //     `
      fragmentli.appendChild(li)
    })
    liContainer.appendChild(fragmentli)
    // fragment += s
    fragment.appendChild(liContainer)
  })
  scrollBody.value.appendChild(fragment)
  console.log(fragment)
}

nextTick(() => {
  let clientHeight = props.height // 容器高度
  // 容器内数据的高度
  let firstChild = scrollBody.value.getElementsByTagName('tr')[0]
  let lastChild = scrollBody.value.getElementsByTagName('tr')[pageSize.value - 1] //最后一个元素离顶部的距离
  console.log(lastChild.offsetTop)
  // 初始化可是区数据 确保占满可视区
  if (lastChild.offsetTop < clientHeight) addDataFn()

  // console.log(scrollBody.value.offsetTop, props.height)
  // let scrollRest =
  tableWrapper.value.addEventListener('scroll', (e) => {
    // let lastChild = scrollBody.value.lastElementChild
    let scrollTop = e.target.scrollTop // 滚出容器的高度
    console.log(lastChild, lastChild.offsetTop, scrollTop)
    // 滚动
    if (scrollTop >= lastChild.offsetTop) {
      // renderTrFn()
      addDataFn()
      dataList.value.splice(0, 10)
      e.target.scrollTop = 0
      console.log(dataList.value, pageNum.value)
      debugger
    }
  })
})
// watch(
//   () => scrollBody.value,
//   (arr, oldVal) => {
//     console.log(arr)
//   },
//   { deep: true }
// )
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
        <!-- </div> -->
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
