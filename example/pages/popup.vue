<template>
  <div class="page-popup">
    <h1 class="page-title">Popup</h1>
    <div class="page-popup-wrapper">
      <mkd-button @click.native="popupVisible1 = true" size="large" ref="button">中部弹出 popup1</mkd-button>
      <mkd-button @click.native="popupVisible5 = true" size="large" ref="button">中部弹出 popup2</mkd-button>
      <mkd-button @click.native="popupVisible2 = true" size="large">上侧弹出 popup</mkd-button>
      <mkd-button @click.native="popupVisible3 = true" size="large">右侧弹出 popup</mkd-button>
      <mkd-button @click.native="popupVisible4 = true" size="large">下侧弹出 popup</mkd-button>
      <mkd-button @click.native="popupVisible6 = true" size="large">下侧弹出 入口popup</mkd-button>
    </div>
    <mkd-popup v-model="popupVisible1"  popup-transition="popup-fade" class="mkd-popup-1">
      <div>
        <img src="../assets/100x100.png">
        <div>描述文字</div>
      </div>
      <img class="popup-close" @click.stop="popupVisible1 = false" src="../assets/close.svg">
    </mkd-popup>
    <mkd-popup v-model="popupVisible5" popup-transition="popup-fade" class="mkd-popup-5">
      <img src="../assets/popup.png">
      <div>
        <div>出错了</div>
        <div>程序员正在努力修复中...</div>
        <div @click.stop="popupVisible5 = false" >我知道了</div>
      </div>
    </mkd-popup>
    <mkd-popup v-model="popupVisible2" position="top" class="mkd-popup-2" :modal="false">
      <span>已超标，请填写费用说明</span>
    </mkd-popup>
    <mkd-popup v-model="popupVisible3" position="right" class="mkd-popup-3">
      <mkd-button @click.native="popupVisible3 = false" size="large" type="primary">关闭 popup</mkd-button>
    </mkd-popup>
    <mkd-popup v-model="popupVisible4" position="bottom" class="mkd-popup-4">
      <div>底部Popup</div>
      <!-- <mkd-picker :slots="dateSlots" @change="onDateChange" :visible-item-count="5" :show-toolbar="false"></mkd-picker> -->
    </mkd-popup>
    <mkd-popup v-model="popupVisible6" position="bottom" class="mkd-popup-6">
      <div>
        <a class="mkd-popup-6-item" href="http://ueclub.kingdee.com">
          <img src="/static/assets/business.png">
          <div>出差申请</div>
        </a>
        <a class="mkd-popup-6-item" href="http://ueclub.kingdee.com">
          <img src="/static/assets/borrow.png">
          <div>借款申请</div>
        </a>
        <a class="mkd-popup-6-item" href="http://ueclub.kingdee.com">
          <img src="/static/assets/yun.png">
          <div>小云机器人人</div>
        </a>
        <a class="mkd-popup-6-item" href="http://ueclub.kingdee.com">
          <img src="/static/assets/yun.png">
          <div>小云机器人人</div>
        </a>
       <!-- <a class="mkd-popup-6-item" href="http://ueclub.kingdee.com">
          <img src="/static/assets/yun.png">
          <div>小云机器人人</div>
        </a>
        <a class="mkd-popup-6-item" href="http://ueclub.kingdee.com">
          <img src="/static/assets/yun.png">
          <div>小云机器人人</div>
        </a> -->
      </div>
      <img @click.stop="popupVisible6 = false"  class="close" src="../assets/close_blue.png">
      <!-- <mkd-picker :slots="dateSlots" @change="onDateChange" :visible-item-count="5" :show-toolbar="false"></mkd-picker> -->
    </mkd-popup>
  </div>
</template>
<style lang="scss">
.mkd-popup-6 {
  text-align: center;
  width: 100%;
  min-height: 218px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  >:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: wrap;
    padding: 30px 20px 0px 20px;
    width: 100%;
    >:nth-last-child(2):first-child {
      width: 50% !important;
    }
    >:nth-last-child(1):nth-child(2) {
      width: 50% !important;
    }
    >:nth-last-child(1):first-child {
      width: 100% !important;
    }
  }
  >:nth-child(2) {
      width: 53px;
      margin-bottom:12px;
  }
  .mkd-popup-6-item {
    text-align: center;
    width: 33%;
    margin-bottom: 18px;
    >img {
      width: 52px;
      height: 52px;
    }
    >div{
      font-size: 14px;
      color: #666666;
      line-height: 14px;
      margin-top: 12px;
    }
  }
}
.page-popup {
  .page-popup-wrapper {
    padding: 0 20px;
    position: absolute;
    top:50%;
    width: 100%;
    transform: translateY(-50%);
    >button:not(:last-child) {
      margin-bottom: 20px;
    }
  }
  >.mkd-popup-1 {
    background: transparent;
    text-align: center;
    >:first-child {
      text-align: center;
      width: 150px;
      border-radius: 4px;
      padding: 10px;
      color: #333333;
      background-color: #ffffff;
      >img {
        width: 60px;
        margin-top: 14px;
        margin-bottom: 12px;
      }
      >div{
        margin-bottom: 18px;
      }
    }
    >:nth-child(2) {
      margin-top: 36px;
    }
  }
  >.mkd-popup-5 {
    border-radius: 8px;
    width: 251px;
    >div {
      text-align: center;
      >:first-child {
        height: 27px;
        font-size: 17px;
        color:#333333;
      }
      >:nth-child(2) {
        height: 27px;
        font-size: 13px;
        color: #999999;
      }
      >:nth-child(3) {
        background-image:linear-gradient(180deg, #d9d9d9, #d9d9d9 50%, transparent 50%);
        background-size: 100% 1px;
        background-repeat: no-repeat;
        background-position: top left;
        height: 44px;
        line-height: 44px;
        font-size: 17px;
        color: #55A0F5;
      }
    }
  }
  >.mkd-popup-2 {
    width: 100%;
    height: 30px;
    text-align: center;
    background-color: rgba(243,89,89,0.8);
    backface-visibility: hidden;
    span {
      line-height: 30px;
      color: #ffffff;
      font-size: 11px;
    }
  }
  >.mkd-popup-3 {
    width: 84%;
    height: 100%;
    background-color: #fff;
    .mkd-button {
     position: absolute;
     width: 90%;
     top: 50%;
     left: 5%;
     transform: translateY(-50%);
   }
  }
  >.mkd-popup-4 {
    width: 100%;
    height: 50%;
    .picker-slot-wrapper, .picker-item {
      backface-visibility: hidden;
    }
  }
}
</style>

<script type="text/babel">
  export default {
    data() {
      return {
        popupVisible1: false,
        popupVisible2: false,
        popupVisible3: false,
        popupVisible4: false,
        popupVisible5: false,
        popupVisible6: false,
        buttonBottom: 0,
        dateSlots: [
          {
            flex: 1,
            values: ['2016-01', '2016-02', '2016-03', '2016-04', '2016-05', '2016-06'],
            className: 'slot1',
            textAlign: 'right'
          }, {
            divider: true,
            content: '-',
            className: 'slot2'
          }, {
            flex: 1,
            values: ['2016-01', '2016-02', '2016-03', '2016-04', '2016-05', '2016-06'],
            className: 'slot3',
            textAlign: 'left'
          }
        ],
        mkdpopup1Info:{

        }
      };
    },

    watch: {
      popupVisible2(val) {
        if (val) {
          setTimeout(() => {
            this.popupVisible2 = false;
          }, 2000);
        }
      }
    },

    methods: {
      onDateChange(picker, values) {
        if (values[0] > values[1]) {
          picker.setSlotValue(1, values[0]);
        }
        this.dateStart = values[0];
        this.dateEnd = values[1];
      },
      popupHandler (popup, event) {
        close()
        // event.preventDefault()
        // event.stoppropagation()
        // if(event.srcElement.className === 'popup-close') {
        //   vm[popup] = false
        // }
      }
    },

    mounted() {
      this.buttonBottom = this.$refs.button.$el.getBoundingClientRect().bottom;
    }
  };
</script>
