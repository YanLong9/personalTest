<template>
  <div id="homePage">
    <div class="timeScaleAuto">
      <TimeScaleAuto
        :scale-width="scaleWidth"
        :scale-arr="scaleArr"
        :scale-time="scaleTime"
        :last-scale-time="lastScaleTime"
      />
    </div>
  </div>
</template>
<script>
var scaleTime = 60000
// 组件
import TimeScaleAuto from '@/components/TimeScaleAuto'

export default {
  name: 'HomePage',
  components: {
    TimeScaleAuto
  },
  data() {
    return {
      scaleWidth: 15, // 时间刻度进度条，刻度尺单个刻度的宽度--px
      scaleTime: scaleTime, // 时间刻度进度条，每一个刻度代表的时间--ms(毫秒)
      lastScaleTime: 0, // 时间刻度进度条，最后一个刻度进度条需要的时间--ms(毫秒)
      scaleArr: [] // 时间刻度数组，每一项的时间间隔是十分钟，60000ms = scaleTime
    }
  },
  created() {
    // 格式化时间数组
    // this.scaleArr = this.timeFormat(1629011775514 - 9000, 1629026175514)
    setTimeout(() => {
      this.scaleArr = this.timeFormat(1629011775514 - 9000, 1629026175514)
      // this.scaleWidth = 30
    }, 90000)
  },
  methods: {
    // 将开始时间-结束时间，根据时间间隔 scaleTime ，处理为对应的时间刻度数组
    timeFormat(start, end) {
      // 声明所需的变量
      var timeArr = []
      var i = start
      var last = 0

      // 获取时间点格式化字符串的循环
      while (i <= end) {
        // 更新记录最后一个时间戳
        last = i

        // 将根据时间戳生成格式化后的时间点字符串，添加到时间数组中
        timeArr.push(this.pointTimeFormat(i))

        // 递增循环条件
        i += this.scaleTime
      }
      if (i > end && last < end) {
        // 最后一个刻度进度条需要的时间--ms(毫秒)
        this.lastScaleTime = end - last
        // 将根据时间戳生成格式化后的时间点字符串，添加到时间数组中
        timeArr.push(this.pointTimeFormat(end))
      } else {
        // 最后一个刻度进度条需要的时间--ms(毫秒)
        this.lastScaleTime = this.scaleTime
      }

      // 将格式化后的数组抛出
      return timeArr
    },
    // 根据时间戳生成格式化后的时间点字符串
    pointTimeFormat(pointTime) {
      // 根据时间戳生成时间对象
      var middle = new Date(pointTime)

      // 将一位的数字补足为两位
      var hour =
        middle.getHours() / 10 < 1 ? '0' + middle.getHours() : middle.getHours()
      var minute =
        middle.getMinutes() / 10 < 1
          ? '0' + middle.getMinutes()
          : middle.getMinutes()
      var second =
        middle.getSeconds() / 10 < 1
          ? '0' + middle.getSeconds()
          : middle.getSeconds()

      // 格式化后的时间字符串
      return `${hour}:${minute}:${second}`
    }
  }
}
</script>

<style scoped lang="scss">
#homePage {
  width: 100%;
  height: 100%;
  background: #13223b;
  position: relative;
  overflow: hidden;
  .timeScaleAuto {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 2200px;
    height: 60px;
    // border: 5px solid darkgray;
    transform: translate(-50%, -50%);
  }
}
</style>
