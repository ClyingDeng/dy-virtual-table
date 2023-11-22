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
// 行高
export const parseHeight = (height: number | string): number | string => {
  if (height === '') return height
  if (height !== undefined) {
    height = Number.parseInt(height as string, 10)
    if (Number.isNaN(height)) {
      height = ''
    }
  }
  return height
}

// 获取单元格 宽 集合
// size: 多少份 all: 总共  column 单元格配置
export const getCellWidthMap = (size: number, all: number, column: any) => {
  let map = {}
  // 未设置指定宽度的列宽
  let otherSize = all,
    noSize = 0
  for (let j = 0; j < size; j++) {
    if (column[j].width) otherSize = otherSize - column[j].width
    else noSize++
  }
  let otherCellSize = Math.floor(otherSize / noSize)

  for (let i = 0; i < size; i++) {
    // 如果设置列宽 就使用列宽
    // 没有 将剩余未设置的宽度给未设置的均分
    if (column[i].width) map[i] = column[i].width
    else {
      map[i] = otherCellSize
    }
  }
  return map
}

// 获取数据行高
export const getCellHeightMap = (size: number, all: number, height: number = 25) => {
  let map = {}
  for (let i = 0; i < size; i++) {
    // 如果没有换行 就使用默认行高
    // 存在换行 使用具体换行后的高度
    if (column[i].width) map[i] = column[i].width
    else {
      map[i] = otherCellSize
    }
  }
  return map
}

// 将文本按照指定宽度进行自动换行 TODO:
export const calculateTextHeight = (context, text, maxWidth, lineHeight) => {
  var words = text.split('')
  var line = ''
  var lines = 1 // 初始行数
  var totalHeight = lineHeight // 初始总高度

  for (var i = 0; i < words.length; i++) {
    var testLine = line + words[i] + ' '
    var metrics = context.measureText(testLine)
    var testWidth = metrics.width

    if (testWidth > maxWidth && i > 0) {
      line = words[i] + ' '
      totalHeight += lineHeight
      lines++
    } else {
      line = testLine
    }
  }
  return { needsWrap: lines > 1, totalHeight: totalHeight }
}
