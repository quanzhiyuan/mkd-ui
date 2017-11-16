<template>
  <label class="mkd-switch" :class="{'is-disabled': disabled}">
    <input class="mkd-switch-input" :disabled="disabled" @change="$emit('change', !currentValue)" type="checkbox" v-model="currentValue">
    <span  class="mkd-switch-core"  :class="{ 'mkd-switch-core-checked': value}"></span>
  </label>
</template>

<script>
/**
 * mkd-switch
 * @module components/switch
 * @desc 切换按钮
 * @param {boolean} [value] - 绑定值，支持双向绑定
 * @example
 * <mkd-switch v-model="value"></mt-switch>
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
    &:after{
      content: " ";
      position: absolute;
      top:50%;
      right:0;
      bottom:0;
      left:0;
      transform: translate(0,-50%);
      transition:transform .3s;
      border-radius: 50%;
    }
    &:after {
      width: 28px;
      height: 28px;
      background-color: $color-white;
      box-shadow: 0 5px 10px 0 rgba(0,0,0,0.1), 0 2px 2px 0 rgba(0,0,0,0.3);
    }

  }
  >.mkd-switch-input {
    display: none;
  }
}
.mkd-switch-core-checked {
  border-color: $color-green !important;
  background-color: $color-green !important;
  &::before {
    transform: scale(0);
  }
  &::after {
    transform: translate(20px,-50%) !important;
  }
}
</style>
