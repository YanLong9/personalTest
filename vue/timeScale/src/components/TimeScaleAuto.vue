<template>
  <!-- 组件根元素 -->
  <div id="timeScaleProgressBar">
    <!-- 组件滚动窗口 -->
    <div ref="timeScaleProgressBar" class="time_scale_progress_bar">
      <!-- 组件滚动部分--包括左右留白 -->
      <div class="scroll_wrapper">
        <!-- 组件完整刻度表容器--不包括左右留白 -->
        <div class="scale_box">
          <!--刻度表的每一个刻度-->
          <div
            v-for="(item, index) in scaleArr"
            :key="index"
            class="scale_progress_item"
          >
            <!-- zero -->
            <template v-if="index % 10 == 0">
              <div class="scale_item scale_item_integer" />
              <!-- 刻度数字 -->
              <div class="scale_item_num">
                {{ scaleArr[index] }}
              </div>
            </template>
            <!-- half -->
            <template v-else-if="index % 5 == 0">
              <div class="scale_item scale_item_half" />
            </template>
            <!-- normal -->
            <template v-else>
              <div class="scale_item scale_item_one" />
            </template>
          </div>
          <!-- 刻度表对应的进度条 -->
          <div class="progress_item">
            <div class="pass" />
          </div>
          <!-- 刻度表进度条的指针 -->
          <div class="scale_progress_pointer">
            <img src="@/assets/img/pointer.svg" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 组件
import BScroll from 'better-scroll' // 滚动组件
export default {
  name: 'TimeScaleProgressBar',
  props: {
    // 单个刻度的宽度--px
    scaleWidth: {
      type: Number,
      default: 15
    },
    // 刻度数组
    scaleArr: {
      type: Array,
      default: () => []
    },
    // 单个刻度进度条需要时间--ms(毫秒)
    scaleTime: {
      type: Number,
      default: 0
    },
    // 最后一个刻度进度条需要的时间--ms(毫秒)
    lastScaleTime: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      scrollrule: null,
      timer: null // 进度条自动播放定时器
    }
  },
  computed: {
    counter() {
      return this.scaleArr.length
    }
  },
  watch: {
    scaleWidth: {
      deep: true,
      handler: function(oldValue, newValue) {
        // 设置刻度尺单个刻度的宽度
        this.getMainValue()
        // 滚动区域发生变化，重新刷新滚动组件
        this.$nextTick(() => {
          this.scrollrule.refresh()
          // this.beginScroll()
        })
      }
    },
    scaleArr: {
      deep: true,
      handler: function(oldValue, newValue) {
        // 滚动区域发生变化，重新刷新滚动组件
        this.$nextTick(() => {
          this.scrollrule.refresh()
          // this.beginScroll()
        })
      }
    }
  },
  mounted() {
    // 设置刻度尺单个刻度的宽度
    this.getMainValue()
    // 初始化滚动
    this.$nextTick(() => {
      this.initScroll()
      this.beginScroll()
    })
    //
    window.addEventListener('keypress', e => {
      this.beginScroll()
    })
  },
  methods: {
    //
    beginScroll() {
      // 获取指针dom
      var pointer = document.querySelector('.scale_progress_pointer')
      // 获取进度条dom
      var progress = document.querySelector('.progress_item .pass')

      // 清除定时器
      if (this.timer) {
        clearInterval(this.timer)
        pointer.style.transition = `all 1s linear`
        progress.style.transition = `all 1s linear`
        pointer.style.left = '-16px'
        progress.style.width = `0px`
      }

      // 重新开始定时器任务
      var begin = 0
      this.timer = setInterval(() => {
        // 第一次首先重置时间间隔
        if (!begin) {
          pointer.style.transition = `all ${this.scaleTime / 1000}s linear`
          progress.style.transition = `all ${this.scaleTime / 1000}s linear`
        }

        // 最后一个刻度进度条需要的时间--ms(毫秒)
        if (begin === this.counter - 1) {
          pointer.style.transition = `all ${this.lastScaleTime / 1000}s linear`
          progress.style.transition = `all ${this.lastScaleTime / 1000}s linear`
        }

        if (begin < this.counter) {
          // 进度条增长
          progress.style.width = `${(begin + 1) * this.scaleWidth}px`
          // 指针移动
          pointer.style.left = (begin + 1) * this.scaleWidth - 16 + 'px'
          // 递增
          begin++
        } else {
          begin = 0
          clearInterval(this.timer)
        }
      }, this.scaleTime)
    },
    // 初始化滚动
    initScroll() {
      // 使用betterScroll初始化刻度尺滚动
      this.scrollrule = new BScroll(this.$refs.timeScaleProgressBar, {
        probeType: 3, // 实时监听滚动的位置并返回
        scrollX: true // 开启横向滚动
      })
    },
    // 设置刻度尺单个刻度的宽度
    getMainValue() {
      const docStyle = this.$refs.timeScaleProgressBar.style
      // 刻度尺宽度
      docStyle.setProperty('--scaleItemWidth', this.scaleWidth + 'px')
    }
  }
}
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
// 组件根元素
#timeScaleProgressBar {
  width: 100%;
  height: 100%;
  background: pink;
  // 组件滚动窗口
  .time_scale_progress_bar {
    width: 100%;
    height: 100%;
    background: black;
    overflow-x: hidden;
    --scaleItemWidth: 15px;
    // 组件滚动部分--包括左右留白
    .scroll_wrapper {
      display: inline-block;
      height: calc(100% - 8px);
      padding: 0 calc(var(--scaleItemWidth) * 5); //刻度尺左右的留白
      background: blue;
      white-space: nowrap;
      //组件完整刻度表容器--不包括左右留白
      .scale_box {
        height: 100%;
        background: red;
        display: inline-flex;
        align-items: flex-end;
        position: relative;
        // 刻度
        .scale_progress_item {
          background: green;
          position: relative;
          // 刻度线容器
          .scale_item {
            width: var(--scaleItemWidth);
            background: black;
            position: relative;
            // 刻度线
            &:before {
              content: '';
              display: block;
              position: absolute;
              top: 0;
              left: 0;
              width: 1px;
              height: 100%;
              background-color: white;
            }
            // 刻度10的
            &.scale_item_integer {
              height: 20px;
            }
            // 刻度0.5的
            &.scale_item_half {
              height: 15px;
            }
            // 刻度1的
            &.scale_item_one {
              height: 10px;
            }
          }
          // 刻度表数字
          .scale_item_num {
            position: absolute;
            top: 0;
            left: 0;
            width: calc(var(--scaleItemWidth) * 10);
            text-align: center;
            transform: translate(-50%, -100%);
            font-size: 20px;
            color: #cccccc;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
        }
        //每一个刻度对应的进度条--未填充
        .progress_item {
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 100%;
          height: 8px;
          background: yellow;
          // 每一个刻度对应的进度条--已填充
          .pass {
            position: absolute;
            top: 0;
            left: 0;
            width: 0px;
            height: 100%;
            background: red;
            transition: all 1s linear;
          }
        }
        //刻度尺进度条指针
        .scale_progress_pointer {
          position: absolute;
          bottom: -8px;
          left: -16px;
          width: 33px;
          height: 43px;
          transition: all 1s linear;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>
