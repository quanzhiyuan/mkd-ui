<template>
  <div class="page-tabbar">
    <div class="page-wrap">
      <div class="page-title">Tabbar</div>
      <div>
        <mkd-cell class="page-part" title="当前选中" :value="selected" />
      </div>
      <div class="marginbtm"></div>

      <mkd-tab-container class="page-tabbar-container" v-model="selected">
        <mkd-tab-container-item id="外卖">
          <div class="mkd-cells-wrapper">
            <mkd-cell v-for="n in 5" :title="'餐厅 ' + n" />
          </div>
        </mkd-tab-container-item>
        <mkd-tab-container-item id="订单">
          <div class="mkd-cells-wrapper">
            <mkd-cell v-for="n in 5" :title="'订单 ' + n" />
          </div>
        </mkd-tab-container-item>
        <mkd-tab-container-item id="发现">
          <div class="mkd-cells-wrapper">
            <mkd-cell v-for="n in 5" :title="'发现 ' + n" />
          </div>
        </mkd-tab-container-item>
        <mkd-tab-container-item id="我的">
          <div class="mkd-cells-wrapper">
            <mkd-cell v-for="n in 5" :title="'我的 ' + n" />
          </div>
          <div class="marginbtm"></div>
          <router-link to="/">
            <mkd-button type="danger" size="large" to="/">退出</mkd-button>
          </router-link>
        </mkd-tab-container-item>
      </mkd-tab-container>
    </div>

    <mkd-tabbar v-model="selected" fixed>
      <mkd-tab-item id="外卖">
        <img slot="icon" style="width:24px;border-radius:3px;"  src="../assets/100x100.png">
        外卖
      </mkd-tab-item>
      <mkd-tab-item id="订单">
        <img slot="icon" style="width:24px;border-radius:3px;"  src="../assets/100x100.png">
        <span class="order">订单</span>
      </mkd-tab-item>
      <mkd-tab-item id="发现">
        <img slot="icon" style="width:24px;border-radius:3px;"  src="../assets/100x100.png">
        发现
      </mkd-tab-item>
      <mkd-tab-item id="我的">
        <img slot="icon" style="width:24px;border-radius:3px;" src="../assets/100x100.png">
        <mkd-badge type="primary" slot="badge">30</mkd-badge>
        我的
      </mkd-tab-item>
    </mkd-tabbar>
  </div>
</template>

<script>
export default {
  name: 'page-tabbar',
  data() {
    return {
      selected: '外卖'
    }
  }
}
</script>

<style lang="scss">
  .page-tabbar {
    overflow: hidden;
    height: 100vh;
  }

  .page-wrap {
    overflow: auto;
    height: 100%;
    padding-bottom: 100px;
  }
  .order.is-selected {  // 自定义点击样式
    color: red;
  }
</style>
