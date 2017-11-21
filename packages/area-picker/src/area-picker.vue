<template>
  <mkd-popup v-model="visible" position="bottom" class="mkd-area-picker">
    <mkd-picker
      :slots="areaSlots"
      @change="onChange"
      :visible-item-count="5"
      ref="picker"
      show-toolbar>
      <span class="mkd-areapicker-cancel"@click="visible = false$emit('cancel')">取消</span>
      <span class="mkd-areapicker-title">{{title}}</span>
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
    color: $font-color3;
  }
  .mkd-areapicker-title {
    font-size: 17px;
    color: $font-color2;
  }
  .mkd-areapicker-confim {
    padding: 0 10px;
    font-size: 16px;
    color: $font-colorblue;
  }
}
</style>

<script type="text/babel">
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
      value: null
    },

    data() {
      return {
        visible: false,
        currentValue: null,
        areaSlots: [],
        currentValue: null,
        title: '选择地区'
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
        // let values = picker.$children.filter(child => child.currentValue !== undefined).map(child => child.currentValue)
        // if (this.selfTriggered) {
        //   this.selfTriggered = false
        //   return
        // }
        // this.currentValue = this.getValue(values)
        // this.handleValueChange()
      },
      generateSlots() {
        this.areaSlots = AreaTool.getAddressData()
        this.handleExceededValue(this.areaSlots)
      },

      handleExceededValue(values) {
        this.$nextTick(() => {
          this.setSlotsByValues(values)
        })
      },
      /**设置picker值*/
      setSlotsByValues(values) {
        let setSlotValue = this.$refs.picker.setSlotValue;
        setSlotValue(0, values[0]);
        setSlotValue(1, values[1]);
        setSlotValue(2, values[2]);
        [].forEach.call(this.$refs.picker.$children, child => child.doOnValueChange());
      },
      confirm() {
        this.visible = false
        this.$emit('confirm', this.currentValue)
      },
      handleValueChange() {
        this.$emit('input', this.currentValue)
      }
    },

    computed: {
      typeStr() {
        if (this.type === 'time') {
          return 'Hm'
        } else if (this.type === 'date') {
          return 'YMD'
        } else {
          return 'YMDHm'
        }
      }
    },

    watch: {
      value(val) {
        this.currentValue = val
      }
    },
    mounted() {
      this.generateSlots()
    }
  }
</script>
