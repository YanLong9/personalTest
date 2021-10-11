<template>
  <div id="historyCalendar" ref="calendar">
    <div class="container">
      <!-- 组件标题 -->
      <p class="history_calendar_title">运行数据回溯</p>
      <!-- element日历组件盒子 -->
      <div class="calendar_wrapper">
        <!-- 日历组件 -->
        <FunctionalCalendar
          ref="Calendar"
          :configs="functionalCalendarConfig"
        />
      </div>
      <!-- 历史车辆测试信息列表 -->
      <div class="car_info_list">
        <!-- 列表表格表头标题-->
        <ul class="car_info_title car_info_row">
          <li v-for="(item, index) in carHistoryTestListColumns" :key="index">
            {{ item.label }}
          </li>
        </ul>
        <!-- 列表表格内容 -->
        <div class="car_info_content">
          <!-- 内容滚动条组件 -->
          <GeminiScrollbar class="content_scroll_bar">
            <!-- 内容行盒子 -->
            <div
              v-for="(item, index) in carHistoryTestList"
              :key="index"
              class="car_info_row_wrapper"
            >
              <!-- 内容行 -->
              <ul
                class="car_info_row"
                :class="{ active: index === listSelectItem }"
                @click="selectThis(index)"
              >
                <li
                  v-for="(columnItem, columnIndex) in carHistoryTestListColumns"
                  :key="columnIndex"
                >
                  {{ item[columnItem.prop] }}
                </li>
              </ul>
            </div>
          </GeminiScrollbar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 常量
import {
  CAR_HISTORY_TEST_LIST_COLUMNS, // 历史数据回放模式,左侧运行数据回溯面板,历史车辆测试记录列表，表格columns常量
  TEST_DATA
} from './test.js'

// 组件
import { FunctionalCalendar } from 'vue-functional-calendar' // 日历组件

export default {
  name: 'HistoryCalendar',
  components: {
    FunctionalCalendar
  },
  data() {
    return {
      // 日历组件配置项
      functionalCalendarConfig: {
        sundayStart: true, // 日历星期标识从周日开始
        isDatePicker: true, // 日历日期可选中
        dateFormat: 'yyyy/mm/dd', // 日历日期字符串格式
        limits: { min: '2021/6/1', max: '2021/8/20' }, // 日历展示的日期范围
        disabledDates: ['2021/8/15', '2021/8/10', '2021/8/5'], // 日历禁用日期数组
        // 日历头部标题，当前月份的显示内容
        monthNames: [
          '1月',
          '2月',
          '3月',
          '4月',
          '5月',
          '6月',
          '7月',
          '8月',
          '9月',
          '10月',
          '11月',
          '12月'
        ]
      },
      carHistoryTestListColumns: CAR_HISTORY_TEST_LIST_COLUMNS, // 历史车辆测试记录列表，表格columns常量
      carHistoryTestList: TEST_DATA, // 历史车辆测试记录列表，列表数据
      listSelectItem: 0 // 历史车辆测试记录列表，选中数据项标识
    }
  },
  methods: {
    // 历史车辆测试记录列表，选中数据
    selectThis(id) {
      this.listSelectItem = id
    }
  }
}
</script>

<style lang="scss" scoped>
//列表行选中样式，上下边框动画
@keyframes stretch {
  100% {
    width: 100%;
  }
}

#historyCalendar {
  box-sizing: border-box;
  width: 420px;
  height: 625px;
  position: relative;
  //背景底框
  &:after {
    display: block;
    content: '';
    width: calc(100% + 40px);
    height: calc(100% + 40px);
    position: absolute;
    top: -20px;
    left: -20px;
    z-index: 0;
    background: transparent url('~@/assets/img/left/historyPlayBack/border.png')
      0 0/ 100% 100%;
  }
  //内容盒子
  .container {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // 组件标题
    .history_calendar_title {
      width: 100%;
      height: 60px;
      line-height: 60px;
      text-align: center;
      font-size: 20px;
      font-family: PingFang SC;
      font-weight: 500;
      font-style: italic;
      color: #64daf8;
    }
    // 日历
    .calendar_wrapper {
      width: 100%;
      height: 330px;
      // 日历组件
      /deep/.vfc-popover-container {
        width: 100%;
        height: 100%;
        //日历整体的宽高、背景色
        .vfc-main-container {
          width: 100%;
          height: 100%;
          background: transparent;
          border-radius: 0;
          box-shadow: none;
          //日历容器container
          .vfc-calendars-container {
            width: 100%;
            height: 100%;
            position: relative;
            // 日历头部切换月份箭头样式
            .vfc-separately-navigation-buttons {
              flex: 0;
              box-sizing: border-box;
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 55px;
              padding: 0 45px;
              margin: 0;
              > div {
                margin: 0;
                // 日历头部切换月份箭头初始样式的清除
                .vfc-arrow-left,
                .vfc-arrow-right {
                  width: 44px;
                  height: 50px;
                  border: none;
                  margin: 0;
                  transform: none;
                }
                //新的箭头样式--left
                .vfc-arrow-left {
                  background: url('~@/assets/img/left/historyPlayBack/monthArrowLeft.png')
                    0 0/100% 100%;
                }
                //新的箭头样式--right
                .vfc-arrow-right {
                  background: url('~@/assets/img/left/historyPlayBack/monthArrowRight.png')
                    0 0/100% 100%;
                }
              }
            }
            // 日历主体部分
            .vfc-calendars {
              width: 100%;
              height: 100%;
              //日历盒子
              .vfc-calendar {
                width: 100%;
                height: 100%;
                // 日历的主体内容
                .vfc-content {
                  width: 100%;
                  height: 100%;
                  margin: 0;
                  // 日历头部当前月份的样式，使用flex布局的order来重新排序了内容，8月2021--->2021年8月
                  .vfc-top-date {
                    height: 55px;
                    line-height: 55px;
                    margin: 0;
                    box-shadow: 0px 0px 20px #569dce inset;
                    font-size: 20px;
                    font-family: PingFang SC;
                    font-weight: 500;
                    color: #d3f3fe;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    &:after {
                      content: '年';
                      order: 2;
                    }
                    span {
                      color: #d3f3fe;
                      &:first-child {
                        order: 3;
                      }
                      &:last-child {
                        order: 1;
                      }
                    }
                  }
                  //日历的星期标识部分样式
                  .vfc-dayNames {
                    height: 40px;
                    line-height: 40px;
                    margin: 15px 0 0;
                    .vfc-day {
                      font-size: 14px;
                      font-family: PingFang SC;
                      font-weight: 500;
                      color: #68d4f3;
                    }
                  }
                  //日历日期列表的样式重写
                  .vfc-week {
                    height: 40px;
                    line-height: 40px;
                    font-size: 16px;
                    font-family: PingFang SC;
                    font-weight: 400;
                    //日历单个日期格子样式，原日历组件的last-child会有单独的样式，所以要重新声明覆盖
                    .vfc-day,
                    .vfc-day:last-child {
                      margin: 0;
                      color: #d3f3fe;
                      // 日历单个日期内容样式
                      .vfc-span-day {
                        box-sizing: border-box;
                        width: 40px;
                        line-height: 36px;
                        border: 2px solid transparent;
                        transition: all 0.3s;
                        //非当前月份的日期，上月/下月的列表补足日期的样式重写
                        &.vfc-hide {
                          color: rgba(211, 243, 254, 0.3);
                          pointer-events: none;
                        }
                        //禁用日期样式重写
                        &.vfc-disabled {
                          color: rgba(211, 243, 254, 0.3);
                        }
                        //鼠标hover样式清除
                        &.vfc-hover {
                          background: transparent;
                        }
                        //鼠标选中样式重写
                        &.vfc-marked {
                          border: 2px solid #4ec5f7;
                          box-shadow: 0px 0px 16px #85d7d9;
                        }
                        //今天，当前日期样式去除
                        &.vfc-today {
                          background-color: transparent;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    // 历史车辆测试信息列表
    .car_info_list {
      flex: 1;
      width: 100%;
      // 列表行样式
      .car_info_row {
        font-size: 14px;
        font-family: PingFang SC;
        font-weight: 500;
        cursor: pointer;
        display: flex;
        justify-content: space-evenly;
        li {
          flex: 1;
          width: 30%;
          text-align: center;
        }
        // 列表表格表头标题
        &.car_info_title {
          height: 40px;
          line-height: 40px;
          margin: 0 0 10px 0;
          background: url('~@/assets/img/left/historyPlayBack/listTitleBg.png')
            0 0/100% 100%;
          color: #68d7f3;
        }
      }
      // 列表表格内容
      .car_info_content {
        height: 160px;
        // 内容滚动条组件
        .content_scroll_bar {
          height: 100%;
          // 内容行盒子
          .car_info_row_wrapper {
            height: 40px;
            // 内容行
            .car_info_row {
              height: 35px;
              line-height: 35px;
              color: #d3f3fe;
              //列表行选中样式
              &.active {
                position: relative;
                background: linear-gradient(
                  90deg,
                  rgba(42, 59, 66, 0.7) 0%,
                  rgba(38, 141, 171, 0.4) 50%,
                  rgba(42, 59, 66, 0.7) 100%
                );
                //选中上边框
                &:before {
                  position: absolute;
                  top: 0px;
                  left: 50%;
                  display: block;
                  content: '';
                  width: 0;
                  height: 1px;
                  background: linear-gradient(
                    to right,
                    rgba(81, 181, 228, 0),
                    rgba(93, 184, 237, 0.8) 50%,
                    rgba(81, 181, 228, 0)
                  );
                  transform: translate(-50%);
                  animation: stretch 1s linear forwards;
                }
                //选中下边框
                &:after {
                  position: absolute;
                  bottom: 0;
                  left: 50%;
                  display: block;
                  content: '';
                  width: 0;
                  height: 1px;
                  background: linear-gradient(
                    to right,
                    rgba(81, 181, 228, 0),
                    rgba(93, 184, 237, 0.8) 50%,
                    rgba(81, 181, 228, 0)
                  );
                  transform: translate(-50%);
                  animation: stretch 1s linear forwards;
                }
              }
            }
          }
          //滚动条组件
          /deep/.gm-scrollbar {
            //竖向滚动条样式
            &.-vertical {
              .thumb {
                background: transparent;
              }
            }
            //横向滚动条样式
            &.-horizontal {
              .thumb {
                background: transparent;
              }
            }
          }
        }
      }
    }
  }
}
</style>
