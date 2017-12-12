<template>
  <div class="page-navbar">
    <div class="page-title">Navbar</div>
    <mkd-navbar v-model="selected">
      <mkd-tab-item id="一">选项一</mkd-tab-item>
      <mkd-tab-item id="二">选项二</mkd-tab-item>
      <mkd-tab-item id="三">选项三</mkd-tab-item>
    </mkd-navbar>
    <div class="marginbtm"></div>
    <div>
      <mkd-cell title="当前选项为">选项{{ selected }}</mkd-cell>
    </div>
    <div class="marginbtm"></div>
    <mkd-tab-container v-model="selected">
      <mkd-tab-container-item id="一">
        <div class="mkd-cells-wrapper">
          <mkd-cell v-for="n in 10" :title="'内容 ' + n"></mkd-cell>
        </div>
      </mkd-tab-container-item>
      <mkd-tab-container-item id="二">
        <div class="mkd-cells-wrapper">
          <mkd-cell v-for="n in 4" :title="'测试 ' + n"></mkd-cell>
        </div>
      </mkd-tab-container-item>
      <mkd-tab-container-item id="三">
        <div class="mkd-cells-wrapper">
         <mkd-cell v-for="n in 6" :title="'选项 ' + n"></mkd-cell>
        </div>
      </mkd-tab-container-item>
    </mkd-tab-container>
  </div>
</template>

<script>
export default {
  name: 'page-navbar',

  data() {
    return {
      selected: '一'
    }
  }
}
</script>
