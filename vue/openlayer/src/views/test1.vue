<template>
  <div id="test1">
    <div id="map" class="map" ref="map"></div>
    <div class="handle">
      <p class="drawLine" @click="drawLine">画线</p>
      <p class="drawPolygon" @click="drawPolygon">画多边形</p>
      <p class="drawCircle" @click="drawCircle">画圆</p>
      <p class="lengthMeasure" @click="lengthMeasure">测距</p>
      <p class="areaMeasure" @click="areaMeasure">测面</p>
    </div>
  </div>
</template>

<script>
//初始化地图相关插件
import { Map, View, Feature } from 'ol';
import { defaults } from 'ol/control';
import { Tile, Vector } from 'ol/layer';
import { Style, Fill, Stroke } from 'ol/style';
//地图作画所需模块
import Polygon from 'ol/geom/Polygon';
import LineString from 'ol/geom/LineString';
import Circle from 'ol/geom/Circle';
import Draw from 'ol/interaction/Draw';
//
import { XYZ } from 'ol/source';
import { fromLonLat, transform } from 'ol/proj';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
//
import Measure from '@/utils/measure';

export default {
  name: 'test1',
  data() {
    return {
      map: null,
      flagLength: false,
      flagArea: false
    };
  },
  mounted() {
    console.log(this.$route.name);
    this.initMap();
    document.addEventListener('keydown', this.keyboardEvent);
  },
  methods: {
    keyboardEvent(e) {
      console.log(e);
      const ev = document.all ? window.event : e;
      if (ev.keyCode === 83) {
        // S
        this.lengthMeasure();
      }
    },
    //测距
    lengthMeasure() {
      Measure.cancelMeasure(this.map);
      this.flagLength = !this.flagLength;
      console.log(this.flagLength)
      if (this.flagLength) {
        Measure.measure(this.map, 'LineString');
      }
    },
    //测面
    areaMeasure() {
      Measure.cancelMeasure(this.map);
      this.flagArea = !this.flagArea;
      if (this.flagArea) {
        Measure.measure(this.map, 'Polygon');
      }
    },
    //画线
    drawLine() {
      console.log(123);

      var arr = [
        [13358387.608601999, 3544342.1871995046],
        [13363576.321387365, 3538288.6752103874]
      ];
      const lineString = new LineString(arr);
      const feature = new Feature({
        geometry: lineString
      });

      const tempLayer = new VectorLayer({
        // 两点之间的连线
        source: new VectorSource({
          features: [feature]
        }),
        style: [
          new Style({
            stroke: new Stroke({
              width: 4,
              // color: n.type === 'approvalPending' ? '#E18D31' : '#5ACCC5',
              color: '#5ACCC5',
              lineDash: [0.1, 5]
            }),
            fill: new Fill({
              // color:
              //   n.type === 'approvalPending'
              //     ? 'rgba(168, 94, 23, 0.3)'
              //     : 'rgba(24, 116, 115, 0.3)'
              color: 'rgba(24, 116, 115, 0.3)'
            }),
            zIndex: 2
          })
        ],
        // layerId: n.No,
        layerId: '0',
        updateWhileAnimating: true
      });
      this.map.addLayer(tempLayer);
    },
    //画多边形
    drawPolygon() {
      console.log(456);

      var arr = [
        [13371018.84197918, 3534897.9899659804],
        [13371214.786546875, 3534857.3224103497],
        [13371081.69296368, 3534690.955325853],
        [13371018.84197918, 3534897.9899659804]
      ];
      const lineString = new Polygon([arr]);
      const feature = new Feature({
        geometry: lineString
      });

      const tempLayer = new VectorLayer({
        // 两点之间的连线
        source: new VectorSource({
          features: [feature]
        }),
        style: [
          new Style({
            stroke: new Stroke({
              width: 4,
              color: '#5ACCC5',
              lineDash: [0.1, 5]
            }),
            fill: new Fill({
              color: 'rgba(24, 116, 115, 0.3)'
            }),
            zIndex: 2
          })
        ],
        layerId: '0',
        updateWhileAnimating: true
      });
      this.map.addLayer(tempLayer);
    },
    //画圆
    drawCircle() {
      var arr = [
        [13371018.84197918, 3534897.9899659804],
        [13371214.786546875, 3534857.3224103497],
        [13371081.69296368, 3534690.955325853],
        [13371018.84197918, 3534897.9899659804]
      ];
      console.log(789);
      const lineString = new Circle(
        [13358557.523510225, 3540465.7332753413],
        4012.7619879208505,
        'XY'
      );
      const feature = new Feature({
        geometry: lineString
      });
      // 13358557.523510225, 3540465.7332753413, 4012.7619879208505
      const tempLayer = new VectorLayer({
        // 两点之间的连线
        source: new VectorSource({
          features: [feature]
        }),
        style: [
          new Style({
            stroke: new Stroke({
              width: 4,
              color: '#5ACCC5',
              lineDash: [0.1, 5]
            }),
            fill: new Fill({
              color: 'rgba(24, 116, 115, 0.3)'
            }),
            zIndex: 2
          })
        ],
        layerId: '0',
        updateWhileAnimating: true
      });
      this.map.addLayer(tempLayer);
    },
    initMap() {
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
    }
  }
};
</script>

<style lang="less" scoped>
#test1 {
  width: 100%;
  height: 100%;
  overflow: hidden;
  #map {
    width: 50%;
    height: 50%;
    margin: 50px auto;
  }
  .handle {
    width: 500px;
    height: 45px;
    margin: 50px auto 0;
    border: 1px solid red;
    display: flex;
    .drawLine,
    .drawPolygon,
    .drawCircle,
    .lengthMeasure,
    .areaMeasure {
      height: 45px;
      line-height: 45px;
      padding: 0 10px;
      cursor: pointer;
      background: linear-gradient(315deg, #38c3ff 0%, #1a90ff 100%);
      color: white;
    }
  }
}
</style>