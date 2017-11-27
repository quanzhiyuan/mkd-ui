<template>
  <div class="page-search">
    <h1 class="page-title">Search</h1>
    <mkd-button @click.native="search1 = true" size="large">标准搜索</mkd-button>
    <mkd-popup v-model="search1" position="right" :modal="false" class="mkd-search1">
      <mkd-search autofocus v-model="value" @cancel="search1 = false">
        <!-- <div slot="lefticon" style="width:20px;height:20px;background-color:red"></div> -->
        <img slot="lefticon" src="/static/assets/circle.png" style="width:20px;height:20px;margin-right:10px;">
      </mkd-search>
    </mkd-popup>
  </div>
</template>

<script>
export default {
  name: 'page-search',

  data() {
    return {
      value: '',
      search1: ''
    };
  },

  computed: {
    filterResult() {
      return this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value));
    }
  }
};
</script>

<style lang="css">
  .page-search {
    height: 100%;
  }
  .mkd-search1 {
    width: 100%;
    height: 100vh;
    background-color: #F2F6F9 !important;
  }
</style>
