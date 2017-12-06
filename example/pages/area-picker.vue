<template>
  <div class="page-picker">
    <h1 class="page-title">地区 Picker</h1>
    <mkd-cell title="选择地址" :value="dataValue" @click.native="open('pickerarea')"  is-edit is-link></mkd-cell>
    <div class="marginbtm"></div>
    <mkd-cell title="选择地址(省市)" :value="dataValue1" @click.native="open('pickerarea1')"  is-edit is-link></mkd-cell>
    <mkd-area-picker
      ref="pickerarea"
      v-model="value"
      @confirm="onAddressChange">
    </mkd-area-picker>
    <mkd-area-picker
      ref="pickerarea1"
      v-model="value"
      type="b"
      @confirm="onAddressChange1">
    </mkd-area-picker>
  </div>
</template>

<script type="text/babel">
  export default {
    methods: {
      open(picker) {
        this.$refs[picker].open()
      },
      onAddressChange(value) {
        this.dataValue = value[0] + value[1] + value[2]
      },
      onAddressChange1(value) {
        this.dataValue1 = value[0] + value[1]
      }
    },

    data() {
      return {
        value: '',
        dataValue: '请选择地址',
        dataValue1: '请选择地址'
      }
    }
  }
</script>

<style lang="scss">
.page-picker {
  padding: 0 10px 20px;
  >.page-picker-wrapper {
    background-color: #fff;
    text-align: center;
  }
  >.page-picker-desc {
    margin: 10px 0 50px;
  }
}
</style>
