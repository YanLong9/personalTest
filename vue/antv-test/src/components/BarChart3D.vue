<template>
  <div id="barChart3D" ref="myChart" />
</template>
<script>
import { Chart, registerShape } from '@antv/g2'

// 3d柱状图颜色数组，第一项是柱状图矩形颜色，第二项是柱状图顶部椭圆颜色
const BAR3D_CHART_COLOR_MAP = new Map([
  // 背景柱子
  ['l(270) 0:rgba(14,56,75,0) 1:rgba(14,50,66,1)', '#064761'],
  [
    'l(270) 0:rgba(234,217,99,0.5) 1:rgba(242,154,67,1)',
    'l(270) 0:rgba(249,166,85,1) 1:rgba(242,154,67,1)'
  ], // 阿里巴巴
  [
    'l(270) 0:rgba(86,145,178,0.5) 1:rgba(70,139,232,1)',
    'l(270) 0:rgba(87,153,242,1) 1:rgba(70,139,232,1)'
  ], // 华为
  [
    'l(270) 0:rgba(104,219,187,0.5) 1:rgba(104,219,187,1)',
    'l(270) 0:rgba(122,233,202,1) 1:rgba(104,219,187,1)'
  ], // 吉利
  [
    'l(270) 0:rgba(138,176,226,0.5) 1:rgba(138,176,226,1)',
    'l(270) 0:rgba(149,188,235,1) 1:rgba(136,176,225,1)'
  ], // 曹操
  [
    'l(270) 0:rgba(87,73,182,0.5) 1:rgba(87,73,182,0.99)',
    'l(270) 0:rgba(105,90,204,1) 1:rgba(87,73,182,1)'
  ], // 领跑
  [
    'l(270) 0:rgba(234,118,123,0.5) 1:rgba(210,71,76,0.99)',
    'l(270) 0:rgba(216,86,91,1) 1:rgba(210,71,76,1)'
  ], // 大华
  [
    'l(270) 0:rgba(251,211,69,0.4) 1:rgba(255,208,76,1)',
    'l(270) 0:rgba(255,230,160,1) 1:rgba(255,212,92,1)'
  ],
  [
    'l(270) 0:rgba(105,246,245,0.5) 1:rgba(0,245,244,1)',
    'l(270) 0:rgba(0,245,244,1) 1:rgba(4,211,210,1)'
  ],
  [
    'l(270) 0:rgba(59,178,226,0.5) 1:rgba(25,151,255,1)',
    'l(270) 0:rgba(74,190,238,1) 1:rgba(25,151,255,1)'
  ],

  [
    'l(270) 0:rgba(158,107,240,0.5) 1:rgba(127,60,236,1)',
    'l(270) 0:rgba(147,86,246,1) 1:rgba(123,56,231,1)'
  ],
  [
    'l(270) 0:rgba(120,129,243,0.5) 1:rgba(66,78,232,0.99)',
    'l(270) 0:rgba(98,109,247,1) 1:rgba(66,78,232,1)'
  ],
  [
    'l(270) 0:rgba(59,178,226,0.5) 1:rgba(25,151,255,1)',
    'l(270) 0:rgba(59,178,226,1) 1:rgba(25,151,255,1)'
  ]
])
const BAR3D_CHART_COLOR_ARR = [
  'l(270) 0:rgba(234,217,99,0.5) 1:rgba(242,154,67,1)', // 阿里巴巴
  'l(270) 0:rgba(86,145,178,0.5) 1:rgba(70,139,232,1)', // 华为
  'l(270) 0:rgba(104,219,187,0.5) 1:rgba(104,219,187,1)', // 吉利
  'l(270) 0:rgba(138,176,226,0.5) 1:rgba(138,176,226,1)', // 曹操
  'l(270) 0:rgba(87,73,182,0.5) 1:rgba(87,73,182,0.99)', // 领跑
  'l(270) 0:rgba(234,118,123,0.5) 1:rgba(210,71,76,0.99)', // 大华
  'l(270) 0:rgba(251,211,69,0.4) 1:rgba(255,208,76,1)',
  'l(270) 0:rgba(105,246,245,0.5) 1:rgba(0,245,244,1)',
  'l(270) 0:rgba(59,178,226,0.5) 1:rgba(25,151,255,1)',
  'l(270) 0:rgba(158,107,240,0.5) 1:rgba(127,60,236,1)',
  'l(270) 0:rgba(120,129,243,0.5) 1:rgba(66,78,232,0.99)',
  'l(270) 0:rgba(59,178,226,0.5) 1:rgba(25,151,255,1)'
]

const BG_BAR_COLOR = 'l(270) 0:rgba(14,56,75,0) 1:rgba(14,50,66,1)' // 背景柱子
export default {
  name: 'BarChart3D',
  data() {
    return {
      myChart: null,
      data: [
        { sort: '阿里巴巴', value: 6, expected: 20 },
        { sort: '华为', value: 6, expected: 20 },
        { sort: '吉利', value: 13, expected: 20 },
        //
        { sort: '曹操', value: 10, expected: 20 },
        { sort: '领跑', value: 14, expected: 20 },
        { sort: '大华', value: 7, expected: 20 },
        //
        { sort: '优行', value: 12, expected: 20 },
        { sort: 'a', value: 12, expected: 20 },
        { sort: 'b', value: 12, expected: 20 },
        //
        { sort: 'c', value: 12, expected: 20 },
        { sort: 'd', value: 12, expected: 20 },
        { sort: 'e', value: 12, expected: 20 }
      ]
    }
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      /** ****************************************************************************/

      registerShape('interval', 'border-radius', {
        /**
         * 定义关键点，
         * 在非矩形情况下需要该函数做提前关键点的定义与处理，
         * 矩形情况下就多此一举了
         * 该函数的返回值会改变draw函数cfg参数的points属性
         */
        // getPoints(cfg) {
        //   const x = cfg.x
        //   const y = cfg.y
        //   const y0 = cfg.y0
        //   const width = cfg.size
        //   return [
        //     { x: x - width / 2, y: y0 },
        //     { x: x - width / 2, y: y },
        //     { x: x + width / 2, y: y },
        //     { x: x + width / 2, y: y0 }
        //   ]
        // },
        // 图形具体的绘制代码
        draw(cfg, container) {
          // 将0-1空间的坐标转换为画布坐标，经过该函数的转化，坐标点的顺序会被改变，
          // 转换后的顺序是0: 左上 1: 左下 2: 右下 3: 右上
          const points = this.parsePoints(cfg.points)

          // 生成图形shape组合的group对象
          const group = container.addGroup()

          // 生成矩形
          group.addShape('rect', {
            attrs: {
              x: points[1].x, // 矩形起始点为左下角
              y: points[1].y, // 矩形起始点为左下角
              width: points[2].x - points[1].x, // 矩形的宽度
              height: points[0].y - points[1].y, // 矩形的高度
              fill: cfg.color // 矩形的填充色
            }
          })

          // 生成矩形顶部的椭圆
          group.addShape('ellipse', {
            attrs: {
              x: points[1].x + (points[2].x - points[1].x) / 2, // 椭圆的圆心在矩形的顶部中心，也就是该条数据的(x,y)
              y: points[1].y, // 椭圆的圆心在矩形的顶部中心，也就是该条数据的(x,y)
              rx: (points[2].x - points[1].x) / 2, // 椭圆的x轴半径为矩形宽度的一半
              ry: (points[2].x - points[1].x) / 4, // 椭圆的y轴半径为矩形宽度的四分之一
              fill: BAR3D_CHART_COLOR_MAP.get(cfg.color) // 椭圆的填充色
            }
          })

          return group
        }
      })

      /** ****************************************************************************/

      const chart = new Chart({
        container: this.$refs.myChart,
        autoFit: true,
        padding: [50, 50, 50, 50]
      })

      chart.data(this.data)

      chart.tooltip({ marker: null })

      chart.legend(false)

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

      chart.axis('expected', false)

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

      // 真实数据柱状图
      chart
        .interval()
        .position('sort*value')
        .size(18)
        .shape('border-radius')
        .color('sort', BAR3D_CHART_COLOR_ARR)

      /**
       * 背景柱状图
       * 虽然对应字段是expected，但是因为真实数据的label要写到背景柱状图的顶部
       * 所以背景柱状图的label要用value字段
       */
      chart
        .interval()
        .position('sort*expected')
        .label(
          'value',
          (value) => {
            return value
          },
          {
            style: {
              fill: '#6CF2F3',
              fontSize: 10
            }
          }
        )
        .size(18)
        .shape('border-radius')
        .color(BG_BAR_COLOR)
        .tooltip(false)

      /** ****************************************************************************/

      chart.render()
    }
  }
}
</script>
<style scoped>
#barChart3D {
  width: 100%;
  height: 100%;
}
</style>
