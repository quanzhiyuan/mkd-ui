<template>
  <div class="mkd-card">
    <div class="mkd-card-title"></div>
    <div class="mkd-card-content"></div>
    <div class="mkd-card-btm"></div>
  </div>
</template>

<script>
export default {
  name: 'mkd-card',

  props: {
  },

  computed: {
  },

  methods: {
  }
};
</script>

<style lang="css">
  @import "../../../src/style/var.css";

  @component-namespace mkd {
    @component card {
      background: #FFFFFF;
      box-shadow: 0 3px 8px 0 #DAE5ED;
      border-radius: 4px;
      width: 93.6vw;
      margin: 0px auto;
      @descendent title {
        height: $card-content-minheight;
      }
      @descendent content {
        min-height: $card-content-minheight;
      }
      @descendent btm  {

      }
    }
  }
</style>
