<template>
  <div class="mkd-radiolist" @change="$emit('change', currentValue)">
    <label class="mkd-radiolist-title" v-text="title"></label>
    <div class="mkd-cells-wrapper">
      <mkd-cell v-for="option in options">
        <label class="mkd-radiolist-label" slot="title">
          <span
            :class="{'is-right': align === 'right'}"
            class="mkd-radio">
            <input
              class="mkd-radio-input"
              type="radio"
              v-model="currentValue"
              :disabled="option.disabled"
              :value="option.value || option">
            <span class="mkd-radio-core"></span>
          </span>
          <span class="mkd-radio-label" v-text="option.label || option"></span>
        </label>
      </mkd-cell>
    </div>
  </div>
</template>

<script>
import mkdCell from 'mkd-ui/packages/cell/index.js';
if (process.env.NODE_ENV === 'component') {
  require('mkd-ui/packages/cell/style.css');
}
/**
 * mkd-radio
 * @module components/radio
 * @desc 单选框列表，依赖 cell 组件
 *
 * @param {string[], object[]} options - 选项数组，可以传入 [{label: 'label', value: 'value', disabled: true}] 或者 ['ab', 'cd', 'ef']
 * @param {string} value - 选中值
 * @param {string} title - 标题
 * @param {string} [align=left] - checkbox 对齐位置，`left`, `right`
 *
 * @example
 * <mkd-radio v-model="value" :options="['a', 'b', 'c']"></mkd-radio>
 */
export default {
  name: 'mkd-radio',

  props: {
    title: String,
    align: String,
    options: {
      type: Array,
      required: true
    },
    value: String
  },

  data() {
    return {
      currentValue: this.value
    };
  },

  watch: {
    value(val) {
      this.currentValue = val;
    },

    currentValue(val) {
      this.$emit('input', val);
    }
  },

  components: {
    mkdCell
  }
};
</script>

<style lang="scss">
 @import "../../../src/style/tools.scss";
.mkd-radiolist{
  .mkd-radiolist-label {
    display: block;
    height: 26px;
    line-height: 26px;
  }
  .mkd-radio-label {
    vertical-align: middle;
    margin-left: 6px;
  }
  >.mkd-radiolist-title {
    font-size: 12px;
    margin: 8px;
    display: block;
    color: $radio-title-color;
  }
  .mkd-radio {
    &.is-right {
      float: right;
    }
    >.mkd-radio-input {
      display: none;
      &:checked {
        + .mkd-radio-core {
          background-color: $color-white;
          border-color: $color-blue;

          &::after {
            background-color: $color-blue;
            transform: scale(1);
          }
        }
      }
      &[disabled]:checked + .mkd-radio-core {
        background-color: $color-white;
        border-color: $color-grey;
        &::after {
          background-color: $radio-background-color;
          transform: scale(1);
        }
      },
      &[disabled] + .mkd-radio-core {
        background-color: $radio-background-color;
        border-color: $color-grey;
        &::after {
          background-color: $radio-background-color;
          transform: scale(1);
        }
      }
    }
    >.mkd-radio-core {
      box-sizing: border-box;
      display: inline-block;
      background-color: $color-white;
      border-radius: 100%;
      border: 1px solid $color-grey;
      position: relative;
      width: 26px;
      height: 26px;
      vertical-align: middle;

      &::after {
        content: " ";
        border-radius: 100%;
        position: absolute;
        top: 2px;
        left: 2px;
        width: 20px;
        height: 20px;
        transition: transform .2s;
        transform: scale(0);
      }
    }
  }
}
</style>
