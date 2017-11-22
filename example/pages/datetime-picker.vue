<template>
  <div class="page-datetime">
    <h1 class="page-title">Datetime Picker</h1>
    <mkd-cell title="选择日期" :value="dateValue" @click.native="open('picker1')" is-edit is-link></mkd-cell>
    <div class="marginbtm"></div>
    <mkd-cell title="选择月份" :value="dateValue2" @click.native="open('picker2')" is-edit is-link></mkd-cell>
    <div class="marginbtm"></div>
    <mkd-cell title="选择年份" :value="dateValue3" @click.native="open('picker3')" is-edit is-link></mkd-cell>
    <div class="marginbtm"></div>
    <mkd-cell title="选择日期（默认2017/11/11）" :value="dateValue4" @click.native="open('picker4')" is-edit is-link></mkd-cell>
    <div class="marginbtm"></div>
    <mkd-cell title="选择日期（设置开始和结束日期）" :value="dateValue5" @click.native="open('picker5')" is-edit is-link></mkd-cell>
    <div class="marginbtm"></div>
    <mkd-datetime-picker
      ref="picker1"
      type="YMD"
      v-model="value"
      @confirm="handleChange1">
    </mkd-datetime-picker>
    <mkd-datetime-picker
      ref="picker2"
      type="YM"
      v-model="value"
      @confirm="handleChange2">
    </mkd-datetime-picker>
    <mkd-datetime-picker
      ref="picker3"
      type="Y"
      v-model="value"
      @confirm="handleChange3">
    </mkd-datetime-picker>
    <mkd-datetime-picker
      ref="picker4"
      type="YMD"
      v-model="value4"
      @confirm="handleChange4">
    </mkd-datetime-picker>
    <mkd-datetime-picker
      ref="picker5"
      type="YMD"
      v-model="value5"
      :startDate = "startTime"
      :endDate = "endTime"
      @confirm="handleChange5">
    </mkd-datetime-picker>
  </div>
</template>

<style lang="scss">
.page-datetime{
  >.page-datetime-wrapper {
    padding: 0 20px;
    position: absolute;
    top:50%;
    width: 100%;
    transform: translateY(-50%);
    button:not(:last-child) {
      margin-bottom: 20px;
    }
  }
}
</style>

<script type="text/babel">
  import { Toast } from '$src/index';

  export default {
    data() {
      return {
        value: null,
        value2: null,
        value3: null,
        value4: '2017/11/11',
        value5: null,
        dateValue: '请选择日期',
        dateValue2: '请选择日期',
        dateValue3: '请选择日期',
        dateValue4: '请选择日期',
        dateValue5: '请选择日期',
        startTime : new Date(1991,12,12),
        endTime : new Date()
      };
    },
    methods: {
      open(picker) {
        this.$refs[picker].open();
      },
      handleChange1(value) {
       this.dateValue = value.getFullYear() + '年' + (value.getMonth() + 1) + '月' + value.getDate() + '日'
      },
      handleChange2(value) {
       this.dateValue2 = value.getFullYear() + '年' + (value.getMonth() + 1) + '月'
      },
      handleChange3(value) {
       this.dateValue3 = value.getFullYear() + '年'
      },
      handleChange4(value) {
       this.dateValue4 = value.getFullYear() + '年' + (value.getMonth() + 1) + '月' + value.getDate() + '日'
     },
     handleChange5(value) {
      this.dateValue5 = value.getFullYear() + '年' + (value.getMonth() + 1) + '月' + value.getDate() + '日'
     }
    }
  };
</script>
