<template>
  <mkd-popup v-model="visible" position="bottom" class="mkd-datetime">
    <mkd-picker
      :slots="dateSlots"
      @change="onChange"
      :visible-item-count="visibleItemCount"
      ref="picker"
      show-toolbar>
      <span class="mkd-datepicker-cancel"@click="visible = false;$emit('cancel')">取消</span>
      <span class="mkd-datepicker-title">{{title}}</span>
      <span class="mkd-datepicker-confim" @click="confirm">确定</span>
    </mkd-picker>
  </mkd-popup>
</template>

<style lang="scss">
@import "../../../src/style/tools.scss";
.mkd-datetime {
  width: 100%;

  .mkd-datepicker-cancel {
    padding: 0 10px;
    font-size: 16px;
    color: $font-color3;
  }
  .mkd-datepicker-title {
    font-size: 17px;
    color: $font-color2;
  }
  .mkd-datepicker-confim {
    padding: 0 10px;
    font-size: 16px;
    color: $font-colorblue;
  }
}
</style>
<script type="text/babel">
/**
 * mkd-datetime-picker
 * @module components/button
 * @desc 按钮
 * @param {string} [type=primary] - 显示类型，接受 primary,secondary, danger
 * @param {boolean} [disabled=false] - 禁用
 * @param {string} [size=normal] - 尺寸，接受 normal, small, large
 * @param {string} [native-type] - 原生 type 属性
 * @param {string} [icon] - 图标，提供 more, back，或者自定义的图标（传入不带前缀的图标类名，最后拼接成 .mkdui-xxx）
 * @param {slot} - 显示文本
 * @param {slot} [icon] 显示图标
 *
 * @example
 * <mkd-button size="large" icon="back" type="primary">按钮</mkd-button>
 */
import Picker from 'mkd-ui/packages/picker/index.js'
import Popup from 'mkd-ui/packages/popup/index.js'
import DtTool from './datetimetool'   // 日期处理工具类
if (process.env.NODE_ENV === 'component') {
  require('mkd-ui/packages/picker/style.css');
  require('mkd-ui/packages/popup/style.css');
}

export default {
  name: 'mkd-datetime-picker',
  data () {
    return {
      visible: false,
      startYear: null,
      endYear: null,
      startMonth: 1,
      endMonth: 12,
      startDay: 1,
      endDay: 31,
      currentValue: null,
      selfTriggered: false,
      dateSlots: [],
      shortMonthDates: [],
      longMonthDates: [],
      febDates: [],
      leapFebDates: []
    }
  },
  computed: {
    /**日期范围*/
    rims() {
      if (!this.currentValue) return { year: [], month: [], date: []}
      let result
      result = { // 日期 picker 年 月 日
        year: [this.startDate.getFullYear() - 1 , this.endDate.getFullYear()],
        month: [1, 12],
        date: [1, DtTool.getMonthEndDay(DtTool.getYear(this.currentValue), DtTool.getMonth(this.currentValue))],
      }
      this.rimDetect(result, 'start')
      this.rimDetect(result, 'end')
      return result
    },
    /** picker类型*/
    typeStr () {
      return this.type ? this.type : 'YMD'
    },

    title () {
      return this.type.indexOf('D') > -1 ? '选择日期'
      : this.type.indexOf('M') > -1 ? '选择月份'
      : this.type.indexOf('Y') > -1 ? '选择年份' : '选择日期'
    }
  },
  props: {
    type: {
      type: String,
      default: 'YMD'
    },
    startDate: {
      type: Date,
      default() {
        return new Date(new Date().getFullYear() - 10, 0, 1)
      }
    },
    endDate: {
      type: Date,
      default() {
        return new Date(new Date().getFullYear() + 10, 11, 31)
      }
    },
    yearFormat: {
      type: String,
      default: '{value}年'
    },
    monthFormat: {
      type: String,
      default: '{value}月'
    },
    dateFormat: {
      type: String,
      default: '{value}日'
    },
    visibleItemCount: {
      type: Number,
      default: 5
    },
    value: null
  },

  components: {
    'mkd-picker': Picker,
    'mkd-popup': Popup
  },

  methods: {
    open() {
      this.visible = true
    },

    close() {
      this.visible = false
    },

    getValue(values) {
      let value;
      let year = DtTool.getTrueValue(values[0])  /** 去掉格式化内容，获取真实数据*/
      let month = values[1] ? DtTool.getTrueValue(values[1]) : ''
      let date = values[2] ? DtTool.getTrueValue(values[2]) : ''
      let maxDate = values[2] ? DtTool.getMonthEndDay(year, month) : ''
      if (date && date > maxDate) {
        this.selfTriggered = true
        date = 1
      }
      value = this.type.indexOf('D') > -1 ? new Date(year, month - 1, date)
              : this.type.indexOf('M') > -1 ? new Date(year, month - 1)
              : this.type.indexOf('Y') > -1 ? new Date(year) : ''
      return value
    },

    /** picker chang事件*/
    onChange(picker) {
      let values = picker.$children.filter(child => child.currentValue !== undefined).map(child => child.currentValue);
      if (this.selfTriggered) {
        this.selfTriggered = false
        return;
      }
      this.currentValue = this.getValue(values)
      this.handleValueChange()
    },

    /** 填入具体数据*/
    fillValues(type, start, end) {
      let values = [];
      for (let i = start; i <= end; i++) {
        if (i < 10) {
          values.push(this[`${DtTool.FORMAT_MAP[type]}Format`].replace('{value}', ('0' + i).slice(-2)));
        } else {
          values.push(this[`${DtTool.FORMAT_MAP[type]}Format`].replace('{value}', i))
        }
      }
      return values
    },

    /** 构造日期数据填入数据 */
    pushSlots(slots, type, start, end) {
      slots.push({
        flex: 1,
        values: this.fillValues(type, start, end)
      })
    },

    generateSlots() {
      let dateSlots = []
      const INTERVAL_MAP = {
        Y: this.rims.year,
        M: this.rims.month,
        D: this.rims.date
      };
      let typesArr = this.typeStr.split('')
      typesArr.forEach(type => {
        if (INTERVAL_MAP[type]) {
          this.pushSlots.apply(null, [dateSlots, type].concat(INTERVAL_MAP[type]))
        }
      });
      this.dateSlots = dateSlots
      this.handleExceededValue()
    },

    /** 设置默认数据 */
    handleExceededValue() {
      let values = []
      if (this.type.indexOf('Y') > -1) { values.push(this.yearFormat.replace('{value}', DtTool.getYear(this.currentValue)))}
      if (this.type.indexOf('M') > -1) { values.push(this.monthFormat.replace('{value}', ('0' + DtTool.getMonth(this.currentValue)).slice(-2)))}
      if (this.type.indexOf('D') > -1) { values.push(this.dateFormat.replace('{value}', ('0' + DtTool.getDate(this.currentValue)).slice(-2)))}
      this.dateSlots
        .filter(child => child.values !== undefined)
        .map(slot => slot.values).forEach((slotValues, index) => {  // 给定的默认值不在日期内，修改默认值为首个日期
          if (slotValues.indexOf(values[index]) === -1) {
            values[index] = slotValues[0]
          }
        })
      this.$nextTick(() => {
        this.setSlotsByValues(values)
      })
    },
    /**设置picker值*/
    setSlotsByValues(values) {
      const setSlotValue = this.$refs.picker.setSlotValue
      if (this.type.indexOf('Y') > -1) {setSlotValue(0, values[0])}
      if (this.type.indexOf('M') > -1) {setSlotValue(1, values[1])}
      if (this.type.indexOf('D') > -1) {setSlotValue(2, values[2])}
      [].forEach.call(this.$refs.picker.$children, child => child.doOnValueChange());
    },

    rimDetect(result, rim) {
      let position = rim === 'start' ? 0 : 1    // 开始位置 or 结束位置
      let rimDate = rim === 'start' ? this.startDate : this.endDate  // 开始日期 or 结束日期
      if (DtTool.getYear(this.currentValue) === rimDate.getFullYear()) {
        result.month[position] = rimDate.getMonth() + 1
        if (DtTool.getMonth(this.currentValue) === rimDate.getMonth() + 1) {
          result.date[position] = rimDate.getDate()
        }
      }
    },
    /** 确认事件*/
    confirm() {
      this.visible = false;
      this.$emit('confirm', this.currentValue)
    },

    handleValueChange() {
      this.$emit('input', this.currentValue)
    }
  },

  watch: {
    value (val) {
      this.currentValue = val
    },

    rims() {
      this.generateSlots()
    }
  },

  mounted() {
    this.currentValue = this.value
    if (!this.value) {
      this.currentValue =  new Date()
    }
    this.generateSlots()
  }
}
</script>
