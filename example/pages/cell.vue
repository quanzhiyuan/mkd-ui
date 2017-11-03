<template>
  <div class="page-cell">
    <div class="page-title">Cell</div>
    <div>
      <div class="page-title">基础样式</div>
      <div>
        <mkd-cell title="标题文字" value="右侧可编辑" is-edit></mkd-cell>
        <div class="marginbtm"></div>
        <mkd-cell title="标题文字" value="右侧禁用状态"></mkd-cell>
        <div class="marginbtm"></div>
        <mkd-cell title="标题文字" is-link is-edit value="带链接"></mkd-cell>
      </div>

      <div class="page-title">其他</div>
      <div class="mkd-cells-wrapper">
      <mkd-cell is-link title="标题文字" value="带图片">
        <img slot="icon" style="width:22px;" src="../assets/test1.png">
      </mkd-cell>
      <mkd-cell title="标题文字" icon="more" value="带 icon"></mkd-cell>
      </div>
      <div class="marginbtm"></div>
      <div class="mkd-cells-wrapper">
      <mkd-cell title="标题文字">
        <mkd-button size="small" onclick="alert('带按钮的Cell')" type="primary">按钮</mkd-button>
      </mkd-cell>
      <mkd-cell title="标题" value="事件绑定" is-link is-edit onclick="javascript:alert(1)"></mkd-cell>
      </div>
      <div class="marginbtm"></div>
      <div class="mkd-cells-wrapper">
      <mkd-cell title="原生跳转" is-edit  value="跳转到 https://mint-ui.github.io" is-link to="https://mint-ui.github.io"></mkd-cell>
      <mkd-cell title="路由跳转" is-edit  value="跳转到 /toast" is-link :to="{ name: 'Toast' }" style="border-bottom-left-radius:4px;border-bottom-right-radius:4px;"></mkd-cell>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.page-cell {
  padding-bottom: 100px;
}
.page-title {
  font-size: 20px;
  margin: 20px auto;
  text-align: center;
  display: block;
  line-height: 1;
}
</style>
