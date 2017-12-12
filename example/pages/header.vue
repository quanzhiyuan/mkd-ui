<template>
  <div>
    <mkd-header fixed title="固定在顶部"></mkd-header>
    <div class="page-header-main">
      <div class="page-title">Header</div>
      <mkd-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
        <router-link to="/" slot="left">
          <img @click="close" src="static/assets/cancel.svg">
        </router-link>
        <i class="mkdui mkdui-more" @click="openRight" slot="right"></i>
      </mkd-header>

      <mkd-header title="多个按钮">
        <i class="mkdui mkdui-more" @click="openRight" slot="right"></i>
      </mkd-header>

      <mkd-header :is-back="false" title="左侧仅文字">
        <router-link to="/" slot="left">
            返回
        </router-link>
      </mkd-header>

      <mkd-header title="右侧仅文字">
        <span slot="right" @click="openRight">
          分享
        </span>
      </mkd-header>

      <mkd-header title="仅图标">
        <i class="mkdui mkdui-more" @click="openRight" slot="right"></i>
      </mkd-header>
    </div>

  </div>
</template>

<script>
import { MessageBox } from '$src/index'
export default {
  name: 'header',

  data() {
    return {
    }
  },

  methods: {
    handleClose() {
      MessageBox.alert('关闭页面!', '提示')
    },
    openAlert() {
      MessageBox.alert('分享!', '提示')
    },
    openRight() {
      MessageBox.alert('标题右侧按钮', '提示')
    },
    openLeft() {
      MessageBox.alert('标题左侧按钮', '提示')
    }
  }
}
</script>

<style lang="scss">
.page-header-main {
  margin-top: 50px;
  min-height: 120vh;

  > * {
    margin-bottom: 15px;
  }
}
</style>
