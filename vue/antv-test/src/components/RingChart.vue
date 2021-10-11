<template>
  <div id="ringChart" ref="myChart" />
</template>
<script>
// 引入antv
import { Chart, registerShape } from '@antv/g2'

export default {
  name: 'RingChart',
  data() {
    return {
      myChart: null, // 图表实例化对象
      chartData: [
        { item: '未完成', percent: 20 },
        { item: '已完成', percent: 40 },
        { item: '未开始', percent: 60 }
      ],
      colorPlanArr: ['#CBBD4E', '#2092BE', '#2ACDAE', '#DC8219']
    }
  },
  mounted() {
    console.log(1023)
    // 初始化图表
    this.initChart()
  },
  beforeDestroy() {
    // 销毁图表
    this.myChart = null
  },
  methods: {
    // 初始化图表
    initChart() {
      /** ****************************************************************************/

      // // 可以通过调整这个数值控制分割空白处的间距，0-1 之间的数值
      // const sliceNumber = 0.01

      // // 自定义 other 的图形，增加两条线
      // registerShape('interval', 'slice-shape', {
      //   draw(cfg, container) {
      //     const points = cfg.points
      //     let path = []
      //     path.push(['M', points[0].x, points[0].y])
      //     path.push(['L', points[1].x, points[1].y - sliceNumber])
      //     path.push(['L', points[2].x, points[2].y - sliceNumber])
      //     path.push(['L', points[3].x, points[3].y])
      //     path.push('Z')
      //     path = this.parsePath(path)
      //     return container.addShape('path', {
      //       attrs: {
      //         fill: cfg.color,
      //         path
      //       }
      //     })
      //   }
      // })

      // 生成图表实例对象
      this.myChart = new Chart({
        container: this.$refs.myChart,
        autoFit: true,
        padding: [0, 60, 0, 0]
      })

      // 环图中心的辅助图片
      this.myChart.annotation().image({
        src: '/static/ringChart/chartCenter.png',
        offsetX: -100,
        offsetY: 50,
        style: {
          width: 200,
          height: 200
        }
      })

      // 注入数据
      this.myChart.data(this.chartData)

      this.myChart.tooltip({ marker: null })

      // 配置坐标系类型
      this.myChart.coordinate({
        type: 'theta',
        cfg: {
          radius: 0.8,
          innerRadius: 0.4
        }
      })

      // 配置图例
      this.myChart.legend('item', {
        layout: 'vertical', // 图例项竖向排列
        position: 'right', // 配置图例显示位置
        custom: true, // 关键字段，告诉 G2，要使用自定义的图例
        offsetX: -10, // 水平偏移

        textStyle: '#ddfdfd',
        items: this.chartData.map((item, index, arr) => {
          return {
            name: item.item, // 对应 itemName
            fill: '#ddfdfd',
            textStyle: '#ddfdfd',
            marker: {
              symbol: 'square', // marker 的形状
              style: {
                r: 5, // marker 图形半径
                fill: this.colorPlanArr[index] // marker 颜色，使用默认颜色，同图形对应
              }
            }
          }
        })
        // itemName: {
        //   style: {
        //     fill: '#ddfdfd',
        //     fontSize: 16
        //   }
        // }
      })

      // 真实数据饼图声明
      const interval = this.myChart
        .interval()
        .adjust('stack')
        .position('percent')
        .color('item', this.colorPlanArr)
        .shape('slice-shape')
        .label('percent', {
          offset: -40,
          style: {
            textAlign: 'center',
            shadowBlur: 2,
            shadowColor: 'rgba(0, 0, 0, .45)',
            fill: '#fff'
          }
        })
        .style({
          lineWidth: 1,
          stroke: '#fff'
        })

      this.myChart.interaction('element-single-selected')

      this.myChart.render()

      // 默认选择
      interval.elements[0].setState('selected', true)
      /** ****************************************************************************/
    }
  }
}
</script>
<style lang="scss" scoped>
#ringChart {
  width: 100%;
  height: 100%;
  // background: red;
}
</style>
