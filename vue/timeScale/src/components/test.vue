<template>
  <!-- 今日值班 -->
  <BasicPanel id="todayDuty" title="今日值班">
    <div class="container">
      <!-- 列表表格表头标题 -->
      <ul v-if="todayDutyColumns.length" class="duty_row duty_title">
        <li v-for="(item, index) in todayDutyColumns" :key="index">
          {{ item.label }}
        </li>
      </ul>
      <!-- 列表表格内容 -->
      <div v-if="todayDutyInfo.length" class="duty_content">
        <ul v-for="item in todayDutyInfo" :key="item.id" class="duty_row">
          <li
            v-for="(columnItem, columnIndex) in todayDutyColumns"
            :key="columnIndex"
          >
            {{ item[columnItem.prop] }}
          </li>
        </ul>
      </div>
    </div>
  </BasicPanel>
</template>
<script>
// api
import {
  getTodayDuty // 获取今日值班接口
} from '@/api/leftPanel'

// 组件
import BasicPanel from '@/components/BasicPanel' // 边框组件

// 常量
import {
  TODAY_DUTY_COLUMNS // 左侧面板今日值班模块表格columns数据
} from '@/dic'

export default {
  name: 'TodayDuty',
  components: {
    BasicPanel // 边框组件
  },
  data() {
    return {
      todayDutyColumns: TODAY_DUTY_COLUMNS, // 今日值班标题
      todayDutyInfo: [] //  今日值班数据接口返回数据
    }
  },
  watch: {
    // 更新数据
    '$store.state.ugv.todayDuty': {
      deep: true,
      handler: function(newVal, oldVal) {
        this.todayDutyInfo = newVal
      }
    }
  },
  created() {
    // 获取数据
    this.getData()
  },
  methods: {
    // 获取数据
    getData() {
      getTodayDuty().then(res => {
        this.todayDutyInfo = res.data.todayDuty
      })
    }
  }
}
</script>
<style lang="scss" scoped>
#todayDuty {
  width: 100%;
  height: 160px;
  margin: 18px 0 0 0;
  .container {
    padding: 35px 40px 0;
    color: #e9f2ff;
    // 值班的信息
    .duty_row {
      display: flex;
      justify-content: space-evenly;
      li {
        flex: 1;
        width: 30%;
        text-align: center;
      }
      // 值班标题
      &.duty_title {
        margin: 15px 0 8px 0;
        font-size: 14px;
        font-weight: 500;
        color: #3bbee4;
      }
    }
    // 值班数据信息
    .duty_content {
      .duty_row {
        height: 32px;
        line-height: 32px;
        margin: 5px 0 0 0;
        background: linear-gradient(
          to right,
          rgba(86, 187, 244, 0) 0%,
          rgba(86, 187, 244, 0.15) 40%,
          rgba(86, 187, 244, 0.15) 60%,
          rgba(86, 187, 244, 0) 100%
        );
        font-size: 15px;
        color: #e9f2ff;
      }
    }
  }
}
</style>
