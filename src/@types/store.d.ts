import { Store } from 'vuex'
import { UserInfo } from '@/api/types/user-info'

export interface UserState {
  userInfo: Nullable<UserInfo>
}

export interface CachePageState {
  cachePages: (string | symbol)[]
}

export interface RootState {
  user: UserState
  cachePage: CachePageState
}

declare module '@vue/runtime-core' {
  // 声明自己的 store state
  // interface State {
  //   count: number
  // }

  interface ComponentCustomProperties {
    $store: Store<RootState>
  }
}
