<template>
  <div>
    <router-link class="page-back" v-if="visible" :to="'/'">
      <i class="mkdui mkdui-back"></i>
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  import '../src/assets/font/iconfont.css'
  import '../src/style/common.scss'

  export default {
    computed: {
      visible() {
        return ['/', '/header'].indexOf(this.$route.path) < 0
      }
    }
  }
</script>

<style lang="scss">
  @import './common';
  html, body {
    background-color:  #E9EFF6;
    // background-color: #ffffff;
    -webkit-overflow-scrolling: touch;
    user-select: none;
    /* padding-bottom: 200px; */
  }

  a {
    color: inherit;
  }
  .page-back {
    display: inline-block;
    position: absolute;
    top: 12px;
    left: 10px;
    width: 40px;
    height: 40px;
    text-align: center;
    i {
      font-size: 24px;
      line-height: 40px;
    }
  }
</style>
