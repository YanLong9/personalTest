import Draw from 'ol/interaction/Draw'
import VectorSource from 'ol/source/Vector'
import VectorLayer from 'ol/layer/Vector'
import { Feature } from 'ol'
import { formatLength, formatArea, setToolStyle } from './formatMeasure'

import {
  unByKey
} from 'ol/Observable.js'
import Overlay from 'ol/Overlay'
import {
  LineString,
  Polygon,
  Point
} from 'ol/geom.js'
import {
  Circle as CircleStyle,
  Fill,
  Stroke,
  Style
} from 'ol/style.js'

//创建作画所需的临时图层
var source = new VectorSource()
var vector = new VectorLayer({
  id: 'lineAndArea',
  source: source,
  style: new Style({
    fill: new Fill({
      // color: 'rgba(27, 78, 150, 0.4)'
      color: '#000'
    }),
    stroke: new Stroke({
      // color: '#1A90FF',
      color: '#fff',
      // lineDash: [10, 10],
      width: 2
    }),
    image: new CircleStyle({
      radius: 5,
      stroke: new Stroke({
        color: '#1A90FF'
      }),
      fill: new Fill({
        color: '#fff'
      })
    })
  }),
  zIndex: 16
})
//创建作画交互对象
var draw
//作画测距所需对象
var sketch = null
function measure (map, measureType) {

  //添加作画所需的临时图层
  map.addLayer(vector)

  //作画所需的函数
  function addInteraction () {
    //添加作画所需的的交互对象
    draw = new Draw({
      source: source,
      type: measureType,
      style: new Style({
        fill: new Fill({
          // color: 'rgba(27, 78, 150, 0.4)'
          color: '#000'
        }),
        stroke: new Stroke({
          // color: '#1A90FF',
          color: '#fff',
          // lineDash: [10, 10],
          width: 2
        }),
        image: new CircleStyle({
          radius: 5,
          stroke: new Stroke({
            color: '#1A90FF'
          }),
          fill: new Fill({
            color: '#fff'
          })
        })
      })
    })
    //将作画交互对象添加到地图上
    map.addInteraction(draw)

    //绑定作画开始监听函数
    var listener
    var count = 0
    draw.on("drawstart", (e) => {
      sketch = e.feature
      console.log(sketch)
      listener = sketch.getGeometry()
      console.log(listener)
      listener.on('change', (evt) => {
        var geom = evt.target
        console.log(geom)
        var output
        if (measureType === "LineString") {
          output = formatLength(map, geom)
          console.log(output)
        } else if (measureType === "Polygon") {
          output = formatArea(map, geom)
          console.log(output)
        }
      })
    })
  }
  // 量测调用
  addInteraction()
}

function cancelMeasure (map) {
  //清除地图上的作画交互对象
  map.removeLayer(vector)

  if (draw) {
    map.removeInteraction(draw)
  } else {
    draw = null
  }
  //清除测量，作画图层中的所有feature
  // source.clear()
}

export default {
  measure, cancelMeasure
}
