<template>
  <div id="VideoPlayer">
    <!-- 播放器初始化失败 -->
    <div v-if="!support" class="loading_failed">
      <img src="@/assets/img/right/videoPlayer/loadingFailed.png" alt="">
    </div>
    <!-- 播放器 -->
    <div v-else class="loading_success">
      <video
        ref="videoElement"
        class="video_component"
        muted="muted"
        preload="auto"
        controls
        @play="playListener"
        @playing="playingListener"
        @waiting="waitingListener"
        @pause="pauseListener"
        @ended="endedListener"
        @canplay="canplayListener"
        @error="errorListener"
        @stalled="stalledListener"
      >
        Your browser is too old which doesn't support HTML5 video.
      </video>
    </div>
  </div>
</template>
<script>
// 引入flv.js插件
import flvjs from 'flv.js'

export default {
  name: 'VideoPlayer',
  props: {
    // 视频地址
    videoUrlArr: {
      type: Array,
      default: () => [
        {
          url: '/static/video/test.flv',
          type: 'flv'
        },
        {
          url: 'http://172.15.2.99:7020/JL_JHA_5/JL_JHA_5-2021-08-05-16:22.mp4',
          type: 'mp4'
        }
      ],
      required: true
    }
  },
  data() {
    return {
      flvPlayer: null, // 播放器对象
      support: true, // 用来判断是否创建播放器
      listIndex: 0 // 当前播放到了第几个视频
    }
  },
  watch: {
    videoUrlArr: {
      deep: true,
      handler: function(newVal, oldVal) {
        // 判断是否能创建播放器
        if (flvjs.isSupported()) {
          this.support = true
        } else {
          this.support = false
        }
        //
        if (!newVal) {
          this.support = false
        } else if (newVal !== oldVal) {
          this.$nextTick(() => {
            this.listIndex = 0
            this.createVideo()
          })
        }
      }
    }
  },
  created() {
    // 判断是否能创建播放器
    if (flvjs.isSupported()) {
      this.support = true
    } else {
      this.support = false
    }
  },
  mounted() {
    // 初始化创建播放器
    this.createVideo()
  },
  methods: {
    // 创建播放器
    createVideo() {
      // 如果之前存在该播放器，则先销毁存在的播放器
      this.destroyVideo()

      // 获取播放器dom
      const videoElement = this.$refs.videoElement

      // 配置flv.js
      this.flvPlayer = flvjs.createPlayer({
        cors: true,
        type: this.videoUrlArr[this.listIndex].type,
        url: this.videoUrlArr[this.listIndex].url
      })

      // 绑定播放错误监听事件
      this.flvPlayer.on(flvjs.Events.ERROR, a => {
        console.log('播放出错')
        // 重新创建播放器，重新加载视频
        this.createVideo()
      })

      // 初始化播放器
      this.flvPlayer.attachMediaElement(videoElement)

      // 加载视频
      this.flvPlayer.load()

      // 播放视频
      this.flvPlayer.play()
    },
    // 销毁播放器
    destroyVideo() {
      if (this.flvPlayer) {
        this.flvPlayer.pause()
        this.flvPlayer.unload()
        this.flvPlayer.detachMediaElement()
        this.flvPlayer.destroy()
        this.flvPlayer = null
      }
    },
    // 视频加载中
    waitingListener() {
      console.log('加载中')
    },
    // 视频加载完毕，可以播放
    canplayListener() {
      console.log('可以播放')
    },
    // 开始播放
    playListener() {
      console.log('播放开始')
    },
    // 进入播放中状态
    playingListener() {
      console.log('播放中')
    },
    // 播放暂停
    pauseListener() {
      console.log('播放暂停')
    },
    // 播放结束
    endedListener() {
      console.log('播放结束')
      // 视频下标递增，如果还有下一条视频那么就重新创建播放器
      this.listIndex += 1
      if (this.listIndex < this.videoUrlArr.length) {
        this.createVideo()
      }
    },
    // 播放出错
    errorListener() {
      console.log('播放出错')
      // 重新创建播放器，重新加载视频
      this.createVideo()
    },
    // 视频不可用
    stalledListener() {
      console.log('视频不可用')
      // 当前视频源不可用
      this.destroyVideo()
      this.support = false
    }
  }
}
</script>
<style lang="scss" scoped>
#VideoPlayer {
  width: 100%;
  height: 100%;
  overflow: hidden;
  //播放器初始化失败
  .loading_failed {
    width: 100%;
    height: 100%;
    img {
      display: block;
      width: 235px;
      height: 120px;
      margin: 40px auto 0;
    }
  }
  //播放器相关样式
  .loading_success {
    width: 100%;
    height: 100%;
    .video_component {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
