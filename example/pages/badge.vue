<template>
  <div class="page-badge">
    <div class="page-title">Badge</div>
    <div class="page-badge-container">
      <div class="page-title">size=large</div>
      <div class="page-part">
        <mkd-badge type="primary" size="large">30</mkd-badge>
        <mkd-badge type="important" size="large">10</mkd-badge>
      </div>

      <div class="page-part">
        <div class="page-title">size=normal</div>
        <mkd-badge type="primary">30</mkd-badge>
        <mkd-badge type="important">30</mkd-badge>
      </div>

      <div class="page-part">
        <div class="page-title">size=small</div>
        <mkd-badge type="primary" size="small"></mkd-badge>
        <mkd-badge type="important" size="small"></mkd-badge>
      </div>

      <div class="page-part">
        <div class="page-title">自定义颜色</div>
        <mkd-badge size="large" color="#ffc107">自定义颜色</mkd-badge>
      </div>
    </div>

    <div class="page-part">
      <div class="page-title">列表中示例</div>
      <mkd-cell title="徽章">
        <span style="margin-right: 5px;">未读消息</span>
        <mkd-badge type="important" size="large">10+</mkd-badge>
      </mkd-cell>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page-badge'
};
</script>

<style lang="css">
  .page-badge-container {
    padding: 0 10px;
  }
  .page-part {
    text-align: center;
  }
</style>
