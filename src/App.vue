<script setup lang="ts">
import { ref } from 'vue'
// import CanvasTable from './packages/canvas-table/index.vue'
// import VirtualTable from './packages/virtual-table/index.vue'
// const tHeaderConfig2 = ref([
//   {
//     label: '姓名1',
//     prop: 'name',
//     align: 'left',
//     width: 100
//   },
//   {
//     label: '性别2',
//     prop: 'sex',
//     align: 'right',
//     width: 100
//   },
//   {
//     label: '年龄3',
//     prop: 'age',
//     align: 'center',
//     width: 100
//   },
//   {
//     label: '地址4',
//     prop: 'address',
//     width: 260
//   },
//   {
//     label: '职业5',
//     prop: 'duty',
//     width: 100
//   },
//   {
//     label: '单位6',
//     prop: 'unit',
//     width: 80
//   },
//   {
//     label: '日期7',
//     prop: 'date7',
//     width: 100
//   },
//   {
//     label: '日期8',
//     prop: 'date8',
//     width: 80
//   },
//   {
//     label: '地址9',
//     prop: 'address9',
//     width: 260
//   },
//   {
//     label: '职业10',
//     prop: 'duty10',
//     width: 100
//   },
//   {
//     label: '单位11',
//     prop: 'unit11',
//     width: 80
//   },
//   {
//     label: '日期12',
//     prop: 'date12',
//     width: 100
//   },
//   {
//     label: '日期13',
//     prop: 'date13',
//     width: 80
//   },
//   {
//     label: '地址14',
//     prop: 'address14',
//     width: 260
//   },
//   {
//     label: '职业15',
//     prop: 'duty15',
//     width: 100
//   },
//   {
//     label: '单位16',
//     prop: 'unit16',
//     width: 80
//   },
//   {
//     label: '日期17',
//     prop: 'date17',
//     width: 100
//   },
//   {
//     label: '日期18',
//     prop: 'date18',
//     width: 80
//   },
//   {
//     label: '地址19',
//     prop: 'address19',
//     width: 260
//   },
//   {
//     label: '职业20',
//     prop: 'duty20',
//     width: 100
//   },
//   {
//     label: '姓名21',
//     prop: 'name21',
//     width: 100
//   },
//   {
//     label: '性别22',
//     prop: 'sex22',
//     width: 100
//   },
//   {
//     label: '年龄23',
//     prop: 'age23',
//     width: 100
//   },
//   {
//     label: '地址24',
//     prop: 'address24',
//     width: 260
//   },
//   {
//     label: '职业25',
//     prop: 'duty25',
//     width: 100
//   },
//   {
//     label: '单位26',
//     prop: 'unit26',
//     width: 80
//   },
//   {
//     label: '日期27',
//     prop: 'date27',
//     width: 100
//   },
//   {
//     label: '日期28',
//     prop: 'date28',
//     width: 80
//   },
//   {
//     label: '地址29',
//     prop: 'address29',
//     width: 260
//   },
//   {
//     label: '职业30',
//     prop: 'duty30',
//     width: 100
//   },
//   {
//     label: '姓名31',
//     prop: 'name31',
//     width: 100
//   },
//   {
//     label: '性别32',
//     prop: 'sex32',
//     width: 100
//   },
//   {
//     label: '年龄33',
//     prop: 'age33',
//     width: 100
//   }
// ])

// const tableData2 = ref([
//   {
//     name: 'clying1',
//     sex32: '女',
//     sex: '女',
//     age: '1',
//     duty: ';;;;;;;',
//     unit: '6',
//     date7: 'date7',
//     date8: 'date8',
//     address9: 'address9',
//     duty10: 'duty10',
//     unit11: 'unit11',
//     date12: 'date12',
//     date13: '01/01/13',
//     address14: 'address14address14',
//     duty15: 'hhh15',
//     unit16: 'unit16',
//     date17: 'date17',
//     date18: 'date18',
//     address19: 'address19',
//     duty20: 'duty20',
//     name21: 'name21',
//     sex22: 'sex22',
//     age23: 'age23',
//     address24: 'address24address24address24address24',
//     duty25: 'duty25',
//     unit26: 'unit26',
//     date27: 'date27',
//     date28: 'date28',
//     address29: 'address29',
//     duty30: 'hhh30',
//     age33: 'hhh30age33',
//     name31: 'clying1name31',
//     address: '上海市青浦区华新镇'
//   },
//   {
//     name: '第二',
//     sex: '女',
//     sex32: '女',
//     age: '2',
//     unit16: 'unit16',
//     date17: 'date17',
//     date18: 'date18',
//     address19: 'address19',
//     duty20: '2duty20',
//     name21: '2name21',
//     sex22: '2sex22',
//     age23: '2age23',
//     address24: '2address24address24address24address24',
//     duty25: '2duty25',
//     unit26: '2unit26',
//     date27: 'date27',
//     date28: '2date28',
//     address29: 'address29',
//     duty30: '2hhh30',
//     age33: '2hhh30age33',
//     address: '上海市青浦区华新镇'
//   },
//   {
//     name: 'deng',
//     sex: '女',
//     sex32: '女',
//     age: '3',
//     address: '2'
//   },
//   {
//     name: 'clying',
//     sex: '女',
//     sex32: '女',
//     age: '4',
//     duty15: '4duty15',
//     address: '上海市青浦区华新镇朱长村'
//   },
//   {
//     name: 'Mark',
//     sex: '男',
//     sex32: '女',
//     age: '5',
//     address: '上海市青浦区华新镇'
//   },
//   {
//     name: 'join',
//     sex: '男',
//     sex32: '女',
//     age: '6',
//     address:
//       '上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路'
//   },
//   {
//     name: 'Mark',
//     sex: '男',
//     age: '7',
//     address: '上海市青浦区华新镇'
//   },
//   {
//     name: 'join',
//     sex: '男',
//     age: '8',
//     address:
//       '上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路'
//   },
//   {
//     name: 'join',
//     sex: '男',
//     sex32: '女',
//     age: '9',
//     address:
//       '上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路'
//   },
//   {
//     name: 'Mark',
//     sex: '男',
//     sex32: '女',
//     age: '10',
//     address: '上海市青浦区华新镇'
//   },
//   {
//     name: 'Mark',
//     sex: '男',
//     sex32: '女',
//     age: '11',
//     address: '上海市青浦区华新镇'
//   },
//   {
//     name: 'join',
//     sex: '男',
//     sex32: '女',
//     age: '12',
//     address:
//       '上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路'
//   },
//   {
//     name: 'deng',
//     sex: '女',
//     sex32: '女',
//     age: '13',
//     address: '上海市青浦区华新镇上海市青浦区华新镇上海市青浦区华新镇上海市青浦区华新镇'
//   },
//   {
//     name: 'clying',
//     sex: '女',
//     age: '14',
//     address: '上海市青浦区华新镇朱长村'
//   },
//   {
//     name: 'Mark',
//     sex: '男',
//     age: '15',
//     address: '上海市青浦区华新镇'
//   },
//   {
//     name: 'join',
//     sex: '男',
//     age: '16',
//     address:
//       '上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路'
//   },
//   {
//     name: 'Mark',
//     sex: '男',
//     age: '17',
//     address: '上海市青浦区华新镇'
//   },
//   {
//     name: 'Mark',
//     sex: '男',
//     age: '18',
//     address: '上海市青浦区华新镇'
//   },
//   {
//     name: 'Mark',
//     sex: '男',
//     age: '19',
//     address: '上海市青浦区华新镇'
//   },
//   {
//     name: 'Mark',
//     sex: '男',
//     age: '20',
//     address: '上海市青浦区华新镇'
//   },
//   {
//     name: 'clying1',
//     sex: '女',
//     age: '21',
//     address: '上海市青浦区华新镇'
//   },
//   {
//     name: '第二',
//     sex: '女',
//     age: '22',
//     address: '上海市青浦区华新镇'
//   },
//   {
//     name: 'deng',
//     sex: '女',
//     age: '23',
//     address: '上海市青浦区华新镇上海市青浦区华新镇上海市青浦区华新镇上海市青浦区华新镇'
//   },
//   {
//     name: 'clying',
//     sex: '女',
//     age: '24',
//     address: '上海市青浦区华新镇朱长村'
//   },
//   {
//     name: 'Mark',
//     sex: '男',
//     age: '25',
//     address: '上海市青浦区华新镇'
//   },
//   {
//     name: 'join',
//     sex: '男',
//     age: '26',
//     address:
//       '上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路'
//   },
//   {
//     name: 'Mark',
//     sex: '男',
//     age: '27',
//     address: '上海市青浦区华新镇'
//   },
//   {
//     name: 'join',
//     sex: '男',
//     age: '28',
//     address:
//       '上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路'
//   },
//   {
//     name: 'join',
//     sex: '男',
//     age: '29',
//     address:
//       '上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路'
//   },
//   {
//     name: 'Mark',
//     sex: '男',
//     age: '30',
//     address: '上海市青浦区华新镇'
//   },
//   {
//     name: 'Mark',
//     sex: '男',
//     age: '31',
//     address: '上海市青浦区华新镇'
//   },
//   {
//     name: 'join',
//     sex: '男',
//     age: '32',
//     address:
//       '上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路'
//   },
//   {
//     name: 'deng',
//     sex: '女',
//     age: '33',
//     address: '上海市青浦区华新镇上海市青浦区华新镇上海市青浦区华新镇上海市青浦区华新镇'
//   },
//   {
//     name: 'clying',
//     sex: '女',
//     age: '34',
//     address: '上海市青浦区华新镇朱长村'
//   },
//   {
//     name: 'Mark',
//     sex: '男',
//     age: '35',
//     address: '上海市青浦区华新镇'
//   },
//   {
//     name: 'clying',
//     sex: '女',
//     age: '34',
//     address: '上海市青浦区华新镇朱长村'
//   },
//   {
//     name: 'Mark',
//     sex: '男',
//     age: '35',
//     address: '上海市青浦区华新镇'
//   }
// ])
// const tHeaderConfig1 = ref([
//   {
//     label: '姓名1',
//     prop: 'name',
//     // align: 'left',
//     width: 100
//   },
//   {
//     label: '性别2',
//     prop: 'sex'
//   },
//   {
//     label: '年龄3',
//     prop: 'age',
//     // align: 'center',
//     width: 100
//   },
//   {
//     label: '地址4',
//     prop: 'address',
//     width: 260
//   }
// ])

// const tableData1 = ref([
//   {
//     name: 'clying1',
//     sex: '女',
//     age: '1',
//     address: 'address14address14'
//   },
//   {
//     name: '第二',
//     sex: '女',
//     sex32: '女',
//     age: '2',
//     unit16: 'unit16',
//     date17: 'date17',
//     date18: 'date18',
//     address19: 'address19',
//     duty20: '2duty20',
//     name21: '2name21',
//     sex22: '2sex22',
//     age23: '2age23',
//     address24: '2address24address24address24address24',
//     duty25: '2duty25',
//     unit26: '2unit26',
//     date27: 'date27',
//     date28: '2date28',
//     address29: 'address29',
//     duty30: '2hhh30',
//     age33: '2hhh30age33',
//     address: '上海市青浦区华新镇'
//   },
//   {
//     name: 'deng',
//     sex: '女',
//     sex32: '女',
//     age: '3',
//     address: '2'
//   },
//   {
//     name: 'clying',
//     sex: '女',
//     sex32: '女',
//     age: '4',
//     duty15: '4duty15',
//     address: '上海市青浦区华新镇朱长村'
//   },
//   {
//     name: 'Mark',
//     sex: '男',
//     sex32: '女',
//     age: '5',
//     address: '上海市青浦区华新镇'
//   },
//   {
//     name: 'join',
//     sex: '男',
//     sex32: '女',
//     age: '6',
//     address:
//       '上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路'
//   },
//   {
//     name: 'Mark',
//     sex: '男',
//     age: '7',
//     address: '上海市青浦区华新镇'
//   },
//   {
//     name: 'join',
//     sex: '男',
//     age: '8',
//     address:
//       '上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路'
//   },
//   {
//     name: 'join',
//     sex: '男',
//     sex32: '女',
//     age: '9',
//     address:
//       '上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路'
//   },
//   {
//     name: 'Mark',
//     sex: '男',
//     sex32: '女',
//     age: '10',
//     address: '上海市青浦区华新镇'
//   },
//   {
//     name: 'Mark',
//     sex: '男',
//     sex32: '女',
//     age: '11',
//     address: '上海市青浦区华新镇'
//   },
//   {
//     name: 'join',
//     sex: '男',
//     sex32: '女',
//     age: '12',
//     address:
//       '上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路'
//   },
//   {
//     name: 'join',
//     sex: '男',
//     sex32: '女',
//     age: '13',
//     address: '13'
//   },
//   {
//     name: 'join',
//     sex: '男',
//     sex32: '女',
//     age: '14',
//     address:
//       '上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路'
//   },
//   {
//     name: 'join',
//     sex: '男',
//     sex32: '女',
//     age: '15',
//     address:
//       '上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路'
//   },
//   {
//     name: 'join',
//     sex: '男',
//     sex32: '女',
//     age: '16',
//     address:
//       '上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路'
//   }
// ])
const tHeaderConfig = ref([
  {
    label: '姓名1',
    prop: 'name',
    align: 'left',
    width: 100
  },
  {
    label: '性别2',
    prop: 'sex',
    align: 'center',
    width: 100
  },
  {
    label: '年龄3',
    prop: 'age',
    align: 'right',
    width: 100
  },
  {
    label: '地址4',
    prop: 'address'
    // width: 260
  }
])

const tableData = ref([
  {
    name: 'clying1',
    sex32: '女',
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
    address: '2'
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
</script>

<template>
  <div>
    <dy-virtual-table :height="400" :data="tableData" :columns="tHeaderConfig"></dy-virtual-table>
    <!-- <dy-virtual-table border :height="400" :data="tableData" :columns="tHeaderConfig"></dy-virtual-table> -->
    <!-- canvas-->
    <!-- <canvas-Table :height="500" :data="tableData1" :columns="tHeaderConfig1"></canvas-Table> -->
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
