/*
 * @Date: 2021-05-18 09:34:11
 * @LastEditors: natsu
 * @LastEditTime: 2021-05-21 15:57:01
 */
/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Vue, { VNode, ComponentOptions } from 'vue'
import { AxiosResponse } from 'axios'
import { Global } from '@/@types/global'

declare module 'vue/types/vue' {
  interface Vue {
    GLOBAL: Global
    Event: Vue
  }

  interface VueConstructor<V extends Vue = Vue> {
    options: ComponentOptions<Vue>
  }
}
