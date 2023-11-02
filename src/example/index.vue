<script setup lang="ts">
import DyVirtualTable from '../packages/virtual-table/index.vue'
import { onMounted, ref } from 'vue'
onMounted(() => {})
const tHeaderConfig = ref([
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '性别',
    prop: 'sex'
  },
  {
    label: '年龄',
    prop: 'age'
  },
  {
    label: '地址',
    prop: 'address'
  }
])

const tableData = ref([
  {
    name: 'clying',
    sex: '女',
    age: '20',
    address: '上海市青浦区华新镇'
  },
  {
    name: 'clying',
    sex: '女',
    age: '21',
    address: '上海市青浦区华新镇'
  },
  {
    name: 'deng',
    sex: '女',
    age: '20',
    address: '上海市青浦区华新镇'
  },
  {
    name: 'clying',
    sex: '女',
    age: '20',
    address: '上海市青浦区华新镇朱长村'
  },
  {
    name: 'Mark',
    sex: '男',
    age: '20',
    address: '上海市青浦区华新镇'
  },
  {
    name: 'join',
    sex: '男',
    age: '28',
    address: '上海市青浦区华新镇朱长村花之路'
  }
])
</script>

<template>
  <DyVirtualTable :columns="tHeaderConfig" :data="tableData"/>
</template>

<style lang="scss" scoped></style>
