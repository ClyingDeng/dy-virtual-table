// 转化列宽
export const parseWidth = (width: number | string): number | string => {
  if (width === '') return width
  if (width !== undefined) {
    width = Number.parseInt(width as string, 10)
    if (Number.isNaN(width)) {
      width = ''
    }
  }
  return width
}
// 最小列宽
export const parseMinWidth = (minWidth: number | string): number | string => {
  if (minWidth === '') return minWidth
  if (minWidth !== undefined) {
    minWidth = parseWidth(minWidth)
    if (Number.isNaN(minWidth)) {
      minWidth = 80
    }
  }
  return minWidth
}
