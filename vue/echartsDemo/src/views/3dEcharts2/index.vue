<template>
  <div id="echarts3d2">
    <div id="echarts" class="echarts" ref="echarts"></div>
  </div>
</template>

<script>
//引入echarts图表
import * as echarts from 'echarts';

export default {
  name: 'echarts3d2',
  data() {
    return {};
  },
  mounted() {
    this.initEcharts();
  },
  methods: {
    initEcharts() {
      var myEcharts = echarts.init(this.$refs.echarts);

      var xData = ['可研数据', '测试2', '测试3', '测试4', '测试5', '测试6'];
      var line = ['1030', '205', '84', '568', '689', '4587'];
      var attr = {
        name: '月平均单价',
        unit: '元/单'
      };
      var colors = [];
      var option = {
        tooltip: {
          textStyle: {
            fontSize: 50
          },
          trigger: '',
          padding: 1,

          formatter: function (param) {
            var resultTooltip =
              "<div style='background:rgba(13,5,30,.6);border:1px solid rgba(255,255,255,.2);padding:5px;border-radius:3px;'>" +
              "<div style='text-align:center;'>" +
              param.name +
              '</div>' +
              "<div style='padding-top:5px;'>" +
              "<span style=''> " +
              attr.name +
              ': </span>' +
              "<span style=''>" +
              param.value +
              '</span><span>' +
              attr.unit +
              '</span>' +
              '</div>' +
              '</div>';
            return resultTooltip;
          }
        },
        grid: {
          left: '2%',
          right: '2%',
          top: '20%',
          bottom: '13%'
        },
        legend: {
          show: true,
          icon: 'circle',
          orient: 'horizontal',
          top: '90.5%',
          right: 'center',
          itemWidth: 16.5,
          itemHeight: 6,
          // itemGap: 30,
          textStyle: {
            // color: '#FFFFFF'
            color: '#C9C8CD',
            fontSize: 14
          }
        },
        xAxis: [
          {
            data: xData,
            axisLabel: {
              show: true,
              textStyle: {
                color: '#aaaaaa',
                fontSize: 12
              },
              margin: 30 //刻度标签与轴线之间的距离。
            },
            axisLine: {
              show: false //不显示x轴
            },
            axisTick: {
              show: false //不显示刻度
            },
            boundaryGap: true,
            splitLine: {
              show: false,
              width: 0.08,
              lineStyle: {
                type: 'solid',
                color: '#03202E'
              }
            }
          }
        ],
        yAxis: [
          {
            show: false,
            splitLine: {
              show: false,
              lineStyle: {
                color: '#eee',
                type: 'solid'
              }
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              textStyle: {
                color: '#888'
              }
            }
          }
        ],
        series: [
          //柱底圆片
          {
            name: '',
            type: 'pictorialBar',
            symbolSize: [60, 22], //调整截面形状
            symbolOffset: [0, 10],
            z: 12,
            itemStyle: {
              normal: {
                color: function (params) {
                  var colorArr = [
                    '#C1232B',
                    '#B5C334',
                    '#FCCE10',
                    '#E87C25',
                    '#27727B',
                    '#FE8463',
                    '#9BCA63'
                  ];
                  return colorArr[params.dataIndex];
                }
              }
            },
            data: line
          },
          //柱体
          {
            name: '',
            type: 'bar',
            
            barWidth: 60,
            barGap: '0%',
            itemStyle: {
              normal: {
                color: function (params) {
                  // build a color map as your need.

                  var colorList = [
                    '#C1232B',
                    '#B5C334',
                    '#FCCE10',
                    '#E87C25',
                    '#27727B',

                    '#FE8463',
                    '#9BCA63',
                    '#FAD860'
                  ];

                  return colorList[params.dataIndex];
                },
                opacity: 0.7
              }
            },
            data: line
          },
          //柱顶圆片
          {
            name: '',
            type: 'pictorialBar',
            symbolSize: [60, 22], //调整截面形状
            symbolOffset: [0, -10],
            z: 12,
            symbolPosition: 'end',
            itemStyle: {
              normal: {
                color: function (params) {
                  var colorArr = [
                    '#C1232B',
                    '#B5C334',
                    '#FCCE10',
                    '#E87C25',
                    '#27727B',
                    '#FE8463',
                    '#9BCA63'
                  ];
                  return colorArr[params.dataIndex];
                }
              }
            },
            data: line
          }
        ]
      };

      myEcharts.setOption(option);
    }
  }
};
</script>

<style lang="less" scoped>
#echarts3d2 {
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