<script setup lang="ts" name="DyVirtualTable">
import { onMounted, ref, watch } from 'vue'
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
  ...defaultProps, // element table基础传参
  //边框
  border: {
    type: Boolean,
    default: true
  }
})

const headerWrapper = ref<any>(null)
const bodyWrapper = ref(null)
const setHeight = (value: string | number) => {
  value = parseHeight(value)
  return value
}

// const offsetLeft = ref()

const bodyHeight = ref()
const bodyWidth = ref()
onMounted(() => {
  let allHeight: any = setHeight(props.height as number)
  let headerHeight: any = setHeight(headerWrapper.value.headerHeight || 0)
  // console.log(props.width, headerWrapper.value.scrollLeft)

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
  keepScrollLeft.value = val
  // console.log('hScrollLeft', val)
}
const bScrollLeft = (val: number) => {
  keepScrollLeft.value = val
}
const maxWidth = ref(0)
const maxScrollWidth = (val: number) => {
  maxWidth.value = val
}
const bScrollTop = (val: number) => {
  keepScrollTop.value = val
  // console.log('bScrollTop', val)
}
</script>

<template>
  <div class="dy-vtable">
    <table
      :border="0"
      class="dy-table"
      :class="{
        'dy-table-border': border
      }"
      cellspacing="0"
      cellpadding="0"
    >
      <table-header
        ref="headerWrapper"
        :keep-scroll-left="keepScrollLeft"
        :width="bodyWidth"
        :columns="columns"
        :border="border"
        :max-width="maxWidth"
        @scroll-left="hScrollLeft"
        @max-scroll-width="maxScrollWidth"
      ></table-header>
      <!-- :init-scroll-left="bodyWrapper.scrollLeft || 0" -->
      <!-- :init-scroll-left="headerWrapper.value.scrollLeft || 0" -->
      <table-body
        ref="bodyWrapper"
        :height="bodyHeight"
        :width="bodyWidth"
        :columns="columns"
        :border="border"
        :data="data"
        :max-width="maxWidth"
        :keep-scroll-left="keepScrollLeft"
        @scroll-left="bScrollLeft"
        @scroll-top="bScrollTop"
      ></table-body>
      <tfoot></tfoot>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.dy-vtable {
  .dy-table {
    font-size: 14px;
    position: relative;
    margin: 0;
  }
  .dy-table-border {
    border-left: 1px solid #ebeef5;
    border-top: 1px solid #ebeef5;
    border-bottom: 1px solid #ebeef5;
  }
}
</style>
