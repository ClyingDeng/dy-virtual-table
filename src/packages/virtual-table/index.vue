<script setup lang="ts">
import { onMounted, ref, nextTick, computed } from 'vue'
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
const setHeight = (value: string | number) => {
  value = parseHeight(value)
  return value
}

const bodyHeight = ref()
const bodyWidth = ref()
onMounted(() => {
  let allHeight = setHeight(props.height)
  let headerHeight = setHeight(headerWrapper.value.headerHeight || 0)
  console.log(props.width, headerWrapper.value)

  bodyHeight.value = allHeight - headerHeight
  bodyWidth.value = props.width
})
// const { scrollBarRef, scrollTo, setScrollLeft, setScrollTop } = useScrollbar()
</script>

<template>
  <div class="table">
    <table :border="0" class="dy-table dy-table--border" cellspacing="0" cellpadding="0">
      <table-header ref="headerWrapper" :width="bodyWidth" :columns="columns"></table-header>

      <table-body :height="bodyHeight" :width="bodyWidth" :columns="columns" :data="data"></table-body>
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
