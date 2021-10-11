<template>
  <div id="echarts3d">
    <div id="echarts" class="echarts" ref="echarts"></div>
  </div>
</template>

<script>
//引入echarts图表
import * as echarts from 'echarts';

export default {
  name: 'echarts3d',
  data() {
    return {};
  },
  mounted() {
    this.initEcharts();
  },
  methods: {
    initEcharts() {
      var color1 = new echarts.graphic.LinearGradient(
        0,
        1,
        0,
        0,
        [
          { offset: 0, color: '#38a0d6' },
          { offset: 1, color: '#6dcde6' }
        ],
        false
      );
      var color2 = new echarts.graphic.LinearGradient(
        0,
        1,
        0,
        0,
        [
          { offset: 0, color: '#4366f3' },
          { offset: 1, color: '#1d43f3' }
        ],
        false
      );
      var color3 = new echarts.graphic.LinearGradient(
        0,
        1,
        0,
        0,
        [
          { offset: 0, color: '#4721ca' },
          { offset: 1, color: '#8651f4' }
        ],
        false
      );
      var color4 = new echarts.graphic.LinearGradient(
        0,
        1,
        0,
        0,
        [
          { offset: 0, color: '#9837dd' },
          { offset: 1, color: '#e23af5' }
        ],
        false
      );
      var color5 = new echarts.graphic.LinearGradient(
        0,
        1,
        0,
        0,
        [
          { offset: 0, color: '#ff934c' },
          { offset: 1, color: '#fc686f' }
        ],
        false
      );
      var color6 = ['#38a0d6', '#4366f3', '#4721ca', '#9837dd', '#ff934c'];
      var symbolArr = [
        'circle',
        'rect',
        'roundRect',
        'triangle',
        'diamond',
        'pin',
        'arrow',
        'none'
      ];
      var option = {
        color: [color1, color2, color3, color4, color5], //控制主要渐变色用
        color2: ['#38a0d6', '#4366f3', '#4721ca', '#9837dd', '#ff934c'], //背景色不需要渐变，后面改透明度即可
        tooltip: { axisPointer: { type: 'shadow' } },
        xAxis: {
          name: '(时间)',
          type: 'category',
          boundaryGap: true,
          axisLabel: { margin: 20 },
          axisTick: { alignWithLabel: true },
          axisLine: { onZero: false },
          offset:40,
          data: ['一月', '二月', '三月', '四月', '五月']
        },
        yAxis: {
          type: 'value',
          axisLabel: { margin: 20 },
          axisLine: { show: true },
          splitLine: { show: false }
        },
        grid: { width: '80%', },
        series: [
          //背景柱底
          {
            name: 'c',
            stack: 'amount',
            tooltip: { show: false },
            // symbol: 'diamond',
            // symbolSize: ['50', '30'],
            // symbolPosition: 'start',
            type: 'pictorialBar',
            symbolSize: ['55%', '1000%'], //调整截面形状
            symbolOffset: [0, 0],
            z: 1,
            data: [
              {
                value: 4.5,
                itemStyle: { color: color6[0] },
                animation: false,
                animationDuration: 300,
                animationEasing: 'cubicOut',
                animationDelay: 0
              },
              {
                value: 4.5,
                itemStyle: { color: color6[1] },
                animation: false,
                animationDuration: 300,
                animationEasing: 'cubicOut',
                animationDelay: 0
              },
              {
                value: 4.5,
                itemStyle: { color: color6[2] },
                animation: false,
                animationDuration: 300,
                animationEasing: 'cubicOut',
                animationDelay: 0
              },
              {
                value: 4.5,
                itemStyle: { color: color6[3] },
                animation: false,
                animationDuration: 300,
                animationEasing: 'cubicOut',
                animationDelay: 0
              },
              {
                value: 4.5,
                itemStyle: { color: color6[4] },
                animation: false,
                animationDuration: 300,
                animationEasing: 'cubicOut',
                animationDelay: 0
              }
            ]
          },
          //背景柱体
          {
            name: 'd',
            tooltip: { show: false },
            type: 'pictorialBar',
            symbol: symbolArr[1],
            symbolSize: ['55%', '100%'],
            symbolOffset: [0, '-2%'],
            z: 0,
            // symbolOffset: ['0', '-15']
            // type: 'bar',
            // barWidth: '40%',
            // barGap: '0%',
            data: [
              {
                value: 1200,
                itemStyle: {
                  color: color6[0],
                  opacity: 0.3
                },
                emphasis: {
                  itemStyle: { color: color6[0] }
                },
                animation: false,
                animationDuration: 300,
                animationEasing: 'cubicOut',
                animationDelay: 0
              },
              {
                value: 1200,
                itemStyle: {
                  color: color6[1],
                  opacity: 0.3
                },
                emphasis: {
                  itemStyle: { color: color6[1] }
                },
                animation: false,
                animationDuration: 300,
                animationEasing: 'cubicOut',
                animationDelay: 0
              },
              {
                value: 1200,
                itemStyle: {
                  color: color6[2],
                  opacity: 0.3
                },
                emphasis: {
                  itemStyle: { color: color6[2] }
                },
                animation: false,
                animationDuration: 300,
                animationEasing: 'cubicOut',
                animationDelay: 0
              },
              {
                value: 1200,
                itemStyle: {
                  color: color6[3],
                  opacity: 0.3
                },
                emphasis: {
                  itemStyle: { color: color6[3] }
                },
                animation: false,
                animationDuration: 300,
                animationEasing: 'cubicOut',
                animationDelay: 0
              },
              {
                value: 1200,
                itemStyle: {
                  color: color6[4],
                  opacity: 0.3
                },
                emphasis: {
                  itemStyle: { color: color6[4] }
                },
                animation: false,
                animationDuration: 300,
                animationEasing: 'cubicOut',
                animationDelay: 0
              }
            ]
          },
          //背景柱顶
          {
            name: 'e',
            stack: 'amount',
            tooltip: { show: false },
            type: 'pictorialBar',
            symbolSize: ['55%', '6%'], //调整截面形状
            symbolPosition: 'end',
            symbolOffset: [0, '-60%'],
            z: 1,
            // symbol: 'diamond',
            // symbolSize: ['50', '30'],
            // symbolOffset: ['0', '-28.4'],
            data: [
              {
                value: 1204.5,
                itemStyle: {
                  color: color6[0]
                },
                emphasis: {
                  itemStyle: { color: color6[0] }
                },
                animation: false
              },
              {
                value: 1204.5,
                itemStyle: {
                  color: color6[1]
                },
                emphasis: {
                  itemStyle: { color: color6[1] }
                },
                animation: false
              },
              {
                value: 1204.5,
                itemStyle: {
                  color: color6[2]
                },
                emphasis: {
                  itemStyle: { color: color6[2] }
                },
                animation: false
              },
              {
                value: 1204.5,
                itemStyle: {
                  color: color6[3]
                },
                emphasis: {
                  itemStyle: { color: color6[3] }
                },
                animation: false
              },
              {
                value: 1204.5,
                itemStyle: {
                  color: color6[4]
                },
                emphasis: {
                  itemStyle: { color: color6[4] }
                },
                animation: false
              }
            ]
          },
          //数据柱体底部偏移
          {
            name: '辅助',
            type: 'bar',
            tooltip: { show: false },
            stack: 'amount',
            z: 0,
            itemStyle: {
              normal: {
                barBorderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)'
              },
              emphasis: {
                barBorderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)'
              }
            },
            data: [25, 25, 25, 25, 25]
          },
          //数据柱体
          {
            name: '标签',
            type: 'bar',
            tooltip: { show: false },
            stack: 'amount',
            barWidth: '47%',
            label: {
              show: true,
              position: 'top',
              distance: 30
            },
            z: 2,
            data: [
              {
                value: 255,
                itemStyle: {
                  color: color1,
                  animation: false,
                  animationDuration: 300,
                  animationEasing: 'cubicOut',
                  animationDelay: 0
                }
              },
              {
                value: 975,
                itemStyle: {
                  color: color2,
                  animation: false,
                  animationDuration: 300,
                  animationEasing: 'cubicOut',
                  animationDelay: 0
                }
              },
              {
                value: 535,
                itemStyle: {
                  color: color3,
                  animation: false,
                  animationDuration: 300,
                  animationEasing: 'cubicOut',
                  animationDelay: 0
                }
              },
              {
                value: 375,
                itemStyle: {
                  color: color4,
                  animation: false,
                  animationDuration: 300,
                  animationEasing: 'cubicOut',
                  animationDelay: 0
                }
              },
              {
                value: 775,
                itemStyle: {
                  color: color5,
                  animation: false,
                  animationDuration: 300,
                  animationEasing: 'cubicOut',
                  animationDelay: 0
                }
              }
            ]
          },
          //数据柱顶
          {
            name: 'b',
            stack: 'amount',
            tooltip: { show: false },
            type: 'pictorialBar',
            symbolSize: ['55%', 30], //调整截面形状
            symbolPosition: 'end',
            symbolOffset: [0, '-80%'],
            z: 3,
            data: [
              {
                value: 259.5,
                itemStyle: {
                  color: color1
                },
                // animation: false,
                animationDuration: 300,
                animationEasing: 'cubicOut',
                animationDelay: 1000
              },
              {
                value: 979.5,
                itemStyle: {
                  color: color2
                },
                // animation: false,
                animationDuration: 300,
                animationEasing: 'cubicOut',
                animationDelay: 1000
              },
              {
                value: 539.5,
                itemStyle: {
                  color: color3
                },
                // animation: false,
                animationDuration: 300,
                animationEasing: 'cubicOut',
                animationDelay: 1000
              },
              {
                value: 379.5,
                itemStyle: {
                  color: color4
                },
                // animation: false,
                animationDuration: 300,
                animationEasing: 'cubicOut',
                animationDelay: 1000
              },
              {
                value: 779.5,
                itemStyle: {
                  color: color5
                },
                // animation: false,
                animationDuration: 300,
                animationEasing: 'cubicOut',
                animationDelay: 1000
              }
            ],
            z: 3
          },
          //数据柱底
          {
            name: 'c',
            stack: 'amount',
            tooltip: { show: false },
            // symbol: 'diamond',
            // symbolSize: ['50', '30'],
            // symbolPosition: 'start',
            type: 'pictorialBar',
            symbolSize: ['55%', '1000%'], //调整截面形状
            symbolOffset: [0, 0],
            z: 5,
            data: [
              {
                value: 4.5,
                itemStyle: { color: color1 },
                animation: false,
                animationDuration: 300,
                animationEasing: 'cubicOut',
                animationDelay: 30000
              },
              {
                value: 4.5,
                itemStyle: { color: color2 },
                animation: false,
                animationDuration: 300,
                animationEasing: 'cubicOut',
                animationDelay: 0
              },
              {
                value: 4.5,
                itemStyle: { color: color3 },
                animation: false,
                animationDuration: 300,
                animationEasing: 'cubicOut',
                animationDelay: 0
              },
              {
                value: 4.5,
                itemStyle: { color: color4 },
                animation: false,
                animationDuration: 300,
                animationEasing: 'cubicOut',
                animationDelay: 0
              },
              {
                value: 4.5,
                itemStyle: { color: color5 },
                animation: false,
                animationDuration: 300,
                animationEasing: 'cubicOut',
                animationDelay: 0
              }
            ]
          }
        ]
      };

      // option.series[0].name = '数量';
      var data = [
        //   { name: '周一', value: 280, maxvalue: 1000 },
        //   { name: '周二', value: 1000, maxvalue: 1000 },
        //   { name: '周三', value: 560, maxvalue: 1000 },
        //   { name: '周四', value: 400, maxvalue: 1000 },
        //   { name: '周五', value: 800, maxvalue: 1000 }
      ];
      for (var i = 0; i < data.length; i++) {
        // option.xAxis.data.push(data[i].name);
        // option.series[0].data.push({
        //   value: data[i].value,
        //   itemStyle: { color: option.color[i % option.color.length] },
        //   animation: false
        // });
        // option.series[1].data.push({
        //   value: data[i].value + 4.5,
        //   itemStyle: { color: option.color[i % option.color.length] },
        //   animation: false
        // });
        // option.series[2].data.push({
        //   value: 4.5,
        //   itemStyle: { color: option.color2[i % option.color2.length] },
        //   animation: false
        // });
        // option.series[3].data.push({
        //   value: data[i].maxvalue,
        //   itemStyle: {
        //     color: option.color2[i % option.color.length],
        //     opacity: 0.3
        //   },
        //   emphasis: {
        //     itemStyle: { color: option.color2[i % option.color.length] }
        //   },
        //   animation: false
        // });
        // option.series[4].data.push({
        //   value: data[i].maxvalue + 4.5,
        //   itemStyle: {
        //     color: option.color2[i % option.color.length],
        //     opacity: 0.3
        //   },
        //   emphasis: {
        //     itemStyle: { color: option.color2[i % option.color.length] }
        //   },
        //   animation: false
        // });
        // option.series[5].data.push({
        //   value: data[i].maxvalue + 4.5,
        //   itemStyle: {
        //     color: option.color2[i % option.color.length],
        //     opacity: 0.3
        //   },
        //   emphasis: {
        //     itemStyle: { color: option.color2[i % option.color.length] }
        //   },
        //   animation: false
        // });
      }

      // console.log(option.series);
      //初始化echarts
      var mychart = echarts.init(this.$refs.echarts, 'halloween'); //halloween是我的theme，根据你们的需要可以不写
      mychart.setOption(option);
    }
  }
};
</script>

<style lang="less" scoped>
#echarts3d {
  width: 100%;
  height: 100%;
  overflow: hidden;
  #echarts {
    width: 600px;
    height: 400px;
    margin: 50px auto;
    // background-color: #ccc;
    background: url('../../assets/img/bg3.png') 50% 90%/ 90% 25% no-repeat,
      url('../../assets/img/bg1.png') left top/ 100% 100% no-repeat;
  }
}
</style>