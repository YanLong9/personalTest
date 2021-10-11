<template>
  <div id="flvsTest">
    <div class="flvsTest">
      <VideoPlayer class="VideoPlayer"/>
    </div>
  </div>
</template>
<script>
import VideoPlayer from '@/components/VideoPlayer/index'
export default {
  name: 'FlvsTest',
  components: {
    VideoPlayer
  }
}
</script>

<style scoped lang="scss">
#flvsTest {
  width: 100%;
  height: 100%;
  background: #13223b;
  position: relative;
  .flvsTest {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .VideoPlayer {
      width: 373px;
      height: 222px;
    }
  }
}
</style>
