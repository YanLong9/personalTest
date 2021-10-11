<template>
  <div id="UGV">
    <div class="test" :test1="123" :test2="456" :test3="789" @click="123">
      123
    </div>
  </div>
</template>
<script>
export default {
  name: 'UGV',
  props: {},
  data() {
    return {}
  },

  methods: {
    clickDiv() {
      console.log(123)
      var a = {}
      console.log(a)
    }
  }
}
</script>
<style lang="scss" scoped>
#UGV {
  width: 100%;
  height: 100%;
  .test {
    width: 1920px;
    height: 540px;
    background: red;
  }
}
</style>
