<template>
  <div class="mkd-search">
    <div class="mkd-searchbar">
      <div class="mkd-searchbar-inner">
        <i class="mkdui mkdui-search"></i>
        <input
        ref="input"
        @click="visible = true"
        type="search"
        v-model="currentValue"
        :placeholder="placeholder"
        class="mkd-searchbar-core">
      </div>
      <a
        class="mkd-searchbar-cancel"
        @click="visible = false, currentValue = ''"
        v-show="visible"
        v-text="cancelText">
      </a>
    </div>
    <div class="mkd-search-list" v-show="show || currentValue">
      <div class="mkd-search-list-warp">
        <slot>
          <x-cell v-for="(item, index) in result" :key="index" :title="item"></x-cell>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import XCell from 'mkd-ui/packages/cell/index.js';
if (process.env.NODE_ENV === 'component') {
  require('mkd-ui/packages/cell/style.css');
}

/**
 * mkd-search
 * @module components/search
 * @desc 搜索框
 * @param {string} value - 绑定值
 * @param {string} [cancel-text=取消] - 取消按钮文字
 * @param {string} [placeholder=取消] - 搜索框占位内容
 * @param {boolean} [autofocus=false] - 自动 focus
 * @param {boolean} [show=false] - 始终显示列表
 * @param {string[]} [result] - 结果列表
 * @param {slot} 结果列表
 *
 * @example
 * <mkd-search :value.sync="value" :result.sync="result"></mkd-search>
 * <mkd-search :value.sync="value">
 *   <mkd-cell v-for="item in result" :title="item"></mkd-cell>
 * </mkd-search>
 */
export default {
  name: 'mkd-search',

  data() {
    return {
      visible: false,
      currentValue: this.value
    };
  },

  components: { XCell },

  watch: {
    currentValue(val) {
      this.$emit('input', val);
    },

    value(val) {
      this.currentValue = val;
    }
  },

  props: {
    value: String,
    autofocus: Boolean,
    show: Boolean,
    cancelText: {
      default: '取消'
    },
    placeholder: {
      default: '搜索'
    },
    result: Array
  },

  mounted() {
    this.autofocus && this.$refs.input.focus();
  }
};
</script>

<style lang="scss">
@import "../../../src/style/tools.scss";
.mkd-search {
  height: 100%;
  height: 100vh;
  overflow: hidden;
  >.mkd-searchbar {
    position: relative;
    align-items: center;
    background-color: $color-grey;
    box-sizing: border-box;
    display: flex;
    padding: 8px 10px;
    z-index: 1;
    >.mkd-searchbar-inner {
      align-items: center;
      background-color: $color-white;
      border-radius: 2px;
      display: flex;
      flex: 1;
      height: 28px;
      padding: 4px 6px;

      .mkdui-search {
        font-size: 12px;
        color: $color-grey;
      }
      >.mkd-searchbar-core {
        appearance: none;
        border: 0;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        outline: 0;
      }
    }
    >.mkd-searchbar-cancel {
      color: $color-blue;
      margin-left: 10px;
      text-decoration: none;
    }
  }
  >.mkd-search-list {
    overflow: auto;
    padding-top: 44px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
</style>
