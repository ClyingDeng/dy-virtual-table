<script setup lang="ts">
import { onMounted, ref, nextTick, watch, computed } from 'vue'
import defaultProps from './table-data/defaults'
import TableHeader from '../table-header/index.vue'
import TableBody from '../table-body/index.vue'
import { parseHeight } from '../util'

const props = defineProps({
  columns: {
    type: Array,
    default() {
      return []
    }
  },
  ...defaultProps // element table基础传参
})

const headerWrapper = ref(null)
const bodyWrapper = ref(null)
const setHeight = (value: string | number) => {
  value = parseHeight(value)
  return value
}

const offsetLeft = ref()

const bodyHeight = ref()
const bodyWidth = ref()
onMounted(() => {
  let allHeight = setHeight(props.height)
  let headerHeight = setHeight(headerWrapper.value.headerHeight || 0)
  console.log(props.width, headerWrapper.value.scrollLeft)

  bodyHeight.value = allHeight - headerHeight
  bodyWidth.value = props.width
})

watch(
  () => bodyWrapper.value,
  (val, old) => {
    if (val && val !== old) {
      // console.log('initScrollLeft', bodyWrapper.value)
    }
  },
  { deep: true }
)
// watch(
//   () => headerWrapper.value,
//   (val, old) => {
//     // if (val && val !== old) {
//     console.log('initScrollLeft', headerWrapper.value.tableHeaderWrapper)
//     // }
//   },
//   { deep: true }
// )
// const { scrollBarRef, scrollTo, setScrollLeft, setScrollTop } = useScrollbar()
let keepScrollTop = ref(0)
let keepScrollLeft = ref(0)
const hScrollLeft = (val: number) => {
  // keepScrollLeft.value = val
  // console.log('hScrollLeft', val)
}
const bScrollLeft = (val: number) => {
  // keepScrollLeft.value = val
  // console.log('bScrollLeft', val)
}
const bScrollTop = (val: number) => {
  keepScrollTop.value = val
  // console.log('bScrollTop', val)
}
</script>

<template>
  <div class="table">
    <table :border="0" class="dy-table dy-table--border" cellspacing="0" cellpadding="0">
      <table-header
        ref="headerWrapper"
        :keep-scroll-left="keepScrollLeft"
        :width="bodyWidth"
        :columns="columns"
        @scroll-left="hScrollLeft"
      ></table-header>
      <!-- :init-scroll-left="bodyWrapper.scrollLeft || 0" -->
      <!-- :init-scroll-left="headerWrapper.value.scrollLeft || 0" -->
      <table-body
        ref="bodyWrapper"
        :height="bodyHeight"
        :width="bodyWidth"
        :columns="columns"
        :data="data"
        :keep-scroll-left="keepScrollLeft"
        @scroll-left="bScrollLeft"
        @scroll-top="bScrollTop"
      ></table-body>
      <tfoot>
        <!-- <tr>
          <td>Sum</td>
          <td>$180</td>
        </tr> -->
      </tfoot>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.dy-table {
  position: relative;
}
.dy-table--border {
  border-left: 1px solid #363637;
  border-top: 1px solid #363637;
  border-bottom: 1px solid #363637;
}
</style>
