<template>
  <div id="homePage">
    <RingChart />
  </div>
</template>
<script>
import LineChart from '@/components/LineChart'
import BarChart3D from '@/components/BarChart3D'
import RingChart from '@/components/RingChart'
export default {
  name: 'HomePage',
  components: {
    LineChart,
    BarChart3D,
    RingChart
  }
}
</script>

<style scoped>
#homePage {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 900px;
  height: 660px;
  border: 5px solid red;
  background: #0e1925;
}
</style>
