<script setup lang="ts">
import { onMounted, ref } from 'vue'
import defaultProps from './table-data/defaults'
import TableHeader from '../table-header/index.vue'
import TableBody from '../table-body/index.vue'
onMounted(() => {})

const props = defineProps({
  columns: {
    type: Array,
    default() {
      return []
    }
  },
  ...defaultProps // element table基础传参
})

// const { scrollBarRef, scrollTo, setScrollLeft, setScrollTop } = useScrollbar()
</script>

<template>
  <div class="table">
    <table border="1">
      <table-header :columns="columns"></table-header>
      <table-body :columns="columns" :data="data"></table-body>
      <tfoot>
        <!-- <tr>
          <td>Sum</td>
          <td>$180</td>
        </tr> -->
      </tfoot>
    </table>
  </div>
</template>

<style lang="scss" scoped></style>
