<template>
  <div id="barChart3D" ref="myChart" />
</template>
<script>
/**
 * 3D圆柱的椭圆颜色顺序分别是：
 * 1）整个圆柱体
 * 2）平均服务架次
 * 3）送吧
 * 4）菜鸟
 * 5）韵达
 * 6）顺丰
 * 7）美团
 * 8）安全性分析
 */
const BACK_THREE_D = new Map([
  ['l(270) 0:rgba(14,56,75,0) 1:rgba(14,50,66,1)', '#064761'],
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
    'l(270) 0:rgba(234,217,99,0.5) 1:rgba(242,154,67,1)',
    'l(270) 0:rgba(249,166,85,1) 1:rgba(242,154,67,1)'
  ], // 阿里巴巴
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
  ],
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
  ] // 大华
])
import { Chart, registerShape } from '@antv/g2'

export default {
  name: 'BarChart3D',
  data() {
    return {
      myChart: null,
      data: [
        { sort: '阿里巴巴', value: 6 }
        // { sort: '华为', value: 6 },
        // { sort: '吉利', value: 13 },
        // { sort: '曹操', value: 10 },
        // { sort: '领跑', value: 14 },
        // { sort: '大华', value: 7 },
        // { sort: '优行', value: 12 }
      ]
    }
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      registerShape('interval', 'a', {
        // 1. 定义关键点
        // getPoints(cfg) {
        //   console.log(cfg)
        //   const x = cfg.x;
        //   const y = cfg.y;
        //   const y0 = cfg.y0;
        //   const width = cfg.size;
        //   return[
        //     {x:x - width / 2,y:y0,},
        //     {x:x - width / 2,y:y,},
        //     {x:x + width / 2,y:y,},
        //     {x:x + width / 2,y:y0,},
        //     // {x:x - width / 2,y:y0,},
        //     // {x:x,y:y,},
        //     // {x:x + width / 2,y:y0,},
        //   ]
        // },
        // 2. 绘制
        draw(cfg, group) {
          console.log(cfg)
          const points = cfg.points
          console.log(points)
          let path = []
          path.push(['M', points[0].x, points[0].y])
          path.push(['L', points[1].x, points[1].y])
          path.push(['L', points[2].x, points[2].y])
          path.push(['L', points[3].x, points[3].y])
          path.push('Z')
          console.log(path)
          path = this.parsePath(path) // 将 0 - 1 转化为画布坐标
          console.log(path)
          /** ********************************************/
          const polygon = group.addShape('rect', {
            attrs: {
              x: path[1][1], // 矩形起始点为左上角
              y: path[1][2],
              width: path[2][1] - path[1][1],
              height: path[0][2] - path[1][2],
              fill: cfg.color,
              radius: [
                (path[2][1] - path[1][1]) / 2,
                (path[2][1] - path[1][1]) / 2,
                0,
                0
              ]
            }
          })
          /** ********************************************/
          // const polygon = group.addShape('rect', {
          //   attrs: {
          //     x:points[1].x,
          //     y:points[1].y,
          //     width:points[2].x-points[0].x,
          //     height:points[2].y-points[0].y,
          //     fill: cfg.color,
          //     radius:1
          //   },
          // });
          /** ********************************************/
          // const points = this.parsePoints(cfg.points); // 将0-1空间的坐标转换为画布坐标
          // console.log(points)
          // const polygon = group.addShape('path', {
          //   attrs: {
          //     path: [
          //       ['M', points[0].x, points[0].y],
          //       ['L', points[1].x, points[1].y],
          //       ['L', points[2].x, points[2].y],
          //     ],
          //     ...cfg.defaultStyle,
          //   },
          // });
          return polygon
        }
      })

      this.myChart = new Chart({
        container: this.$refs.myChart,
        autoFit: true
      })

      this.myChart.scale({
        value: {
          alias: '今日测试车数量',
          min: 0,
          max: 20,
          tickCount: 5,
          tickInterval: 4,
          range: [0, 0.97]
        }
      })

      this.myChart.tooltip({
        marker: null
      })

      this.myChart.axis('sort', {
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

      this.myChart.axis('value', {
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

      this.myChart.data(this.data)
      this.myChart
        .interval()
        .position('sort*value')
        .size(18)
        .shape('a')

      this.myChart.interaction('active-region')

      this.myChart.render()
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
