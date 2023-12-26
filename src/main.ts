import { createApp } from 'vue'

import App from './App.vue'
import DyVirtualTable from './packages/index'
// import DyVirtualTable from '../dist/dy-virtual-table'

createApp(App).use(DyVirtualTable).mount('#app')

// import DyVirtualTable from './packages/virtual-table/index.vue'

// DyVirtualTable.install = function (Vue: any) {
//   console.log(DyVirtualTable.name)
//   Vue.component('DyVirtualTable', DyVirtualTable)
// }

// export default { DyVirtualTable }
