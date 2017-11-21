<template>
  <label class="mkd-switch" :class="{'is-disabled': disabled}" :style="{ width:isSmall ? '44px' : 'auto', height:isSmall ? '22px' : 'auto'}">
    <input class="mkd-switch-input" :disabled="disabled" @change="$emit('change', !currentValue)" type="checkbox" v-model="currentValue">
    <span v-if="!isSmall"  class="mkd-switch-core"  :class="{ 'mkd-switch-core-checked': value}"></span>
    <span v-else-if="isSmall" class="mkd-switch-core-small"  :class="{ 'mkd-switch-core-small-checked': value}"></span>
  </label>
</template>

<script>
/**
 * mkd-switch
 * @module components/switch
 * @desc 切换按钮
 * @param {boolean} [value] - 绑定值，支持双向绑定
 * @param {string} [type] - switch 类型
 * @example
 * <mkd-switch v-model="value"></mkd-switch> 默认类型
 * <mkd-switch v-model="value" type="small"></mkd-switch> small 类型的switch
 */
export default {
  name: 'mkd-switch',
  data () {
    return {
      inputVaule: false
    }
  },
  props: {
    value: Boolean,
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      validator(value) {
        return [
          'small'
        ].indexOf(value) > -1;
      }
    }
  },
  computed: {
    currentValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      }
    },
    isSmall: function () {
      return this.type === 'small'
    }
  }
};
</script>

<style lang="scss">
@import "../../../src/style/tools.scss";
.mkd-switch {
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 51px;
  height: 31px;
  > * {
    pointer-events: none;
  }
  >.mkd-switch-core {
    display: inline-block;
    position: relative;
    width: 52px;
    height: 32px;
    border: 1px solid #E5E5E5;
    border-radius: 16px;
    background: $color-white;
    &:after {
      content: " ";
      position: absolute;
      top:50%;
      right:0;
      bottom:0;
      left:0;
      transform: translate(0,-50%);
      transition: transform .3s;
      border-radius: 50%;
      width: 28px;
      height: 28px;
      background-color: $color-white;
      box-shadow: 0 5px 10px 0 rgba(0,0,0,0.1), 0 2px 2px 0 rgba(0,0,0,0.3);
    }
  }
  >.mkd-switch-core-small {
    display: inline-block;
    position: relative;
    width: 44px;
    height: 16px;
    border-radius: 18px;
    background: rgba(34,31,31,0.26);
    &:after {
      content: " ";
      position: absolute;
      top:50%;
      right:0;
      bottom:0;
      left:0;
      transform: translate(0,-50%);
      transition: transform .3s;
      border-radius: 50%;
      width: 22px;
      height: 22px;
      background-color: $color-white;
      box-shadow: 0 0 1px 0 rgba(0,0,0,0.12), 0 1px 1px 0 rgba(0,0,0,0.24);
    }
  }
  >.mkd-switch-input {
    display: none;
  }
}
.mkd-switch-core-checked {
  border-color: $color-green !important;
  background-color: $color-green !important;
  &:before {
    transform: scale(0);
  }
  &:after {
    transform: translate(20px,-50%) !important;
  }
}
.mkd-switch-core-small-checked {
  background-color: rgba(85,142,255,0.26) !important;
  &:before {
    transform: scale(0);
  }
  &:after {
    transform: translate(22px,-50%) !important;
    background-color: #558EFE !important;
  }
}
</style>
