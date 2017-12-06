<template>
  <div class="page-button">
    <h1 class="page-title">Button</h1>
    <div class="page-title">1.圆角button</div>
    <div class="page-button-group">
      <mkd-button size="large" @click="openAlert('主要操作按钮')" type="primary">主要操作按钮</mkd-button>
      <mkd-button size="large" @click="openAlert('次要操作按钮')" type="secondary">次要操作按钮</mkd-button>
      <mkd-button size="large" @click="openAlert('警示操作按钮')" type="danger">警示操作按钮</mkd-button>
    </div>

    <div class="page-button-group">
      <mkd-button type="primary">主要操作按钮</mkd-button>
      <mkd-button type="secondary">次要操作按钮</mkd-button>
      <mkd-button type="danger">警示操作按钮</mkd-button>
    </div>

    <div class="page-button-group">
      <mkd-button size="small" type="primary">主要</mkd-button>
      <mkd-button size="small" type="secondary">次要</mkd-button>
      <mkd-button size="small" type="danger">警示</mkd-button>
    </div>

    <div class="page-title">按钮disabled样式</div>
    <div class="page-button-group">
      <mkd-button disabled size="large" type="primary">主要操作按钮</mkd-button>
      <mkd-button disabled size="large" type="secondary">次要操作按钮</mkd-button>
      <mkd-button disabled size="large" type="danger">警示操作按钮</mkd-button>
    </div>

    <div class="page-title">带有自定义icon的按钮</div>
    <div class="page-button-group">
      <mkd-button size="normal" type="primary">
        <img src="../assets/100x100.png" height="20" width="20" slot="icon">
        带自定义图标
      </mkd-button>
      <mkd-button size="large" type="danger">
        <img src="../assets/100x100.png" height="20" width="20" slot="icon">
        带自定义图标
      </mkd-button>
    </div>
    <div class="page-title">2.扁角button</div>
    <div class="page-button-group">
      <mkd-button size="large" type="primary-b">主要操作按钮</mkd-button>
      <mkd-button size="large" type="secondary-b">次要操作按钮</mkd-button>
      <mkd-button size="large" type="danger-b">警示操作按钮</mkd-button>
    </div>

    <div class="page-button-group">
      <mkd-button type="primary-b" @click="openAlert('主要操作按钮')">主要操作按钮</mkd-button>
      <mkd-button type="secondary-b">次要操作按钮</mkd-button>
      <mkd-button type="danger-b">警示操作按钮</mkd-button>
    </div>

    <div class="page-button-group">
      <mkd-button size="small" type="primary-b">主要</mkd-button>
      <mkd-button size="small" type="secondary-b">次要</mkd-button>
      <mkd-button size="small" type="danger-b">警示</mkd-button>
    </div>

    <div class="page-title">按钮disabled样式</div>
    <div class="page-button-group">
      <mkd-button disabled size="large" type="primary-b">主要操作按钮</mkd-button>
      <mkd-button disabled size="large" type="secondary-b">次要操作按钮</mkd-button>
      <mkd-button disabled size="large" type="danger-b">警示操作按钮</mkd-button>
    </div>

    <div class="page-title">带有自定义icon的按钮</div>
    <div class="page-button-group">
      <mkd-button size="normal" type="primary-b">
        <img src="../assets/100x100.png" height="20" width="20" slot="icon">
        带自定义图标
      </mkd-button>
      <mkd-button size="large" type="danger-b">
        <img src="../assets/100x100.png" height="20" width="20" slot="icon">
        带自定义图标
      </mkd-button>
    </div>
  </div>
</template>

<script>
import { MessageBox } from '$src/index'
export default {
  name: 'button',
  
  methods: {
    openAlert(title) {
      MessageBox.alert(title + '!', 'Button')
    }
  }
}
</script>

<style lang="scss">
.page-button {
  width: 100%;
  text-align: center;
  >.page-button-group {
    margin: 15px auto;
    text-align: center;
    >* {
      margin: 15px auto;
    }
  }
  padding-bottom: 300px;
}
</style>
