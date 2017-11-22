<template>
  <mkd-popup v-model="visible" position="bottom" class="mkd-area-picker">
    <mkd-picker
      :slots="areaSlots"
      @change="onChange"
      :visible-item-count="visibleItemCount"
      ref="areapicker"
      show-toolbar>
      <span class="mkd-areapicker-cancel" @click="visible = false$emit('cancel')">取消</span>
      <span class="mkd-areapicker-title" >{{title}}</span>
      <span class="mkd-areapicker-confim" @click="confirm">确定</span>
    </mkd-picker>
  </mkd-popup>
</template>

<style lang="scss">
@import "../../../src/style/tools.scss";
.mkd-area-picker {
  width: 100%;
  .mkd-areapicker-cancel {
    padding: 0 10px;
    font-size: 16px;
    color: $font-color2;
  }
  .mkd-areapicker-title {
    font-size: 17px;
    color: $font-color1;
  }
  .mkd-areapicker-confim {
    padding: 0 10px;
    font-size: 16px;
    color: $font-colorblue;
  }
}
</style>

<script type="text/babel">
/**
 * mkd-area-picker
 * @module components/area-picker
 * @desc 时间选择器
 * @param {String} [type='b'] - 只显示省市，默认显示省市区
 * @param {string} [@confirm] - 选择确定按钮回调事件，回调格式['北京'，'北京市','东城区']
 * @example
 * <mkd-area-picker
 *   ref="pickerarea1"
 *   v-model="value"
 *   type="b"
 *   @confirm="onAddressChange1">
 * </mkd-area-picker>
 *
 */
import picker from 'mkd-ui/packages/picker/index.js'
import popup from 'mkd-ui/packages/popup/index.js'
if (process.env.NODE_ENV === 'component') {
  require('mkd-ui/packages/picker/style.css')
  require('mkd-ui/packages/popup/style.css')
}
import AreaTool from './areatool'

export default {
  name: 'mkd-area-picker',
  props: {
    value: null,
    type: { // type = b 只显示省市 ，默认显示省市区
      type :String,
      default : 'a'
    }
  },
  data() {
    return {
      visible: false,
      areaSlots: [],
      selfTriggered: false,  // 触发重新排列
      currentValue: null,
      title: '选择地区',
      visibleItemCount: 5 // 显示行数
    }
  },
  components: {
    'mkd-picker': picker,
    'mkd-popup': popup
  },
  methods: {
    open() {
      this.visible = true
    },
    close() {
      this.visible = false
    },
    onChange(picker) {
      let values = picker.$children.filter(child => child.currentValue !== undefined).map(child => child.currentValue);
      if (this.selfTriggered) {
        this.selfTriggered = false
        return
      }
      this.getCurrentValue(picker, values)
      this.handleValueChange()
    },
    /**设置当前值 and 设置省市区关联*/
    getCurrentValue (picker, values) {
      if (this.currentValue[0] !== values[0]) {
        let newData = AreaTool.getAddressData(values[0])
        picker.setSlotValues(1, newData[1].values)
        this.currentValue[0] = values[0]
        this.currentValue[1] = newData[1].values[0]
        if (this.type === 'a')  // 显示省市区的时候
        {
          picker.setSlotValues(2, newData[2].values)
          this.currentValue[2] = newData[2].values[0]
        }
        this.selfTriggered = true
        return
      }
      if (this.currentValue[1] !== values[1] && this.type === 'a') {
        let newData = AreaTool.getAddressData(values[0])
        picker.setSlotValues(2, AreaTool.getArea(values[1]))
        this.selfTriggered = true
        this.currentValue[0] = values[0]
        this.currentValue[1] = values[1]
        this.currentValue[2] = newData[2].values[0]
        return
      }
      this.currentValue = values
    },
    generateSlots() {
      this.areaSlots = this.type === 'a' ? AreaTool.getAddressData() : AreaTool.getAddressData().slice(0,2)
      this.handleExceededValue(this.areaSlots)
    },
    /**构造picker默认值*/
    handleExceededValue() {
      let values = []
      this.areaSlots.forEach(function (value, key) {
        values[key] = value.values[0]
      })
      this.$nextTick(() => {
        this.setSlotsByValues(values)
      })
    },
    /**设置默认picker值*/
    setSlotsByValues(values) {
      let setSlotValue = this.$refs.areapicker.setSlotValue;
      values.forEach(function (value, key) {
          setSlotValue(key,value)
      })
      this.currentValue = values;
      [].forEach.call(this.$refs.areapicker.$children, child => child.doOnValueChange());
    },
    confirm() {
      this.visible = false
      this.$emit('confirm', this.currentValue)
    },
    handleValueChange() {
      this.$emit('input', this.currentValue)
    }
  },
  mounted() {
    this.generateSlots()
  }
}
</script>
