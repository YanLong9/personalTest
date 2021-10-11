<template>
  <div id="homePage">
    <div class="test">
      <MapContainer></MapContainer>
    </div>
  </div>
</template>
<script>
import MapContainer from '@/components/map/map4.vue'
export default {
  name: 'homePage',
  components: { MapContainer },
  mounted() {
    const currentWidth = document.body.clientWidth
    const currentHeight = document.body.clientHeight
    console.log(currentWidth,currentHeight)
    var test = document.getElementsByClassName('test')[0]
    test.style.width = `${3840}px`
    test.style.height = `${1080}px`
    test.style.transform = `scale(${currentWidth / 3840},${
      currentHeight / 1080
    })`
    // this.$nextTick(() => {
    //   test.style.transform = `scale(${currentWidth / 3840},${
    //     currentHeight / 1080
    //   })`
    // })
  }
}
</script>

<style scoped>
#homePage {
  width: 100%;
  height: 100%;
  background: red;
}
.test {
  background: black;
  transform-origin: left top;
  /* transform-origin: left; */
}
</style>