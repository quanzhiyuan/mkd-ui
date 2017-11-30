<template>
  <div class="mkd-search">
    <div class="mkd-searchbar">
      <slot name="lefticon"></slot>
      <div class="mkd-searchbar-inner" :style="{borderRadius: isBorderRound ? '100px' : '4px'}">
        <div v-if="type === 'list'"class="mkd-searchbar-searchlist">
          <span id="selectlist" @click="isExpand = !isExpand">{{selectedValue}}</span>
          <img v-if="isExpand" :src="upUrl">
          <img v-else="isExpand" :src="downUrl">
          <transition name="mkd-zoom-in-top">
            <ul  v-show="isExpand" @click.stop="changeSelect($event)">
              <li v-for="(item, key) in searchlist" :key="key"><a class="text-hidden" :data-key = "item.key">{{item.value}}</a></li>
            </ul>
          </transition>
        </div>
        <img v-else :src="searchUrl">
        <input
        ref="input"
        v-model="currentValue"
        :placeholder="placeholder"
        @keyup.enter="search"
        class="mkd-searchbar-core">
        <img :src="closeUrl" class="mkd-searchbar-close" v-show="currentValue" @click="currentValue = ''">
      </div>
      <a
        class="mkd-searchbar-cancel"
        @click="$emit('cancel')"
        v-text="cancelText">
      </a>
    </div>
    <div v-if="type === 'tag'" class="mkd-searchtag">
      <div class="mkd-searchtag-history">
        <div class="mkd-searchtag-history-title">
          <div>历史记录</div>
          <img :src="trashUrl" @click="clearHistory">
        </div>
        <div v-show="searchHistory" class="mkd-searchtag-history-content" @click.stop="goSearch($event)">
          <span class="mkd-searchtag-history-item" v-for="item in searchHistory">{{item}}</span>
        </div>
      </div>
      <div class="mkd-searchtag-history">
        <div class="mkd-searchtag-history-title">
          <div>热门搜索</div>
          <img v-if="hotHistoryshow" :src="hideUrl" @click="hotHistoryshow = false">
          <img v-else :src="displayUrl" @click="hotHistoryshow = true">
        </div>
        <transition name="mkd-zoom-in-top">
          <div v-show="hotHistoryshow" class="mkd-searchtag-history-content" @click.stop="goSearch($event)">
            <span class="mkd-searchtag-history-item" v-for="item in hotHistory">{{item}}</span>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import search from '$src/assets/icons/search.svg'
import close from '$src/assets/icons/close.svg'
import up from '$src/assets/icons/up.svg'
import down from '$src/assets/icons/down.svg'
import trash from '$src/assets/icons/trash.svg'
import display from '$src/assets/icons/display.svg'
import hide from '$src/assets/icons/hide.svg'
import Common from '$src/utils/common'

if (process.env.NODE_ENV === 'component') {
  require('mkd-ui/packages/cell/style.css');
}

/**
 * mkd-search
 * @module components/search
 * @desc 搜索框
 * @param {string} value - 绑定值
 * @param {string} [cancel-text=取消] - 取消按钮文字
 * @param {string} [placeholder=取消] - 搜索框占位内容
 * @param {boolean} [autofocus=false] - 自动 focus
 * @param {boolean} [show=false] - 始终显示列表
 * @param {string[]} [result] - 结果列表
 * @param {slot} 结果列表
 *
 * @example
 * <mkd-search :value.sync="value" :result.sync="result"></mkd-search>
 * <mkd-search :value.sync="value">
 *   <mkd-cell v-for="item in result" :title="item"></mkd-cell>
 * </mkd-search>
 */
export default {
  name: 'mkd-search',

  data() {
    return {
      visible: false,
      hotHistoryshow: true,
      currentValue: this.value,
      searchUrl: search,
      closeUrl: close,
      trashUrl: trash,
      displayUrl: display,
      hideUrl: hide,
      upUrl: up,
      downUrl: down,
      isExpand: false,
      seletedKey: '', // 前置下拉选择的默认key
      selectedValue: '', // 前置下拉选择的默认值
      searchHistory: []
    };
  },

  watch: {
    currentValue(val) {
      this.$emit('input', val);
    },
    value(val) {
      this.currentValue = val;
    }
  },

  props: {
    value: String,
    autofocus: Boolean,
    show: Boolean,
    cancelText: {
      default: '取消'
    },
    placeholder: {
      default: '搜索'
    },
    result: Array,
    type: {
      type: String,
      default: 'default',
      validator: function (value) {
        return ['default', 'icon', 'list', 'tag'].indexOf(value) > -1
      }
    },
    searchlist: {
      type: Array
    },
    defaultlist: {
      type: String,
      default: ''
    },
    hotHistory: {
      type: Array,
      default: function () {
        return []
      }
    }
  },

  computed: {
    isBorderRound () {
      return ['default', 'tag'].indexOf(this.type) > -1
    }
  },

  methods: {
    changeSelect (event) {
      if (event.srcElement.localName !== 'a') return // 保证是a标签点击事件
      this.selectedKey = event.srcElement.dataset['key']
      this.selectedValue = event.srcElement.innerText
      this.isExpand = false
    },
    initSelect () {
      if (this.type === 'list') {
        let vm = this
        let value = this.defaultlist ? this.searchlist.find(function (item) {
          return item.key === vm.defaultlist
        }).value : this.searchlist[0].value
        this.selectedKey = this.defaultlist ? this.defaultlist : this.searchlist[0].selectedKey
        this.selectedValue = value
      }
      if (this.type === 'tag') {
        this.searchHistory = Common.getArrayLocalStorage('searchHistory')
      }
    },
    search () { // 搜索功能
      if (this.type === 'list') {
        this.$emit('search', this.selectedKey, this.selectedValue)
      } else if (this.type === 'tag') {
        this.searchHistory.push(this.currentValue)
        Common.setArrayLocalStorage('searchHistory', this.currentValue)
        this.$emit('search')
      } else {
        this.$emit('search')
      }
    },
    goSearch (event) {  // 历史记录和热们搜索点击事件
      if (event.srcElement.nodeName !== 'SPAN') return
      this.currentValue = event.srcElement.innerText
      this.$nextTick(() => {
        this.search()
      })
    },
    clearHistory () { // 清除历史记录
      this.searchHistory = []
      Common.clearLocalStorage('searchHistory')
    }
  },
  mounted() {
    this.initSelect()
    this.autofocus && this.$refs.input.focus()
  }
};
</script>

<style lang="scss">
@import "../../../src/style/tools.scss";
.mkd-search {
  position: absolute;
  top: 0;
  >.mkd-searchbar {
    position: relative;
    align-items: center;
    display: flex;
    width: 100%;
    height: 44px;
    background-color: #fff;
    padding: 8px vw(8);
    z-index: 1;
    >.lefticon {
      width: vw(20);
      height: 20px;
      margin-right: 10px;
      >img{
        vertical-align: baseline;
      }
    }
    >.mkd-searchbar-inner {
      position: relative;
      align-items: center;
      background-color: #F0F4F7;
      border-radius: 4px;
      display: flex;
      flex: 1;
      width: vw(309);
      height: 28px;
      padding: 4px vw(12);

      >.mkd-searchbar-searchlist{
        position: relative;
        font-size: 14px;
        line-height: 14px;
        color: #BBBBBB;
        >img {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translate(0,-50%);
          width: vw(7);
          pointer-events: none;
        }
        > span {
          display: inline-block;
          width: vw(67);
          border-right: 1px solid #999999;
        }
        > ul {
          position: absolute;
          left: -11px;
          top: 15px;
          width: vw(79);
          color: $font-color3;
          text-align: center;
          list-style-type: none;
          font-size: 12px;
          background-color: #FFFFFF;
          box-shadow: 0 1px 4px 0 rgba(0,0,0,0.2);
          border-radius: 4px;
          z-index: 2001;
          > li{
            position: relative;
            display: block;
            line-height: 28px;
            height: 28px;
            width: 100%;
            padding: 0 9.5px;
            >a{
              display: inline-block;
              width: 100%;
              &:active:after {
                background-color: #000;
                content: " ";
                opacity: 0;
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                opacity: .1;
              }
            }
          }
          >:not(:last-child)>a {
            @include border-bottom;
          }
        }
      }
      input::-webkit-input-placeholder {
        color: #BBBBBB;
        font-size: 14px;
      }

      >.mkd-searchbar-core {
        appearance: none;
        border: 0;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        padding-left: 12px;
        background-color: #F0F4F7;
        outline: 0;
        font-size: 14px;
        color: #BBBBBB;
      }
      >.mkd-searchbar-close{
        position: absolute;
        right:vw(14);
      }
    }
    >.mkd-searchbar-cancel {
      font-size: 15px;
      color: $font-color1;
      margin-left: 16px;
      margin-right: 4px;
      width: 30px;
      text-decoration: none;
    }
  }
  >.mkd-searchtag {
    width: 100vw;
    background-color: #FFFFFF;
    padding: 12px 18px;
    >.mkd-searchtag-history{
      margin-bottom: 30px;
      >.mkd-searchtag-history-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      >.mkd-searchtag-history-content {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        padding-top: 15px;
        > span {
          padding: 0 27px;
          margin-bottom: 8px;
          margin-right: 6px;
          background-color: #F0F4F7;
          border-radius: 100px;
          height: 30px;
          line-height: 30px;
         }
      }
    }
  }
  >.mkd-search-list {
    overflow: auto;
    padding-top: 44px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
</style>
