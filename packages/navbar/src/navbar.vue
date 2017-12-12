<template>
  <div class="mkd-navbar" :class="{ 'is-fixed': fixed }">
    <slot></slot>
  </div>
</template>

<script>
/**
 * mkd-navbar
 * @module components/navbar
 * @desc 顶部 tab，依赖 tab-item
 *
 * @param {boolean} [fixed=false] - 固定底部
 * @param {*} selected - 返回 item component 传入的 value
 *
 * @example
 * <mkd-navbar :selected.sync="selected">
 *   <mkd-tab-item value="订单">
 *     <span slot="label">订单</span>
 *   </mkd-tab-item>
 * </mkd-navbar>
 *
 * <mkd-navbar :selected.sync="selected" fixed>
 *   <mkd-tab-item :value="['传入数组', '也是可以的']">
 *     <span slot="label">订单</span>
 *   </mkd-tab-item>
 * </mkd-navbar>
 *
 */
export default {
  name: 'mkd-navbar',

  props: {
    fixed: Boolean,
    value: {}
  }
}
</script>

<style lang="scss">
@import "../../../src/style/tools.scss";
.mkd-navbar {
  background-color: $color-white;
  display: flex;
  text-align: center;
  opacity: 0.96;
  &.is-fixed {
    position: fixed;
    top: 0 ;
    right: 0;
    left: 0;
    z-index: $z-index-normal;
  }
  .mkd-tab-item {
    height: 44px;
    line-height: 44px;
    font-size: 15px;
    padding: 0;
    &:last-child {
      border-right: 0;
    }
    &.is-selected {
      > .mkd-tab-item-label {
        border-bottom: 2px solid $color-blue;
        color: $color-blue;
      }
    }
    > .mkd-tab-item-label {
      height: 44px;
      line-height: 44px;
      margin-top: 0px;
      &.is-selected {
        border-bottom: 2px solid $color-blue;
        color: $color-blue;
      }
    }
  }
}
</style>
