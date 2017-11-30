<template>
  <div @change="$emit('change', currentValue)" class="mkd-checklist" :class="{ 'is-limit': max <= currentValue.length }">
    <label class="mkd-checklist-title" v-text="title"></label>
    <div class="mkd-cells-wrapper">
    <mkd-cell v-for="option in options">
      <label class="mkd-checklist-label" slot="title">
        <span
          :class="{'is-right': align === 'right'}"
          class="mkd-checkbox">
          <input
            class="mkd-checkbox-input"
            type="checkbox"
            v-model="currentValue"
            :disabled="option.disabled"
            :value="option.value || option">
          <span class="mkd-checkbox-core"></span>
        </span>
        <span class="mkd-checkbox-label" v-text="option.label || option"></span>
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
 * mkd-checklist
 * @module components/checklist
 * @desc 复选框列表，依赖 cell 组件
 *
 * @param {(string[]|object[])} options - 选项数组，可以传入 [{label: 'label', value: 'value', disabled: true}] 或者 ['ab', 'cd', 'ef']
 * @param {string[]} value - 选中值的数组
 * @param {string} title - 标题
 * @param {number} [max] - 最多可选的个数
 * @param {string} [align=left] - checkbox 对齐位置，`left`, `right`
 *
 *
 * @example
 * <mkd-checklist :v-model="value" :options="['a', 'b', 'c']"></mkd-checklist>
 */
export default {
  name: 'mkd-checklist',

  props: {
    max: Number,
    title: String,
    align: String,
    options: {
      type: Array,
      required: true
    },
    value: Array
  },

  components: { mkdCell },

  data() {
    return {
      currentValue: this.value
    };
  },

  computed: {
    limit() {
      return this.max < this.currentValue.length;
    }
  },

  watch: {
    value(val) {
      this.currentValue = val;
    },

    currentValue(val) {
      if (this.limit) val.pop();
      this.$emit('input', val);
    }
  }
};
</script>

<style lang="scss">
@import "../../../src/style/tools.scss";
.mkd-checklist {
  .mkd-cell {
   padding: 0;
  }
  .mkd-checklist-title {
   color: $checklist-title-color;
   display: block;
   font-size: 12px;
   margin: 8px;
  }
  .mkd-checklist-label {
   display: block;
   padding: 0 10px;
   >.mkd-checkbox {
     >.mkd-checkbox-label {
       vertical-align: middle;
       margin-left: 6px;
     }
     >.mkd-checkbox-input {
       display: none;
       &:checked {
         + .mkd-checkbox-core {
           background-color: $color-blue;
           border-color: $color-blue;

           &::after {
             border-color: $color-white;
             transform: rotate(45deg) scale(1);
           }
         }
       }

       &[disabled] + .mkd-checkbox-core {
         background-color: $color-grey;
         border-color: #ccc;
       }
     }
     >.mkd-checkbox-core {
       display: inline-block;
       background-color: $color-white;
       border-radius: 100%;
       border: 1px solid #ccc;
       position: relative;
       width:20px;
       height: 20px;
       vertical-align: middle;

       &::after {
         border: 2px solid transparent;
         border-left: 0;
         border-top: 0;
         content: " ";
         position: absolute;
         top: 3px;
         left: 6px;
         width: 4px;
         height: 8px;
         transform: rotate(45deg) scale(0);
         transition: transform .2s;
       }
     }
     &.is-right {
       float: right;
     }
   }
  }
  &.is-limit {
   .mkd-checkbox-core:not(:checked) {
     background-color: $color-grey;
     border-color: $color-grey;
   }
  }
}
</style>
