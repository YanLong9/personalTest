<template>
  <div id="mapContainer"></div>
</template>

<script>
import ConfigJson from './custom_map_config.json' //地图图层样式文件
export default {
  name: 'MapContainer',
  data() {
    return {
      map: null,
      testData: [
        { lng: 119.997283, lat: 30.280812 },
        { lng: 119.997355, lat: 30.273701 },
        { lng: 119.997373, lat: 30.272032 },
        { lng: 120.002637, lat: 30.271876 },
        { lng: 120.009626, lat: 30.272812 },
        { lng: 120.012483, lat: 30.273245 },
        { lng: 120.01816, lat: 30.273962 },
        { lng: 120.024933, lat: 30.275709 },
        { lng: 120.02964, lat: 30.276286 }
      ],
      data: [
        { lng: 116.404909, lat: 40.000125 },
        { lng: 116.404719, lat: 40.000524 },
        { lng: 116.404579, lat: 40.000794 },
        { lng: 116.404709, lat: 40.000834 },
        { lng: 116.405059, lat: 40.001075 },
        { lng: 116.405149, lat: 40.001065 },
        { lng: 116.405149, lat: 40.001065 },
        { lng: 116.406248, lat: 40.001095 },
        { lng: 116.406648, lat: 40.001095 },
        { lng: 116.406818, lat: 40.001095 },
        { lng: 116.406998, lat: 40.001105 },
        { lng: 116.407248, lat: 40.001105 },
        { lng: 116.407389, lat: 40.001115 },
        { lng: 116.407389, lat: 40.001115 },
        { lng: 116.407388, lat: 40.001165 },
        { lng: 116.407348, lat: 40.002035 },
        { lng: 116.407227, lat: 40.004365 },
        { lng: 116.407217, lat: 40.004535 },
        { lng: 116.407207, lat: 40.004615 },
        { lng: 116.407187, lat: 40.004915 },
        { lng: 116.407177, lat: 40.005305 },
        { lng: 116.407167, lat: 40.005425 },
        { lng: 116.407137, lat: 40.005835 },
        { lng: 116.407106, lat: 40.006355 },
        { lng: 116.407106, lat: 40.006505 },
        { lng: 116.407096, lat: 40.006885 },
        { lng: 116.407066, lat: 40.007674 },
        { lng: 116.407035, lat: 40.008204 },
        { lng: 116.407015, lat: 40.008664 },
        { lng: 116.407005, lat: 40.008954 },
        { lng: 116.406995, lat: 40.009244 },
        { lng: 116.406934, lat: 40.010524 },
        { lng: 116.406883, lat: 40.011474 },
        { lng: 116.406873, lat: 40.011724 },
        { lng: 116.406853, lat: 40.012034 },
        { lng: 116.406823, lat: 40.012443 },
        { lng: 116.406772, lat: 40.013583 },
        { lng: 116.406751, lat: 40.014143 },
        { lng: 116.406721, lat: 40.014733 },
        { lng: 116.406721, lat: 40.014773 },
        { lng: 116.4067, lat: 40.015313 },
        { lng: 116.40668, lat: 40.016003 },
        { lng: 116.40668, lat: 40.016003 },
        { lng: 116.40664, lat: 40.016142 },
        { lng: 116.40664, lat: 40.016142 },
        { lng: 116.40664, lat: 40.016232 },
        { lng: 116.406639, lat: 40.016282 },
        { lng: 116.406669, lat: 40.016852 },
        { lng: 116.406739, lat: 40.017112 },
        { lng: 116.406928, lat: 40.017552 },
        { lng: 116.407218, lat: 40.017992 },
        { lng: 116.408167, lat: 40.01941 },
        { lng: 116.408757, lat: 40.020289 },
        { lng: 116.409076, lat: 40.020968 },
        { lng: 116.409246, lat: 40.021487 },
        { lng: 116.409306, lat: 40.021827 },
        { lng: 116.409345, lat: 40.022336 },
        { lng: 116.409335, lat: 40.022656 },
        { lng: 116.409325, lat: 40.022766 },
        { lng: 116.409305, lat: 40.022976 },
        { lng: 116.409194, lat: 40.023466 },
        { lng: 116.408813, lat: 40.024537 },
        { lng: 116.408682, lat: 40.024877 },
        { lng: 116.408542, lat: 40.025447 },
        { lng: 116.408501, lat: 40.025757 },
        { lng: 116.408491, lat: 40.026067 },
        { lng: 116.408491, lat: 40.026257 },
        { lng: 116.40851, lat: 40.027107 },
        { lng: 116.40852, lat: 40.027387 },
        { lng: 116.408529, lat: 40.028176 },
        { lng: 116.408539, lat: 40.028546 },
        { lng: 116.408548, lat: 40.028746 },
        { lng: 116.408548, lat: 40.028866 },
        { lng: 116.408548, lat: 40.028966 },
        { lng: 116.408557, lat: 40.029696 },
        { lng: 116.408577, lat: 40.030306 },
        { lng: 116.408586, lat: 40.030665 },
        { lng: 116.408586, lat: 40.030665 },
        { lng: 116.408606, lat: 40.030695 },
        { lng: 116.408646, lat: 40.030765 },
        { lng: 116.408756, lat: 40.030835 },
        { lng: 116.408927, lat: 40.030865 },
        { lng: 116.409097, lat: 40.030814 },
        { lng: 116.409217, lat: 40.030664 },
        { lng: 116.409257, lat: 40.030454 },
        { lng: 116.409248, lat: 40.029744 },
        { lng: 116.409218, lat: 40.029524 },
        { lng: 116.409158, lat: 40.029414 },
        { lng: 116.409078, lat: 40.029345 },
        { lng: 116.408658, lat: 40.029176 },
        { lng: 116.408658, lat: 40.029176 },
        { lng: 116.408148, lat: 40.029177 },
        { lng: 116.406767, lat: 40.029198 },
        { lng: 116.406427, lat: 40.029198 },
        { lng: 116.406427, lat: 40.029198 },
        { lng: 116.406077, lat: 40.029108 },
        { lng: 116.405357, lat: 40.029018 },
        { lng: 116.405058, lat: 40.028917 },
        { lng: 116.405058, lat: 40.028917 },
        { lng: 116.40215, lat: 40.02896 },
        { lng: 116.396732, lat: 40.028995 },
        { lng: 116.393583, lat: 40.029012 },
        { lng: 116.389661, lat: 40.029012 },
        { lng: 116.38786, lat: 40.029006 },
        { lng: 116.385274, lat: 40.029005 },
        { lng: 116.382778, lat: 40.029002 },
        { lng: 116.382659, lat: 40.029 },
        { lng: 116.381466, lat: 40.028989 },
        { lng: 116.376149, lat: 40.028953 },
        { lng: 116.375613, lat: 40.028953 },
        { lng: 116.371777, lat: 40.028933 },
        { lng: 116.367353, lat: 40.028897 },
        { lng: 116.365224, lat: 40.028894 },
        { lng: 116.364577, lat: 40.028894 },
        { lng: 116.363383, lat: 40.028887 },
        { lng: 116.361283, lat: 40.028878 },
        { lng: 116.360576, lat: 40.028879 },
        { lng: 116.360208, lat: 40.028875 },
        { lng: 116.359222, lat: 40.028883 },
        { lng: 116.357488, lat: 40.028875 },
        { lng: 116.356531, lat: 40.028886 },
        { lng: 116.356023, lat: 40.028881 },
        { lng: 116.355634, lat: 40.028878 },
        { lng: 116.354617, lat: 40.02888 },
        { lng: 116.351862, lat: 40.028893 },
        { lng: 116.348726, lat: 40.028922 },
        { lng: 116.347347, lat: 40.02893 },
        { lng: 116.344506, lat: 40.028952 },
        { lng: 116.342995, lat: 40.028866 },
        { lng: 116.341943, lat: 40.02872 },
        { lng: 116.340922, lat: 40.028505 },
        { lng: 116.340151, lat: 40.0283 },
        { lng: 116.337144, lat: 40.027372 },
        { lng: 116.337144, lat: 40.027372 },
        { lng: 116.336984, lat: 40.027354 },
        { lng: 116.336632, lat: 40.027327 },
        { lng: 116.336201, lat: 40.027301 },
        { lng: 116.33597, lat: 40.027303 },
        { lng: 116.335589, lat: 40.027327 },
        { lng: 116.335358, lat: 40.027369 },
        { lng: 116.335178, lat: 40.027411 },
        { lng: 116.334535, lat: 40.027628 },
        { lng: 116.333943, lat: 40.027904 },
        { lng: 116.33341, lat: 40.02822 },
        { lng: 116.332727, lat: 40.028738 },
        { lng: 116.332124, lat: 40.029365 },
        { lng: 116.331812, lat: 40.029619 },
        { lng: 116.331812, lat: 40.029619 },
        { lng: 116.330997, lat: 40.030979 },
        { lng: 116.330736, lat: 40.031462 },
        { lng: 116.330645, lat: 40.031644 },
        { lng: 116.330383, lat: 40.032217 },
        { lng: 116.330152, lat: 40.03278 },
        { lng: 116.32999, lat: 40.033202 },
        { lng: 116.329829, lat: 40.033674 },
        { lng: 116.329739, lat: 40.033985 },
        { lng: 116.329577, lat: 40.034547 },
        { lng: 116.329406, lat: 40.03516 },
        { lng: 116.329194, lat: 40.035912 },
        { lng: 116.329124, lat: 40.036183 },
        { lng: 116.328892, lat: 40.036876 },
        { lng: 116.328509, lat: 40.037802 },
        { lng: 116.328439, lat: 40.037963 },
        { lng: 116.328318, lat: 40.038185 },
        { lng: 116.328016, lat: 40.038699 },
        { lng: 116.327825, lat: 40.038972 },
        { lng: 116.327634, lat: 40.039245 },
        { lng: 116.327271, lat: 40.03969 },
        { lng: 116.326668, lat: 40.040309 },
        { lng: 116.326235, lat: 40.040726 },
        { lng: 116.324394, lat: 40.042335 },
        { lng: 116.323166, lat: 40.043406 },
        { lng: 116.322733, lat: 40.043793 },
        { lng: 116.322643, lat: 40.043875 },
        { lng: 116.32227, lat: 40.044231 },
        { lng: 116.32222, lat: 40.044292 },
        { lng: 116.321696, lat: 40.044861 },
        { lng: 116.321233, lat: 40.045459 },
        { lng: 116.321173, lat: 40.04556 },
        { lng: 116.320861, lat: 40.046036 },
        { lng: 116.320579, lat: 40.04649 },
        { lng: 116.320418, lat: 40.046773 },
        { lng: 116.320267, lat: 40.047056 },
        { lng: 116.320085, lat: 40.047369 },
        { lng: 116.320005, lat: 40.047511 },
        { lng: 116.319874, lat: 40.047753 },
        { lng: 116.319431, lat: 40.048521 },
        { lng: 116.319068, lat: 40.049117 },
        { lng: 116.318907, lat: 40.04936 },
        { lng: 116.318364, lat: 40.05016 },
        { lng: 116.317719, lat: 40.051041 },
        { lng: 116.317116, lat: 40.051792 },
        { lng: 116.316763, lat: 40.052258 },
        { lng: 116.316069, lat: 40.053131 },
        { lng: 116.314549, lat: 40.055069 },
        { lng: 116.313462, lat: 40.056568 },
        { lng: 116.313291, lat: 40.056821 },
        { lng: 116.31304, lat: 40.057176 },
        { lng: 116.312678, lat: 40.057732 },
        { lng: 116.312617, lat: 40.057833 },
        { lng: 116.312456, lat: 40.058086 },
        { lng: 116.312275, lat: 40.058349 },
        { lng: 116.312185, lat: 40.058491 },
        { lng: 116.311752, lat: 40.059199 },
        { lng: 116.311732, lat: 40.059229 },
        { lng: 116.311571, lat: 40.059512 },
        { lng: 116.31133, lat: 40.059906 },
        { lng: 116.311149, lat: 40.060239 },
        { lng: 116.311149, lat: 40.060239 },
        { lng: 116.311139, lat: 40.060289 },
        { lng: 116.311129, lat: 40.06036 },
        { lng: 116.311108, lat: 40.06043 },
        { lng: 116.311088, lat: 40.06051 },
        { lng: 116.311038, lat: 40.060661 },
        { lng: 116.310948, lat: 40.060843 },
        { lng: 116.310877, lat: 40.061004 },
        { lng: 116.310545, lat: 40.06164 },
        { lng: 116.310405, lat: 40.061892 },
        { lng: 116.310123, lat: 40.062437 },
        { lng: 116.310023, lat: 40.062629 },
        { lng: 116.3096, lat: 40.063456 },
        { lng: 116.309329, lat: 40.063991 },
        { lng: 116.309027, lat: 40.064376 },
        { lng: 116.308615, lat: 40.064593 },
        { lng: 116.308263, lat: 40.064679 },
        { lng: 116.30777, lat: 40.064677 },
        { lng: 116.306875, lat: 40.064521 },
        { lng: 116.305176, lat: 40.064228 },
        { lng: 116.303487, lat: 40.063882 },
        { lng: 116.302864, lat: 40.063771 },
        { lng: 116.302804, lat: 40.063732 },
        { lng: 116.302804, lat: 40.063732 },
        { lng: 116.303366, lat: 40.062134 },
        { lng: 116.303376, lat: 40.062104 },
        { lng: 116.303908, lat: 40.060446 },
        { lng: 116.303928, lat: 40.060356 },
        { lng: 116.303989, lat: 40.060125 },
        { lng: 116.304139, lat: 40.059583 },
        { lng: 116.30426, lat: 40.059161 },
        { lng: 116.30433, lat: 40.05892 },
        { lng: 116.304441, lat: 40.058548 },
        { lng: 116.304451, lat: 40.058498 },
        { lng: 116.304602, lat: 40.057986 },
        { lng: 116.304702, lat: 40.057634 },
        { lng: 116.305094, lat: 40.056338 },
        { lng: 116.305124, lat: 40.056248 },
        { lng: 116.305144, lat: 40.056188 },
        { lng: 116.305476, lat: 40.055263 },
        { lng: 116.305496, lat: 40.055212 },
        { lng: 116.305647, lat: 40.05524 },
        { lng: 116.305627, lat: 40.0553 },
        { lng: 116.305245, lat: 40.056356 },
        { lng: 116.304853, lat: 40.057642 },
        { lng: 116.304752, lat: 40.057994 },
        { lng: 116.304752, lat: 40.057994 },
        { lng: 116.306451, lat: 40.058308 },
        { lng: 116.306451, lat: 40.058308 },
        { lng: 116.306693, lat: 40.057714 },
        { lng: 116.306843, lat: 40.057331 },
        { lng: 116.306914, lat: 40.05715 },
        { lng: 116.306914, lat: 40.05715 },
        { lng: 116.307034, lat: 40.057188 },
        { lng: 116.307115, lat: 40.057207 },
        { lng: 116.306884, lat: 40.057761 },
        { lng: 116.306884, lat: 40.057811 },
        { lng: 116.306944, lat: 40.05787 },
        { lng: 116.307376, lat: 40.057993 },
        { lng: 116.307708, lat: 40.058077 },
        { lng: 116.307728, lat: 40.058047 },
        { lng: 116.308131, lat: 40.05719 },
        { lng: 116.308281, lat: 40.056858 },
        { lng: 116.308603, lat: 40.055993 },
        { lng: 116.308131, lat: 40.05589 }
      ]
    }
  },
  mounted() {
    this.initMap()
  },
  methods: {
    initMap() {
      // **********************************************************************************//
      this.map = new BMapGL.Map('mapContainer') // 创建地图实例
      var point = new BMapGL.Point(119.997283, 30.280812) // 创建点坐标
      this.map.centerAndZoom(point, 19) // 初始化地图，设置中心点坐标和地图级别
      this.map.enableScrollWheelZoom(true) //开启鼠标滚轮缩放
      this.map.setMapStyleV2(ConfigJson) //地图图层个性化样式文件
      this.map.setHeading(0) //(n*0)-(n*360)//地图Z轴转动角度，0：上北下南
      this.map.setTilt(0) //0-90//地图纬度转动角度，0：从上至下，90：平行于地面
      // **********************************************************************************//
      this.createLushu()
    },
    createLushu() {
      this.testData.forEach((item, index, arr) => {
        item = new BMapGL.Point(item.lng, item.lat)
      })

      this.map.addOverlay(
        new BMapGL.Polyline(this.testData, { strokeColor: 'red' })
      )
      this.lushu = new BMapGLLib.LuShu(this.map, [this.testData[0]], {
        defaultContent: '123',
        autoView: true, //是否开启自动视野调整，如果开启那么路书在运动过程中会根据视野自动调整
        icon: new BMapGL.Icon(
          `data:image/png;base64,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`,
          new BMapGL.Size(48, 48),
          { anchor: new BMapGL.Size(24, 24) }
        ),
        // speed: 5,
        enableRotation: true //是否设置marker随着道路的走向进行旋转
      })

      console.log(this.lushu)
      this.lushu.start()
      this.lushu.path = [
        { lng: 119.997283, lat: 30.280812 },
        { lng: 119.997355, lat: 30.273701 }
      ]
      this.lushu.start()
      this.updateLushu([
        { lng: 119.997283, lat: 30.280812 },
        { lng: 119.997355, lat: 30.273701 }
      ]);
    },
    updateLushu(data) {
      var index = 0,
        data = [this.data[0]]
      setInterval(() => {
        if (data.length === 1) {
          index += 1
          data.push(this.data[index])
          console.log(data)
          this.lushu.path = data
          this.lushu.start()
          // this.lushu.goPath(data);
        } else {
          index += 1
          data.push(this.data[index])
          data.shift()
          console.log(data)
          // var layer = new mapvgl.PointLayer({
          //   color: 'red',
          //   shape: 'circle', // 默认为圆形，可传square改为正方形
          //   blend: 'lighter',
          //   size: 10,
          //   data: [
          //     {
          //       geometry: {
          //         type: 'Point',
          //         coordinates: this.data[index]
          //       }
          //     }
          //   ]
          // });
          // this.view.addLayer(layer);
          console.log(this.lushu)
          this.lushu.path = data
          this.lushu.start()
          // this.lushu.goPath(data);
        }
      }, 1000)
    }
  }
}
</script>

<style scoped>
#mapContainer {
  width: 100%;
  height: 100%;
}
</style>