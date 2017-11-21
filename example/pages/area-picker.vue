<template>
  <div class="page-picker">
    <h1 class="page-title">地区 Picker</h1>
    <mkd-cell title="选择地址" value="请选择地址1" @click.native="open('pickerarea')"  is-edit is-link></mkd-cell>
    <mkd-area-picker
      ref="pickerarea"
      v-model="value"
      @confirm="onAddressChange">
    </mkd-area-picker>
  </div>
</template>

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
<script type="text/babel">
  export default {
    methods: {
      open(picker) {
        this.$refs[picker].open()
      },
      onAddressChange(values) {
        console.log(values)
      },

      openAdress () {

      }
    },

    data() {
      return {
        value: ''
      };
    },

    mounted() {
    }
  };
</script>
