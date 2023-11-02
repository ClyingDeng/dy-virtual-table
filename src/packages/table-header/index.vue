<script setup lang="ts">
import { onMounted } from 'vue'
import DyTableColumn from '../table-column/index.vue'

onMounted(() => {})
const props = defineProps({
  columns: {
    type: Array,
    default() {
      return () => []
    }
  },
  getHeaderCellClass: {
    type: Function,
    default() {
      return () => {}
    }
  },
  getHeaderCellStyle: {
    type: Function,
    default() {
      return () => {}
    }
  }
})
</script>

<template>
  <div class="header">
    <table ref="tableHeader" border>
      <thead>
        <tr>
          <th v-for="(column, index) in columns" :key="`${column.prop}-thead`">
            <!-- <div class="cell">{{ column.label }}</div> -->
            <dy-table-column :width="column.width ? column.width : '80px'" :data="column.label"></dy-table-column>
          </th>
        </tr>
      </thead>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.cell {
  // box-sizing: border-box;
  // overflow: hidden;
  // text-overflow: ellipsis;
  // white-space: normal;
  // word-break: break-all;
  // line-height: 23px;
  // padding: 0 12px;
}
</style>
