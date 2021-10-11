<template>
  <div class="img_Wrap">
    <img :src="url" alt="" :class="{ videoImg: videoImg }">
  </div>
</template>

<script>
export default {
  name: 'RealTimeImage',
  props: {
    // 传入的图片地址
    imgUrl: {
      default: '',
      type: String,
      required: true
    }
  },
  data() {
    return {
      url: '', // 图片地址
      videoImg: false
    }
  },
  watch: {
    imgUrl: {
      handler: function(newVal, oldVal) {
        if (newVal !== oldVal) {
          this.videoImg = true
          this.url = newVal
        }
      },
      deep: true
    }
  },
  created() {
    this.url = this.imgUrl
  }
}
</script>

<style lang="scss" scoped>
.img_Wrap {
  width: 100%;
  height: 100%;
  .videoImg {
    width: 100%;
    height: 100%;
  }
  img {
    display: block;
    width: 235px;
    height: 120px;
    margin: 40px auto 0;
  }
}
</style>
