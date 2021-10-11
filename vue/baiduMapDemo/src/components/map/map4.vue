<template>
  <div id="mapContainer"></div>
</template>

<script>
import ConfigJson from './custom_map_config.json'; //地图图层样式文件
export default {
  name: 'MapContainer',
  data() {
    return {
      map: null
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      // **********************************************************************************//
      this.map = new BMapGL.Map('mapContainer'); // 创建地图实例
      var point = new BMapGL.Point(119.997283, 30.280812); // 创建点坐标
      this.map.centerAndZoom(point, 19); // 初始化地图，设置中心点坐标和地图级别
      this.map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
      this.map.setMapStyleV2(ConfigJson); //地图图层个性化样式文件
      this.map.setHeading(0); //(n*0)-(n*360)//地图Z轴转动角度，0：上北下南
      this.map.setTilt(0); //0-90//地图纬度转动角度，0：从上至下，90：平行于地面
      // **********************************************************************************//
      console.log(document.body.scrollTop)

    },
   
  }
};
</script>

<style scoped>
#mapContainer {
  width: 100%;
  height: 100%;
}
</style>