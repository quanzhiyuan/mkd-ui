<template>
  <span
    class="mkd-badge"
    :style="{ backgroundColor: color }"
    :class="['is-' + type, 'is-size-' + size]">
    <slot></slot>
  </span>
</template>

<script>
/**
 * mkd-badge
 * @module components/badge
 * @desc 徽章
 * @param {string} [type=primary] 组件样式，可选 primary, error, success, warning
 * @param {string} [color] - 传入颜色值
 * @param {string} [size=normal] - 尺寸，接受 normal, small, large
 *
 * @example
 * <mkd-badge color="error">错误</mkd-badge>
 * <mkd-badge color="#333">30</mkd-badge>
 */
export default {
  name: 'mkd-badge',

  props: {
    color: String,
    type: {
      type: String,
      default: 'primary'
    },
    size: {
      type: String,
      default: 'normal'
    }
  }
};
</script>
<style lang="scss">
  @import "../../../src/style/tools.scss";
 .mkd-badge {
   color: $color-white;
   text-align: center;
   display: inline-block;
   &.is-primary {
     background-color: #81B8F5;
   }
   &.is-important {
     background-color: #F35959;
   }
   &.is-size-small {
     width: 9px;
     height: 9px;
     border-radius: 9px;
   }
   &.is-size-normal {
     min-width: 20px;
     height: 20px;
     line-height: 20px;
     border-radius: 12px;
     font-size: 12px;
     padding: 0 3px;
   }
   &.is-size-large {
     min-width: 20px;
     height: 20px;
     line-height: 20px;
     border-radius: 12px;
     font-size: 12px;
     padding: 0 7px;
   }
 }
</style>
