<template>
  <div class="mkd-search">
    <div class="mkd-searchbar">
      <slot name="lefticon"></slot>
      <div class="mkd-searchbar-inner">
        <img :src="searchUrl" style="margin-right:12px;">
        <input
        ref="input"
        type="search"
        v-model="currentValue"
        :placeholder="placeholder"
        class="mkd-searchbar-core">
      </div>
      <a
        class="mkd-searchbar-cancel"
        @click="$emit('cancel')"
        v-text="cancelText">
      </a>
    </div>
  </div>
</template>

<script>
import search from '$src/assets/search.png'
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
      currentValue: this.value,
      searchUrl: search
    };
  },

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
  >.mkd-searchbar {
    position: relative;
    align-items: center;
    display: flex;
    width: 100%;
    height: vh(44);
    background-color: #fff;
    padding: 8px 8px;
    overflow: hidden;
    z-index: 1;
    >.lefticon {
      width: 20px;
      height: 20px;
      margin-right: 10px;
      >img{
        vertical-align: baseline;
      }
    }
    >.mkd-searchbar-inner {
      align-items: center;
      background-color: #F0F4F7;
      border-radius: 4px;
      display: flex;
      flex: 1;
      width: vw(309);
      height: 28px;
      padding: 4px 12px;

      input::-webkit-input-placeholder {
        color: #BBBBBB;
        font-size: 14px;
      }
      >.mkd-searchbar-core {
        appearance: none;
        border: 0;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        background-color: #F0F4F7;
        outline: 0;
        font-size: 14px;
        color: #BBBBBB;
      }
    }
    >.mkd-searchbar-cancel {
      font-size: 15px;
      color: $font-color1;
      margin-left: 16px;
      margin-right: 4px;
      width: 30px;
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
