<template>
  <div class="mkd-card">
    <div class="mkd-card-title">
      <div :style="{borderLeftColor: cardColor}">{{title}}</div>
    </div>
    <div class="mkd-card-content" :style="{justifyContent: content && content.length < 3 ? 'space-around' : 'flex-start'}">
      <slot name="content" v-if="isCard2">
        <mkd-card-item2 v-for="(item,index) in content" :cardColor="cardColor" :num="item.num" :content="item.content"></mkd-card-item2>
      </slot>
      <slot name="content" v-else>
        <mkd-card-item1  v-for="(item,index) in content" :to="item.url"  :imgUrl="item.imgUrl" :content="item.content" :style="{marginTop: index >= 3 ? '24px' : ''}" ></mkd-card-item1>
      </slot>
    </div>
    <div v-if="isButton" class="mkd-card-btm">
      <slot name="button"></slot>
    </div>
  </div>
</template>
<script>
/**
* title : 卡片标题
*/
let mkdCardItem1 = {
  template: '<a :href="href" style="text-align:center;color:#666666;width:33.3%;"><img style="width:40px;height:40px;margin-bottom:12px;" :src="imgUrl"><div>{{content}}</div></a>',
  props: {
    imgUrl: String,
    content: String,
    to: [String, Object]
  },
  computed: {
    href() {
      if (this.to && !this.added && this.$router) {
        const resolved = this.$router.match(this.to);
        if (!resolved.matched.length) return this.to;
        this.$nextTick(() => {
          this.added = true;
          this.$el.addEventListener('click', this.handleClick);
        });
        return resolved.path;
      }
      return this.to;
    }
  },
  methods: {
    handleClick($event) {
      $event.preventDefault();
      this.$router.push(this.href);
    }
  }
}
let mkdCardItem2 = {
  template: '<div style="text-align:center;color:#666666;"><div style="margin-bottom:12px;font-size:28px;text-align:center;" :style="{color:cardColor}">{{num}}</div><div>{{content}}</div></div>',
  props: {
    cardColor: String,
    num: String,
    content: String
  }
}
export default {
  name: 'mkd-card',
  components: {mkdCardItem1, mkdCardItem2},
  props: {
    title: String,
    isButton: Boolean,
    content: Array,
    cardColor: String,
    isCard2: Boolean
  }
};
</script>

<style lang="scss">
  @import "../../../src/style/tools.scss";
  .mkd-card {
    background: #FFFFFF;
    box-shadow: 0 3px 8px 0 #DAE5ED;
    border-radius: 4px;
    width: vm(351);
    margin: 0px auto;
    font-size: 12px;
    >.mkd-card-title {
      height: $card-title-height;
      font-size: 14px;
      color: $font-color1;
      display: flex;
      align-items: center;
      >div {
        padding-left: 9px;
        width: 100%;
        border-left: 3px solid #55A0F5;
      }
    }
    >.mkd-card-content {
      min-height: vh(100);
      padding: vh(12) vh(12) vh(20) vh(12);
      display: flex;
      align-items: center;
      flex-wrap: wrap;
    }
    >.mkd-card-btm {
      height: vh(42);
      line-height: vh(42);
      font-size: 14px;
      @include border-top;
      >div {
        display: flex;
        justify-content: space-around;
        text-align: center;
        color: $font-color2;
      }
    }
  }
  .mkd-card-item {
    >:first-child(1){
      width: vw(40);
      height: vh(40);
    }
  }
</style>
