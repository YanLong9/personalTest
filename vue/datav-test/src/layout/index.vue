<template>
  <div id="layout">
    <fullScreenContainer>
      <router-view />
    </fullScreenContainer>
  </div>
</template>
<script>
import fullScreenContainer from './fullScreenContainer/index'
export default {
  name: 'Layout',
  components: {
    fullScreenContainer
  }
}
</script>
<style  lang="scss" scoped>
#layout {
  width: 100%;
  height: 100%;
}
</style>
