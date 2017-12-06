<template>
  <div class="page-card">
    <div class="page-title">Card</div>
    <div>
      <div class="page-title">基础样式</div>
      <mkd-card  title="基础卡片">
        <div slot="content" style="width:100%;height:11.4vh;line-height:11.4vh;text-align:center;background-color: #E9EFF6;font-size:18px;">卡片内容区</div>
      </mkd-card>

      <div class="marginbtm"></div>

      <mkd-card title="有按钮的卡片" is-button>
        <div slot="content" style="width:100%;height:11.4vh;line-height:11.4vh;text-align:center;background-color: #E9EFF6;font-size:18px;">卡片内容区</div>
        <div slot="button">
          <div onclick="alert('按钮1')">按钮1</div>
          <div onclick="alert('按钮2')">按钮2</div>
          <div onclick="alert('按钮3')">按钮3</div>
        </div>
      </mkd-card>
      <div class="page-title">卡片示例(快捷入口)</div>
      <mkd-card  title="少于三个" :content="content">
      </mkd-card>
      <div class="marginbtm"></div>
      <mkd-card  title="多于三个少于六个" :content="content1">
      </mkd-card>
      <div class="page-title">卡片示例(数据+描述文字)</div>
      <mkd-card title="数据+描述文字" cardColor="#F3974E" isCard2 :content="content3">
      </mkd-card>
      <div class="marginbtm"></div>
      <mkd-card title="数据+描述文字" cardColor="#F3974E" isCard2 :content="content4">
      </mkd-card>
      <div class="marginbtm"></div>
      <div class="page-title">卡片示例(流程类卡片)</div>
      <mkd-card title="流程类卡片" isButton isCard3 :content="content5">
        <div slot="button">
          <div onclick="alert('按钮1')">按钮1</div>
          <div onclick="alert('按钮2')">按钮2</div>
          <div onclick="alert('按钮3')">按钮3</div>
        </div>
      </mkd-card>
      <div class="page-title">卡片示例(序时薄卡片基础样式)</div>
      <mkd-card title="序时薄"  isCard4>
      </mkd-card>
      <div class="marginbtm"></div>
      <mkd-card title="序时薄" titleImg="static/assets/titleImg.png" isButton isCard4>
        <div slot="content"></div>
        <div slot="btm-left">这里是文案</div>
        <div slot="button">
          <div onclick="alert('按钮1')">预定</div>
          <div onclick="alert('按钮2')">报销</div>
        </div>
      </mkd-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page-card',
  data () {
    return {
      content: [
        {
          url: 'http://ueclub.kingdee.com/mobile/index',
          imgUrl: 'static/assets/test1.png',
          content: '跳转到UEClub'
        },
        {
          url: {name: 'index'},
          imgUrl: 'static/assets/test1.png',
          content: '跳转到路由index'
        }
      ],
      content1: [
        {
          imgUrl: 'static/assets/test1.png',
          content: '没有内容哦～'
        },
        {
          imgUrl: 'static/assets/test1.png',
          content: '没有内容哦～'
        },
        {
          imgUrl: 'static/assets/test1.png',
          content: '没有内容哦～'
        },
        {
          imgUrl: 'static/assets/test1.png',
          content: '没有内容哦～'
        },
        {
          imgUrl: 'static/assets/test1.png',
          content: '没有内容哦～'
        }
      ],
      content3: [
        {
          num: '351',
          content: '待报销'
        }
      ],
      content4: [
        {
          num: '351',
          content: '待报销'
        },
        {
          num: '$6969.00',
          content: '未到账'
        }
      ],
      content5: [
        {
          title: '广州客户大会出差',
          time: '今天9:20',
          imgUrl: 'static/assets/test1.png',
          step: '审批中'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.page-card{
  padding-bottom: 100px;
}
.marginbtm {
  margin-bottom: 10px;
}
</style>
