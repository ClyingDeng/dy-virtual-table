<script setup lang="ts">
import { ref } from 'vue'
import VirtualTable from './packages/virtual-table/index.vue'
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
    prop: 'age',
    width: 100
  },
  {
    label: '地址',
    prop: 'address',
    width: 260
  }
])

const tableData = ref([
  {
    name: 'clying1',
    sex: '女',
    age: '1',
    address: '上海市青浦区华新镇'
  },
  {
    name: '第二',
    sex: '女',
    age: '2',
    address: '上海市青浦区华新镇'
  },
  {
    name: 'deng',
    sex: '女',
    age: '3',
    address: '上海市青浦区华新镇'
  },
  {
    name: 'clying',
    sex: '女',
    age: '4',
    address: '上海市青浦区华新镇朱长村'
  },
  {
    name: 'Mark',
    sex: '男',
    age: '5',
    address: '上海市青浦区华新镇'
  },
  {
    name: 'join',
    sex: '男',
    age: '6',
    address: '上海市青浦区华新镇朱长村花之路'
  }
])

const bigDataFn = () => {
  for (let i = 0; i < 1000; i++) {
    tableData.value[i] = {
      name: 'clying ' + i,
      sex: '女',
      age: '22',
      address: '上海市青浦区华新镇' + i
    }
  }
}
bigDataFn()
</script>

<template>
  <div>
    <VirtualTable border :height="400" :data="tableData" :columns="tHeaderConfig" style="width: 100%"></VirtualTable>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
