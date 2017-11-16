<template>
  <button
    :type="nativeType"
    class="mkd-button"
    :class="['mkd-button-' + buttonType, 'mkd-button-' + size, {
      'is-disabled': disabled
    }]"
    :style="{borderRadius: ifBstyle ? '5px' : 'auto'}"
    @click="handleClick"
    :disabled="disabled">
    <slot name="icon">
      <i v-if="icon" class="mkdui" :class="'mkdui-' + icon"></i>
    </slot>
    <span class="mkd-button-text"><slot></slot></span>
  </button>
</template>

<script>
if (process.env.NODE_ENV === 'component') {
  require('mkd-ui/packages/font/style.css');
}
/**
 * mkd-header
 * @module components/button
 * @desc 按钮
 * @param {string} [type=primary] - 显示类型，接受 primary,secondary, danger
 * @param {boolean} [disabled=false] - 禁用
 * @param {string} [size=normal] - 尺寸，接受 normal, small, large
 * @param {string} [native-type] - 原生 type 属性
 * @param {string} [icon] - 图标，提供 more, back，或者自定义的图标（传入不带前缀的图标类名，最后拼接成 .mkdui-xxx）
 * @param {slot} - 显示文本
 * @param {slot} [icon] 显示图标
 *
 * @example
 * <mkd-button size="large" icon="back" type="primary">按钮</mkd-button>
 */
export default {
  name: 'mkd-button',

  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    }
  },

  props: {
    icon: String,
    disabled: Boolean,
    nativeType: String,
    type: {
      type: String,
      default: 'primary',
      validator(value) {
        return [
          'primary',
          'secondary',
          'danger',
          'primary-b',  // 扁平化的按钮
          'secondary-b',
          'danger-b'
        ].indexOf(value) > -1;
      }
    },
    size: {
      type: String,
      default: 'normal',
      validator(value) {
        return [
          'small',
          'normal',
          'large'
        ].indexOf(value) > -1;
      }
    }
  },
  computed: {
    buttonType: function () {
      return this.type === 'secondary-b' ? this.type : this.type.split('-')[0]  // secondary 由于1px圆角问题需要单独处理
    },
    ifBstyle: function () {
      return this.type.split('-')[1]
    }
  }
};
</script>

<style lang="scss">
@import "../../../src/style/tools.scss";
.mkd-button {
  appearance: none;
  border: 0;
  border-radius: 50px;
  color: inherit;
  outline: 0;
  overflow: hidden;
  position: relative;
  text-align: center;
  justify-content: center;
  align-items: center;
  &:not(.mkd-button-danger):after {
    background-color: #000;
    content: " ";
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  &:not(.is-disabled):active::after {
    opacity: .1;
  }
}
.mkd-button-secondary {
  color: $button-secondary-color;
  background-color: $button-secondary-background-color;
  &:before {
    content: "";
    pointer-events: none; /* 防止点击触发 */
    box-sizing: border-box;
    position: absolute;
    width: 200%;
    height: 200%;
    left: 0;
    top: 0;
    border-radius: 50px;
    border:1px solid #DDDDDD;
    -webkit-transform-origin: 0 0;
    transform: scale(0.5);
    transform-origin: 0 0;
  }
}
.mkd-button-secondary-b {
  color: $button-secondary-color;
  background-color: $button-secondary-background-color;
  &:before {
    content: "";
    pointer-events: none; /* 防止点击触发 */
    box-sizing: border-box;
    position: absolute;
    width: 200%;
    height: 200%;
    left: 0;
    top: 0;
    border-radius: 10px;
    border:1px solid #DDDDDD;
    -webkit-transform-origin: 0 0;
    transform: scale(0.5);
    transform-origin: 0 0;
  }
}
.mkd-button-primary {
  color: $button-primary-color;
  background-color: $button-primary-background-color;
}
.mkd-button-danger {
  color: $button-danger-color;
  background-color: $button-danger-background-color;
  &:not(.is-disabled):active{
    opacity: .6;
  }
  &:not(.is-disabled):active > .mkd-button-text {
    opacity: .4;
  }
}
.mkd-button-large {
  display: flex;
  width: vw(327);
  margin: auto;
  font-size: 18px;
  >img{
    width: 18px;
    height: 18px;
    margin-right: 12px;
  }
  >.mkd-button-text {
    height: vh(44);
    line-height: vh(44);
  }
}
.mkd-button-normal {
  display: inline-flex;
  padding: 0 vw(22);
  font-size: 16px;
  >img{
    width: 16px;
    height: 16px;
    margin-right: 10px;
  }
  >.mkd-button-text {
    height: vh(36);
    line-height: vh(36);
  }
}
.mkd-button-small {
  display: inline-flex;
  font-size: 13px;
  padding: 0 15px;
  >img{
    width: 13px;
    height: 13px;
    margin-right: 10px;
  }
  >.mkd-button-text {
   height: vh(30);
   line-height: vh(30);
  }
}
</style>
