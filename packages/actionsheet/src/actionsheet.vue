<template>
  <transition name="actionsheet-float">
    <div v-show="currentValue" class="mkd-actionsheet">
      <ul class="mkd-actionsheet-list" :style="{ 'margin-bottom': cancelText ? '5px' : '0' }">
        <li v-for="( item, index ) in actions" class="mkd-actionsheet-listitem" @click.stop="itemClick(item, index)">{{ item.name }}</li>
      </ul>
      <a class="mkd-actionsheet-button" @click.stop="currentValue = false" v-if="cancelText">{{ cancelText }}</a>
    </div>
  </transition>
</template>
<script type="text/babel">
  import Popup from 'mkd-ui/src/utils/popup'
  import 'mkd-ui/src/style/popup.css'
  export default {
    name: 'mkd-actionsheet',
    mixins: [Popup],
    props: {
      modal: {
        default: true
      },
      modalFade: {
        default: false
      },
      lockScroll: {
        default: false
      },
      closeOnClickModal: {
        default: true
      },
      cancelText: {
        type: String,
        default: '取消'
      },
      actions: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        currentValue: false
      };
    },
    watch: {
      currentValue(val) {
        this.$emit('input', val)
      },
      value(val) {
        this.currentValue = val
      }
    },
    methods: {
      itemClick(item, index) {
        if (item.method && typeof item.method === 'function') {
          item.method(item, index)
        }
        this.currentValue = false
      }
    },
    mounted() {
      if (this.value) {
        this.rendered = true
        this.currentValue = true
        this.open()
      }
    }
  }
</script>
<style lang="scss">
@import "../../../src/style/tools.scss";
.mkd-actionsheet {
  position: fixed;
  width: vw(351);
  text-align: center;
  border-radius: $border-radius;
  bottom: vw(12);
  left: 50%;
  color: $font-color1;
  transform: translate3d(-50%, 0, 0);
  backface-visibility: hidden;
  transition: transform .3s ease-out;
  >.mkd-actionsheet-list {
    display: inline-block;
    border-radius: $border-radius;
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 0;
    >:not(:last-child) {
      @include border-bottom;
    }
    >:first-child {
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }
    >:last-child {
      border-bottom-left-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
    >.mkd-actionsheet-listitem {
      display: block;
      width: 100%;
      height: vw(60);
      line-height: vw(60);
      font-size: 17px;
      background-color: #fff;
      &:active {
         background-color: #f0f0f0;
      }
    }
  }
  >.mkd-actionsheet-button {
    display: block;
    width: 100%;
    height: vw(60);
    line-height: vw(60);
    border-radius: $border-radius;
    font-size: 18px;
    color: #333333;
    background-color: #fff;
    &:active {
       background-color: #f0f0f0;
    }
  }
}
/**actionsheet 动画*/
.actionsheet-float-enter,
.actionsheet-float-leave-active {
  transform: translate3d(-50%, 100%, 0);
}
</style>
