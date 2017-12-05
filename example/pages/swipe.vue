<template>
  <div class="page-swipe">
    <h1 class="page-title">Swipe</h1>
    <p class="page-swipe-desc">基础用法(size=large)</p>
    <mkd-swipe :auto="4000">
      <mkd-swipe-item class="slide1">1</mkd-swipe-item>
      <mkd-swipe-item class="slide2">2</mkd-swipe-item>
      <mkd-swipe-item class="slide3">3</mkd-swipe-item>
    </mkd-swipe>

    <p class="page-swipe-desc">隐藏 indicators(size=normal)</p>
    <mkd-swipe :show-indicators="false" size="normal">
      <mkd-swipe-item class="slide1">1</mkd-swipe-item>
      <mkd-swipe-item class="slide2">2</mkd-swipe-item>
      <mkd-swipe-item class="slide3">3</mkd-swipe-item>
    </mkd-swipe>

    <p class="page-swipe-desc">取消自动播放(size=normal)</p>
    <mkd-swipe :auto="0" size="normal">
      <mkd-swipe-item class="slide1"></mkd-swipe-item>
      <mkd-swipe-item class="slide2"></mkd-swipe-item>
      <mkd-swipe-item class="slide3"></mkd-swipe-item>
    </mkd-swipe>

    <p class="page-swipe-desc">设置默认显示页(size=small)</p>
    <mkd-swipe :auto="0" :defaultIndex="1" size="small">
      <mkd-swipe-item class="slide1">1</mkd-swipe-item>
      <mkd-swipe-item class="slide2">2</mkd-swipe-item>
      <mkd-swipe-item class="slide3">3</mkd-swipe-item>
    </mkd-swipe>

    <p class="page-swipe-desc">单个幻灯片</p>
    <mkd-swipe :show-indicators="false">
      <mkd-swipe-item class="slide1">SINGLE SLIDE</mkd-swipe-item>
    </mkd-swipe>
  </div>
</template>

<style lang="scss">
.page-swipe {
  >.page-swipe-desc {
    text-align: center;
    color: #666;
    margin-bottom: 5px;
  }
  .mkd-swipe {
    .mkd-swipe-item {
      text-align: center;
      line-height: 1;
      display: flex;
      align-items: center;
    }
    .slide1 {
      background-color: #0089dc;
      color: #fff;
    }
    .slide2 {
      background-color: #ffd705;
      color: #000;
    }
    .slide3 {
      background-color: #ff2d4b;
      color: #fff;
    }
  }
}
</style>
