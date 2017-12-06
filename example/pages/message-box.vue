<template>
  <div class="page-msgbox">
    <h1 class="page-title">Message Box</h1>
    <div class="page-msgbox-wrapper">
      <mkd-button @click.native="openAlert" size="large">打开 alert 提示框</mkd-button>
      <mkd-button @click.native="openConfirm" size="large">打开 confirm 提示框</mkd-button>
      <mkd-button @click.native="openPrompt" size="large">打开 prompt 提示框</mkd-button>
    </div>
  </div>
</template>

<script type="text/babel">
  import { MessageBox } from '$src/index'

  export default {
    methods: {
      openAlert() {
        MessageBox.alert('操作成功!', '提示')
      },
      openConfirm() {
        MessageBox.confirm('确定执行此操作?', '提示').then(({action}) => {
          if (action === "confirm") {
              MessageBox.alert('您点击了确认', '提示')
          } else if  (action === "cancel") {
              MessageBox.alert('您点击了取消', '提示')
          }
        })
      },
      openPrompt() {
        MessageBox.prompt(' ', '请输入姓名').then(({action, value}) => {
          if (action === 'confirm' && value) {
            MessageBox.alert(`你的名字是 ${ value }`, '输入成功')
          } else if (action === 'cancel') {
            MessageBox.alert('您点击了取消', '提示')
          }
        })
      }
    }
  }
</script>

<style lang="scss">
.page-msgbox {
  >.page-msgbox-wrapper {
    padding: 0 20px;
    position: absolute;
    top: 50%;
    width: 100%;
    transform: translateY(-50%);
    >:not(:last-child) {
      margin-bottom: 20px;
    }
  }
}
</style>
