<template>
  <div>
    <router-link class="page-back" v-if="visible" :to="'/'">
      <i class="mkdui mkdui-back"></i>
    </router-link>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">

  html, body {
    background-color:  #E9EFF6;
    -webkit-overflow-scrolling: touch;
    user-select: none;
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

<script>
  import '../src/assets/font/iconfont.css'
  import '../src/style/common.css'

  export default {
    computed: {
      visible() {
        return ['/', '/header', '/search'].indexOf(this.$route.path) < 0
      }
    }
  }
</script>
