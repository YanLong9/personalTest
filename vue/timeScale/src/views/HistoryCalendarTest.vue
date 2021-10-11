<template>
  <div id="historyCalendarTest">
    <div class="historyCalendarTest">
      <HistoryCalendar class="historyCalendar" />
    </div>
  </div>
</template>
<script>
// 组件
import HistoryCalendar from '@/components/HistoryCalendar'

export default {
  name: 'HistoryCalendarTest',
  components: {
    HistoryCalendar
  },
  data() {
    return {}
  },
  created() {},
  methods: {}
}
</script>

<style scoped lang="scss">
#historyCalendarTest {
  width: 100%;
  height: 100%;
  background: #13223b;
  position: relative;
  overflow: hidden;
  .historyCalendarTest {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
