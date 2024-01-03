import DyVirtualTable from './virtual-table/index.vue'
import CanvasTable from './canvas-table/index.vue'

let components = [DyVirtualTable, CanvasTable]
const install = (Vue: any) => {
  components.forEach((_: any) => {
    Vue.component('DyVirtualTable', _)
    Vue.component('CanvasTable', _)
  })
}

if (typeof window !== 'undefined' && (window as any).Vue) {
  install((window as any).Vue) // 全局直接通过script 引用的方式会默认调用install
}

export default {
  install
}
