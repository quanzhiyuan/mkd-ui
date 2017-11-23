<template>
  <div class="page-indicator">
    <h1 class="page-title">Indicator</h1>
    <div class="page-indicator-wrapper">
      <mkd-button @click.native="openIndicator" size="large">点击弹出 Indicator</mkd-button>
    </div>
  </div>
</template>

<style lang="scss">
.page-indicator-wrapper{
  padding: 0 20px;
  position: absolute;
  top:50%;
  width: 100%;
  transform: translateY(-50%);
  :not(:last-child) {
    margin-bottom: 20px;
  }
}
</style>

<script type="text/babel">
  import { Indicator } from '$src/index';

  export default {
    methods: {
      openIndicator() {
        Indicator.open();
        setTimeout(() => Indicator.close(), 200000);
      },
    },
    beforeDestroy() {
      Indicator.close();
    }
  };
</script>
