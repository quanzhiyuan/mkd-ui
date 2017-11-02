<template>
  <header
    class="mkd-header"
    :class="{ 'is-fixed': fixed }">
    <div class="mkd-header-button is-left">
      <slot name="left"></slot>
    </div>
    <h1 class="mkd-header-title" v-text="title"></h1>
    <div class="mkd-header-button is-right">
      <slot name="right"></slot>
    </div>
  </header>
</template>

<script>
/**
 * mt-header
 * @module components/header
 * @desc 顶部导航
 * @param {boolean} [fixed=false] - 固定顶部
 * @param {string} [title] - 标题
 * @param {slot} [left] - 显示在左侧区域
 * @param {slot} [right] - 显示在右侧区域
 *
 * @example
 * <mt-header title="我是标题" fixed>
 *   <mt-button slot="left" icon="back" @click="handleBack">返回</mt-button>
 *   <mt-button slot="right" icon="more"></mt-button>
 * </mt-header>
 */
export default {
  name: 'mkd-header',

  props: {
    fixed: Boolean,
    title: String
  }
};
</script>

<style lang="scss">
  @import "../../../src/style/var.scss";
.mkd-header {
  align-items: center;
  background-color: $color-blue;
  box-sizing: border-box;
  color: $color-white;
  display: flex;
  font-size: 14px;
  height: $header-height;
  line-height: 1;
  padding: 0 10px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  .mkd-button {
    background-color: transparent;
    border: 0;
    box-shadow: none;
    color: inherit;
    display: inline-block;
    padding: 0;
    font-size: inherit;

    &::after {
      content: none;
    }
  }
  >.mkd-header-button {
    flex: .5;

    > a {
      color: inherit;
    }
    .is-left {
      text-align: left;
    }
    .is-right {
      text-align: right;
    }
  }
  >.mkd-header-title {
    font-size: inherit;
    font-weight: normal;
    flex: 1;
    .is-fixed {
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      z-index: $z-index-normal;
    }
  }
}
</style>
