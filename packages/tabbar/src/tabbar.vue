<template>
  <div class="mkd-tabbar" :class="{
      'is-fixed': fixed
    }">
    <slot></slot>
  </div>
</template>

<script>
/**
 * mkd-tabbar
 * @module components/tabbar
 * @desc 底部 tab，依赖 tab-item
 * @param {boolean} [fixed=false] - 固定底部
 * @param {*} value - 返回 item component 传入的 id
 *
 * @example
 * <mkd-tabbar v-model="selected">
 *   <mkd-tab-item id="订单">
 *     <img slot="icon" src="http://placehold.it/100x100">
 *     <span slot="label">订单</span>
 *   </mkd-tab-item>
 * </mkd-tabbar>
 *
 * <mkd-tabbar v-model="selected" fixed>
 *   <mkd-tab-item :id="['传入数组', '也是可以的']">
 *     <img slot="icon" src="http://placehold.it/100x100">
 *     <span slot="label">订单</span>
 *   </mkd-tab-item>
 * </mkd-tabbar>
 */
export default {
  name: 'mkd-tabbar',

  props: {
    fixed: Boolean,
    value: {}
  }
};
</script>

<style lang="scss">
@import "../../../src/style/tools.scss";
.mkd-tabbar {
  background-image:linear-gradient(180deg, $color-grey, $color-grey 50%, transparent 50%);
  background-size: 100% 1px;
  background-repeat: no-repeat;
  background-position: top left;
  position: relative;
  background-color: $tabbar-background-color;
  display: flex;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  text-align: center;
  &.is-fixed {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: $z-index-normal;
  }
  > .mkd-tab-item.is-selected {
    /* background-color: $tabbar-tab-item-selected-background-color; */
    color: $tabbar-tab-item-selected-color;
  }
}
</style>
