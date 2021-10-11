<template>
  <div id="index">
    <div id="echarts" class="echarts" ref="lineChart"></div>
  </div>
</template>

<script>
//引入echarts图表
import * as echarts from 'echarts';

export default {
  name: 'index',
  data() {
    return {
      myChart: null
    };
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      // console.log(this.dataSet);
      var dataSet = [
        { product: '2020-11', a: 5, b: 5 },
        { product: '2020-12', a: 30, b: 30 },
        { product: '2020-1', a: 20, b: 20 }
      ];

      var dataSet1 = [
        // ['product', '123'],
        // ['2020-11', 10],
        // ['2020-12', 60],
        // ['2020-1', 40]
      ];
      if (
        this.myChart !== null &&
        this.myChart !== '' &&
        this.myChart !== undefined
      ) {
        this.myChart.dispose();
      }
      // 基于准备好的dom，初始化echarts实例
      this.myChart = echarts.init(this.$refs.lineChart);
      var option = {
        title: {
          text: 'test',
          textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: ' #AADDFF'
          },
          top: '5%',
          left: '5%'
        },
        tooltip: {
          show: true
        },
        grid: {
          top: '25%',
          left: '5%',
          right: '20%',
          bottom: '5%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          name: '(时间)',
          axisLine: {
            show: true,
            lineStyle: {
              color: '#444e74'
            }
          },
          axisLabel: {
            color: '#7A86AC'
          },
          splitLine: {
            show: false
          },
          boundaryGap: false
        },
        yAxis: {
          // type: 'value',
          // splitNumber: 5,
          splitLine: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#444e74'
            }
          },
          axisLabel: {
            textStyle: {
              color: '#7A86AC'
            }
          },
          axisTick: {
            show: true
          },
          boundaryGap: false
        },
        dataset: [
          {
            source: dataSet
          },
          {
            source: dataSet1
          }
        ],
        series: [
          // {
          //   type: 'bar',
          //   tooltip: {
          //     // show: false
          //     trigger: 'item'
          //   },
          //   z: 10,
          //   barWidth: 0.4,
          //   animation: false,
          //   hoverAnimation: false,
          //   datasetIndex: 0
          // },
          // {
          //   type: 'line',
          //   // name: '车企已响应',
          //   tooltip: {
          //     trigger: 'item'
          //   },
          //   smooth: true, // 是否平滑
          //   labelLine: false,
          //   label: {
          //     show: false,
          //     position: 'top',
          //     textStyle: {
          //       color: '#00ca95'
          //     }
          //   },
          //   showAllSymbol: true,
          //   symbol: 'circle',
          //   symbolSize: 10,
          //   datasetIndex: 0
          // },
          {
            type: 'line',
            // name: '发布预警',
            tooltip: {
              trigger: 'item'
            },
            smooth: true, // 是否平滑
            labelLine: false,
            label: {
              show: false,
              position: 'top',
              textStyle: {
                color: '#00b3f4'
              }
            },
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 10,
            connectNulls: true,
            datasetIndex: 1
            // encode: {
            //   y:0
            // },
            // dimensions: [{ name: '123' }]
          }
        ]
      };
      // 绘制图表
      this.myChart.setOption(option);
    }
  }
};
</script>

<style lang="less" scoped>
#index {
  width: 100%;
  height: 100%;
  overflow: hidden;
  #echarts {
    width: 540px;
    height: 400px;
    margin: 50px auto;
    background: #ccc;
  }
}
</style>