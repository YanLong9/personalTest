<template>
  <div id="FullScreenContainer" :ref="ref">
    <template v-if="ready">
      <slot />
    </template>
  </div>
</template>

<script>
import autoResize from '@/util/screenAdapter/autoResize.js'

export default {
  name: 'FullScreenContainer',
  mixins: [autoResize],
  props: {
    // 设计图宽度
    designWidth: {
      type: Number,
      default: 3840
    },
    // 设计图高度
    designHeight: {
      type: Number,
      default: 1080
    },
    /**
     * 全屏适配模式
     * true：保持与设计图一致的宽高比例，可能上下或者左右留白
     * false: 铺满当前屏幕，不保持设计图的宽高比例，与当前屏幕对比，等比例拉伸或者缩小
     */
    fullScreenModel: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      ref: 'FullScreenContainer',
      ready: false // 是否初始化成功
    }
  },
  methods: {
    // 页面加载成功后执行，
    afterAutoResizeMixinInit() {
      const { initConfig, setAppScale } = this

      initConfig()

      setAppScale()

      this.ready = true
    },
    // 根据设计图比例初始化页面元素
    initConfig() {
      const { designWidth, designHeight, dom } = this

      dom.style.width = `${designWidth}px`
      dom.style.height = `${designHeight}px`
    },
    // 根据设计图比例初始化页面元素后，根据当前屏幕比例，以及页面缩放模式，缩放页面
    setAppScale() {
      const { designWidth, designHeight, fullScreenModel, dom } = this

      const currentWidth = document.body.clientWidth
      const currentHeight = document.body.clientHeight

      if (fullScreenModel) {
        if (currentWidth / designWidth > currentHeight / designHeight) {
          dom.style.transform = `translate(-50%,-50%) scale(${
            currentHeight / designHeight
          })`
        } else if (currentWidth / designWidth < currentHeight / designHeight) {
          dom.style.transform = `translate(-50%,-50%) scale(${
            currentWidth / designWidth
          })`
        } else if (
          currentWidth / designWidth ===
          currentHeight / designHeight
        ) {
          dom.style.transform = `translate(-50%,-50%) scale(${
            currentWidth / designWidth
          })`
        }
      } else {
        dom.style.transform = `translate(-50%,-50%) scale(${
          currentWidth / designWidth
        },${currentHeight / designHeight})`
      }
    },
    // 当页面窗口尺寸缩放后，执行该函数
    onResize() {
      const { setAppScale } = this

      setAppScale()
    }
  }
}
</script>

<style  lang="scss" scoped>
#FullScreenContainer {
  position: fixed;
  top: 50%;
  left: 50%;
  /* // overflow: hidden;
  // transform-origin: left top; */
  z-index: 999;
  background: blue;
}
</style>
