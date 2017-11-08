<template>
  <div class="page-popup">
    <h1 class="page-title">Popup</h1>
    <div class="page-popup-wrapper">
      <mkd-button @click.native="popupVisible1 = true" size="large" ref="button">中部弹出 popup</mkd-button>
      <mkd-button @click.native="popupVisible2 = true" size="large">上侧弹出 popup</mkd-button>
      <mkd-button @click.native="popupVisible3 = true" size="large">右侧弹出 popup</mkd-button>
      <mkd-button @click.native="popupVisible4 = true" size="large">下侧弹出 popup</mkd-button>
    </div>
    <mkd-popup v-model="popupVisible1" popup-transition="popup-fade" class="mkd-popup-1">
      <h1>popup</h1>
      <p>/ ˈpɑpˌʌp /</p>
      <p>n. 弹出式; [棒]内野飞球; 自动起跳式装置</p>
      <p>adj. 弹起的; 有自动起跳装置的</p>
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
  </div>
</template>
<style lang="scss">
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
    width: 200px;
    border-radius: 8px;
    padding: 10px;
    h1 {
      font-size: 20px;
      color: #26a2ff;
    }

    p {
      margin-bottom: 10px;
    }
    &:before {
      position: absolute;
      display: inline-block;
      width: 0;
      height: 0;
      border: solid transparent;
      border-width: 10px;
      border-bottom-color: #fff;
      content: "";
      top: -20px;
      right: 50px;
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
        ]
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
      }
    },

    mounted() {
      this.buttonBottom = this.$refs.button.$el.getBoundingClientRect().bottom;
    }
  };
</script>
