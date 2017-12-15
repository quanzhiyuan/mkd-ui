<template>
  <div class="page-toast">
    <h1 class="page-title">Toast</h1>
    <div class="page-toast-wrapper">
      <mkd-button @click.native="openToast" size="large">点击弹出 Toast</mkd-button>
      <mkd-button @click.native="openToastWithIcon" size="large">点击弹出带有 icon 的 Toast</mkd-button>
      <mkd-button @click.native="openBottomToast" size="large">自定义 Toast 位置</mkd-button>
    </div>
  </div>
</template>

<script type="text/babel">
import { Toast } from '$src/index';

export default {
  methods: {
    openToast() {
      Toast('提示信息');
    },

    openToastWithIcon() {
      Toast({
        message: '操作成功',
        icon : true,
        duration: 1500
      })
    },

    openBottomToast() {
      Toast({
        message: '提示信息',
        position: 'bottom'
      })
    }
  }
}
</script>

<style lang="scss">
.page-toast {
  >.page-toast-wrapper{
    padding: 0 20px;
    position: absolute;
    top: 50%;
    width: 100%;
    transform: translateY(-50%);
    >:not(:last-child) {
      margin-bottom: 20px;
    }
  }
}
</style>
