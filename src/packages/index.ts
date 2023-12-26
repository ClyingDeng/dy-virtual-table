import DyVirtualTable from './virtual-table/index.vue'

let components = [DyVirtualTable]
const install = (Vue: any) => {
  components.forEach((_: any) => {
    Vue.component('DyVirtualTable', _)
  })
}

if (typeof window !== 'undefined' && (window as any).Vue) {
  install((window as any).Vue) // 全局直接通过script 引用的方式会默认调用install
}

export default {
  install
}
