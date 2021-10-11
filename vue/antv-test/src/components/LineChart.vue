<template>
  <div id="lineChart" ref="chartBox" />
</template>
<script>
import { Chart } from '@antv/g2';
export default {
  name: 'LineChart',
  data() {
    return {
      chart: null,
      chartData: []
    };
  },
  mounted() {
    this.initChart();
  },
  beforeDestroy() {
    this.chart = null;
  },
  methods: {
    initChart() {
      this.chart = new Chart({
        container: this.$refs.chartBox,
        autoFit: true,
        padding: [50, 50, 50, 50]
      });
      //
      this.chart.axis('date', {
        line: {
          style: {
            stroke: '#D4F4F3', // 设置线的颜色
            lineWidth: '1'
          }
        },
        tickLine: {
          style: {
            stroke: '#D4F4F3' // 设置线的颜色
          },
          alignTick: true,
          length: '7'
        },
        label: {
          offset: 10,
          style: {
            fill: '#E3F5FD', // 设置线的颜色
            fontSize: 12,
            fontWeight: 'bold'
          }
        },
        grid: {
          line: {
            type: 'line',
            style: {
              stroke: '#21303C', // 设置线的颜色
              lineWidth: 1
            }
          },
          alignTick: true
        }
      });
      //
      this.chart.axis('value', {
        line: {
          style: {
            stroke: '#D4F4F3', // 设置线的颜色
            lineWidth: '1'
          }
        },
        label: {
          offset: 10,
          style: {
            fill: '#E3F5FD', // 设置线的颜色
            fontSize: 12,
            fontWeight: 'bold'
          }
        },
        grid: {
          line: {
            type: 'line',
            style: {
              stroke: '#21303C', // 设置线的颜色
              lineWidth: 1
            }
          },
          alignTick: true
        }
      });
      //
      this.chart.scale({
        date: {
          type: 'linear',
          // ticks: [0, 2, 4, 6, 8, 10],
          min: 0,
          max: 100,
          tickCount: 10,
          range: [0, 0.97]
        },
        value: {
          type: 'linear',
          // ticks: [-10, -9,-8, -7, -6, -4, -2,  0, 2, 4, 6, 8, 9, 10],
          min: 0,
          max: 120,
          tickCount: 7,
          range: [0, 0.97]
        }
      });
      //
      this.chart.annotation().text({
        content: 'm/s',
        position: ['start', 'end'],
        offsetX: -13,
        offsetY: -20,
        style: {
          fill: '#E3F5FD', // 设置线的颜色
          fontSize: 12,
          fontFamily: 'PingFang SC'
        }
      });
      this.chart.annotation().text({
        content: '分钟',
        position: ['end', 'start'],
        offsetX: 13,
        style: {
          fill: '#E3F5FD', // 设置线的颜色
          fontSize: 12,
          fontFamily: 'PingFang SC'
        }
      });
      //
      this.chart
        .line()
        .position('date*value')
        .color('#31B0F7')
        .shape('smooth')
        .size(3);
      this.chart.area().position('date*value').shape('smooth').style({
        fill:
          'l(90) 0:rgba(41,201,211,1) 0.5:rgba(41,201,211,0.8) 1:rgba(41,201,211,0) '
      });
      this.createData();
      this.chart.data(this.chartData);
      this.chart.render();
      var time = 0,
        flag = true;
      setInterval(() => {
        if (time === 50) {
          time = 0;
          flag = !flag;
          // debugger
        } else {
          time = time + 1;
        }
        this.addData(flag);
        var max = 0,
          min = 0;
        this.chartData.forEach((item, index, value) => {
          max = max > item.value ? max : item.value;
          min = min < item.value ? min : item.value;
        });
        this.chart.scale({
          date: {
            type: 'linear',
            // ticks: [0, 2, 4, 6, 8, 10],
            min: 0,
            max: 100,
            tickCount: 10,
            range: [0, 0.97]
          },
          value: {
            type: 'linear',
            min: min,
            max: max,
            tickCount: 5,
            range: [0, 0.97],
            alias: 'm/s'
          }
        });
        this.chart.changeData(this.chartData); // 动态更新数据
      }, 1000);
    },
    createData(flag) {
      let data = [];
      for (let i = 0; i < 100; i++) {
        // console.log(i);
        data[i] = {};
        data[i].date = i;
        switch (i % 4) {
          case 0:
            data[i].value = 40;
            break;
          case 1:
            data[i].value = 60;
            break;
          case 2:
            data[i].value = 80;
            break;
          case 3:
            data[i].value = 60;
            break;
        }
      }
      console.log(data);
      this.chartData.push(...data);
    },
    addData(flag) {
      let data = [];
      for (let i = 0; i < 4; i++) {
        // console.log(i);
        data[i] = {};
        data[i].date = i;
        if (flag) {
          switch (i % 4) {
            case 0:
              data[i].value = 20;
              break;
            case 1:
              data[i].value = 60;
              break;
            case 2:
              data[i].value = 100;
              break;
            case 3:
              data[i].value = 60;
              break;
          }
        } else {
          switch (i % 4) {
            case 0:
              data[i].value = 40;
              break;
            case 1:
              data[i].value = 60;
              break;
            case 2:
              data[i].value = 80;
              break;
            case 3:
              data[i].value = 60;
              break;
          }
        }
      }
      // console.log(data);
      this.chartData.push(...data);
      this.chartData = this.chartData.slice(4);
      for (let i = 0; i < 100; i++) {
        this.chartData[i].date = i;
      }
      // console.log(this.chartData);
    }
  }
};
</script>
<style scoped>
#lineChart {
  width: 283px;
  height: 172px;
  border: 5px solid red;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #0e1925;
}
</style>
