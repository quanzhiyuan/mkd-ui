<template>
  <div class="mkd-card">
    <div class="mkd-card-title" :style="{borderBottom: isCard4 ? '1px solid #E5E5E5' : ''}" >
      <div :style="{borderLeftColor: cardColor}">{{title}}</div>
      <img style="width:37px;margin-right:12px;align-self:start;margin-top:-2px;" v-if="titleImg" :src="titleImg">
    </div>
    <div class="mkd-card-content" :style="{justifyContent: content && content.length < 3 ? 'space-around' : 'flex-start'}">
      <slot name="content" v-if="isCard2">
        <mkd-card-item2 v-for="(item,index) in content" :cardColor="cardColor" :num="item.num" :content="item.content"></mkd-card-item2>
      </slot>
      <slot name="content" v-else-if="isCard3">
        <mkd-card-item3  v-for="(item,index) in content"  :imgUrl="item.imgUrl" :title="item.title" :time="item.time"  :step="item.step"></mkd-card-item3>
      </slot>
      <slot name="content" v-else>
        <mkd-card-item1  v-for="(item,index) in content" :to="item.url"  :imgUrl="item.imgUrl" :content="item.content" :style="{marginTop: index >= 3 ? '24px' : ''}" ></mkd-card-item1>
      </slot>
    </div>
    <div v-if="isButton" class="mkd-card-btm" :style="btm_style">
      <div v-if="isCard4" style="display:flex;justifyContent:space-between;height:6vh;padding:0px 12px;color:#999999;">
        <slot name="btm-left"></slot>
        <div class="btm-botton">
          <slot name="button"></slot>
        </div>

      </div>
      <slot name="button" v-else></slot>
    </div>
  </div>
</template>
<script>
/**
* title : 卡片标题
*/
import flow_left from '$src/assets/flow-left.png'
import flow_right from '$src/assets/flow-right.png'
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
let mkdCardItem3 = {
  template: '<div style="width:100%;text-align:center;color:#666666;"><div style="display:flex;justifyContent:space-between;margin-bottom:26px;">'
  + '<div style="color:#666666;font-size:14px;">{{title}}</div><div style="color:#97AAC3">{{time}}</div></div><div><img :src="flow_leftImg"><img style="margin:auto 6px;width:40px;" :src="imgUrl"><img :src="flow_rightImg"></div>'
  + '<div style="margin-top:12px;font-size:14px;color:#55A0F5">{{step}}</div></div>',
  data () {
    return {
      flow_leftImg: flow_left,
      flow_rightImg: flow_right
    }
  },
  props: {
    title: String,
    time: String,
    imgUrl: String,
    step: String
  }
}
export default {
  name: 'mkd-card',
  data () {
    return {
      btm_style:{
        borderTop: this.isCard4 ? '1px dashed #D5DAE6' : '',
        backgroundSize: this.isCard4 ? '0 0' : '100% 1px',
        backgroundColor: this.isCard4 ? '#FAFDFF' : '',
        borderBottomLeftRadius: this.isCard4 ? '4px' : '',
        borderBottomRightRadius: this.isCard4 ? '4px' : ''
      }
    }
  },
  components: {mkdCardItem1, mkdCardItem2, mkdCardItem3},
  props: {
    title: String,
    titleImg: String,
    isButton: Boolean,
    content: Array,
    cardColor: String,
    isCard2: Boolean,
    isCard3: Boolean,
    isCard4: Boolean
  }
}
</script>

<style lang="scss">
  @import "../../../src/style/tools.scss";
  .mkd-card {
    background: #FFFFFF;
    box-shadow: 0 3px 8px 0 #DAE5ED;
    border-radius: 4px;
    width: vw(351);
    margin: 0px auto;
    font-size: 12px;
    >.mkd-card-title {
      height: $card-title-height;
      font-size: 14px;
      color: $font-color3;
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
        color: $font-color1;
      }
      .btm-botton {
        >div{
          height: vh(40);
          display: flex;
          flex-direction: row;
          align-items: center;
          >div{
            font-size: 13px;
            height: 24px;
            line-height: 24px;
            padding: 0px 12px;
            margin-left: 8px;
            border-radius: 47px;
            border: 1px solid #C5C5C5;
          }
        }
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
