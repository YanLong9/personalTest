import Draw from 'ol/interaction/Draw'
import VectorSource from 'ol/source/Vector'
import VectorLayer from 'ol/layer/Vector'
import { Feature } from 'ol'
import { formatLength, formatArea, setToolStyle } from './formatMeasure'

import {
  unByKey
} from 'ol/Observable.js'
import Overlay from 'ol/Overlay'
// import View from 'ol/View'
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
  // Text
} from 'ol/style.js'
// import TileLayer from 'ol/layer/Tile'
// import OSM from 'ol/source/OSM'
export default {
  measure (map, measureType) {
    //添加作画所需的临时图层
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
    map.addLayer(vector)

    //创建作画交互对象
    var draw

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
      map.addInteraction(draw)

      // createMeasureTooltip()
      // createHelpTooltip()

      var listener
      var count = 0
      draw.on('drawstart',
        function (evt) {
          // set sketch

          // let count = 0
          sketch = evt.feature

          /** @type {module:ol/coordinate~Coordinate|undefined} */
          var tooltipCoord = evt.coordinate

          listener = sketch.getGeometry().on('change', function (evt) {
            var geom = evt.target
            var output
            if (geom instanceof Polygon) {
              map.removeEventListener('singleclick')
              map.removeEventListener('dblclick')
              output = formatArea(map, geom)
              tooltipCoord = geom.getInteriorPoint().getCoordinates()
              // measureTooltipElement.innerHTML = '总面积：' + output
              measureTooltipElement.innerHTML = output
            } else if (geom instanceof LineString) {
              output = formatLength(map, geom)
              tooltipCoord = geom.getLastCoordinate()
              measureTooltipElement.innerHTML = output
            }

            // measureTooltipElement.style.color = 'yellow'
            measureTooltip.setPosition(tooltipCoord)

            // map.on('singleclick', function (evt) {
            //   console.log(output)
            //   // measureTooltipElement.innerHTML = output
            //   // measureTooltipElement.style.color = 'yellow'
            //   // // 创建测量提示框
            //   // createMeasureTooltip()
            //   const tempMeasureTooltipElement = document.createElement('div')
            //   tempMeasureTooltipElement.innerHTML = output
            //   tempMeasureTooltipElement.style.color = 'yellow'
            //   tempMeasureTooltipElement.className = 'ol-tooltip ol-tooltip-measure'
            //   const tempMeasureTooltip = new Overlay({
            //     element: tempMeasureTooltipElement,
            //     offset: [0, -15],
            //     positioning: 'bottom-center'
            //   })
            //   map.addOverlay(tempMeasureTooltip)
            // })
          })
          map.on('singleclick', function (evt) {
            if (sketch) {
              // 设置测量提示信息的位置坐标，用来确定鼠标点击后测量提示框的位置
              measureTooltip.setPosition(evt.coordinate)
              // 如果是第一次点击，则设置测量提示框的文本内容为起点
              if (count === 0 && measureTooltipElement) {
                measureTooltipElement.innerHTML = '起点'
                setToolStyle(measureTooltipElement)
                // measureTooltipElement.style.color = '#C3C5C9'
              }
              measureTooltipElement.parentNode.style.zIndex = -1
              // 根据鼠标点击位置生成一个点
              var point = new Point(evt.coordinate)
              // 将该点要素添加到矢量数据源中
              source.addFeature(new Feature(point))
              if (count !== 0) {
                // console.log(evt.coordinate)
                // console.log(formatLength(evt.feature.getGeometry().target))
                // 更改测量提示框的样式，使测量提示框可见
                measureTooltipElement.className = 'tooltip tooltip-static'
              }
              // 创建测量提示框
              createMeasureTooltip()
              setToolStyle(measureTooltipElement)
              // 点击次数增加
              count++
            }
          })
          // 地图双击事件
          map.on('dblclick', function (evt) {
            // 根据
            var point = new Point(evt.coordinate)
            source.addFeature(new Feature(point))
          })
        }, this)

      draw.on('drawend',
        function () {
          count = 0
          measureTooltipElement.innerHTML = (measureType === 'Polygon' ? '' : '总长：') + measureTooltipElement.innerHTML
          measureTooltipElement.className = 'ol-tooltip ol-tooltip-static measureNum'
          setToolStyle(measureTooltipElement)
          measureTooltip.setOffset([0, -7])
          // unset sketch
          sketch = null
          // unset tooltip so that a new one can be created
          measureTooltipElement = null
          createMeasureTooltip()
          unByKey(listener)
          map.un('pointermove', pointerMoveHandler)
          map.removeInteraction(draw)
          helpTooltipElement.classList.add('hidden')

          // this.map.removeInteraction(draw)
          // draw = null
        }, this)
    }
    // 量测调用
    addInteraction()
    /**
     * Currently drawn feature.
     * @type {module:ol/Feature~Feature}
     */
    var sketch

    /**
     * The help tooltip element.
     * @type {Element}
     */
    var helpTooltipElement

    /**
     * Overlay to show the help messages.
     * @type {module:ol/Overlay}
     */
    var helpTooltip

    /**
     * The measure tooltip element.
     * @type {Element}
     */
    var measureTooltipElement

    /**
     * Overlay to show the measurement.
     * @type {module:ol/Overlay}
     */
    var measureTooltip

    /**
     * Message to show when the user is drawing a polygon.
     * @type {string}
     */
    // var continuePolygonMsg = '继续点击绘制多边形'
    var continuePolygonMsg = ''

    /**
     * Message to show when the user is drawing a line.
     * @type {string}
     */
    // var continueLineMsg = '继续点击绘制线'
    var continueLineMsg = ''

    /**
     * Handle pointer move.
     * @param {module:ol/MapBrowserEvent~MapBrowserEvent} evt The event.
     */
    var pointerMoveHandler = function (evt) {
      console.log(evt)
      if (evt.dragging) {
        return
      }
      /** @type {string} */
      var helpMsg = ''

      if (sketch) {
        var geom = sketch.getGeometry()
        if (geom instanceof Polygon) {
          helpMsg = continuePolygonMsg
        } else if (geom instanceof LineString) {
          helpMsg = continueLineMsg
        }
      }

      helpTooltipElement.innerHTML = helpMsg
      helpTooltipElement.style.color = '#1A90FF'
      helpTooltip.setPosition(evt.coordinate)
      helpTooltipElement.classList.remove('hidden')
    }

    map.on('pointermove', pointerMoveHandler)

    map.getViewport().addEventListener('mouseout', function () {
      helpTooltipElement.classList.add('hidden')
    })

    function createMeasureTooltip () {
      // 是否开启每两个点之间距离的显示
      if (measureType === 'Polygon' && measureTooltipElement) {
        measureTooltipElement.parentNode.removeChild(measureTooltipElement)
      }
      measureTooltipElement = document.createElement('div')
      measureTooltipElement.className = 'ol-tooltip ol-tooltip-measure'
      measureTooltip = new Overlay({
        element: measureTooltipElement,
        offset: [0, -15],
        positioning: 'bottom-center'
      })
      map.addOverlay(measureTooltip)
    }

    function createHelpTooltip () {
      if (helpTooltipElement) {
        helpTooltipElement.parentNode.removeChild(helpTooltipElement)
      }
      helpTooltipElement = document.createElement('div')
      helpTooltipElement.className = 'ol-tooltip hidden'
      helpTooltip = new Overlay({
        element: helpTooltipElement,
        offset: [15, 0],
        positioning: 'center-left'
      })
      map.addOverlay(helpTooltip)
    }


  }
}
