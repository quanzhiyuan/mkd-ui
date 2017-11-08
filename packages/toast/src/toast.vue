<template>
  <transition name="mkd-toast-pop">
    <div class="mkd-toast" v-show="visible" :class="customClass" :style="{ padding: icon ? '24px' : '10px',width: icon ? '40vw' : 'auto'}">
      <img style="width:58px;" v-if="icon" :src="iconUrl">
      <span class="mkd-toast-text" :style="{ 'margin-top': icon ? '18px' : '0' }">{{ message }}</span>
    </div>
  </transition>
</template>
<script type="text/babel">
import ToastImg from '$src/assets/toast.png'
export default {
  props: {
    message: String,
    className: {
      type: String,
      default: ''
    },
    position: {
      type: String,
      default: 'middle'
    },
    icon: [Boolean, String]
  },
  data () {
    return {
      visible: false,
      iconImg: ToastImg
    }
  },
  computed: {
    iconUrl () {
      if (this.icon && this.icon !== true) {
        return this.icon
      } else {
        return this.iconImg
      }
    },
    customClass () {
      var classes = [];
      switch (this.position) {
        case 'top':
          classes.push('is-placetop')
          break;
        case 'bottom':
          classes.push('is-placebottom')
          break;
        default:
          classes.push('is-placemiddle')
      }
      classes.push(this.className)
      return classes.join(' ')
    }
  }
}
</script>
<style lang="scss">
@import '../../../src/style/tools.scss';
 .mkd-toast {
   position: fixed;
   max-width: 80vw;
   border-radius: 4px;
   background: rgba(0, 0, 0, 0.7);
   color: #fff;
   box-sizing: border-box;
   text-align: center;
   z-index: 1000;
   min-width: vw(92);
   transition: opacity .3s linear;
   >.mkd-toast-text {
     font-size: 14px;
     display: block;
     text-align: center;
   }
 }
/**
* Toast 动画
*/
.mkd-toast-pop-enter,.mkd-toast-pop-leave-active {
  opacity: 0;
}
</style>
