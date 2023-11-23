<script setup lang="ts">
import { ref } from 'vue'
import CanvasTable from './packages/canvas-table/index.vue'
// import VirtualTable from './packages/virtual-table/index.vue'
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
    address: '上海市青浦区华新镇上海市青浦区华新镇上海市青浦区华新镇上海市青浦区华新镇'
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
    address:
      '上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路'
  },
  {
    name: 'Mark',
    sex: '男',
    age: '7',
    address: '上海市青浦区华新镇'
  },
  {
    name: 'join',
    sex: '男',
    age: '8',
    address:
      '上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路'
  },
  {
    name: 'join',
    sex: '男',
    age: '9',
    address:
      '上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路'
  },
  {
    name: 'Mark',
    sex: '男',
    age: '10',
    address: '上海市青浦区华新镇'
  },
  {
    name: 'Mark',
    sex: '男',
    age: '11',
    address: '上海市青浦区华新镇'
  },
  {
    name: 'join',
    sex: '男',
    age: '12',
    address:
      '上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路'
  },
  {
    name: 'deng',
    sex: '女',
    age: '13',
    address: '上海市青浦区华新镇上海市青浦区华新镇上海市青浦区华新镇上海市青浦区华新镇'
  },
  {
    name: 'clying',
    sex: '女',
    age: '14',
    address: '上海市青浦区华新镇朱长村'
  },
  {
    name: 'Mark',
    sex: '男',
    age: '15',
    address: '上海市青浦区华新镇'
  },
  {
    name: 'join',
    sex: '男',
    age: '16',
    address:
      '上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路'
  },
  {
    name: 'Mark',
    sex: '男',
    age: '17',
    address: '上海市青浦区华新镇'
  },
  {
    name: 'Mark',
    sex: '男',
    age: '18',
    address: '上海市青浦区华新镇'
  },
  {
    name: 'Mark',
    sex: '男',
    age: '19',
    address: '上海市青浦区华新镇'
  },
  {
    name: 'Mark',
    sex: '男',
    age: '20',
    address: '上海市青浦区华新镇'
  },
  {
    name: 'clying1',
    sex: '女',
    age: '21',
    address: '上海市青浦区华新镇'
  },
  {
    name: '第二',
    sex: '女',
    age: '22',
    address: '上海市青浦区华新镇'
  },
  {
    name: 'deng',
    sex: '女',
    age: '23',
    address: '上海市青浦区华新镇上海市青浦区华新镇上海市青浦区华新镇上海市青浦区华新镇'
  },
  {
    name: 'clying',
    sex: '女',
    age: '24',
    address: '上海市青浦区华新镇朱长村'
  },
  {
    name: 'Mark',
    sex: '男',
    age: '25',
    address: '上海市青浦区华新镇'
  },
  {
    name: 'join',
    sex: '男',
    age: '26',
    address:
      '上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路'
  },
  {
    name: 'Mark',
    sex: '男',
    age: '27',
    address: '上海市青浦区华新镇'
  },
  {
    name: 'join',
    sex: '男',
    age: '28',
    address:
      '上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路'
  },
  {
    name: 'join',
    sex: '男',
    age: '29',
    address:
      '上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路'
  },
  {
    name: 'Mark',
    sex: '男',
    age: '30',
    address: '上海市青浦区华新镇'
  },
  {
    name: 'Mark',
    sex: '男',
    age: '31',
    address: '上海市青浦区华新镇'
  },
  {
    name: 'join',
    sex: '男',
    age: '32',
    address:
      '上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路'
  },
  {
    name: 'deng',
    sex: '女',
    age: '33',
    address: '上海市青浦区华新镇上海市青浦区华新镇上海市青浦区华新镇上海市青浦区华新镇'
  },
  {
    name: 'clying',
    sex: '女',
    age: '34',
    address: '上海市青浦区华新镇朱长村'
  },
  {
    name: 'Mark',
    sex: '男',
    age: '35',
    address: '上海市青浦区华新镇'
  },
  {
    name: 'clying',
    sex: '女',
    age: '34',
    address: '上海市青浦区华新镇朱长村'
  },
  {
    name: 'Mark',
    sex: '男',
    age: '35',
    address: '上海市青浦区华新镇'
  }
])

// console.log('tableData.value', tableData.value)
</script>

<template>
  <div>
    <!-- <VirtualTable border :height="400" :data="tableData" :columns="tHeaderConfig" style="width: 100%"></VirtualTable> -->
    <canvas-Table :height="2000" :data="tableData" :columns="tHeaderConfig"></canvas-Table>
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
