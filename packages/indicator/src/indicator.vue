<template>
  <transition name="mkd-indicator">
    <div class="mkd-indicator" v-show="visible">
      <div class="mkd-indicator-wrapper" :style="{ 'padding': text ? '20px' : '15px' }">
        <img :src="indicatorUrl">
        <div class="mkd-indicator-text" >加载中</div>
      </div>
      <div class="mkd-indicator-mask" @touchmove.stop.prevent></div>
    </div>
  </transition>
</template>

<style lang="scss">
@import "../../../src/style/tools.scss";
.mkd-indicator {
  transition: opacity .2s linear;
  >.mkd-indicator-wrapper {
    position: fixed;
    top: 50%;
    left: 50%;
    width: vw(159);
    height: vh(80);
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.94);
    box-shadow: 0 1px 10px 0 #DBE2E9;
    text-align: center;
    transform: translate(-50%, -50%);
    >img{
      width: 50px;
      margin-top: -12px;
    }
    >.mkd-indicator-text{
      font-size: 14px;
      margin-top: -3px;
      color: $font-color2;
    }
  }
  >.mkd-indicator-mask {
    position: fixed;
    top: 0;
    left: 0;
    size: 100%;
    opacity: 0;
    background: transparent;
  }
}
.mkd-indicator-enter,
.mkd-indicator-leave-active {
  opacity: 0;
}
</style>

<script>
import indicator from "$src/assets/indicator.gif"
export default {
  data() {
    return {
      visible: false,
      indicatorUrl: indicator
    };
  },
  computed: {
    convertedSpinnerType() {
      switch (this.spinnerType) {
        case 'double-bounce':
          return 1;
        case 'triple-bounce':
          return 2;
        case 'fading-circle':
          return 3;
        default:
          return 0;
      }
    }
  },

  props: {
    text: String,
    spinnerType: {
      type: String,
      default: 'snake'
    }
  }
}
</script>
