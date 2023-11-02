<script setup lang="ts">
import { onMounted } from 'vue'
import DyTableColumn from '../table-column/index.vue'

onMounted(() => {})
const props = defineProps({
  data: {
    type: Array,
    default() {
      return () => []
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
</script>

<template>
  <tbody>
    <tr v-for="(item, index) in data" :key="`tbody_${index}`">
      <td v-for="(column, i) in columns" :key="`tcolumn_${index}_${i}`">
        <dy-table-column
          :width="column.width ? column.width : '80px'"
          :data="item"
          :column="column"
          :key-prop="column.prop"
        ></dy-table-column>
      </td>
    </tr>
  </tbody>
</template>

<style lang="scss" scoped>
.cell {
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  word-break: break-all;
  line-height: 23px;
  padding: 0 12px;
}
</style>
