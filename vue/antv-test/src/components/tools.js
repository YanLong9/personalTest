import { Chart, registerShape } from '@antv/g2'
const BACK_THREE_D = new Map([
  ['l(270) 0:rgba(14,56,75,0) 1:rgba(14,50,66,1)', '#064761'],
  ['l(270) 0:rgba(251,211,69,0.4) 1:rgba(255,208,76,1)', 'l(270) 0:rgba(255,230,160,1) 1:rgba(255,212,92,1)'],
  ['l(270) 0:rgba(105,246,245,0.5) 1:rgba(0,245,244,1)', 'l(270) 0:rgba(0,245,244,1) 1:rgba(4,211,210,1)'],
  ['l(270) 0:rgba(59,178,226,0.5) 1:rgba(25,151,255,1)', 'l(270) 0:rgba(74,190,238,1) 1:rgba(25,151,255,1)'],
  ['l(270) 0:rgba(234,217,99,0.5) 1:rgba(242,154,67,1)', 'l(270) 0:rgba(249,166,85,1) 1:rgba(242,154,67,1)'], // 阿里巴巴
  ['l(270) 0:rgba(158,107,240,0.5) 1:rgba(127,60,236,1)', 'l(270) 0:rgba(147,86,246,1) 1:rgba(123,56,231,1)'],
  ['l(270) 0:rgba(120,129,243,0.5) 1:rgba(66,78,232,0.99)', 'l(270) 0:rgba(98,109,247,1) 1:rgba(66,78,232,1)'],
  ['l(270) 0:rgba(59,178,226,0.5) 1:rgba(25,151,255,1)', 'l(270) 0:rgba(59,178,226,1) 1:rgba(25,151,255,1)'],
  ['l(270) 0:rgba(86,145,178,0.5) 1:rgba(70,139,232,1)', 'l(270) 0:rgba(87,153,242,1) 1:rgba(70,139,232,1)'], // 华为
  ['l(270) 0:rgba(104,219,187,0.5) 1:rgba(104,219,187,1)', 'l(270) 0:rgba(122,233,202,1) 1:rgba(104,219,187,1)'], // 吉利
  ['l(270) 0:rgba(138,176,226,0.5) 1:rgba(138,176,226,1)', 'l(270) 0:rgba(149,188,235,1) 1:rgba(136,176,225,1)'], // 曹操
  ['l(270) 0:rgba(87,73,182,0.5) 1:rgba(87,73,182,0.99)', 'l(270) 0:rgba(105,90,204,1) 1:rgba(87,73,182,1)'], // 领跑
  ['l(270) 0:rgba(234,118,123,0.5) 1:rgba(210,71,76,0.99)', 'l(270) 0:rgba(216,86,91,1) 1:rgba(210,71,76,1)'] // 大华
])

// 3d柱状图
/**
 * @param {drawSolidColumnChart} obj
 * position 值类型的坐标轴在左侧还是右侧 默认值'left'
 * padding 图表的padding
 * offsetLegendX 图例离图表X方向的距离
 */
export function drawSolidColumnChart(obj) {
  const { container, data } = obj
  /** ****************************************************************************/

  registerShape('interval', 'border-radius', {
    draw(cfg, container) {
      //
      const points = cfg.points
      let path = []
      path.push(['M', points[0].x, points[0].y])
      path.push(['L', points[1].x, points[1].y])
      path.push(['L', points[2].x, points[2].y])
      path.push(['L', points[3].x, points[3].y])
      path.push('Z')
      path = this.parsePath(path) // 将 0 - 1 转化为画布坐标

      //
      const group = container.addGroup()
      group.addShape('rect', {
        attrs: {
          x: path[1][1], // 矩形起始点为左上角
          y: path[1][2],
          width: path[2][1] - path[1][1],
          height: path[0][2] - path[1][2],
          fill: '#064761'
        }
      })

      group.addShape('ellipse', {
        attrs: {
          x: path[1][1] + (path[2][1] - path[1][1]) / 2,
          y: path[1][2] + (path[2][1] - path[1][1]) / 4 - (path[2][1] - path[1][1]) / 4,
          rx: (path[2][1] - path[1][1]) / 2,
          ry: (path[2][1] - path[1][1]) / 4,
          fill: '#064761'
        }
      })

      return group
    }
  })

  /** ****************************************************************************/

  const chart = new Chart({
    container: container,
    autoFit: true
  })

  chart.data(data)

  chart.tooltip({
    marker: null
  })

  /** ****************************************************************************/

  chart.scale({
    value: {
      alias: '今日测试车数量',
      min: 0,
      max: 20,
      tickCount: 5,
      tickInterval: 4,
      range: [0, 0.97]
    }
  })

  /** ****************************************************************************/

  chart.axis('value', {
    line: {
      style: {
        stroke: '#D4F4F3',
        lineWidth: '1'
      }
    },
    label: {
      style: {
        fontSize: 12,
        fill: '#E9F2FF'
      }
    },
    grid: null,
    tickLine: null
  })

  /** ****************************************************************************/

  chart.axis('sort', {
    line: {
      style: {
        stroke: '#D4F4F3',
        lineWidth: '1'
      }
    },
    label: {
      style: {
        fontSize: 12,
        fill: '#E9F2FF'
      }
    },
    grid: null,
    tickLine: null
  })

  /** ****************************************************************************/

  chart
    .interval()
    .position('sort*value')
    .size(18)
    .shape('border-radius')

  /** ****************************************************************************/

  chart.render()

  return chart
}
