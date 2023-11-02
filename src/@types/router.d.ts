import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    // 路由标题
    title?: string
    // 是否缓存标签数据 true缓存标签
    cache?: boolean

    needCachePages?: string[]
  }
}
