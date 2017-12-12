<template>
  <div
    v-show="$parent.swiping || id === $parent.currentActive"
    class="mkd-tab-container-item">
    <slot></slot>
  </div>
</template>

<script>
/**
 * mkd-tab-container-item
 * @desc 搭配 tab-container 使用
 * @module components/tab-container-item
 *
 * @param {number|string} [id] - 该项的 id
 *
 * @example
 * <mkd-tab-container v-model="selected">
 *   <mkd-tab-container-item id="1"> 内容A </mkd-tab-container-item>
 *   <mkd-tab-container-item id="2"> 内容B </mkd-tab-container-item>
 *   <mkd-tab-container-item id="3"> 内容C </mkd-tab-container-item>
 * </mkd-tab-container>
 */
export default {
  name: 'mkd-tab-container-item',

  props: ['id']
}
</script>

<style>
.mkd-tab-container-item {
  flex-shrink: 0;
  width: 100%;
}
</style>
