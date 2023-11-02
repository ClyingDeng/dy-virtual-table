export interface Global {
  mockLocal: boolean
}

declare global {
  type Nullable<T> = T | null

  interface Option<T> {
    label: string
    value: T
  }
  interface Window {
    zcat: any
  }
}
