<template>
  <div id="index">
    <div id="map" class="map" ref="map"></div>
  </div>
</template>

<script>
// 地图相关插件
// import { Map, View, Feature } from 'ol';
// import { Tile, Vector } from 'ol/layer';
// import { XYZ } from 'ol/source';
// import VectorSource from 'ol/source/Vector';
// import { fromLonLat } from 'ol/proj';
// import { defaults } from 'ol/control';
// import FullScreen from 'ol/control/FullScreen';
// //
// import { Style, Stroke } from 'ol/style';
// import VectorLayer from 'ol/layer/Vector';
// import LineString from 'ol/geom/LineString';

// import { Map, View } from 'ol';
// import TileLayer from 'ol/layer/Tile';
// import XYZSource from 'ol/source/XYZ';
// import { fromLonLat } from 'ol/proj';

////
import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import 'ol/ol.css';
import GeoJSON from 'ol/format/GeoJSON';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';

export default {
  name: 'index',
  data() {
    return {
      map: null
    };
  },
  mounted() {
    console.log(this.$route.name);
    this.initMap2();
  },
  methods: {
    initMap1() {
      this.map = new Map({
        target: this.$refs.map,
        layers: [
          new Tile({
            source: new XYZ({
              url:
                'https://t0.tianditu.gov.cn/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=01c467965a36975582bd19d94e88fac7'
            })
          }),

          new Tile({
            source: new XYZ({
              url:
                'https://t0.tianditu.gov.cn/DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=01c467965a36975582bd19d94e88fac7'
            })
          })
        ],
        controls: defaults({
          attribution: false,
          zoom: false,
          rotate: false
        }).extend([]),
        view: new View({
          center: fromLonLat([120.00161524, 30.28260689]),
          zoom: 11,
          maxZoom: 18,
          minZoom: 8
        })
      });
      this.map.addControl(new FullScreen());
      // init layer
      this.source = new VectorSource({
        features: []
      });
      this.layer = new Vector({
        source: this.source
      });
      this.map.addLayer(this.layer);
    },
    initMap() {
      const map = new Map({
        target: this.$refs.map,
        layers: [
          new TileLayer({
            source: new OSM()
          })
        ],
        view: new View({
          center: [118.21, 29.11],
          zoom: 0
        })
      });
    },
    initMap2() {
      new Map({
        target: this.$refs.map,
        layers: [
          new TileLayer({
            source: new XYZSource({
              url: 'http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg'
            })
          })
        ],
        view: new View({
          center: fromLonLat([118.21, 29.11]),
          zoom: 2
        })
      });
    },
    initMap3() {
      const map = new Map({
        target: this.$refs.map,
        layers: [
          new VectorLayer({
            source: new VectorSource({
              format: new GeoJSON(),
              url: './data/countries.json'
            })
          })
        ],
        view: new View({
          center: [0, 0],
          zoom: 2
        })
      });
    }
  }
};
</script>

<style lang="less" scoped>
#index {
  width: 100%;
  height: 100%;
  overflow: hidden;
  #map {
    width: 50%;
    height: 50%;
    margin: 50px auto;
  }
}
</style>